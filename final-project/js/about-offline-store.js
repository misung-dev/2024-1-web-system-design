document.addEventListener("DOMContentLoaded", function () {
	var mapContainer = document.getElementById("map"),
		mapOption = {
			center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
			level: 3, // 지도의 레벨(확대, 축소 정도)
		};

	var map = new kakao.maps.Map(mapContainer, mapOption);

	// 마커를 생성
	var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

	var marker = new kakao.maps.Marker({
		position: markerPosition,
	});

	// 마커가 지도 위에 표시되도록 설정
	marker.setMap(map);

	// 인포윈도우를 생성
	var infowindow = new kakao.maps.InfoWindow({
		content: '<div style="padding:5px;">매장 위치</div>',
	});

	// 인포윈도우를 마커 위에 표시
	infowindow.open(map, marker);
});
