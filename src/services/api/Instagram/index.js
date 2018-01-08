import "whatwg-fetch";

const uriApi =
  "https://api.instagram.com/v1/users/3813015851/media/recent/?count=8&access_token=3813015851.1677ed0.88fbacc2d47343d1b045e5823a7dbd96";



const callInstagramApi = async () => {
  const response = await fetch(uriApi);
  const gallery = await response.json();
  

  if (response.status !== 200) throw Error(gallery.message);

  return gallery;
};

export default callInstagramApi;

// componentDidMount() {
//     this.callApi()
//         .them(res => this.setState({
//             response: res.data
//         }))
//         .catch(err => console.log(err))
// }
