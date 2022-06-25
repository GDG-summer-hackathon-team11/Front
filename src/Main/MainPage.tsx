import { AppScreen } from "@stackflow/basic-ui";
import DynamicMap from "../Map/DynamicMap";
import MapMarkerController from "../Map/MapMarkerController";
import RunningSwiper from "../Running/RunningSwiper";
import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {remote} from "../Remote/remote";
import {EventType} from "./EvnetType";
import format from "date-fns/format";

const MainPage = () => {
  const { isLoading, error, data } = useQuery('events',  () => remote.get('/events').then(res => res.data))


  //
  // if (error) {
  //   return 'Error';
  // }

  const [places, setPlaces] = useState<any>([]);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const result = data.map((item:EventType) => {
      return {
        id: item._id,
        name: item.startPoint.name,
        date: format(new Date(item.time), "HH:mm"),
        position: new kakao.maps.LatLng(item.startPoint.x, item.startPoint.y),
        members: item.member,
        level: item.level,
        ageCoverage: item.ageCoverage
      }
    })

    setPlaces(result)
  }, [data])

  return (
    <AppScreen theme="cupertino">
      <DynamicMap>
      {/* 메인 페이지
      <button onClick={onClick}>상세 페이지 이동</button> */}
        <MapMarkerController places={places} />
        <RunningSwiper places={places} />
      </DynamicMap>
    </AppScreen>
  )
}

export default MainPage
