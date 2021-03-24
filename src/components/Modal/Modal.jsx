import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "./modal.module.scss";
import sprite from "../../assets/img/sprite.svg";
import action from "../../redux/auth/auth.action";
import { user } from "../../redux/auth/auth.selectors";
import routes from "../../routes";

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .min(2, "Некорректная длинна поля")
    .max(50, "Превышен лимит символов")
    .required("это обязательное поле"),
  password: Yup.string().required("это обязательное поле").min(6, "Too short!"),
});

class Modal extends Component {
  state = {
    email: "",
    password: "",
    additionalStyle: "",
    timeoutId: null,
    spinner: false,
    isLogin: false,
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.user !== this.props.user) {
      if (this.props.user.jwt || this.props.user.message) {
        this.setState((state) => {
          return {
            spinner: false,
          };
        });
      }
      if (this.props.user.message) {
        this.addAdditionalStyle(styles.inputFormEmpty);
        // this.props.action_clearErrorMessage();
        this.setState(() => {
          return {
            isLogin: false,
          };
        });
      } else if (this.props.user.jwt && this.state.isLogin) {
        this.setState(() => {
          return {
            additionalStyle: styles.inputFormOk,
          };
        });
        setTimeout(() => {
          window.location.pathname = routes.costs;
        }, 500);
      } else if (this.props.user.email && this.props.user.isGoogle && this.props.user.jwt) {
        this.props.action_isGoogleFalse()
        window.location.pathname = routes.costs;
      }else if (!this.props.user.jwt) {
        this.clearAdditionalStyle();
      }
    }
  };
  componentDidMount = () => {
    if (this.props.user.jwt) {
      this.setState(() => {
        return {
          additionalStyle: styles.inputFormOk,
        };
      });
    }
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

  clearAdditionalStyle = () => {
    return new Promise((res, rej) => {
      this.setState(() => {
        return {
          additionalStyle: null,
        };
      }, res(true));
    });
  };
  addAdditionalStyle = (styleName) => {
    this.setState((state) => {
      return {
        additionalStyle: styleName,
      };
    });
    this.setState(() => {
      return {
        timeoutId: setTimeout(() => {
          this.setState((state) => {
            return {
              additionalStyle: "",
            };
          });
        }, 1600),
      };
    });
  };

  login = async (e) => {
    e.preventDefault();
    this.props.action_clearErrorMessage();
    if (this.props.user.jwt) {
      window.location.pathname = routes.costs;
    } else {
      this.setState(() => {
        return {
          isLogin: true,
        };
      });
      clearTimeout(this.state.timeoutId);
      await this.clearAdditionalStyle();
      if (
        await RegisterSchema.isValid({
          email: this.state.email,
          password: this.state.password,
        })
      ) {
        this.setState((state) => {
          return {
            spinner: true,
          };
        });
        this.props.action_login({
          email: this.state.email,
          password: this.state.password,
        });
      } else {
        this.addAdditionalStyle(styles.inputFormEmpty);
      }
    }
  };

  register = async (e) => {
    e.preventDefault();
    this.props.action_clearErrorMessage();
    this.setState(() => {
      return {
        isLogin: true,
      };
    });
    clearTimeout(this.state.timeoutId);
    await this.clearAdditionalStyle();
    if (
      await RegisterSchema.isValid({
        email: this.state.email,
        password: this.state.password,
      })
    ) {
      this.setState((state) => {
        return {
          spinner: true,
        };
      });
      this.props.action_register({
        email: this.state.email,
        password: this.state.password,
      });
    } else {
      this.addAdditionalStyle(styles.inputFormEmpty);
    }
  };
  logout = (e) => {
    e.preventDefault();
    this.props.action_logout();
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
                      href="https://kapusta.fun/api/auth/google"
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
                  </div>
                </div>
                <p className={styles.modalText}>
                  Или зайти с помощью e-mail и пароля, предварительно
                  зарегестрировавшись:
                </p>
                <div className={styles.registrWrapper}>
                  <div className={styles.regMail}>
                    {this.state.spinner ? (
                      <div className={styles.modalFormIcon}>
                        <span className={"_Spinner"}></span>
                      </div>
                    ) : (
                      ""
                    )}
                    <ErrorMessage
                      className={styles.regMailError}
                      name="email"
                      component="span"
                    />
                    <label htmlFor="email">
                      <span>*</span>Электронная почта:
                    </label>
                    {this.state.additionalStyle === styles.inputFormOk ? (
                      <Field
                        className={`${styles.regMailForm} ${this.state.additionalStyle}`}
                        type="email"
                        name="email"
                        value={this.props.user.email}
                        disabled
                      />
                    ) : (
                      <Field
                        className={`${styles.regMailForm} ${this.state.additionalStyle}`}
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                      />
                    )}
                  </div>

                  <div className={styles.regPass}>
                    {this.state.spinner ? (
                      <div className={styles.modalFormIcon}>
                        <span className={"_Spinner"}></span>
                      </div>
                    ) : (
                      ""
                    )}
                    <ErrorMessage
                      className={styles.regPassError}
                      name="password"
                      component="span"
                    />
                    <label htmlFor="password">
                      <span>*</span>Пароль:
                    </label>
                    {this.state.additionalStyle === styles.inputFormOk ? (
                      <Field
                        className={`${styles.regPassForm} ${this.state.additionalStyle}`}
                        type="password"
                        name="password"
                        placeholder="*********"
                        disabled
                      />
                    ) : (
                      <Field
                        className={`${styles.regPassForm} ${this.state.additionalStyle}`}
                        type="password"
                        name="password"
                        placeholder="Пароль"
                      />
                    )}
                  </div>
                </div>

                <div className={styles.btnWrapper}>
                  {this.state.additionalStyle === styles.inputFormOk &&
                  this.state.isLogin === true ? (
                    <button
                      type="submit"
                      className={styles.loginBtn}
                      onClick={this.login}
                      disabled
                    >
                      ВОЙТИ
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className={styles.loginBtn}
                      onClick={this.login}
                    >
                      ВОЙТИ
                    </button>
                  )}

                  {(() => {
                    if (
                      this.state.additionalStyle === styles.inputFormOk &&
                      this.state.isLogin === true
                    ) {
                      return (
                        <button
                          type="submit"
                          className={styles.regisrBtn}
                          onClick={this.register}
                          disabled
                        >
                          РЕГИСТРАЦИЯ
                        </button>
                      );
                    } else if (
                      this.state.additionalStyle === styles.inputFormOk &&
                      this.state.isLogin === false
                    ) {
                      return (
                        <button
                          type="submit"
                          className={styles.outBtn}
                          onClick={this.logout}
                        >
                          Выйти
                        </button>
                      );
                    } else {
                      return (
                        <button
                          type="submit"
                          className={styles.regisrBtn}
                          onClick={this.register}
                        >
                          РЕГИСТРАЦИЯ
                        </button>
                      );
                    }
                  })()}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: user(state),
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
    action_clearErrorMessage: () => {
      dispatch({ type: "clearErrorMessage" });
    },
    action_logout: () => {
      dispatch({ type: "logout" });
    },
    action_isGoogleFalse: () => {
      dispatch({ type: "isGoogle/false" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
