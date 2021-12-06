import React, { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import 'semantic-ui-css/semantic.min.css';

const cookies = new Cookies();
const { kakao } = window;
const position = [
    {
        "lat": 33.450701,
        "long": 126.570667
    },
    {
        "lat": 33.45,
        "long": 126.57
    }
]

const Location = () => {
    useEffect(() => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(position[0].lat, position[0].long), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        var mapTypeControl = new kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        position.map(p => {
            
            // 마커가 표시될 위치입니다 
            var markerPosition = new kakao.maps.LatLng(p.lat, p.long);

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            var iwContent = '<div style="padding:5px; color:black">Welcome to Trackon!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwPosition = new kakao.maps.LatLng(p.lat, p.long); //인포윈도우 표시 위치입니다

            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                position: iwPosition,
                content: iwContent
            });

            // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            infowindow.open(map, marker);
            return p;
        })
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
                            <a href="/" class="active item">Home</a>
                            <div class="right item">
                                <button class="ui inverted button" onClick={logout}>LogOut</button>
                            </div>
                        </div>
                    </div>

                    <div class="ui text container" style={{ marginBottom: 30 }}>
                        <h1 class="ui inverted header">
                            Track On
                        </h1>
                        <h2>You can track your Arduino</h2>
                    </div>
                    <Location />
                </div>
            </div>
        </>
    );
}

export default Login;
