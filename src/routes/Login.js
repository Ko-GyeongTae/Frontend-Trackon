import { useState } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import 'semantic-ui-css/semantic.min.css'

const baseURL = 'http://220.90.237.33:7799'; // Server ip + port
const cookies = new Cookies(); // Generate object for access to browser cookie value
function Login() {
  const [id, setId] = useState(); // id State variable
  const [pw, setPw] = useState(); // password State variable

  const Login = async() => { // login function
    await axios.post(baseURL + "/auth/admin", { // Request to login api with axios module
      "id": id,
      "password": pw
    }) 
    .then(res => {
      cookies.set("accessToken", res.data["accessToken"]); // Set cookie with token in response
      window.location.reload(false); // Reload screen
      alert(cookies.get("accessToken")); // If you success to login browser show your token value
    })
    .catch(err => {
      console.log(err); // If you fail to login, Browser print error log.
      alert("Wrong Authentication");
    })
  }

  // View
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

export default Login;
