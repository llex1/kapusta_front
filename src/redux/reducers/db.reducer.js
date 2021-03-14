const initState = {
  balance: 0 /* "integer" */,
  summaryCosts: [
    /* {
    month: "перша секунда ПОТОЧНОГО місяця",
    sum: "сумма за місяць"
  },{
    month: "перша секунда ПОПЕРЕДНЬОГО місяця",
    sum: "сумма за місяць"
  } */
    //.........
  ],
  summaryProfit: [
    /* {
    month: "перша секунда ПОТОЧНОГО місяця",
    sum: "сумма за місяць"
  },{
    month: "перша секунда ПОПЕРЕДНЬОГО місяця",
    sum: "сумма за місяць"
  } */
    //...........
  ],
  costs: [
    // {
    //   date: 'дата в юнікс форматі',
    //   category: 'категорія',
    //   describe: "опис",
    //   sum: "сума"
    // },
    //.......
  ],
  profit: [
    // {
    //   date: 'дата в юнікс форматі',
    //   category: 'категорія',
    //   describe: "опис",
    //   sum: "сума"
    // },
    //.......
  ],
}

const dbReducer = (state = initState, {type, payload})=>{
  switch (type) {
    case "login/ok":
      return {
        ...state,
        costs: payload.db?.costs,
        profit: payload.db?.profit
      }
    default:
      return state
  }
}

export default dbReducer;