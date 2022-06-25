import {AppScreen} from "@stackflow/basic-ui";
import StaticMap from "../Map/staticMap"
import {useFlow} from "../Stack/stackflow";

const DetailPage = () => {
  const { push } = useFlow();

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
