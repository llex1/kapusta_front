const initState = {
  user: {
    email: "user@gmail.com",
    jwt: "",
  },
  universalModal: {
    modalTitle: false,
    modalVisibility: false,
    answer: false,
    delElementId: "",
  },

  date: {
    currentDate: "поточна дата в Unix форматі",
    currentPeriod: {
      from: "перша секунда місяця який шукаємо",
      to: "перша секунда НАСТУПНОГО місяця",
    },
  },
  db: {
    balance: 0,
    summaryCosts: [
      {
        month: "перша секунда поточного місяця",
        sum: "сумма за місяць",
      },
      {
        month: "перша секунда попедернього місяця",
        sum: "сумма за місяць",
      },
      //.........
    ],
    summaryProfit: [
      {
        month: "перша секунда поточного місяця",
        sum: "сумма за місяць",
      },
      {
        month: "перша секунда поточного місяця",
        sum: "сумма за місяць",
      },
      //...........
    ],
    costs: [
      // {
      //   id: '',
      //   date: 'дата в юнікс форматі',
      //   describe: 'опис',
      //   category: 'категорія',
      //   sum: 'сума',
      // },
      //.......
    ],
    profits: [
      // {
      //   id: "",
      //   date: "дата в юнікс форматі",
      //   category: "категорія",
      //   describe: "опис",
      //   sum: "сума",
      // },
      //.......
    ],
  },
};

export default initState;
