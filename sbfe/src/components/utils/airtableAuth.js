import axios from "axios";

const airtableAuth = () => {
  return axios.create({
    headers: {
      Authorization: `Bearer keyfahybUIpBkegFv`
    }
  });
};
export default airtableAuth;
