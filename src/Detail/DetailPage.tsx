import {AppScreen} from "@stackflow/basic-ui";
import StaticMap from "../Map/staticMap"
import LocationDetail from "./LocationDetail";
import {getHistoryStateById} from "../History/historyUtil";
import {useQuery} from "react-query";
import {remote} from "../Remote/remote";
import Loading from "../Remote/Loading";
import {useEffect, useState} from "react";
import {EventDetailType, PlaceDetailType} from "../Main/EvnetType";
import format from "date-fns/format";
import { useHistoryState} from "../History/HistoryStore";
import MapMarkerController from "../Map/MapMarkerController";

const DetailPage = () => {
  let id = useHistoryState().id;
  id = id ?? getHistoryStateById('id');

  const { isLoading, error, data } = useQuery('eventDetail',() => remote.get(`/events/${id}`).then(res => res.data))
  const [place, setPlace] = useState<PlaceDetailType | null>(null);

  useEffect(() => {
    if (isLoading || error || !data) {
      return;
    }

    const result = data as EventDetailType

    setPlace({
      id: result._id,
      startPoint: {
        name: result.startPoint.name,
        position: new kakao.maps.LatLng(Number(result.startPoint.x), Number(result.startPoint.y)),
      },
      checkPoint: result.checkPoint.map(item => ({
        name: item.name,
        position: new kakao.maps.LatLng(Number(item.x), Number(item.y)),
      })),
      date: format(new Date(result.time), "HH:mm"),
      members: result.member,
      level: result.level,
      ageCoverage: result.ageCoverage,
      category: result.category
    })
  }, [data, isLoading, error])

  return (
    <AppScreen theme="cupertino" appBar={{title: "상세 페이지"}}>
      {
        isLoading ?
          (
            <Loading/>
          ) : (
            place ? (
              <>
                <StaticMap>
                  <MapMarkerController places={[{
                    name: place.startPoint.name,
                    position: place.startPoint.position
                  }]} />
                </StaticMap>
                <LocationDetail place={place}/>
              </>
            ) : null
          )
      }
    </AppScreen>
  )
}

export default DetailPage
