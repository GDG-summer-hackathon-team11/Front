import { AppScreen } from "@stackflow/basic-ui";
import {useFlow} from "../Stack/stackflow";
import DynamicMap from "../Map/DynamicMap";
import MapMarkerController from "../Map/MapMarkerController";
import {useHistoryState} from "../History/HistoryStore";
import RunningCard from "../Running/RunningCard";

const MainPage = () => {
  const { push } = useFlow();
  const { id } = useHistoryState();

  const handleClick = () => {
    push("DetailPage", {
      id: id,
    });
  };

  return (
    <AppScreen theme="cupertino">
      <DynamicMap>
        <MapMarkerController />
      </DynamicMap>
      {
        id ? (
         <RunningCard onClick={handleClick}/>
        ) : null
      }
    </AppScreen>
  )
}

export default MainPage
