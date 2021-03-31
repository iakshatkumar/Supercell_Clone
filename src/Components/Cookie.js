import React, { useState } from "react";
import "./Cookie.css";
const Cookie = () => {
  const [cookie, setCookie] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("cookie", "saved");
    }
    setCookie(localStorage.getItem("cookie"));
  };

  return (
    <div>
      {!localStorage.getItem("cookie") && (
        <div className="cookie-consent">
          <div className="cookie-consent-content">
            <p>
              Our site uses cookies to enhance your user experience and measure
              site traffic.{" "}
              <span style={{ fontWeight: "900" }}>Learn More</span>
            </p>
            <button onClick={onSubmit}>GOT IT!</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cookie;
