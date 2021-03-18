const universalModalShowOpenWithTile = {
  type: 'action-universalModal/Open-with-tile',
  payload: { modalTitle: true, modalVisibility: true, answer: false },
};

const universalModalShowOpen = (id)=> {
  return {
  type: 'action-universalModal/Open',
  payload: { modalTitle: false, modalVisibility: true, answer: false, id:id },
  }
};
const universalModalShowClose = {
  type: 'action-universalModal/Close',
  payload: { modalTitle: false, modalVisibility: false },
};
const universalModalShowAnswerExit = {
  type: 'action-universalModal/AnswerExit',
  payload: { email: '', jwt: '' },
};
const universalModalShowAnswerDel = {
  type: 'action-universalModal/AnswerDel',
  payload: { answer: true },
};
const universalModalShowAnswerReset = {
  type: 'action-universalModal/AnswerReset',
  payload: { answer: false },
};

export default {
  universalModalShowOpen,
  universalModalShowClose,
  universalModalShowOpenWithTile,
  universalModalShowAnswerExit,
  universalModalShowAnswerDel,
  universalModalShowAnswerReset
};


