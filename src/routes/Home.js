import React, { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import 'semantic-ui-css/semantic.min.css';

const cookies = new Cookies();
const { kakao } = window;

const Location = () => {
    useEffect(() => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
            level: 3
        };

        var map = new kakao.maps.Map(container, options);
        var markerPosition = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);

    }, [])


    return (
        <div>
            <div id="map" style={{ width: "100vw", height: "70vh" }}></div>
        </div>
    )
}

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

                    <div class="ui text container" style={{marginBottom: 30}}>
                        <h1 class="ui inverted header">
                            Track On
                        </h1>
                        <h2>You can track your Arduino</h2>
                    </div>
                    <Location/>
                </div>
            </div>
        </>
    );
}

export default Login;
