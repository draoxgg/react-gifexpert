const URL = "https://api.giphy.com/v1/gifs/search?api_key="
const TOKEN_GIPHY = "thdFQ80T1jVcu3AamF1gPQzTvmNjb02F"
const LIMIT_GIFT = 10

export const getGift = async (category) => {
  const url = `${URL}${TOKEN_GIPHY}&q=${category}&limit=${LIMIT_GIFT}`
  const resp = await fetch(url);
  const {data} = await resp.json();
  const gift = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gift
}