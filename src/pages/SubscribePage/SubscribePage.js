import React, { useState } from "react";
import { emailService } from "../../_services/email.service";
import { Formik, ErrorMessage } from "formik";
import { urls } from "../../_constants/urls";

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

  var img = require("./assets/background.jpg");

  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="container-contact100"
        style={{ background: "rgba(255,255,255,0.8)" }}
      >
        <span
          className="contact100-form-title"
          style={{
            fontFamily: "poppins-extralight,poppins,sans-serif",
            color: "rgb(255, 200, 36)",
            // height: "10px",
            paddingBottom: "0px",
            paddingTop: "30px",
            paddingLeft: "7vw",
            fontSize: "5vh",
            fontWeight: "lighter",
            fontFamily: "system-ui",
          }}
        >
          MORNING{" "}
          <span
            style={{
              fontWeight: "bold",
              paddingLeft: "6px",
              fontWeight: "500",
            }}
          >
            {" "}
            GLORY
          </span>
        </span>
        <div
          className="contact100-map"
          id="google_map"
          data-map-x="40.722047"
          data-map-y="-73.986422"
          data-pin="images/icons/map-marker.png"
          data-scrollwhell="0"
          data-draggable="1"
        ></div>

        <div
          className="wrap-contact100"
          style={{
            boxShadow: "0",
            WebkitBoxShadow: "0 0 black",
            backgroundColor: "transparent",
          }}
        >
          {/* <span className="contact100-form-symbol">
            <img src="assets/images/icons/symbol-01.png" alt="SYMBOL-MAIL" />
          </span> */}

          <Formik
            initialValues={{ email: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                submitForm(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                onSubmit={handleSubmit}
                className="contact100-form validate-form flex-sb flex-w"
              >
                <span className="contact100-form-title">
                  ИДЕАЛЬНОЕ УТРО НАЧИНАЕТСЯ С КОФЕ, НОВОСТЕЙ И КЫРГЫЗСКОГО.
                </span>

                <span className="contact100-form-subtitle">
                  Morning Glory будет отправлять тебе на почту выжимку самых
                  важных событий за прошедшие сутки. Некоторые будут написаны на
                  лёгком кыргызском, чтобы ты мог понимать и изучать язык.
                </span>
                <span className="contact100-form-subtitle">
                  Ну а кофе с тебя!
                </span>

                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    placeholder="Введите email"
                    aria-label="Enter email"
                    aria-describedby="button-addon2"
                    type="email"
                    name="email"
                    style={errors.email && { borderColor: "red" }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />

                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      type="submit"
                      id="button-addon2"
                      disabled={isSubmitting}
                      style={{ backgroundColor: "grey", color: "black" }}
                    >
                      Подписаться
                    </button>
                  </div>
                </div>
                <div style={{ color: "red" }}>
                  <ErrorMessage name="email" />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
