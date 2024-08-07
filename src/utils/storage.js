const setDataToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getDataFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);

    if (data === null || data === undefined) {
      return null;
    }

    return JSON.parse(data);
  } catch (error) {
    alert(error);
  }
  return null;
};

const removeDataFromLocalStorage = (key) => {
  if (Array.isArray(key)) {
    key.forEach((value) => {
      localStorage.removeItem(value);
    });
  } else {
    localStorage.removeItem(key);
  }
};

const setTokenToLocalStorage = (token) => {
  setDataToLocalStorage("TOKEN", token);
};

const getTokenFromLocalStorage = () => {
  return getDataFromLocalStorage("TOKEN");
};

const clearLocalStorage = () => {
  localStorage.clear();
};

export {
  setDataToLocalStorage,
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
  setTokenToLocalStorage,
  getTokenFromLocalStorage,
  clearLocalStorage,
};
