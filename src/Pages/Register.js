import React,{useState} from 'react';
import "./Register-Login.css";
import { useNavigate } from 'react-router-dom';
import MyGif from "../121421-login.gif";


function Register(){
  const navigate=useNavigate();
    const [inputEmail, setInputEmail] = useState('');
        const [inputPassword, setInputPassword] = useState('');
        const [inputFullName, setInputName] = useState('');
        const [inputType, setInputType] = useState('');
        const [ConfirmPassword,setConfirmPassword]=useState('');
      
      
        const handleSubmit = async (event) => {
          event.preventDefault();
          if(inputPassword!==ConfirmPassword){
            alert("Password is not confirmed");
            return;
          }
          
      
          const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               inputType,
               inputFullName , 
               inputEmail,
               inputPassword,
              }),
          });
      
          const data = await response.json();
console.log(data);
if (data === 'Email already exists'){

  alert("This email is already used!");
  
  return;
}

            navigate('/home');

      
        };
      
        const FullName = (event) => {
          setInputName(event.target.value);
        };
        const Email =(event)=>{
          setInputEmail(event.target.value);
        }
        const Password =(event)=>{
          setInputPassword(event.target.value);
        }
        const mySelect =(event)=>{
          setInputType(event.target.value);
        }
        const verify =(event)=>{
          setConfirmPassword(event.target.value);
        }
      

    return(
          <div>
            <img src={MyGif} alt="gif" />
            <div className="login-section">
              <div className="formbox register">
              <div id='error-message' className='Error'></div>
              <form onSubmit={handleSubmit} className="App" action='/api/submit'>
                
                  <h2>Sign Up</h2>
                  <select id="my-select" value={inputType} onChange={mySelect} name="my-select" required>
                    <option value="" selected disabled hidden>User type</option>
                    <option value="Individual">Individual</option>
                    <option value="Company">Company</option>
                    <option value="Public Institution">Public Institution</option>
                  </select>
                  <div className="inputbox">
                    <input
                    type="text"
                     value={inputFullName}
              onChange={FullName}
              name="FullName"
              required />
                    <label>Full Name</label>
                  </div>
                  <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" value={inputEmail}
              onChange={Email}
              name="Email"
              required />
                    <label>Email</label>
                  </div>
                  <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" value={inputPassword}
              onChange={Password}
              name="Password"
              required/>
                    <label>Password</label>
                  </div>
                  <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password"
                    onChange={verify}
                    value={ConfirmPassword}
                    required />
                    <label>Confirm your password</label>
                  </div>
                  <button id="sign-up" className="black-button">SIGN UP</button>
                  <div className="login">
                    <p>Already have an account? <a href="/Login" className="login-link"> Log in</a></p>
                  </div>
                </form>
              </div>
            </div>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
          </div>
    )

}

export default Register;