import React, { Component } from "react";
import styles from "./IncomeForm.module.css"
import sprite from "../../assets/img/sprite.svg"

export class IncomeForm extends Component {

    state = {
    // date: "",
    description: "",
    category: "category?",
    sum: "",
  };
    
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
    

  handleSubmit = (e) => {
      e.preventDefault();
    this.props.onAddCosts(this.state.description, this.state.category, this.state.sum);
      this.setState({
    //   date: "",
      description: "",
      category: "",
      sum: "",
    });
  };

    render() {
      const { description, category, sum } = this.state;
    return (
      <div className={styles.incomeEnterWrapper}>
        <div className={`${styles.date} ${styles.input}`}>
          <svg width="20" height="20"><use href={sprite + "#icon-calendar"} /></svg>
          <p className={styles.dateNumbers}>DATE</p>
        </div>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.inputsWrapper}>
            <input
              className={`${styles.inputProduct} ${styles.input}`}
              type="text"
              value={description}
              onChange={this.handleChange}
              name="description"
              placeholder="Описание товара"
              required
                />
            <select className={`${styles.select} ${styles.input}`} value={category} name="category" onChange={this.handleChange} >
                <option>Категории товаров</option>
                <option value="Транспорт">Транспорт</option>
                <option value="Продукты">Продукты</option>
                <option value="Здоровье">Здоровье</option>
                <option value="Алкоголь">Алкоголь</option>
                <option value="Развлечения">Развлечения</option>
                <option value="Все для дома">Все для дома</option>
                <option value="Техника">Техника</option>
                <option value="Коммуналка,связь">Коммуналка,связь</option>
                <option value="Спорт,хобби">Спорт,хобби</option>
                <option value="Образование">Образование</option>
                <option value="Прочее">Прочее</option>
                </select>
            <input
              className={`${styles.inputSum} ${styles.input}`}
              type="text"
              value={sum}
              onChange={this.handleChange}
              name="sum"
              placeholder="0.00"
              required
            />
            <svg width="20" height="20"><use href={sprite + "#icon-calculator"} /></svg>
          </div>
          <div className={styles.buttonWrapper}>
        <button className={`${styles.button} ${styles.input}`} type="submit">
                    Ввод
          </button>
        <button className={`${styles.button} ${styles.input}`} type="reset">
              Очистить
          </button>
          </div>
        </form>
      </div>
    );
  }
}

export default IncomeForm;