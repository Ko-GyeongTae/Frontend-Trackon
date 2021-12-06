import React, { useEffect } from 'react';

const { kakao } = window;

const Location = ({ position }) => {
    useEffect(() => {
        var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        var mapOption = {
            center: new kakao.maps.LatLng(37.56572606934189, 126.97798202794483),
            level: 10
        }

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        position.map(p => {
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(p.latitude, p.longitude),
                clickable: true
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            var iwContent = `<div style="padding:5px; color:black">${p.reportId}</div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            var iwPosition = new kakao.maps.LatLng(p.latitude, p.longtitude); //인포윈도우 표시 위치입니다
            var iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                position: iwPosition,
                content: iwContent,
                removable: iwRemoveable
            });

            // 마커에 클릭이벤트를 등록합니다.
            kakao.maps.event.addListener(marker, 'click', function () {
                // 마커 위에 인포윈도우를 표시합니다
                infowindow.open(map, marker);
            });
            return p;
        })
    });


    return (
        <div>
            <div id="map" style={{ width: "100vw", height: "70vh" }}></div>
        </div>
    )
}

export default Location;