import React from 'react';
import { Stack } from './Stack/stackflow';
import KakaoMapScriptLoader from "./Map/KakaoMapScriptLoader";

function App() {
  return (
    <div>
      <KakaoMapScriptLoader>
        <Stack />
      </KakaoMapScriptLoader>
    </div>
  );
}

export default App;
