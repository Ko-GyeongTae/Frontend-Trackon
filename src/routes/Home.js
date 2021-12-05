import React from 'react';
import { Cookies } from 'react-cookie';
import 'semantic-ui-css/semantic.min.css';

const cookies = new Cookies();

function Login() {
    
    const logout = () => {
        cookies.remove("accessToken");
        window.location.reload(false);
    }
    return (
        <>
            <div class="pusher">
                <div class="ui inverted vertical masthead center aligned segment">

                    <div class="ui container">
                        <div class="ui large secondary inverted pointing menu">
                            <a class="active item">Home</a>
                            <div class="right item">
                                <button class="ui inverted button" onClick={logout}>LogOut</button>
                            </div>
                        </div>
                    </div>

                    <div class="ui text container">
                        <h1 class="ui inverted header">
                            Track On
                        </h1>
                        <h2>You can track your Arduino</h2>
                        
                    </div>

                </div>
            </div>
        </>
    );
}

export default Login;
