// localstorage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
// authenticate user by pass data to cookie and localstorage

export const authenticate = (data, next) => {
  //localStorage.setItem("messenger-token", data.token);
  setLocalStorage("messenger-token", data.token);
  setLocalStorage("user", data.username);
  next();
};

export const isAuth = () => {
  if (process.browser) {
    const tokenChecked = localStorage.getItem("messenger-token");
    if (tokenChecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

export const removeLocalStorage = async (key) => {
  if (process.browser) {
    await localStorage.removeItem(key);
  }
};

export const signout = () => {
  removeLocalStorage("messenger-token");
  removeLocalStorage("user");
};
