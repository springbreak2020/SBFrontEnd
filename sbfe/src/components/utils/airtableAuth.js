import axios from "axios";

const airtableAuth = () => {
  return axios.create({
    headers: {
      Authorization: `Bearer keyfahybUIpBkegFv`
    },
    baseURL: "https://lambda-cook-book.herokuapp.com/api"
  });
};
export default airtableAuth;
