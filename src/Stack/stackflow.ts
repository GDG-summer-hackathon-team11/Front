import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
<<<<<<< HEAD

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  plugins: [basicRendererPlugin()],
  activities: {},
=======
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import MainPage from "../Main/MainPage";
import DetailPage from "../Detail/DetailPage";

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    MainPage,
    DetailPage
  },
  plugins: [
    basicRendererPlugin(),
    historySyncPlugin({
      routes: {
        MainPage: "/",
        DetailPage: '/detail'
      },
      fallbackActivity: () => "MainPage",
    })],
   // initialActivity: () => "MainPage",
>>>>>>> 2241849e284793898b1c0d4d2975a99f7cd9b918
});
