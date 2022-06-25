import {AppScreen} from "@stackflow/basic-ui";
import StaticMap from "../Map/staticMap"
import {useFlow} from "../Stack/stackflow";
import {getHistoryStateById} from "../History/historyUtil";
import LocationDetail from "../LocationDetail/LocationDetail";
import JoinButton from "../Button/join";

const DetailPage = () => {
  const { push } = useFlow();
  const detailId = getHistoryStateById('id');
  console.log(detailId)

  const onClick = () => {
    push("MainPage", {
      title: "상세페이지",
    });
  };
  return (
    <div onClick={onClick}>
    <AppScreen theme="cupertino" appBar={{ title: "상세 페이지" }}>
        <StaticMap>
    </StaticMap>
    <LocationDetail/>
    <JoinButton/>
    </AppScreen>
    </div>
  )
}

export default DetailPage
