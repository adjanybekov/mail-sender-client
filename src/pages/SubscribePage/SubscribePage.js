import React, { useState } from "react";
import { emailService } from "../../_services/email.service";
import { Formik, ErrorMessage } from "formik";
export const SubscriberPage = (props) => {
  const [email, setEmail] = useState("");

  const submitForm = (values) => {
    console.log(values);
    emailService
      .createEmail(values.email)
      .then((res) => {
        console.log(res.data);
        window.location.href = "/welcome";
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return <div>Hello world!</div>;
};
