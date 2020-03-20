import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {
  PUBLIC_ROUTES,
  REGISTER_PRIVATE_ROUTES,
  IS_REGISTERED_PRIVATE_ROUTES,
  IS_BANNED_ROUTES,
  IS_ADMIN_PRIVATE_ROUTES,
  RenderRoutes,
} from '../routes';
import MainLayout from '../view/UI-kit/HOC/MainLayout';
import { Header, Footer } from '../view/components';
import { checkUserAccess } from '../sdk/actions/user';

class Delegate extends Component {
  componentDidMount() {
    this.props.checkUserAccess();
  }
  render() {
    const {
      isLoggedIn,
      isRegistered,
      isAdmin,
      isBanned,
    } = this.props;

    let PRIVATE_ROUTES = [];

    if (isBanned) {
      PRIVATE_ROUTES = IS_BANNED_ROUTES;
    } else if (isAdmin) {
      PRIVATE_ROUTES = IS_ADMIN_PRIVATE_ROUTES;
    } else if (isRegistered) {
      PRIVATE_ROUTES = IS_REGISTERED_PRIVATE_ROUTES;
    } else {
      PRIVATE_ROUTES = REGISTER_PRIVATE_ROUTES;
    }

    return (
      <Fragment>
        {
          isLoggedIn ? (
            <MainLayout
              headerComponent={<Header />}
              footerComponent={<Footer />}
              asideVisible={false}
            >
              <RenderRoutes routes={PRIVATE_ROUTES} />
            </MainLayout>
          ) : (
            <MainLayout
              headerComponent={<Header />}
              footerComponent={<Footer />}
              asideVisible={false}
            >
              <RenderRoutes routes={PUBLIC_ROUTES} />
            </MainLayout>
          )
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.access.isLoggedIn,
  isRegistered: state.user.access.isRegistered,
  isAdmin: state.user.access.isAdmin,
  isBanned: state.user.access.isBanned,
});

export default connect(mapStateToProps, { checkUserAccess })(Delegate);
