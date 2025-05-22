import { useRoutes } from "react-router-dom";

import NotFoundRoutes from "./NotfoundRoutes";
import BasicRoutes from "./BasicRoutes";

export default function Routes() {
  let routes = [BasicRoutes, NotFoundRoutes];
  return useRoutes(routes);
}
