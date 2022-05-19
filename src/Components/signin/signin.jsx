import React from 'react'
import  "./signin.css"
function Login() {
    const[email,setEmail]=useState("")
    const [password, setPassword] = useState("");
  return (
    <div> <div class="wrapper-login">
    <div class='Login'>
        <h2>Login</h2>
        <form class='Login-form'>
            <div class='login-form-input'>
                <label for="username">Username</label>
                <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                 id='username' type="text" class='form-inp' placeholder='username@gmail.com' />
            </div>
            <div class='login-form-input'>
                <label for="password">Password</label>
                <input id='password' type="text" class='form-inp' placeholder='********' />
            </div>
            <div class='user-settings'>
                <div class='remember-box'>
                    <input type="checkbox" id='remember-checkbox' />
                    <label for="remember-checkbox">Remember Me</label>
                </div>
                <a href='#'>Forgot Password?</a>
            </div>
            <button type='submit' class='button-container-button primary-button'>LogIn</button>
        </form>
    </div>
</div>
</div>
  )
}

export default Login