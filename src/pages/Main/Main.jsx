import React, { Component, Fragment } from 'react';

import Modal from '../../components/Modal';
import Header from '../../components/Header'

class Main extends Component {

  render(){
    return(
      <Fragment>
        <Header/>
        <Modal/>
      </Fragment>
    )
  }
}

export default Main