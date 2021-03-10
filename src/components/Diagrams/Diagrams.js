import React from 'react';
import PropTypes from 'prop-types';

import styles from './Diagram.module.css'

import sprite from '../../assets/img/sprite.svg'

const Diagrams =()=> {


        return (
            <div className={styles.wrapperDiagram}>
                <div className={styles.count}>
                    <div className={styles.expenditure}>Расходы</div>
                    <div className={styles.income}>Доходы</div>
                </div>

                <div className={styles.switch}><span>  </span><span> Расходы </span><span>  </span></div>

                <ul className={styles.listCategory}>
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



                </ul>
                <h1>werwrwe</h1>
            </div>
        )
}

Diagrams.propTypes = {};

export default Diagrams;