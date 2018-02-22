import "whatwg-fetch";

const uriApi =
  "https://api.instagram.com/v1/users/{USER-ID}/media/recent/?count=8&access_token={TOKEN}";



const callInstagramApi = async () => {
  const response = await fetch(uriApi);
  const gallery = await response.json();
  
  if (response.status !== 200) throw Error(gallery.message);
  
  return gallery;
};

export default callInstagramApi;