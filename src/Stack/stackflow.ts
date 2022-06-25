import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  plugins: [basicRendererPlugin()],
  activities: {},
});
