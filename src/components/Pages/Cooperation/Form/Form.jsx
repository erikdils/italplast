import React, { useState } from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import ArrowDown from "../../Ui/Svg/arrow_down.svg";
import useLanguage from "../../../Hooks/useLanguage";

const Form = () => {
  const lang = useLanguage;
  const [select, setSelect] = useState("выбрать что-то одно");
  const [name, setName] = useState("");
  const [index, setIndex] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [readAndAccepted, setReadAndAccepted] = useState(false);
  const [error, setError] = useState(false);
  const [successfulSendingOfData, setSuccessfulSendingOfData] = useState(false);

  const sendingDataToMail = () => {
    fetch("http://localhost:1111/work_with_us_form", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        select: select,
        name: name,
        index: index,
        city: city,
        phone: phone,
        email: email,
        comments: comments,
      }),
    }).then(res => {
      res.json();
      res.status === 200
        ? setSuccessfulSendingOfData(true)
        : setSuccessfulSendingOfData(false);
    });
  };

  return (
    <div className="form">
      <label className="label">
        <span className="label-title">
          <Trans>Role</Trans> *
        </span>
        <span className="select-wrapper">
          <select onBlur={el => setSelect(el.target.value)}>
            <option value={lang("Select", "Изберете", "Wählen", "Selezionare")}>
              {lang("Select", "Изберете", "Wählen", "Selezionare")}
            </option>
            <option
              value={lang("Agent", "Агент", "Agent", "Agente")}
              onClick={() => setError(false)}
            >
              {lang("Agent", "Агент", "Agent", "Agente")}
            </option>
            <option value={lang("Dealer", "Дилър", "Bruchtal", "Rivenditore")}>
              {" "}
              {lang("Dealer", "Дилър", "Bruchtal", "Rivenditore")}
            </option>
            <option value={lang("Other", "Други", "Andere", "Altro")}>
              {lang("Other", "Други", "Andere", "Altro")}
            </option>
          </select>
          {select === "выбрать что-то одно" && error ? (
            <div style={{ color: "red" }}>
              <Trans>Required field</Trans>
            </div>
          ) : null}
          <span className="select-arrow">
            <ArrowDown />
          </span>
        </span>
      </label>
      <label className="label">
        <span className="label-title">
          <Trans>Name</Trans> *
        </span>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className="label">
        <span className="label-title">
          <Trans>Postal Code</Trans> *
        </span>
        <input
          type="text"
          value={index}
          onChange={e => setIndex(e.target.value)}
          onKeyPress={evt => {
            var theEvent = evt || window.event;
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
            var regex = /^(\d)$/g;

            if (!regex.test(key)) {
              theEvent.returnValue = false;
              if (theEvent.preventDefault) theEvent.preventDefault();
            }
          }}
        />
      </label>
      <label className="label">
        <span className="label-title">
          <Trans>City</Trans> *
        </span>
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      </label>
      <label className="label">
        <span className="label-title">Tel./Cell. *</span>
        <input
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          onKeyPress={evt => {
            var theEvent = evt || window.event;
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
            var regex = /^(\d)$/g;

            if (!regex.test(key)) {
              theEvent.returnValue = false;
              if (theEvent.preventDefault) theEvent.preventDefault();
            }
          }}
        />
      </label>
      <label className="label">
        <span className="label-title">e-mail *</span>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label className="label label-message">
        <span className="label-title">
          <Trans>Comment</Trans>
        </span>
        <textarea
          value={comments}
          onChange={e => setComments(e.target.value)}
          name="form-message"
        ></textarea>
      </label>
      <label className="label label-text">
        <span className="check-wrapper">
          <input
            type="checkbox"
            onChange={() => setReadAndAccepted(!readAndAccepted)}
            className="checkbox"
          />
          <div className="custom"></div>
        </span>
        <p className="form-text">
          Desidero ricevere informazioni su promozioni, prodotti e servizi
          offerti da Oknoplast Sp. z o.o. e dai suoi rivenditori tramite
          dispositivi elettronici di comunicazione o terminali di
          telecomunicazione (ad es. newsletter, e-mail, SMS, telefono).
        </p>
      </label>
      <button
        onClick={() => {
          if (select === "выбрать что-то одно") setError(true);
          else {
            sendingDataToMail();
            setSelect("выбрать что-то одно");
            setName("");
            setIndex("");
            setCity("");
            setPhone("");
            setEmail("");
            setComments("");
            setReadAndAccepted(false);
            setError(false);
          }
        }}
        disabled={
          !select ||
          !name ||
          !index ||
          !city ||
          !phone ||
          !email ||
          !readAndAccepted
        }
        className="submit-button"
      >
        <Trans>Send</Trans>
      </button>
      {successfulSendingOfData ? (
        <div style={{ color: "green", textAlign: "center", marginTop: "15px" }}>
          <Trans>Thank you</Trans>
        </div>
      ) : null}
    </div>
  );
};

export default Form;
