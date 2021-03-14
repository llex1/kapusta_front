const initState = {
  currentDate: "", /* "поточна дата в Unix форматі" */
  currentPeriod: {
    from: "", /* "перша секунда місяця який шукаємо" */
    to: "" /* "перша секунда НАСТУПНОГО місяця" */,
  },
}

const dateReducer = (state = initState, {type, payload})=>{
  switch (type) {
    default:
      return state
  }
}

export default dateReducer;
