import React, { Suspense } from 'react';
import Loader from '../Loader';
import Notification from '../Notification';
import notificationAnimations from '../Notification/Notification.module.css';
import { CSSTransition } from 'react-transition-group';
import NavBar from '../NavBar';
import Container from '@material-ui/core/Container';
import { Switch } from 'react-router-dom';
import { routes } from '../../routes';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import ErrorBoundry from '../ErrorBoundry';

export default function App({ isLoading, message }) {
  return (
    <>
      <NavBar />
      <Container>
        <ErrorBoundry>
          <Suspense fallback={<Loader />}>
            <Switch>
              {routes.map(route =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute key={route.label} {...route} />
                ),
              )}
            </Switch>
          </Suspense>
        </ErrorBoundry>
        <CSSTransition
          in={Boolean(message)}
          timeout={250}
          unmountOnExit
          classNames={notificationAnimations}
        >
          <Notification message={message} />
        </CSSTransition>
        {isLoading && <Loader />}
      </Container>
    </>
  );
}
