import { useLayoutEffect, useMemo} from "react";
import {useMap} from "./useMap";
import IconStartPin from '../_assets/pin_start.png'
import IconActiveStartPin from '../_assets/pin_start_active.png'
import {useHistoryActions } from "../History/HistoryStore";

interface MapMarkerProps {
  position: kakao.maps.LatLng
  index: number
  title: string
  id: string
  isSelected:boolean
}

const MapMarker = (props:MapMarkerProps) => {
  const map = useMap()
  const { setSelectedId } = useHistoryActions()

  const marker = useMemo(() => {
    const { kakao } = window;

    const imageSize = new kakao.maps.Size(21, 28)
    const markerImage = new kakao.maps.MarkerImage(IconStartPin, imageSize);
    const marker = new kakao.maps.Marker({
      position: props.position, // 마커의 위치
      image: markerImage
    });

    kakao.maps.event.addListener(marker, 'click', function() {
      map.setCenter(props.position);
      map.setLevel(4, {
        animate: true
      })

      setSelectedId(props.id)
    });

    return marker
  }, [map, props.id, props.position, setSelectedId])

  const activeMarker = useMemo(() => {
    const { kakao } = window;

    const imageSize = new kakao.maps.Size(38, 50)
    const markerImage = new kakao.maps.MarkerImage(IconActiveStartPin, imageSize);
    const marker = new kakao.maps.Marker({
      position: props.position, // 마커의 위치
      image: markerImage
    });

    kakao.maps.event.addListener(marker, 'click', function() {
      map.setCenter(props.position);
      map.setLevel(4, {
        animate: true
      })

      setSelectedId(props.id)
    });

    return marker
  }, [map, props.id, props.position, setSelectedId])

  useLayoutEffect(() => {
    if(props.isSelected) {
      activeMarker.setMap(map)

      return () => {
        activeMarker.setMap(null)
      }
    }

    marker.setMap(map)
    return () => {
      marker.setMap(null)
    }
  }, [map, marker, activeMarker, props.isSelected])

  return null;
}

export default MapMarker
