import { AppScreen } from "@stackflow/basic-ui";
import DynamicMap from "../Map/DynamicMap";
import MapMarkerController from "../Map/MapMarkerController";
import {useHistoryState} from "../History/HistoryStore";
import RunningSwiper from "../Running/RunningSwiper";
import {useEffect, useState} from "react";

const MainPage = () => {
  const { id } = useHistoryState();
  const [places, setPlaces] = useState<any>([]);

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

  return (
    <AppScreen theme="cupertino">
      <DynamicMap>
      {/* 메인 페이지
      <button onClick={onClick}>상세 페이지 이동</button> */}
        <MapMarkerController places={places} />
        {
          id ? (
            <RunningSwiper places={places} />
          ) : null
        }
      </DynamicMap>
    </AppScreen>
  )
}

export default MainPage
