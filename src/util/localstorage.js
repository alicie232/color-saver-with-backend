export const loadFromLocalStorage = (key) => {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
};

export const writeToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
