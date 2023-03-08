import React from 'react'
import { Link } from "react-router-dom";
import Playlist from './Playlist';
import './Login.css'

function Login() {
  return (
    <div className='container'>
    <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"></input>

			<div class="signup">
				<form>
					<label className="ll" for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required></input>
					<input type="email" name="email" placeholder="Email" required></input>
					<input type="password" name="pswd" placeholder="Password" required></input>
                    <Link to="/Playlist">
					<button className='bt'>Sign up</button>
                    </Link>
				</form>
			</div>

			<div class="login">
				<form>
					<label className="ll" for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""></input>
					<input type="password" name="pswd" placeholder="Password" required=""></input>
                    <Link to="/Playlist">
					<button className='bt'>Login</button>
                    </Link>
				</form>
			</div>
	</div>
    </div>
  )
}
export default Login