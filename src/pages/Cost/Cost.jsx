import React, { Component, Fragment } from 'react';

import Header from '../../components/Header';
import BackgroundAuth from '../../components/BackgroundAuth';
import CurrentPeriod from '../../components/CurrentPeriod';
import Loader from '../../components/Loader/Loader.js';

class Cost extends Component {
  state = {
    loading: true,
  };

  //*логіка вимкненя Лоадера
  // fetch('http://kapusta.fun/cost')
  // .then(respons=>respons.json())
  // .then(storage=>{
  //   this.setState.loading(false)
  // })

  render() {
    return (
      <Fragment>
        <Header />
        <CurrentPeriod />
        {this.setState && <Loader />}
        <BackgroundAuth />
      </Fragment>
    );
  }
}

export default Cost;
