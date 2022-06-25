import { AppScreen } from "@stackflow/basic-ui";
import {useFlow} from "../Stack/stackflow";

const MainPage = () => {
  const { push } = useFlow();

  const onClick = () => {
    push("DetailPage", {
      title: "Hello",
    });
  };

  return (
    <AppScreen theme="cupertino" appBar={{ title: "메인 페이지" }}>
      메인 페이지
      <button onClick={onClick}>상세 페이지 이동</button>
    </AppScreen>
  )
}

export default MainPage
