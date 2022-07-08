export const getTrendingPalettes = async () => {
  try {
    const response = await fetch("/api/palettes");
    if (response.ok) {
      const palettes = await response.json();
      return palettes;
    } else {
      throw new Error(`${response.status}`);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const savePalette = async (palette, user) => {
  try {
    const response = await fetch("/api/palettes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ palette, user }),
    });
    if (response.ok) {
      const newPalette = await response.json();
      return newPalette;
    } else {
      throw new Error(`${response.status}`);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getPalette = async (userId) => {
  try {
    const response = await fetch(`/api/palettes?userid=${userId}`);
    if (response.ok) {
      const palette = await response.json();
      return palette;
    } else {
      throw new Error(`${response.status}`);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
