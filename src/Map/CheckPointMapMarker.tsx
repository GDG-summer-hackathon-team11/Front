import { useLayoutEffect, useMemo} from "react";
import {useMap} from "./useMap";
import IconCheckPointPin from '../_assets/pin_checkpoint.png'
import IconCheckPointActivePin from '../_assets/pin_checkpoint_active.png'

interface CheckPointMapMarkerProps {
  position: kakao.maps.LatLng
  index: number
  title: string
  id: string
  isSelected:boolean
}

const CheckPointMapMarker = (props:CheckPointMapMarkerProps) => {
  const map = useMap()

  const marker = useMemo(() => {
    const { kakao } = window;

    const imageSize = new kakao.maps.Size(21, 28)
    const markerImage = new kakao.maps.MarkerImage(IconCheckPointPin, imageSize);

    return new kakao.maps.Marker({
      position: props.position, // 마커의 위치
      image: markerImage
    });
  }, [props.position])

  const activeMarker = useMemo(() => {
    const { kakao } = window;

    const imageSize = new kakao.maps.Size(38, 50)
    const markerImage = new kakao.maps.MarkerImage(IconCheckPointActivePin, imageSize);

    return new kakao.maps.Marker({
      position: props.position, // 마커의 위치
      image: markerImage
    });
  }, [props.position])

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

export default CheckPointMapMarker
