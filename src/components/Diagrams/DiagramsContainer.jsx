import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getReport } from "../../redux/report/reportSelector";
import Diagrams from "./Diagrams";
import reportOperation from "../../redux/report/reportOperation";
import { getCurrentMonth } from "../../redux/currentMonth/currentMonthSelector";

const initialState = {
  summary: {
    costs: 20000,
    profit: 35000,
  },
  categoryСosts: {
    Транспорт: 2000,
    Продукты: 3000,
    Здоровье: 500,
    Алкоголь: 100,
    Развлечения: 2000,
    "Всё для дома": 1000,
    Техника: 200,
    "Коммуналка, связь": 300,
    "Спорт, хобби": 2000,
    Образование: 2000,
    Прочее: 300,
  },
  detailsСosts: {
    Транспорт: {
      Транспорт1: 1000,
      Транспорт2: 500,
      Транспорт3: 1400,
      Транспорт4: 300,
      Транспорт5: 200,
      Транспорт6: 150,
    },
    Продукты: {
      Картошка: 1000,
      Свинина: 500,
      Курица: 400,
      Молоко: 300,
      Хлеб: 200,
      Мороженое: 150,
    },
    Здоровье: {
      Здоровье1: 1000,
      Здоровье2: 500,
      Здоровье3: 400,
      Здоровье4: 300,
      Здоровье5: 200,
      Здоровье6: 150,
    },
    Алкоголь: {},
    Развлечения: {},
    "Всё для дома": {},
    Техника: {
      Спам: 200,
    },
    "Коммуналка, связь": {},
    "Спорт, хобби": {},
    Образование: {},
    Прочее: {},
  },
  categoryProfit: {
    ЗП: 50000,
    "Доп. доход": 20000,
  },
  detailsProfit: {
    ЗП: {
      моя: 30000,
      жены: 20000,
    },
    "Доп. доход": {
      freelance: 20000,
    },
  },
};

function DiagramsContainer(props) {
  const [data, setData] = useState(initialState);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [pageIncome, setPageIncome] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("Продукты");
  const [dataForRender, setDataForRender] = useState([]);
  const [dataForRenderProfit, setDataForRenderProfit] = useState([]);

  const dispatch = useDispatch();
  const selector = useSelector(getReport);
  const selectedMonth = useSelector(getCurrentMonth);

  useEffect(() => {
    const onchangeViewport = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", onchangeViewport);
    return () => window.removeEventListener("resize", onchangeViewport);
  }, []);

  useEffect(() => {
    console.log("zapros na poluchenie dannix");
    console.log(`selectedMonth`, selectedMonth);
    dispatch(reportOperation.report(selectedMonth));
  }, [dispatch, selectedMonth]);

  useEffect(() => {
    console.log(`selector`, selector);
    setData(selector);
  }, [selector]);

  useEffect(() => {
    if (pageIncome) {
      setCurrentCategory("ЗП");
    } else {
      setCurrentCategory("Продукты");
    }
  }, [pageIncome]);

  useEffect(() => {
    const prepearData = (data) => {
      if (!data) return {};
      const newData = {};
      const valuesData = Object.values(data);
      const maxValue = Math.max(...valuesData);
      const ratio = 86 / maxValue;
      for (const key in data) {
        newData[key] = Math.round(data[key] * ratio);
      }
      const sortArray = Object.entries(newData).sort((a, b) => b[1] - a[1]);
      return sortArray;
    };
    if (pageIncome) {
      return setDataForRender(prepearData(data.detailsProfit[currentCategory]));
    }
    setDataForRender(prepearData(data.detailsСosts[currentCategory]));
  }, [currentCategory, data.detailsProfit, data.detailsСosts, pageIncome]);

  const handleClickItem = ({ currentTarget }) => {
    setCurrentCategory(currentTarget.dataset.id);
  };

  const handleChangePage = () => setPageIncome(!pageIncome);

  return (
    <Diagrams
      data={data}
      viewportWidth={viewportWidth}
      pageIncome={pageIncome}
      handleChangePage={handleChangePage}
      dataForRender={dataForRender}
      costItem={!pageIncome ? data.detailsСosts[currentCategory] : data.detailsProfit[currentCategory]}
      handleClickItem={handleClickItem}
      currentCategory={currentCategory}
    />
  );
}

DiagramsContainer.propTypes = {};
DiagramsContainer.defaultProps = {};

export default DiagramsContainer;
