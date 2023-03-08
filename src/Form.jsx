import React, { Component } from 'react';
import axios from 'axios'
import "./Form.css"

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistid:'',
      artistname:'',
      song:'',
      releasedate:'',
      language:'',
      imdbrating:'',
    };
  }

  handleartistidChange = (event) => {
    this.setState({ artistid: event.target.value });
  };

  handleartistnameChange = (event) => {
    this.setState({ artistname: event.target.value });
  };
  handlesongChange = (event) => {
    this.setState({ song: event.target.value });
  };

  handlereleasedateChange = (event) => {
    this.setState({ releasedate: event.target.value });
  };
  handlelanguageChange = (event) => {
    this.setState({ language: event.target.value });
  };
  handleimdbratingChange = (event) => {
    this.setState({ imdbrating: event.target.value });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        artistid: this.state.artistid,
        artistname: this.state.artistname,
        song: this.state.song,
        releasedate: this.state.releasedate,        
        language: this.state.language,
        imdbrating: this.state.imdbrating,
        
      };
    
      axios.post('http://127.0.0.1:8080/post', data)
  };

  render() {
    return (
      <div>
 <div class="wrapper">
<div class="inner">
<div class="image-holder">
<img className='o' src="https://c4.wallpaperflare.com/wallpaper/993/502/455/vinyl-turntables-music-technology-wallpaper-preview.jpg" ></img>
</div>
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">Artist Id</label>
        <div class="form-wrapper">
        <input
          className="form-control"
          type="text"
          value={this.state.artistid}
          onChange={this.handleartistidChange}
        />
</div>
        <label className="sign-label">Artist Name</label>
        <div class="form-wrapper">
        <input
          className="form-control"
          type="text"
          value={this.state.artistname}
          onChange={this.handleartistnameChange}
        /></div>
                <label className="sign-label">Song</label>
                <div class="form-wrapper">
        <input
          className="form-control"
          type="text"
          value={this.state.song}
          onChange={this.handlesongChange}
        /></div>
                <label className="sign-label">Release Date</label>
                <div class="form-wrapper">
        <input
          className="form-control"
          type="text"
          value={this.state.releasedate}
          onChange={this.handlereleasedateChange}
        /></div>
                <label className="sign-label">Langauge</label>
                <div class="form-wrapper">
        <input
          className="form-control"
          type="text"
          value={this.state.language}
          onChange={this.handlelanguageChange}
        /></div>
                <label className="sign-label">IMDb Rating</label>
                <div class="form-wrapper">
        <input
          className="form-control"
          type="text"
          value={this.state.imdbrating}
          onChange={this.handleimdbratingChange}
        /></div>
        
        <button className="bjj" type="submit">
          ADD
        </button>
      </form>
      </div></div></div>
    );
  }
}

export default Form;