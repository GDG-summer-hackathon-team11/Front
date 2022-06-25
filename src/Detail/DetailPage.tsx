import {AppScreen} from "@stackflow/basic-ui";
import StaticMap from "../Map/staticMap"
import LocationDetail from "../LocationDetail/LocationDetail";

const DetailPage = () => {
  return (
    <AppScreen theme="cupertino" appBar={{title: "상세 페이지"}}>
      <StaticMap/>
      <LocationDetail/>
    </AppScreen>
  )
}

export default DetailPage
