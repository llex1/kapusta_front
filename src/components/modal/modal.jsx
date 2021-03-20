import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "./Modal.module.css";
import sprite from "../../assets/img/sprite.svg";
// import {user} from "../../redux/selectors";
import action from "../../redux/auth/auth.action";

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Некорректная длинна поля")
    .max(50, "Превышен лимит символов")
    .required("это обязательное поле"),
  password: Yup.string().required("это обязательное поле").min(6, "Too short!"),
});

class Modal extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        this.setState((state) => {
          return {
            email: e.target.value,
          };
        });
        break;
      case "password":
        this.setState((state) => {
          return {
            password: e.target.value,
          };
        });
        break;
      default:
        break;
    }
  };

  login = (e) => {
    e.preventDefault();
    this.props.action_login(this.state);
  };
  register = (e) => {
    e.preventDefault();
    this.props.action_register(this.state);
  };

  render() {
    return (
      <div id="overlay" className={styles.overlay}>
        {/* <div className="container"> */}
        <div className={styles.modalWrapper}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={RegisterSchema}
          >
            {({ errors, touched }) => (
              <Form
                className=""
                onChange={this.handleChange}
                onSubmit={this.login}
              >
                <div className={styles.googleWrapper}>
                  <p className={styles.modalText}>
                    Вы можете авторизироваться с помощью Google Account:
                  </p>
                  <div className={styles.googleBtnWrapper}>
                    <a
                      className={styles.googleBtn}
                      href="http://kapusta.fun/api/auth/google"
                    >
                      <svg
                        width="18"
                        height="18"
                        className={styles.googleBtnSvg}
                      >
                        <use href={sprite + "#google"}></use>
                      </svg>
                      <span className={styles.googleBtnText}>Google</span>
                    </a>
                    {/* <button
                          onClick={this.props.signIn}
                          type="button"
                          className={styles.googleBtn}
                        >
                          <svg
                            width="18"
                            height="18"
                            className={styles.googleBtnSvg}
                          >
                            <use href={sprite + '#google'}></use>
                          </svg>
                          <span className={styles.googleBtnText}>Google</span>
                        </button> */}
                  </div>
                </div>
                <p className={styles.modalText}>
                  Или зайти с помощью e-mail и пароля, предварительно
                  зарегестрировавшись:
                </p>
                <div className={styles.registrWrapper}>
                  <label htmlFor="email" className={styles.regisrLabel}>
                    Электронная почта:
                  </label>
                  <Field
                    className={styles.formFields}
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                  />
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="email"
                    component="span"
                  />
                  <label htmlFor="password" className={styles.regisrLabel}>
                    Пароль:
                  </label>
                  <Field
                    className={styles.formFields}
                    type="password"
                    name="password"
                    placeholder="Пароль"
                  />
                  <ErrorMessage
                    className={styles.errorMessage}
                    name="password"
                    component="span"
                  />
                </div>
                <div className={styles.btnWrapper}>
                  <button
                    type="submit"
                    className={styles.loginBtn}
                    onClick={this.login}
                  >
                    ВОЙТИ
                  </button>
                  <button
                    type="submit"
                    className={styles.regisrBtn}
                    onClick={this.register}
                  >
                    РЕГИСТРАЦИЯ
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    action_login: (obj) => {
      dispatch(action.login(obj));
    },
    action_register: (obj) => {
      dispatch(action.register(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
