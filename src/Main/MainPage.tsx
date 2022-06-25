import { AppScreen } from "@stackflow/basic-ui";
import DynamicMap from "../Map/DynamicMap";
import MapMarkerController from "../Map/MapMarkerController";
import {useHistoryState} from "../History/HistoryStore";
import RunningSwiper from "../Running/RunningSwiper";

const MainPage = () => {
  const { id } = useHistoryState();

  return (
    <AppScreen theme="cupertino">
      <DynamicMap>
        <MapMarkerController />
      </DynamicMap>
      {
        id ? (
         <RunningSwiper />
        ) : null
      }
    </AppScreen>
  )
}

export default MainPage
