// import React from 'react';
import PropTypes from 'prop-types';

import styles from './Diagram.module.css'

import sprite from '../../assets/img/sprite.svg'

const Diagrams = ({viewportWidth}) => {

    return (
        <div className={styles.wrapperDiagram}>
            <div className={styles.count}>
                <div className={styles.expenditure}>
                    <p className={styles.expenditureTitle}>Расходы</p>
                    <p className={styles.expenditureCount}>- 18 000.00 грн.</p>
                </div>
                <div className={styles.income}>
                    <p className={styles.incomeTitle}>Доходы</p>
                    <p className={styles.incomeCount}>+ 45 000.00 грн.</p>
                </div>
            </div>

            <div className={styles.wrapperListCategory}>
                <div className={styles.switch}>
                    <svg className={styles.switchArrowLeft}>
                        <use
                            href={`${sprite}#icon-left2`}
                        ></use>
                    </svg>

                    <span className={styles.switchTitle}> Расходы </span>
                    <svg className={styles.switchArrowRight}>
                        <use
                            href={`${sprite}#icon-right`}
                        ></use>
                    </svg>
                </div>

                <ul className={styles.listCategory}>
                    <li className={styles.itemCategory}>
                        <p className={styles.categoryTotal}>5 000.00</p>
                        <div className={styles.categoryImg}>
                            <svg className={styles.categorySvg}>
                                <use
                                    href={`${sprite}#icon-education`}
                                ></use>
                            </svg>
                            <div className={styles.shadowCategory}></div>
                        </div>
                        <p className={styles.categoryName}>Продукты</p>
                    </li>
                    <li className={styles.itemCategory}>
                        <p className={styles.categoryTotal}>5000.00</p>
                        <div className={styles.categoryImg}>
                            <svg className={styles.categorySvg}>
                                <use
                                    href={`${sprite}#icon-entertainment`}
                                ></use>
                            </svg>
                            <div className={styles.shadowCategory}></div>
                        </div>
                        <p className={styles.categoryName}>Продукты</p>
                    </li>
                    <li className={styles.itemCategory}>
                        <p className={styles.categoryTotal}>5000.00</p>
                        <div className={styles.categoryImg}>
                            <svg className={styles.categorySvg}>
                                <use
                                    href={`${sprite}#icon-basket`}
                                ></use>
                            </svg>
                            <div className={styles.shadowCategory}></div>
                        </div>
                        <p className={styles.categoryName}>Продукты</p>
                    </li>
                    <li className={styles.itemCategory}>
                        <p className={styles.categoryTotal}>5000.00</p>
                        <div className={styles.categoryImg}>
                            <svg className={styles.categorySvg}>
                                <use
                                    href={`${sprite}#icon-basket`}
                                ></use>
                            </svg>
                            <div className={styles.shadowCategory}></div>
                        </div>
                        <p className={styles.categoryName}>Продукты</p>
                    </li>
                    <li className={styles.itemCategory}>
                        <p className={styles.categoryTotal}>5 000.00</p>
                        <div className={styles.categoryImg}>
                            <svg className={styles.categorySvg}>
                                <use
                                    href={`${sprite}#icon-basket`}
                                ></use>
                            </svg>
                            <div className={styles.shadowCategory}></div>
                        </div>
                        <p className={styles.categoryName}>Продукты</p>
                    </li>
                    <li className={styles.itemCategory}>
                        <p className={styles.categoryTotal}>5000.00</p>
                        <div className={styles.categoryImg}>
                            <svg className={styles.categorySvg}>
                                <use
                                    href={`${sprite}#icon-basket`}
                                ></use>
                            </svg>
                            <div className={styles.shadowCategory}></div>
                        </div>
                        <p className={styles.categoryName}>Продукты</p>
                    </li>
                    <li className={styles.itemCategory}>
                        <p className={styles.categoryTotal}>5000.00</p>
                        <div className={styles.categoryImg}>
                            <svg className={styles.categorySvg}>
                                <use
                                    href={`${sprite}#icon-basket`}
                                ></use>
                            </svg>
                            <div className={styles.shadowCategory}></div>
                        </div>
                        <p className={styles.categoryName}>Продукты</p>
                    </li>
                    <li className={styles.itemCategory}>
                        <p className={styles.categoryTotal}>5000.00</p>
                        <div className={styles.categoryImg}>
                            <svg className={styles.categorySvg}>
                                <use
                                    href={`${sprite}#icon-basket`}
                                ></use>
                            </svg>
                            <div className={styles.shadowCategory}></div>
                        </div>
                        <p className={styles.categoryName}>Продукты</p>
                    </li>
                    <li className={styles.itemCategory}>
                        <p className={styles.categoryTotal}>5 000.00</p>
                        <div className={styles.categoryImg}>
                            <svg className={styles.categorySvg}>
                                <use
                                    href={`${sprite}#icon-basket`}
                                ></use>
                            </svg>
                            <div className={styles.shadowCategory}></div>
                        </div>
                        <p className={styles.categoryName}>Продукты</p>
                    </li>
                    <li className={styles.itemCategory}>
                        <p className={styles.categoryTotal}>5000.00</p>
                        <div className={styles.categoryImg}>
                            <svg className={styles.categorySvg}>
                                <use
                                    href={`${sprite}#icon-basket`}
                                ></use>
                            </svg>
                            <div className={styles.shadowCategory}></div>
                        </div>
                        <p className={styles.categoryName}>Продукты</p>
                    </li>


                </ul>
            </div>

            <div className={styles.wrapperDiagramList}>
            <ul className={styles.diagramList}>
                <li className={styles.diagramItem}>

                    <div style={viewportWidth>767 ? {height: '86%'}:{width: '86%'} } className={styles.diagramSubCategory}>
                        <span className={styles.priceSubCategory}>5 000 грн</span>
                    </div>
                    <span className={styles.nameSubCategory}>Свинина</span>

                </li>
                <li className={styles.diagramItem}>

                    <div style={viewportWidth>767 ? {height: '76%'}:{width: '76%'} } className={styles.diagramSubCategory}>
                        <span className={styles.priceSubCategory}>5 000 грн</span>
                    </div>
                    <span className={styles.nameSubCategory}>Свинина</span>

                </li>
                <li className={styles.diagramItem}>

                    <div style={viewportWidth>767 ? {height: '66%'}:{width: '66%'} } className={styles.diagramSubCategory}>
                        <span className={styles.priceSubCategory}>5 000 грн</span>
                    </div>
                    <span className={styles.nameSubCategory}>Свинина</span>

                </li>
                <li className={styles.diagramItem}>

                    <div style={viewportWidth>767 ? {height: '56%'}:{width: '56%'} } className={styles.diagramSubCategory}>
                        <span className={styles.priceSubCategory}>5 000 грн</span>
                    </div>
                    <span className={styles.nameSubCategory}>Свинина</span>

                </li>


            </ul>
            </div>
        </div>
    )
}

Diagrams.propTypes = {};

export default Diagrams;