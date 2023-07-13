const getAttributes = async () => {
  const url = "https://musclewiki.p.rapidapi.com/exercises/attributes";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dec5c21106msh74cc690ca45db0bp1408eajsnfa1b1547e3c3",
      "X-RapidAPI-Host": "musclewiki.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export default getAttributes;
