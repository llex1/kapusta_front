const universalModalShowOpenWithTile = {
  type: 'action-universalModal/Open-with-tile',
  payload: { modalTitle: true, modalVisibility: true, answer: false, },
};

const universalModalShowOpen = {
  type: 'action-universalModal/Open',
  payload: { modalTitle: false, modalVisibility: true, answer: false, },
};
const universalModalShowClose = {
  type: 'action-universalModal/Close',
  payload: { modalTitle: false, modalVisibility: false },
};
const universalModalShowAnswer= {
  type: 'action-universalModal/Answer',
  payload: { answer: true},
};

export default {
  universalModalShowOpen,
  universalModalShowClose,
  universalModalShowOpenWithTile,
  universalModalShowAnswer
};
