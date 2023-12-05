import {LOGIN_URL, Route} from '@draco/routes'
import {PageGeneralFeature} from "./feature/page-general-feature";

export const ROUTER_LOGIN: Route[] = [
  {
    path: '',
    component: <PageGeneralFeature />
  }
]