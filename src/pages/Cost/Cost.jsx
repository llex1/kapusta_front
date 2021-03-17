import React, { Component, Fragment } from 'react';

import Header from '../../components/Header';
import BackgroundAuth from '../../components/BackgroundAuth';
import CurrentPeriod from '../../components/CurrentPeriod';

class Cost extends Component {


  render() {
    return (
      <Fragment>
        <Header />
        <CurrentPeriod />

        <BackgroundAuth />
      </Fragment>
    );
  }
}

export default Cost;
