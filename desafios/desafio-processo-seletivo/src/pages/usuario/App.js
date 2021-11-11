import '../home/App.css';
import { Component } from "react";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaRepositorios: [],
            primeirosRepositorios: [],
            username: '',
        }
    }

    salvarUsername = () => {
        this.username = window.location.toString().split('/')[4]
    }

    salvarRepositorios = () => {
        fetch(`https://api.github.com/users/${this.username}/repos`)
            .then(dados => dados.json())
            .then(dados => this.setState({ listaRepositorios: dados }))
            .catch(erro => console.log(erro))
    }

    descricaoNula = (descricao) => {
        if (descricao == null) {
            return "Não há descrição"
        }
        return descricao
    }

    componentDidMount() {
        this.salvarUsername();
        

        this.salvarRepositorios();
    }

    render() {
        return (
            <div>
                <main>
                    <section className="App-header">
                        <h2>Informações repositórios | {this.username}</h2>

                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome do Projeto</th>
                                    <th>Descrição</th>
                                    <th>Data de Criação</th>
                                    <th>Tamanho</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.listaRepositorios.map((repos) => {
                                        return (
                                            <tr>
                                                <td>{repos.id}</td>
                                                <td>{repos.name}</td>
                                                <td>{this.descricaoNula(repos.description)}</td>
                                                <td>{repos.created_at.replace("-", "/").replace("-", "/").split('T')[0]}</td>
                                                <td>{repos.size}MB</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        )
    }
}

export default User;

