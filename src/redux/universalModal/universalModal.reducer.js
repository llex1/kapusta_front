import InitState from '../initState.js';
import { useSelector, useDispatch } from 'react-redux';

const universalModalreduce = (state = InitState.universalModal, action) => {
  // const dispatch = useDispatch();
  switch (action.type) {
    case 'action-universalModal/Open':
      return {
        ...state,
        modalTitle: action.payload.modalTitle,
        modalVisibility: action.payload.modalVisibility,
        answer: action.payload.answer,
      };
    case 'action-universalModal/Close':
      return {
        ...state,
        modalTitle: action.payload.modalTitle,
        modalVisibility: action.payload.modalVisibility,
        // setTimeout(()=>{({answer: action.payload.answer})}, 3000)
      };
    case 'action-universalModal/Open-with-tile':
      return {
        ...state,
        modalTitle: action.payload.modalTitle,
        modalVisibility: action.payload.modalVisibility,
        answer: action.payload.answer,
      };
    case 'action-universalModal/AnswerDel':
      return {
        ...state,
        answer: action.payload.answer,
      };

    default:
      return { ...state };
  }
};

export default universalModalreduce;
