import { AppScreen } from "@stackflow/basic-ui";
import {useFlow} from "../Stack/stackflow";
import DynamicMap from "../Map/DynamicMap";
import MapMarkerController from "../Map/MapMarkerController";
import {getHistoryStateById} from "../History/historyUtil";

const MainPage = () => {
  const { push } = useFlow();
  const id = getHistoryStateById('id')
  console.log(id)

  const onClick = () => {
    push("DetailPage", {
      title: " 메인페이지",
    });
  };

  return (
    <AppScreen theme="cupertino" appBar={{ title: "메인 페이지" }}>
      <DynamicMap>
      {/* 메인 페이지
      <button onClick={onClick}>상세 페이지 이동</button> */}
        <MapMarkerController />
      </DynamicMap>
    </AppScreen>
  )
}

export default MainPage
