import React, { useState } from "react";
import { Trans } from "gatsby-plugin-react-i18next";

const FooterForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [successfulSendingOfData, setSuccessfulSendingOfData] = useState(false);

  const sendingDataToMail = () => {
    fetch("http://localhost:1111/footer_form", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
      }),
    }).then(res => {
      res.json();
      res.status === 200
        ? setSuccessfulSendingOfData(true)
        : setSuccessfulSendingOfData(false);
    });
  };

  return (
    <section className="footer-form__section">
      <div className="form-container">
        <header className="form-header">
          <span className="form-title">Assumici adesso</span>
          <p className="form-description">
            Completa i campi sottostanti e ti contatteremo a breve.
          </p>
        </header>
        <div className="footer-form">
          <label>
            <span>
              <Trans>Name</Trans> *
            </span>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Tel./Cell. *</span>
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              onKeyPress={evt => {
                let theEvent = evt || window.event;
                let key = theEvent.keyCode || theEvent.which;
                key = String.fromCharCode(key);
                let regex = /^(\d)$/g;

                if (!regex.test(key)) {
                  theEvent.returnValue = false;
                  if (theEvent.preventDefault) theEvent.preventDefault();
                }
              }}
            />
          </label>
          <button
            onClick={() => {
              sendingDataToMail();
              setName("");
              setPhone("");
            }}
            disabled={!name || !phone}
            className="submit-button"
          >
            <Trans>Send</Trans>
          </button>
        </div>
        {successfulSendingOfData ? (
          <div
            style={{ color: "green", textAlign: "center", marginTop: "15px" }}
          >
            <Trans>Thank you</Trans>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default FooterForm;
