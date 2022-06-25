import {useEffect, useState} from "react";
import MapMarker from "./MapMarker";
import {useMap} from "./useMap";

interface MapMarkerControllerProps {
  selectedMarkerId?: string
}

const MapMarkerController = (props:MapMarkerControllerProps) => {
  const [places, setPlaces] = useState<any>([]);
  const map = useMap()

  useEffect(() => {
    const MOCK_PLACES = [
      {
        id: '1',
        position: new kakao.maps.LatLng(37.500149122816275, 127.03345649963086),
        name: "마켓컬리",
        type: 'main'
      },
      {
        id: '2',
        position: new kakao.maps.LatLng(37.49808633653005, 127.02800140627488),
        name: "강남역 2호선",
        type: 'checkpoint'
      },
      {
        id: '3',
        position: new kakao.maps.LatLng(37.5016573944824, 127.026391177132),
        name: "CGV 강남",
        type: 'checkpoint'
      },
      {
        id: '4',
        position: new kakao.maps.LatLng(37.503755423867155, 127.02410739090031),
        name: "당근마켓",
        type: 'checkpoint'
      },
    ]

    setPlaces(MOCK_PLACES)
  }, [])

  useEffect(() => {
    if(!places || places.length < 1) {
      return;
    }
    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
    // LatLngBounds 객체에 좌표를 추가합니다
    const { kakao } = window;
    const bounds = new kakao.maps.LatLngBounds();

    places.forEach((item:any) => {
      bounds.extend(item.position)
    })

    map.setBounds(bounds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [places])

  return (
    <>
      {places.map((place:any, index:number) => (
        <MapMarker key={place.id} id={place.id} position={place.position}
                   index={index}
                   title={place.name}
                   type={place.type}
                   showInfo={props.selectedMarkerId === place.id}
        />
      ))}
    </>
  )
}

export default MapMarkerController
