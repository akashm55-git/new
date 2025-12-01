import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Internships from './pages/Internships';
import Contact from './pages/Contact';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
    visible: true
  },
  {
    name: 'About',
    path: '/about',
    element: <About />,
    visible: true
  },
  {
    name: 'Skills',
    path: '/skills',
    element: <Skills />,
    visible: true
  },
  {
    name: 'Projects',
    path: '/projects',
    element: <Projects />,
    visible: true
  },
  {
    name: 'Internships',
    path: '/internships',
    element: <Internships />,
    visible: true
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <Contact />,
    visible: true
  }
];

export default routes;
