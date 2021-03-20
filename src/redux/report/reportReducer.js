import { createReducer } from "@reduxjs/toolkit";
import reportAction from "./reportAction";

const initialState = {
  summary: {
    costs: 34000,
    profit: 50000,
  },
  categoryСosts: {
    Транспорт: 0,
    Продукты: 0,
    Здоровье: 0,
    Алкоголь: 0,
    Развлечения: 0,
    "Всё для дома": 0,
    Техника: 0,
    "Коммуналка, связь": 0,
    "Спорт, хобби": 0,
    Образование: 0,
    Прочее: 0,
  },
  detailsСosts: {
    Транспорт: {},
    Продукты: {},
    Здоровье: {},
    Алкоголь: {},
    Развлечения: {},
    "Всё для дома": {},
    Техника: {},
    "Коммуналка, связь": {},
    "Спорт, хобби": {},
    Образование: {},
    Прочее: {},
  },
  categoryProfit: {
    ЗП: 30000,
    "Доп. доход": 20000,
  },
  detailsProfit: {
    ЗП: {
      зарплата: 30000,
    },
    "Доп. доход": {
      freelance: 20000,
    },
  },
};

const reportReducer = createReducer(initialState, {
  [reportAction.reportSuccess]: (state, action) => action.payload,
});

export default reportReducer;
