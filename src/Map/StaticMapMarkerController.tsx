import {useEffect} from "react";
import MapMarker from "./MapMarker";
import {useMap} from "./useMap";
import {useHistoryState} from "../History/HistoryStore";
import CheckPointMapMarker from "./CheckPointMapMarker";

interface StaticMapMarkerControllerProps {
  places: any[]
}

const StaticMapMarkerController = (props:StaticMapMarkerControllerProps) => {
  const map = useMap()
  const { id } = useHistoryState()

  useEffect(() => {
    if(!props.places || props.places.length < 1) {
      return;
    }
    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
    // LatLngBounds 객체에 좌표를 추가합니다
    const { kakao } = window;
    const bounds = new kakao.maps.LatLngBounds();

    props.places.forEach((item:any) => {
      bounds.extend(item.position)
    })

    map.setBounds(bounds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.places])

  return (
    <>
      {props.places.map((place:any, index:number) => {
        if(place.type === 'main') {
          return (
            <MapMarker key={`${place.id}_${index}`} id={place.id} position={place.position}
                       index={index}
                       title={place.name}
                       isSelected={id === place.id}
            />
          )
        }

        return (
          <CheckPointMapMarker key={`${place.id}_${index}`} id={place.id} position={place.position}
                     index={index}
                     title={place.name}
                     isSelected={id === place.id}
          />
        )
      })}
    </>
  )
}

export default StaticMapMarkerController
