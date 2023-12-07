import {ReactElement} from 'react'
import Home from "./pages/home";

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
  }
]