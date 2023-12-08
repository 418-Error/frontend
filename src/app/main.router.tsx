import { ReactElement } from 'react';
import Home from './pages/home';
import Question from './pages/question';

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
    path: '/question/:questionid',
    component: <Question />,
    protected: false,
    layout: true,
  },
];
