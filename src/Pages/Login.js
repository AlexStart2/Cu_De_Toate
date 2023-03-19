import React from "react";
import "./Register-Login.css";
import MyGif from "../121421-login.gif";

function Login(){

    return(
        <div>
            <img src={MyGif} alt="gif" />
            <div className="login-section">
              <div className="formbox register">
              <form action="../Backend/server.js">
                  <h2>Sign In</h2>
                  <div class="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" required/>
                    <label for="">Email</label>
                  </div>
                  
                  <div class="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" required/>
                    <label for="">Password</label>
                  </div>
                  <button class="black-button">Log in</button>
                  <div class="register">
                    <p>Don't have a account ?<a href="/" class="register-link">Sign Up</a></p>
                  </div>
                </form>
              </div>
            </div>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
          </div>
    )
}

export default Login;