import ReactDom from "react-dom";
import { useLayoutEffect, useMemo, useRef} from "react";
import styled from "@emotion/styled";
import {useMap} from "./useMap";
import IconStartPin from '../_assets/pin_start.png'
import IconCheckPointPin from '../_assets/pin_checkpoint.png'
import {useFlow} from "../Stack/stackflow";
import {getHistoryStateById} from "../History/historyUtil";

interface MapMarkerProps {
  position: kakao.maps.LatLng
  type: 'checkpoint' | 'main'
  index: number
  title: string
  id: string
  showInfo?:boolean
}

const MapMarker = (props:MapMarkerProps) => {
  const map = useMap()
  const container = useRef(document.createElement("div"))

  // const infoWindow = useMemo(() => {
  //   container.current.style.position = 'absolute'
  //   container.current.style.bottom = '40px'
  //
  //   // @ts-ignore
  //   return new kakao.maps.CustomOverlay({
  //     map: map,
  //     position: props.position,
  //     content: container.current
  //   });
  //
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const mainMarker = useMemo(() => {
    const imageSize = new kakao.maps.Size(21, 28)
    const markerImage = new kakao.maps.MarkerImage(IconStartPin, imageSize);
    return new kakao.maps.Marker({
      position: props.position, // 마커의 위치
      image: markerImage
    });
  }, [props.position])

  const checkPointMarker = useMemo(() => {
    const imageSize = new kakao.maps.Size(21, 28)
    const markerImage = new kakao.maps.MarkerImage(IconCheckPointPin, imageSize);
    return new kakao.maps.Marker({
      position: props.position, // 마커의 위치
      image: markerImage
    });
  }, [props.position])

  const marker = useMemo(() => {
    const { kakao } = window;

    let marker;

    if(props.type === 'main') {
      marker = mainMarker
    } else {
      marker = checkPointMarker
    }

    marker.setMap(map); // 지도 위에 마커를 표출합니다

    kakao.maps.event.addListener(marker, 'click', function() {
      map.setCenter(props.position);
      map.setLevel(4, {
        animate: true
      })

      window.history.replaceState({
        id: props.id,
      }, '', `?id=${props.id}`)
    });

    return marker
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useLayoutEffect(() => {
    marker.setMap(map)

    return () => {
      marker.setMap(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map])

  return (
    container.current &&
    ReactDom.createPortal(
      <Message onClick={() => {
      }}>
        <Title>{props.title}</Title>
      </Message>, container.current)
  )
}

const Title = styled.label`
  white-space: pre-line;
  font-weight: bold;
  padding: 6px 8px;
`

const Message = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  
  width: 180px;
  min-height: 50px;
  margin-left: -90px;
  
  background: rgba(255, 228, 196, 0.9);
  
`

export default MapMarker
