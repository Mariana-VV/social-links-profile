import axios from "axios";

export const getData = () =>
  axios
    .get("/api/data.json")
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
