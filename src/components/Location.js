import React, { useEffect } from 'react';

const { kakao } = window;

const Location = ({position}) => {
    useEffect(() => {
        console.log(position);
        var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        var mapOption = {
            center: new kakao.maps.LatLng(37.56572606934189, 126.97798202794483),
            level: 3
        }

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        position.map(p => {

            // 마커가 표시될 위치입니다 
            var markerPosition = new kakao.maps.LatLng(p.latitude, p.longtitude);

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            var iwContent = '<div style="padding:5px; color:black">Welcome to Trackon!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwPosition = new kakao.maps.LatLng(p.latitude, p.longtitude); //인포윈도우 표시 위치입니다

            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                position: iwPosition,
                content: iwContent
            });

            // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            infowindow.open(map, marker);
            return p;
        })
    }, [position]);


    return (
        <div>
            <div id="map" style={{ width: "100vw", height: "70vh" }}></div>
        </div>
    )
}

export default Location;