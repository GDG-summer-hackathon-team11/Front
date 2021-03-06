import {ReactNode, useEffect, useRef, useState} from "react";
import styled from "@emotion/styled";
import { KakaoMapContext } from "./useMap";

interface StaticMapProps {
  children: ReactNode
}

const DynamicMap = (props:StaticMapProps) => {
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
      level: 4
    };

    setMap(new kakao.maps.Map(kakaoMapRef.current, options));
  }, [])

  return (
    <>
      <Container>
        <Map ref={kakaoMapRef} />
      </Container>
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

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const Map = styled.div`
  position: static;
  width: 100%;
  height: 100%;
`

export default DynamicMap
