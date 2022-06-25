import {ReactNode, useEffect, useRef, useState} from "react";
import styled from "@emotion/styled";
// import { KakaoMapContext } from "./useMap";

interface StaticMapProps {
  children: ReactNode
}

const StaticMap = (props:StaticMapProps) => {
  const [smap, setsMap] = useState<kakao.maps.StaticMap>()
  const kakaoMapRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    if(!kakaoMapRef.current) {
      return;
    }

    const { kakao } = window;

    // 공식 문서에 있는 지도 시작 주소
    const targetPoint = new kakao.maps.LatLng(37.566826, 126.9786567)

    const options = {
      center: targetPoint,
      level: 3,
      marker: {
           position : new kakao.maps.LatLng(33.450401, 126.570647),
        }  
    };

    setsMap(new kakao.maps.StaticMap(kakaoMapRef.current, options));
  }, [])

  return (
    <>
      <Container>
        <Map ref={kakaoMapRef} />
      </Container>
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

export default StaticMap;