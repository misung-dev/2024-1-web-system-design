document.addEventListener("DOMContentLoaded", function () {
	var mapContainer = document.getElementById("map"),
		mapOption = {
			center: new kakao.maps.LatLng(37.545629, 126.964714), // 중심 좌표를 숙명여자대학교로 설정
			level: 3,
		};

	var map = new kakao.maps.Map(mapContainer, mapOption);

	// 마커와 인포윈도우 생성 함수
	function createMarkerAndInfoWindow(position, content) {
		var marker = new kakao.maps.Marker({
			position: position,
		});
		marker.setMap(map);

		var infowindow = new kakao.maps.InfoWindow({
			content: `<div style="padding:5px; font-size:14px; font-weight:bold; color:#212121; text-align: center;">${content}</div>`,
		});
		infowindow.open(map, marker);
	}

	// 마커 생성
	createMarkerAndInfoWindow(new kakao.maps.LatLng(37.545629, 126.964714), "숙명여자대학교");
	createMarkerAndInfoWindow(new kakao.maps.LatLng(37.571775, 126.976879), "교보문고 광화문점");
	createMarkerAndInfoWindow(new kakao.maps.LatLng(37.503628, 127.024612), "교보문고 강남점");
	createMarkerAndInfoWindow(new kakao.maps.LatLng(37.54993, 126.91362), "교보문고 합정점");
	createMarkerAndInfoWindow(new kakao.maps.LatLng(37.57138, 127.00993), "교보문고 동대문점");
	createMarkerAndInfoWindow(new kakao.maps.LatLng(37.63833, 127.02528), "교보문고 수유점");
	createMarkerAndInfoWindow(new kakao.maps.LatLng(37.562, 126.94799), "이화여대 교내서점");
	createMarkerAndInfoWindow(new kakao.maps.LatLng(37.658358, 126.767049), "교보문고 일산점");
	createMarkerAndInfoWindow(new kakao.maps.LatLng(37.580245, 127.046422), "교보문고 청량리점");
	createMarkerAndInfoWindow(new kakao.maps.LatLng(37.527895, 126.875168), "교보문고 목동점");
	createMarkerAndInfoWindow(new kakao.maps.LatLng(37.515318, 126.907616), "교보문고 영등포점");

	// 버튼 클릭 시 숙명여자대학교로 이동하는 함수
	document.getElementById("centerButton").addEventListener("click", function () {
		map.setCenter(new kakao.maps.LatLng(37.545629, 126.964714));
	});
});
