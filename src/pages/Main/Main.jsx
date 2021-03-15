import React, { Component, Fragment } from 'react';

import Modal from '../../components/Modal';
import Header from '../../components/Header';
import Background from '../../components/Background';
import IncomeAndCosts from '../../components/IncomeAndCosts';
import UniversalModal from '../../components/UniversalModal/UniversalModal';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Modal />
        <Background />
        <UniversalModal />
      </Fragment>
    );
  }
}

export default Main;
