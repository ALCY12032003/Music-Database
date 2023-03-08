import React from 'react'
import './Profile.css'
import "./Playlist.css"
import { Link } from "react-router-dom";
import Login from './Login.jsx';
import Form from './Form.jsx';
import View from './View.jsx';
import Playlist from './Playlist.jsx';
import Delete from './Delete.jsx';
import Edit from './Edit.jsx';

function Profile() {
  return (
    <div>
       <nav class="navbar">


<div class="logo">I❤️RADIO</div>


<ul class="nav-links">


<div class="menu">
<li><Link to="/Playlist"><a href="#">Home</a></Link></li>
<li class="services">
<a href="#">Profile</a>

<ul class="dropdown">

<li><Link to="/Profile"><a href="#">View Profile</a></Link></li>
<li><Link to="/Login"><a href="#">Logout</a></Link></li>


</ul>
</li>
<li class="services">
<a href="#">Fliter</a>

<ul class="dropdown">

<li><a href="#">Artist Id</a></li>
<li><a href="#">Artist Name</a></li>
<li><a href="#">Release Date</a></li>
<li><a href="#">Song</a></li>
<li><a href="#">IMDb Rating</a></li>
<li><a href="#">Language</a></li>


</ul>
</li>
<li class="services">
<a href="#">My Playlist</a>

<ul class="dropdown">

<li><Link to="/View"><a href="#">View Playlist</a></Link></li>
<li><Link to="/Edit"><a href="#">Edit Playlist</a></Link></li>
<li><Link to="/Delete"><a href="#">Delete Playlist</a></Link></li>


</ul>
</li>
<li><Link to="/Form"><a href="#">Add Song</a></Link></li>

</div>

</ul>

</nav>
<div class="container">
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="https://static-cse.canva.com/blob/1015123/1600w-EW4cggXkgbc.jpg"></img>
        </div>
        <div class="team-content">
          <h3 class="name">Michele Miller</h3>
          <h4 class="title">michlemiller@gmail.com</h4>
          <ul class="social">
          <li><a  className='j' href="#"  aria-hidden="true">Facebook</a></li>
          <li><a className='j' href="#"  aria-hidden="true">Instagram</a></li>
          <li><a className='j' href="#"  aria-hidden="true">Google</a></li>
          <li><a className='j' href="#"  aria-hidden="true">Twitter</a></li>

        </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Profile