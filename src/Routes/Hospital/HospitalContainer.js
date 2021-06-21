/*global kakao*/
import React from "react";
import HospitalPresenter from "./HospitalPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Keyword: " ",
      Search: false,
    };
  }

  changeKeyword = (e) => {
    this.setState({
      Keyword: e.target.value,
    });
  };

  setKeyword = (e) => {
    if (this.state.Search === true) {
      this.setState({
        Search: false,
      });
    } else {
      this.setState({
        Search: true,
      });
    }
  };

  componentDidMount = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("Map");
        let options = {
          center: new kakao.maps.LatLng(37.221860906359666, 127.18668187947115),
          level: 7,
        };

        let map = new window.kakao.maps.Map(container, options);

        // 지도 생성

        // GPS 사용가능한지 확인하고
        // 사용가능하면 위도, 경도 재설정
        // 사용 못하면 위도, 경도 학교로 설정
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도

            let locPosition = new kakao.maps.LatLng(lat, lon);
            displayMarker(locPosition);
          });
        } else {
          let lat = 37.221860906359666,
            lon = 127.18668187947115;

          let locPosition = new kakao.maps.LatLng(lat, lon);
          displayMarker(locPosition);
        }

        function displayMarker(locPosition) {
          let markerPosition = new kakao.maps.Marker({
            map: map,
            position: locPosition,
          });

          // let iwContent = message,
          let iwRemoveable = true;

          let infowindow = new kakao.maps.InfoWindow({
            removable: iwRemoveable,
          });
          // 마커에 클릭이벤트를 등록합니다
          infowindow.open(markerPosition);

          map.setCenter(locPosition);
        }
      });
    };
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.Search !== prevState.Search) {
      let container = document.getElementById("Map");
      let options = {
        center: new kakao.maps.LatLng(37.221860906359666, 127.18668187947115),
        level: 7,
      };

      // 지도 띄우기
      let map = new window.kakao.maps.Map(container, options);

      // 마커에 띄울 내용
      let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

      // kakao map에서 제공하는 services 함수들을 사용하기 위해 선언
      let ps = new kakao.maps.services.Places();

      // keyword 주소(ex. 수원시 영통구) 입력 받아서 keyword setting
      // 거북목 관련 병원이 많이 없어 오류가 발생하기 때문에 일단 정형외과를 default로 잡음
      let setKeyword = this.state.Keyword + " 정형외과";

      // 검색 시도
      ps.keywordSearch(setKeyword, placesSearchCB);

      // 검색이 안되거나 실패할 경우 추후에 추가 예정
      function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          let bounds = new kakao.maps.LatLngBounds();

          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }
      }

      function displayMarker(place) {
        // 마커를 생성하고 지도에 표시합니다
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, "click", function () {
          // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
          infowindow.setContent(
            '<div style="padding:5px;font-size:12px;">' +
              place.place_name +
              "</div>"
          );
          infowindow.open(map, marker);
        });
      }
    }
  }
  render() {
    return (
      <HospitalPresenter
        Keyword={this.state.Keyword}
        Search={this.state.Search}
        changeKeyword={this.changeKeyword}
        setKeyword={this.setKeyword}
      />
    );
  }
}
