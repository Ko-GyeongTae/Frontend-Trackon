import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  const [id, setId] = useState();
  const [pw, setPw] = useState();

  const Login = async() => {

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
                <div className="ui fluid large teal submit button" onClick={e => null}>Login</div>
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
