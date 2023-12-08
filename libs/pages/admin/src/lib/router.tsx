import {Route} from '@draco/routes'
import {PageGeneralFeature} from "./feature/page-general-feature";
import {PageQuestion} from "./ui/page-question";

export const ROUTER_PANEL_ADMIN: Route[] = [
  {
    path: "/home",
    component: <PageGeneralFeature />
  },
  {
    path: "/questions",
    component: <PageQuestion />
  }
]