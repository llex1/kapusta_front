import routes from '../../routes';

const login = obj =>
  async function login(dispatch) {
    try{
      const res = await fetch("https://kapusta.fun/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const data = await res.json();
  
      dispatch({
        type: "login/ok",
        payload: {
          jwt: data.jwt,
          email: obj.email,
          // "db": data.db
        },
      });
    }catch(err){
      dispatch({
        type: "login/Error",
        payload: {
          message: err.message,
        },
      });
    }
    // window.location.pathname = routes.costs;
  };

const register = obj =>
  async function register(dispatch) {
    const res = await fetch('https://kapusta.fun/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    const data = await res.json();
    console.log(data);

    dispatch({
      type: 'regitster/ok',
      payload: {
        jwt: data.jwt,
        email: obj.email,
        avatar: data.avatarURL,
        // "db": data.db
      },
    });
    window.location.pathname = routes.costs;
  };

export default { login, register };
