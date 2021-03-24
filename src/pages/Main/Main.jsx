import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";

import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header';
import Background from '../../components/Background';

function Main({location: {search}}) {
  const dispatch = useDispatch()
  useEffect(()=>{
    if(search.includes('?token=') && search.includes('&user=')){
      const params = search.replace('?token=', '').split('&user=')
      dispatch({type: "login/ok", payload: {
        jwt: params[0],
        email: params[1]
      } })
    }
  })

  return (
    <React.Fragment>
      <Header userFalse={true} />
      <Modal />
      <Background />
    </React.Fragment>
  );
}

export default Main;
