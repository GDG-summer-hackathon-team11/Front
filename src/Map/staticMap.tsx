import {ReactNode, useEffect, useRef, useState} from "react";
import styled from "@emotion/styled";
import { KakaoMapContext } from "./useMap";

interface StaticMapProps {
  children?: ReactNode
}

const StaticMap = (props:StaticMapProps) => {
  const [map, setMap] = useState<kakao.maps.Map>()
  const kakaoMapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(!kakaoMapRef.current) {
      return;
    }

    const { kakao } = window;

    // 역삼역 주소
    const centerPoint = {
      latitude: 37.5006744185994,
      longitude: 127.03646946847
    }

    const targetPoint = new kakao.maps.LatLng(centerPoint.latitude, centerPoint.longitude)

    const options = {
      center: targetPoint,
      level: 4,
      draggable: false,
    };

    setMap(new kakao.maps.Map(kakaoMapRef.current, options));
  }, [])

  return (
    <>
      <>
        <Map ref={kakaoMapRef} />
      </>
      {
        map ? (
          <KakaoMapContext.Provider value={map}>
            { props.children }
          </KakaoMapContext.Provider>
        ) : null
      }
    </>
  )
}

const Map = styled.div`
  height: 13.125rem;
`

export default StaticMap
