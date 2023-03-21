import React,{useState} from "react";
import "./Register-Login.css";
import MyGif from "../121421-login.gif";
import { useNavigate } from 'react-router-dom';

function Login(){

  const navigate=useNavigate();
    const [inputEmail, setInputEmail] = useState('');
        const [inputPassword, setInputPassword] = useState('');


        const handleSubmit = async (event) => {
          event.preventDefault();
          
      
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               inputEmail,
               inputPassword,
              }),
          });
      
          const data = await response.json();
console.log(data);
if (data === 'User is not find'){
  alert("Wrong email or password");
  return;
}

            navigate('/home');

      
        };



        const Email =(event)=>{
          setInputEmail(event.target.value);
        }
        const Password =(event)=>{
          setInputPassword(event.target.value);
        }

    

    return(
        <div>
            <img src={MyGif} alt="gif" />
            <div className="login-section">
              <div className="formbox register">
              <form onSubmit={handleSubmit} className="App" action='/api/login'>
                  <h2>Sign In</h2>
                  <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" value={inputEmail}
              onChange={Email}
              name="Email"
              required />
                    <label for="">Email</label>
                  </div>
                  
                  <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" value={inputPassword}
              onChange={Password}
              name="Password"
              required/>
                    <label for="">Password</label>
                  </div>
                  <button className="black-button">Log in</button>
                  <div className="register">
                    <p>Don't have a account ?<a href="/" className="register-link">Sign Up</a></p>
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