const notificationSideEffect = (store) => (next) => (action) => {
//  console.log(action);
  if (action.name) {
    store.dispatch({
      type: `${action.name}/start`,
    });
  }

  next(action);
};

export default notificationSideEffect;
