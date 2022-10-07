export const getMemes = () => {
  return fetch("https://api.imgflip.com/get_memes").then((response) => {
    return response.json();
  });
};
