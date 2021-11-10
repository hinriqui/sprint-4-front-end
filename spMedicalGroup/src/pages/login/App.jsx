import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <main class="flex">

        <div class="banner-login" src="../assets/banner-login.png" alt="Banner"></div>

        <div class="caixa-login">
          <img src="../assets/logo-login.png" alt="Logo SP Medical Group" />

          <form>
            <div class="form-login">
              <input type="text" placeholder="Email" name="" id="" />
              <input type="text" placeholder="Senha" name="" id="" />

              <a href="#">Esqueceu a senha?</a>

              <button type="submit">Login</button>
            </div>
          </form>

        </div>

      </main>
    </div>
  );
}

export default App;
