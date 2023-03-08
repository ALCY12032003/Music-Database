import React from 'react'
import "./Playlist.css"
import { Link } from "react-router-dom";
import Login from './Login.jsx';
import Form from './Form.jsx';
import Profile from './Profile.jsx';
import Playlist from './Playlist';
import Previous from './Previous';
function Next() {
  return (
    <div>
 <nav class="navbar">


<div class="logo">I❤️RADIO</div>


<ul class="nav-links">


<div class="menu">
<li><a href="/">Home</a></li>
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

<li><a href="#">View Playlist</a></li>
<li><a href="#">Edit Playlist</a></li>
<li><a href="#">Delete Playlist</a></li>


</ul>
</li>
<li><Link to="/Form"><a href="#">Add Song</a></Link></li>

</div>

</ul>

</nav>
<input  className='search3' type="text" placeholder="What are you searching for?.." name="search"></input>
<button type="submit">Go✅</button>
<p className='dd'>Now Playing:KILL THIS LOVE-BLACKPINK</p><br></br>
<p className='pre'><Link to="/Playlist">Play Previous</Link></p>
<p className='next'><Link to="/Previous">Play Next</Link></p>

    <div class="container-audio">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2S24-y0Ij3Y?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  </div><br></br>
    <a  target="blank" className="link" href='https://open.spotify.com/'>Open Spotify</a>

    </div>
  )
}

export default Next