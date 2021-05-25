/*global kakao*/
import React from "react";
import HospitalPresenter from "./HospitalPresenter";

export default class extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=f1c1a9d26ff642f9cf4625699ed9f44c&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("Map");
        let options = {
          // 일단 명지대학교 띄우기
          center: new kakao.maps.LatLng(37.221860906359666, 127.18668187947115),
          level: 5,
        };

        const map = new window.kakao.maps.Map(container, options);

        // 마커 생성 위치
        let markerPosition = new kakao.maps.LatLng(
          37.221860906359666,
          127.18668187947115
        );

        // 마커 생성
        let marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };
  }
  render() {
    //const {} = this.state;
    return <HospitalPresenter />;
  }
}
