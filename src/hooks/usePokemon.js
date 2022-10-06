export const getAllPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

// fetchでurlを取得、
// それから(then)そのデータをresで受け取りjson形式に変換、
// それから(then)json形式化したものをdataとして受け取りresolveで返す

//これらが成功するまで待ってくださいというPromise

export const getPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
};
