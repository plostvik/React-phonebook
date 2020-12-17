import { lazy } from 'react';

const routesPath = {
  REGISTER: '/register',
  LOGIN: '/login',
  PHONEBOOK: '/phonebook',
};

const routes = [
  //   {
  //     path: routesPath.HOME,
  //     exact: true,
  //     component: HomePage,
  //   },
  {
    path: routesPath.REGISTER,
    label: 'Register',
    exact: true,
    component: lazy(() => import('./pages/RegisterPage')),
    private: false,
    restricted: true,
  },
  {
    path: routesPath.LOGIN,
    label: 'Login',
    exact: true,
    component: lazy(() => import('./pages/LoginPage')),
    private: false,
    restricted: true,
  },
  {
    path: routesPath.PHONEBOOK,
    label: 'Phonebook',
    exact: true,
    component: lazy(() => import('./pages/PhoneBookPage')),
    private: true,
    restricted: false,
  },
  {
    path: null,
    label: '404page',
    exact: false,
    component: lazy(() => import('./pages/NotFoundPage')),
    private: false,
    restricted: false,
  },
];

export { routes, routesPath };
