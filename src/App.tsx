import React from 'react';
import { Stack } from './Stack/stackflow';
import KakaoMapScriptLoader from "./Map/KakaoMapScriptLoader";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <KakaoMapScriptLoader>
        <Stack />
      </KakaoMapScriptLoader>
    </RecoilRoot>
  );
}

export default App;
