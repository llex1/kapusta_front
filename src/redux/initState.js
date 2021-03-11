import {createAction, createReducer} from '@reduxjs/toolkit';

const initState = {
  user: {
    email: "",/* "user@gmail.com" */
    token: "" /* "JWToken" */
  },
  date:{
    currentDate:"", /* "поточна дата в Unix форматі" */
    currentPeriod: {
      from: "", /* "перша секунда місяця який шукаємо" */
      to: "",   /* "перша секунда НАСТУПНОГО місяця" */
    }
  },
  db:{
    balance: 0, /* "integer" */
    summaryCosts: [/* {
      month: "перша секунда ПОТОЧНОГО місяця",
      sum: "сумма за місяць"
    },{
      month: "перша секунда ПОПЕРЕДНЬОГО місяця",
      sum: "сумма за місяць"
    } */
    //.........
  ],
    summaryProfit: [/* {
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
    ]
  }
}

const initAction = createAction('init')
const initReducer = createReducer(initState, {
  'init': (state) => state
})

export {initReducer}