import { urls } from "../_constants/urls";
import axios from "axios";

export const mailchimpService = {
  addSubscriber,
};

function addSubscriber(email) {
  let data = {
    email_address: email,
    status: "subscribed",
  };
  const requestOptions = {
    method: "POST",
    url: `${urls.mailchimpUrl}`,
    data: data,
  };

  return axios(requestOptions);
}
