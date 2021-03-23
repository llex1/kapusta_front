import React from "react";

import styles from "./Diagram.module.css";

import sprite from "../../assets/img/sprite.svg";

const Diagrams = ({
  data,
  viewportWidth,
  pageIncome,
  handleChangePage,
  dataForRender,
  costItem,
  handleClickItem,
  currentCategory,
}) => {
  const isArray = Array.isArray(dataForRender);
  return (
    <div className={styles.wrapperDiagram}>
      <div className={styles.count}>
        <div className={styles.expenditure}>
          <p className={styles.expenditureTitle}>Расходы</p>
          <p className={styles.expenditureCount}>- {data.summary.costs} грн.</p>
        </div>
        <div className={styles.income}>
          <p className={styles.incomeTitle}>Доходы</p>
          <p className={styles.incomeCount}>+ {data.summary.profit} грн.</p>
        </div>
      </div>

      <div className={styles.wrapperListCategory}>
        <div className={styles.switch}>
          <svg className={styles.switchArrowLeft} onClick={handleChangePage}>
            <use href={`${sprite}#icon-left2`}></use>
          </svg>

          <span className={styles.switchTitle}>{pageIncome ? "Доходы" : "Расходы"}</span>
          <svg className={styles.switchArrowRight} onClick={handleChangePage}>
            <use href={`${sprite}#icon-right`}></use>
          </svg>
        </div>

        {!pageIncome && (
          <ul className={styles.listCategory}>
            {data.categoryСosts["Продукты"] > 0 && (
              <li className={styles.itemCategory} data-id="Продукты" onClick={handleClickItem}>
                <p className={styles.categoryTotal}>{data.categoryСosts["Продукты"]}.00</p>
                <div className={styles.categoryImg}>
                  <svg
                    className={styles.categorySvg}
                    style={{ fill: `${currentCategory === "Продукты" ? "#ff751d" : ""}` }}
                  >
                    <use href={`${sprite}#icon-products`}></use>
                  </svg>
                  <div
                    className={styles.shadowCategory}
                    style={{ background: `${currentCategory === "Продукты" ? "#ffdac0" : ""}` }}
                  ></div>
                </div>
                <p className={styles.categoryName}>Продукты</p>
              </li>
            )}
            {data.categoryСosts["Алкоголь"] > 0 && (
              <li className={styles.itemCategory} data-id="Алкоголь" onClick={handleClickItem}>
                <p className={styles.categoryTotal}>{data.categoryСosts["Алкоголь"]}.00</p>
                <div className={styles.categoryImg}>
                  <svg
                    className={styles.categorySvg}
                    style={{ fill: `${currentCategory === "Алкоголь" ? "#ff751d" : ""}` }}
                  >
                    <use href={`${sprite}#icon-alcohol`}></use>
                  </svg>
                  <div
                    className={styles.shadowCategory}
                    style={{ background: `${currentCategory === "Алкоголь" ? "#ffdac0" : ""}` }}
                  ></div>
                </div>
                <p className={styles.categoryName}>Алкоголь</p>
              </li>
            )}
            {data.categoryСosts["Развлечения"] > 0 && (
              <li className={styles.itemCategory} data-id="Развлечения" onClick={handleClickItem}>
                <p className={styles.categoryTotal}>{data.categoryСosts["Развлечения"]}.00</p>
                <div className={styles.categoryImg}>
                  <svg
                    className={styles.categorySvg}
                    style={{ fill: `${currentCategory === "Развлечения" ? "#ff751d" : ""}` }}
                  >
                    <use href={`${sprite}#icon-entertainment`}></use>
                  </svg>
                  <div
                    className={styles.shadowCategory}
                    style={{ background: `${currentCategory === "Развлечения" ? "#ffdac0" : ""}` }}
                  ></div>
                </div>
                <p className={styles.categoryName}>Развлечения</p>
              </li>
            )}
            {data.categoryСosts["Здоровье"] > 0 && (
              <li className={styles.itemCategory} data-id="Здоровье" onClick={handleClickItem}>
                <p className={styles.categoryTotal}>{data.categoryСosts["Здоровье"]}.00</p>
                <div className={styles.categoryImg}>
                  <svg
                    className={styles.categorySvg}
                    style={{ fill: `${currentCategory === "Здоровье" ? "#ff751d" : ""}` }}
                  >
                    <use href={`${sprite}#icon-health`}></use>
                  </svg>
                  <div
                    className={styles.shadowCategory}
                    style={{ background: `${currentCategory === "Здоровье" ? "#ffdac0" : ""}` }}
                  ></div>
                </div>
                <p className={styles.categoryName}>Здоровье</p>
              </li>
            )}
            {data.categoryСosts["Транспорт"] > 0 && (
              <li className={styles.itemCategory} data-id="Транспорт" onClick={handleClickItem}>
                <p className={styles.categoryTotal}>{data.categoryСosts["Транспорт"]}.00</p>
                <div className={styles.categoryImg}>
                  <svg
                    className={styles.categorySvg}
                    style={{ fill: `${currentCategory === "Транспорт" ? "#ff751d" : ""}` }}
                  >
                    <use href={`${sprite}#icon-transport`}></use>
                  </svg>
                  <div
                    className={styles.shadowCategory}
                    style={{ background: `${currentCategory === "Транспорт" ? "#ffdac0" : ""}` }}
                  ></div>
                </div>
                <p className={styles.categoryName}>Транспорт</p>
              </li>
            )}
            {data.categoryСosts["Всё для дома"] > 0 && (
              <li className={styles.itemCategory} data-id="Всё для дома" onClick={handleClickItem}>
                <p className={styles.categoryTotal}>{data.categoryСosts["Всё для дома"]}.00</p>
                <div className={styles.categoryImg}>
                  <svg
                    className={styles.categorySvg}
                    style={{ fill: `${currentCategory === "Всё для дома" ? "#ff751d" : ""}` }}
                  >
                    <use href={`${sprite}#icon-house`}></use>
                  </svg>
                  <div
                    className={styles.shadowCategory}
                    style={{ background: `${currentCategory === "Всё для дома" ? "#ffdac0" : ""}` }}
                  ></div>
                </div>
                <p className={styles.categoryName}>Всё для дома</p>
              </li>
            )}
            {data.categoryСosts["Техника"] > 0 && (
              <li className={styles.itemCategory} data-id="Техника" onClick={handleClickItem}>
                <p className={styles.categoryTotal}>{data.categoryСosts["Техника"]}.00</p>
                <div className={styles.categoryImg}>
                  <svg
                    className={styles.categorySvg}
                    style={{ fill: `${currentCategory === "Техника" ? "#ff751d" : ""}` }}
                  >
                    <use href={`${sprite}#icon-equipment`}></use>
                  </svg>
                  <div
                    className={styles.shadowCategory}
                    style={{ background: `${currentCategory === "Техника" ? "#ffdac0" : ""}` }}
                  ></div>
                </div>
                <p className={styles.categoryName}>Техника</p>
              </li>
            )}
            {data.categoryСosts["Коммуналка, связь"] > 0 && (
              <li className={styles.itemCategory} data-id="Коммуналка, связь" onClick={handleClickItem}>
                <p className={styles.categoryTotal}>{data.categoryСosts["Коммуналка, связь"]}.00</p>
                <div className={styles.categoryImg}>
                  <svg
                    className={styles.categorySvg}
                    style={{ fill: `${currentCategory === "Коммуналка, связь" ? "#ff751d" : ""}` }}
                  >
                    <use href={`${sprite}#icon-communal`}></use>
                  </svg>
                  <div
                    className={styles.shadowCategory}
                    style={{ background: `${currentCategory === "Коммуналка, связь" ? "#ffdac0" : ""}` }}
                  ></div>
                </div>
                <p className={styles.categoryName}>Коммуналка, связь</p>
              </li>
            )}
            {data.categoryСosts["Спорт, хобби"] > 0 && (
              <li className={styles.itemCategory} data-id="Спорт, хобби" onClick={handleClickItem}>
                <p className={styles.categoryTotal}>{data.categoryСosts["Спорт, хобби"]}.00</p>
                <div className={styles.categoryImg}>
                  <svg
                    className={styles.categorySvg}
                    style={{ fill: `${currentCategory === "Спорт, хобби" ? "#ff751d" : ""}` }}
                  >
                    <use href={`${sprite}#icon-sport`}></use>
                  </svg>
                  <div
                    className={styles.shadowCategory}
                    style={{ background: `${currentCategory === "Спорт, хобби" ? "#ffdac0" : ""}` }}
                  ></div>
                </div>
                <p className={styles.categoryName}>Спорт, хобби</p>
              </li>
            )}
            {data.categoryСosts["Образование"] > 0 && (
              <li className={styles.itemCategory} data-id="Образование" onClick={handleClickItem}>
                <p className={styles.categoryTotal}>{data.categoryСosts["Образование"]}.00</p>
                <div className={styles.categoryImg}>
                  <svg
                    className={styles.categorySvg}
                    style={{ fill: `${currentCategory === "Образование" ? "#ff751d" : ""}` }}
                  >
                    <use href={`${sprite}#icon-education`}></use>
                  </svg>
                  <div
                    className={styles.shadowCategory}
                    style={{ background: `${currentCategory === "Образование" ? "#ffdac0" : ""}` }}
                  ></div>
                </div>
                <p className={styles.categoryName}>Образование</p>
              </li>
            )}
            {data.categoryСosts["Прочее"] > 0 && (
              <li className={styles.itemCategory} data-id="Прочее" onClick={handleClickItem}>
                <p className={styles.categoryTotal}>{data.categoryСosts["Прочее"]}.00</p>
                <div className={styles.categoryImg}>
                  <svg
                    className={styles.categorySvg}
                    style={{ fill: `${currentCategory === "Прочее" ? "#ff751d" : ""}` }}
                  >
                    <use href={`${sprite}#icon-other`}></use>
                  </svg>
                  <div
                    className={styles.shadowCategory}
                    style={{ background: `${currentCategory === "Прочее" ? "#ffdac0" : ""}` }}
                  ></div>
                </div>
                <p className={styles.categoryName}>Прочее</p>
              </li>
            )}
          </ul>
        )}

        {pageIncome && (
          <ul className={styles.listCategory}>
            {data.categoryProfit["ЗП"] > 0 && (
              <li className={styles.itemCategory} data-id="ЗП" onClick={handleClickItem}>
                <p className={styles.categoryTotal}>{data.categoryProfit["ЗП"]}.00</p>
                <div className={styles.categoryImg}>
                  <svg className={styles.categorySvg} style={{ fill: `${currentCategory === "ЗП" ? "#ff751d" : ""}` }}>
                    <use href={`${sprite}#icon-salary`}></use>
                  </svg>
                  <div
                    className={styles.shadowCategory}
                    style={{ background: `${currentCategory === "ЗП" ? "#ffdac0" : ""}` }}
                  ></div>
                </div>
                <p className={styles.categoryName}>ЗП</p>
              </li>
            )}
            {data.categoryProfit["Доп. доход"] > 0 && (
              <li className={styles.itemCategory} data-id="Доп. доход" onClick={handleClickItem}>
                <p className={styles.categoryTotal}>{data.categoryProfit["Доп. доход"]}.00</p>
                <div className={styles.categoryImg}>
                  <svg
                    className={styles.categorySvg}
                    style={{ fill: `${currentCategory === "Доп. доход" ? "#ff751d" : ""}` }}
                  >
                    <use href={`${sprite}#icon-additional`}></use>
                  </svg>
                  <div
                    className={styles.shadowCategory}
                    style={{ background: `${currentCategory === "Доп. доход" ? "#ffdac0" : ""}` }}
                  ></div>
                </div>
                <p className={styles.categoryName}>Доп. доход</p>
              </li>
            )}
          </ul>
        )}
      </div>

      <div className={styles.wrapperDiagramList}>
        <ul className={styles.diagramList}>
          {isArray &&
            dataForRender.map((el) => {
              return (
                <li key={el[0]} className={styles.diagramItem}>
                  <div
                    style={viewportWidth > 767 ? { height: `${el[1]}%` } : { width: `${el[1]}%` }}
                    className={styles.diagramSubCategory}
                  >
                    <span className={styles.priceSubCategory}>{`${costItem?.[el[0]]} грн`}</span>
                  </div>
                  <p
                    className={styles.nameSubCategory}
                    style={viewportWidth > 767 ? { height: `` } : { width: `${el[1]}%` }}
                  >
                    <span>{el[0]}</span>
                    <span className={styles.priceSubCategoryMob}>{`${costItem?.[el[0]]} грн`}</span>
                  </p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

Diagrams.propTypes = {};

export default Diagrams;
