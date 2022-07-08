export const login = async (nickName) => {
  try {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nickName }),
    });
    if (response.ok) {
      const user = await response.json();
      return user;
    } else {
      throw new Error(`${response.status}`);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
