import {Route} from '@draco/routes'
import PageGeneralFeature from "./feature/page-general-feature";
import PageQuestionsFeature from "./feature/page-questions-feature";

export const ROUTER_PANEL: Route[] = [
  {
    path: '/home',
    component: <PageGeneralFeature />
  },
  {
    path: "/questions",
    component: <PageQuestionsFeature />
  }
]