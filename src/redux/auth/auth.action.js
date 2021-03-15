import routes from '../../routes';

const login = (obj) => async function login(dispatch){
  const res = await fetch("http://kapusta.fun/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json()
  console.log(data);

  dispatch({
    type: "login/ok",
    payload: {
      "jwt": data.jwt,
      "email": obj.email,
      "db": data.db
    },
  });
  window.location.pathname = routes.costs
};

const register = (obj) => async function register(dispatch) {
  const res = await fetch("http://kapusta.fun/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const data = await res.json()
  console.log(data);
  
  
  
  
  dispatch({
    type: "regitster/ok",
    payload: {
      "jwt": data.jwt,
      "email": obj.email,
      "db": data.db
    },
  });
  window.location.pathname = '/costs' 
}

export default { login, register };
