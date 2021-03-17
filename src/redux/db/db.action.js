const costsAdd = (obj, jwt) =>
  async function costsAdd(dispatch) {
    const res = await fetch("http://kapusta.fun/api/costs/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(obj),
    });
    const respons = await res.json();

    dispatch({
      type: "costsAdd/ok",
      payload: [
        {
          id: respons._id,
          date: respons.date,
          describe: respons.description,
          category: respons.category,
          sum: respons.sum,
        },
      ],
    });
  };

export default { costsAdd };
