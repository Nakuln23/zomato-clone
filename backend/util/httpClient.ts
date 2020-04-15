import axios from "axios";

const httpClient = (method, url) => {
  axios({
    method: method,
    url: url,
    headers: {
      "Content-Type": "application/json",
      "api-key": "5a376a142eebe7508fe09a883cab8dc2",
    },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default httpClient;
