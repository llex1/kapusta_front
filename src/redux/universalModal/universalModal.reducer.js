import InitState from '../initState.js';

const universalModalreduce = (state = InitState.universalModal, action) => {
  switch (action.type) {
    case 'action-universalModal/Open':
      return {
        ...state,
        modalTitle: action.payload.modalTitle,
        modalVisibility: action.payload.modalVisibility,
      };
    case 'action-universalModal/Close':
      return {
        ...state,
        modalTitle: action.payload.modalTitle,
        modalVisibility: action.payload.modalVisibility,
      };
    case 'action-universalModal/Open-with-tile':
      return {
        ...state,
        modalTitle: action.payload.modalTitle,
        modalVisibility: action.payload.modalVisibility,
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
