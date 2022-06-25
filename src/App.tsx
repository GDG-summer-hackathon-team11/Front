import React from 'react';
import { Stack } from './Stack/stackflow';
import KakaoMapScriptLoader from "./Map/KakaoMapScriptLoader";
import {RecoilRoot} from "recoil";
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <RecoilRoot>
      <KakaoMapScriptLoader>
        <QueryClientProvider client={queryClient}>
          <Stack />
        </QueryClientProvider>
      </KakaoMapScriptLoader>
    </RecoilRoot>
  );
}

export default App;
