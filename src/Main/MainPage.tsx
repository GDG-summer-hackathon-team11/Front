import { AppScreen } from "@stackflow/basic-ui";
import {useFlow} from "../Stack/stackflow";
import DynamicMap from "../Map/DynamicMap";
import MapMarkerController from "../Map/MapMarkerController";
import styled from "@emotion/styled";
import {getHistoryStateById} from "../History/historyUtil";

const MainPage = () => {
  const { push } = useFlow();
  const id = getHistoryStateById('id');

  const onClick = () => {
    push("DetailPage", {
      id: id,
    });
  };

  return (
    <AppScreen theme="cupertino">
      <DynamicMap>
        <MapMarkerController />
      </DynamicMap>
      <Article>
        메인 페이지
        <button onClick={onClick}>상세 페이지 이동</button>
      </Article>
    </AppScreen>
  )
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  
  right: 1rem;
  left: 1rem;
  bottom: 1rem;
  z-index: 2;
  
  background-color: white;
  border-radius: 1rem;
  min-height: 4rem;
`

export default MainPage
