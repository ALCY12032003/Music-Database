import {BrowserRouter,Routes,Route} from "react-router-dom";
import Welcome from './Welcome';
import Login from './Login';
import Playlist from './Playlist';
import Form from './Form';
import Profile from './Profile';
import Previous from './Previous';
import Next from './Next';
import View from './View';
import Delete from './Delete';
import Edit from './Edit';


function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <Routes>
          <Route path='' element ={<Welcome/>}></Route>
          <Route path='Login' element ={<Login/>}></Route>
          <Route path='Playlist' element ={<Playlist/>}></Route>
          <Route path='Form' element ={<Form/>}></Route>
          <Route path='Profile' element ={<Profile/>}></Route>
          <Route path='Previous' element ={<Previous/>}></Route>
          <Route path='Next' element ={<Next/>}></Route>
          <Route path='View' element ={<View/>}></Route>
          <Route path='Delete' element ={<Delete/>}></Route>
          <Route path='Edit' element ={<Edit/>}></Route>

          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
