import axios from "axios";
import React, { Component } from "react";
import "./View.css"

class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
      <div>
 
      <table className="styled-table" border={1}>
      <thead>
        <tr class="active-row">
          <th>Artist Id</th>
          <th>Artist Name</th>
          <th>Song</th>
          <th>Release Date</th>
          <th>Language</th>
          <th>IMDb Rating</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr class="active-row" key={user.artistid}>
            <td>{user.artistid}</td>
            <td>{user.artistname}</td>
            <td>{user.song}</td>
            <td>{user.releasedate}</td>
            <td>{user.language}</td>
            <td>{user.imdbrating}</td>
          </tr>
        ))}
      </tbody>
    </table></div>
    );
  }}
  
export default Showdata;