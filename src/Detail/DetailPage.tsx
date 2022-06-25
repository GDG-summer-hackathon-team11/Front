import {AppScreen} from "@stackflow/basic-ui";
import StaticMap from "../Map/staticMap"
import {useFlow} from "../Stack/stackflow";
import {getHistoryStateById} from "../History/historyUtil";

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
    <AppScreen  theme="cupertino"  appBar={{ title: "상세페이지" }}>
    <StaticMap>
      </StaticMap>
    </AppScreen>
    </div>
  )
}

export default DetailPage
