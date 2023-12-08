import {ReactElement} from 'react'
import Home from "./pages/home";
import {PageAdmin} from "../../libs/pages/admin/src/lib/page-admin";

interface RouterProps {
  path: string
  component: ReactElement
  protected: boolean
  layout: boolean
  darkMode?: boolean
}

export const ROUTER: RouterProps[] = [
  {
    path: "/",
    component: <Home />,
    protected: false,
    layout: true
  },
  {
    path: "/admin/*",
    component: <PageAdmin />,
    protected: true,
    layout: false
  }
]