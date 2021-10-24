const baseUrl = process.env.REACT_APP_BASE_URL;

export const login = async (post, token) => {
  try {
    const res = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(post),
    });

    const data = await res.json();
    // await localStorage.setItem("messenger-token", data.token);
    return data;
  } catch (error) {
    console.log("error");
  }
};

export const register = async (post, token) => {
  try {
    const res = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(post),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    //dispatch error
  }
};
