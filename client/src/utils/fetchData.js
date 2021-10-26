import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

axios.interceptors.request.use(async function (config) {
  const token = await localStorage.getItem("messenger-token");
  config.headers["x-access-token"] = token;

  return config;
});

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
    console.log(data);
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

export const getData = async (url) => {
  const token = localStorage.getItem("messenger-token");
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: "GET",
    headers: {
      "x-access-token": token,
    },
  });

  const data = await res.json();
  console.log(data);
  return data;
};

// export const getData = async (url) => {
//   const token = localStorage.getItem("messenger-token");
//   const res = await fetch(`${baseUrl}/api/${url}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "x-access-token": token,
//     },
//   });

//   const data = await res.json();
//   return data;
// };

export const fetchConversations = async () => {
  try {
    const { data } = await axios.get("/api/conversations");
    // dispatch(gotConversations(data));
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
