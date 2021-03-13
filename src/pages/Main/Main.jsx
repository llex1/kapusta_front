import React, { Component, Fragment } from 'react';

import Modal from '../../components/modal';
import Header from '../../components/Header';
import Background from '../../components/Background';
import UniversalModal from '../../components/UniversalModal/UniversalModal';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Modal />

        <UniversalModal />

        <Background />
      </Fragment>
    );
  }
}

export default Main;
