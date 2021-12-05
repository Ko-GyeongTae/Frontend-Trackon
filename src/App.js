import { useState } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

const baseURL = 'http://122.34.166.47:5000';

function App() {
  const [id, setId] = useState();
  const [pw, setPw] = useState();

  const Login = async() => {
    console.log(id, pw);
    await axios.post(baseURL + "/auth/login", {
      "name": id,
      "password": pw
    })
    .then(res => {
      console.log(res.data["access_token"]);
      alert(res.data["access_token"]);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="ui centered grid" style={{ paddingTop: 200 }}>
      <div style={{ width: 450 }}>
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui teal image header">
              <div className="content">
                Admin Login
              </div>
            </h2>
            <form className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input type="text" name="email" placeholder="AdminID" value={id} onChange={e => setId(e.target.value)}/>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input type="password" name="password" placeholder="Password" value={pw} onChange={e => setPw(e.target.value)}/>
                  </div>
                </div>
                <div className="ui fluid large teal submit button" onClick={Login}>Login</div>
              </div>
              <div className="ui error message"></div>
            </form>
            <div className="ui message">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
