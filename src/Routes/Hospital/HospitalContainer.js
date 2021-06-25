/*global kakao*/
import React from "react";
import HospitalPresenter from "./HospitalPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Keyword: "",
      Search: false,
      States: true,
      location: " ",
      Geo: false,
      map: " ",
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

  setStates = (e) => {
    this.setState({
      States: false,
    });
  };

  setMap = (e) => {
    this.setState({
      map: e,
    });
  };

  setGeolocation = (e) => {
    this.setState({
      Geo: true,
    });
  };

  setSearch = (map) => {
    // 마커에 띄울 내용
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    // kakao map에서 제공하는 services 함수들을 사용하기 위해 선언
    let ps = new kakao.maps.services.Places();
    // keyword 주소(ex. 수원시 영통구) 입력 받아서 keyword setting
    // 거북목 관련 병원이 많이 없어 오류가 발생하기 때문에 일단 정형외과를 default로 잡음
    let setKeyword = this.state.Keyword + " 정형외과";

    // if (this.state.Keyword === "") setKeyword = "정형외과";
    // else setKeyword = this.state.Keyword + " 정형외과";
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
          "<div display='inline'>" +
            '    <div class="info">' +
            '        <div class="title">' +
            place.place_name +
            '            <div class="close" title="닫기"></div>' +
            "        </div>" +
            '        <div class="body">' +
            '            <div class="desc">' +
            '                <div class="ellipsis">' +
            place.road_address_name +
            "</div>" +
            '                <div><a href="' +
            place.place_url +
            '" target="_blank" class="link">홈페이지</a></div>' +
            "            </div>" +
            "        </div>" +
            "    </div>" +
            "</div>"
        );

        infowindow.open(map, marker);
      });
    }
  };

  componentDidMount() {
    //this.setKakaoMap(this.state.States);
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(script);
    //const location = { locationLat: null, locationLon: null };
    script.onload = () => {
      kakao.maps.load(() => {
        let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

        let container = document.getElementById("Map");
        let options = {
          center: new kakao.maps.LatLng(37.221860906359666, 127.18668187947115),
          level: 7,
        };

        // 지도 생성
        let mapData = new window.kakao.maps.Map(container, options);
        // 생성한 지도 재사용 하기위해 설정
        this.setMap(mapData);
        let map = this.state.map;

        // kakao map에서 제공하는 services 함수들을 사용하기 위해 선언
        let ps = new kakao.maps.services.Places();
        // keyword 주소(ex. 수원시 영통구) 입력 받아서 keyword setting
        // 거북목 관련 병원이 많이 없어 오류가 발생하기 때문에 일단 정형외과를 default로 잡음
        let setKeyword = "정형외과";

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도
            let locPosition = new kakao.maps.LatLng(lat, lon);
            // 검색 시도
            ps.keywordSearch(setKeyword, placesSearchCB, {
              location: locPosition,
            });
          });
          this.setGeolocation();
        } else {
          let lat = 37.221860906359666,
            lon = 127.18668187947115;

          let locPosition = new kakao.maps.LatLng(lat, lon);

          ps.keywordSearch(setKeyword, placesSearchCB, {
            location: locPosition,
          });
        }

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
              "<div display='inline'>" +
                '    <div class="info">' +
                '        <div class="title">' +
                place.place_name +
                '            <div class="close" title="닫기"></div>' +
                "        </div>" +
                '        <div class="body">' +
                '            <div class="desc">' +
                '                <div class="ellipsis">' +
                place.road_address_name +
                "</div>" +
                '                <div><a href="' +
                place.place_url +
                '" target="_blank" class="link">상세보기</a></div>' +
                "            </div>" +
                "        </div>" +
                "    </div>" +
                "</div>"
              // '<div style="padding:5px;font-size:12px;">' +
              //   place.place_name +
              //   "</div>"
            );

            infowindow.open(map, marker);
          });
        }
      });
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.Search !== prevState.Search) {
      console.log("didmount");
      // 지도 띄우기
      let map = this.state.map;

      this.setSearch(map);
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
