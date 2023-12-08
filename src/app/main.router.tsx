import { ReactElement } from 'react'
import Home from './pages/home'
import Ia from './pages/ia'
import QuestionsGeneral from "./pages/questions/home"
import PageQuestion from "./pages/questions/_id"
import {PageAdmin} from "@draco/pages/admin";

interface RouterProps {
  path: string;
  component: ReactElement;
  protected: boolean;
  layout: boolean;
  darkMode?: boolean;
}

export const ROUTER: RouterProps[] = [
  {
    path: '/',
    component: <Home />,
    protected: false,
    layout: true,
  },
  {
    path: "/questions",
    component: <QuestionsGeneral />,
    protected: true,
    layout: true
  },
  {
    path: '/questions/:questionId',
    component: <PageQuestion />,
    protected: false,
    layout: true,
  },
  {
    path: "/admin/*",
    component: <PageAdmin />,
    protected: true,
    layout: false
  },
  {
    path: '/ia',
    component: <Ia />,
    protected: false,
    layout: true,
  }
];
