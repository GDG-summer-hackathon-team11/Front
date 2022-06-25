import { AppScreen } from "@stackflow/basic-ui";
import {useFlow} from "../Stack/stackflow";
import DynamicMap from "../Map/DynamicMap";
import MapMarkerController from "../Map/MapMarkerController";

const MainPage = () => {
  const { push } = useFlow();

  const onClick = () => {
    push("DetailPage", {
      title: "Hello",
    });
  };

  return (
    <AppScreen theme="cupertino" appBar={{ title: "메인 페이지" }}>
      <DynamicMap>
        <MapMarkerController />
      </DynamicMap>
      메인 페이지
      <button onClick={onClick}>상세 페이지 이동</button>
    </AppScreen>
  )
}

export default MainPage
