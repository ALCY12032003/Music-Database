import React from 'react'
import { Link } from "react-router-dom";
import './Welcome.css'
import Login from './Login.jsx';

function welcome() {
  return (
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front"><h1>I❤️RADIO</h1>
    </div>
    <div class="flip-card-back">
      <p>Let the Music Speak!</p>
      <Link to="/Login">
      <button class="button-89">GET STARTED</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default welcome