const initState = {
  user: {
    email: 'user@gmail.com',
    jwt: '',
  },
  universalModal: {
    modalTitle: false,
    modalVisibility: false,
    answer: false,
  },

  date: {
    currentDate: 'поточна дата в Unix форматі',
    currentPeriod: {
      from: 'перша секунда місяця який шукаємо',
      to: 'перша секунда НАСТУПНОГО місяця',
    },
  },
  db: {
    balance: 'integer',
    summaryCosts: [
      {
        month: 'перша секунда поточного місяця',
        sum: 'сумма за місяць',
      },
      {
        month: 'перша секунда попедернього місяця',
        sum: 'сумма за місяць',
      },
      //.........
    ],
    summaryProfit: [
      {
        month: 'перша секунда поточного місяця',
        sum: 'сумма за місяць',
      },
      {
        month: 'перша секунда поточного місяця',
        sum: 'сумма за місяць',
      },
      //...........
    ],
    costs: [
      {
        date: 'дата в юнікс форматі',
        category: 'категорія',
        describe: 'опис',
        sum: 'сума',
      },
      //.......
    ],
    profits: [
      {
        date: 'дата в юнікс форматі',
        category: 'категорія',
        describe: 'опис',
        sum: 'сума',
      },
      //.......
    ],
  },
};

export default initState;
