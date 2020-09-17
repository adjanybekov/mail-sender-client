import React from "react";

export function ThanksPage() {
  var img = require("./assets/background.jpg");
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div
        style={{
          // backgroundColor: "green",
          minWidth: "100%",
          minHeight: "100%",
          // display: "flex",
          alignItems: "center",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            backgroundColor: "green",
            minWidth: "100%",
            minHeight: "100%",
            display: "flex",
            alignItems: "center",
            // backgroundImage: `url(${img})`,
            background: "rgba(255,255,255,0.8)",
            backgroundSize: "cover",
          }}
        >
          <div
            className="contact100-form-title"
            style={{ textAlign: "center", display: "block" }}
          >
            Спасибо за подписку! Чоң рахмат!
            <p style={{ paddingTop: "2vh" }}>
              P.S. Если завтра утром тебе не придет письмо от нас, загляни в
              папку "спам".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
