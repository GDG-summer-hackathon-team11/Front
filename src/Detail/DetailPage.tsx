import {AppScreen} from "@stackflow/basic-ui";
import DynamicMap from "../Map/DynamicMap";
const DetailPage = () => {
  return (
    <AppScreen theme="cupertino" appBar={{ title: "상세 페이지" }}>
    <DynamicMap>
      </DynamicMap>
    </AppScreen>
  )
}

export default DetailPage
