import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_MODE === "developmen"
    ? "/api/data.json"
    : "/social-links-profile/api/data.json";

export const getData = () =>
  axios
    .get(BASE_URL)
    .then((response) =>
      // handle success

      {
        return response.data;
      }
    )
    .catch(function (error) {
      // handle error
      console.log(error);
    });
