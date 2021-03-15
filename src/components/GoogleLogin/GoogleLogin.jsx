import React, { Component } from "react";
import Modal from "../../modal/modal.jsx";

class GoogleLogin extends Component {
  state = {
    email: null,
  };
  componentDidMount() {
    const _onInit = (auth2) => {
      console.log("init OK", auth2);
    };
    const _onError = (err) => {
      console.log("error", err);
    };
    window.gapi.load("auth2", function () {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(_onInit, _onError);
    });
  }
  signIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      // метод возвращает объект пользователя
      // где есть все необходимые нам поля
      const profile = googleUser.getBasicProfile();
      this.setState({
        email: profile.getEmail(),
      });
      console.log('ID: ' + profile.getId()) // не посылайте подобную информацию напрямую, на ваш сервер!
      console.log('Full Name: ' + profile.getName())
      console.log('Given Name: ' + profile.getGivenName())
      console.log('Family Name: ' + profile.getFamilyName())
      console.log('Image URL: ' + profile.getImageUrl())
      console.log('Email: ' + profile.getEmail())
      // токен
      const id_token = googleUser.getAuthResponse().id_token;
      console.log('ID Token: ' + id_token)
    });
  };
  signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log("User signed out.");
    });
  };
  render() {
    const { email } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Modal signIn={this.signIn} email={email} />
          {/* пропсами прокидываем имеил юзера с гугл аккаунта */}
          <button onClick={this.signOut}>Log out</button>
        </header>
      </div>
    );
  }
}

export default GoogleLogin;
