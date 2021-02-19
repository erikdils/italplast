import React, { useState } from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import ArrowDown from "../Ui/Svg/arrow_down.svg";
import useLanguage from "../../Hooks/useLanguage";

const OrderForm = () => {
  const lang = useLanguage;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [products, setProducts] = useState(
    lang("Select", "Изберете", "Wählen", "Selezionare")
  );
  const [materials, setMaterials] = useState("выбрать что-то одно");
  const [comments, setComments] = useState("");
  const [readAndAccepted, setReadAndAccepted] = useState(false);
  const [error, setError] = useState(false);
  const [successfulSendingOfData, setSuccessfulSendingOfData] = useState(false);
  // const selects = <Trans>Select</Trans>;
  const sendingDataToMail = () => {
    fetch("http://localhost:1111/get_price_form", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        products: products,
        materials:
          materials === "выбрать что-то одно" ? "нет материалов" : materials,
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
    <div className="order-form">
      <label className="order-label">
        <span className="label-title">
          <Trans>Name</Trans> *
        </span>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className="order-label">
        <span className="label-title">tel./cell. *</span>
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
      <label className="order-label">
        <span className="label-title">
          <Trans>Products</Trans> *
        </span>
        <span className="select-wrapper">
          <select onBlur={el => setProducts(el.target.value)}>
            <option value={lang("Select", "Изберете", "Wählen", "Selezionare")}>
              {lang("Select", "Изберете", "Wählen", "Selezionare")}
            </option>
            <option value={lang("WINDOWS", "ПРОЗОРЦИ", "FENSTER", "FINESTRE")}>
              {lang("WINDOWS", "ПРОЗОРЦИ", "FENSTER", "FINESTRE")}
            </option>
            <option
              value={lang("SLIDING", "ПЛЪЗГАНЕ", "RUTSCHEN", "SCORREVOLI")}
            >
              {lang("SLIDING", "ПЛЪЗГАНЕ", "RUTSCHEN", "SCORREVOLI")}
            </option>
            <option value={lang("DOORS", "ВРАТИ", "TÜREN", "PORTE")}>
              {lang("DOORS", "ВРАТИ", "TÜREN", "PORTE")}
            </option>
            <option
              value={lang(
                "MOSQUITO NETS",
                "КОМАРНИЦИ",
                "MÜCKENNETZ",
                "ZANZARIERE"
              )}
            >
              {lang("MOSQUITO NETS", "КОМАРНИЦИ", "MÜCKENNETZ", "ZANZARIERE")}
            </option>
            <option
              value={lang("SHUTTERS", "ЩОРИ", "FENSTERLÄDEN", "PERSIANE")}
            >
              {lang("SHUTTERS", "ЩОРИ", "FENSTERLÄDEN", "PERSIANE")}
            </option>
            <option
              value={lang("DUMPSTER", "БУНИЩЕ", "MÜLLCONTAINER", "CASSONETTO")}
            >
              {lang("DUMPSTER", "БУНИЩЕ", "MÜLLCONTAINER", "CASSONETTO")}
            </option>
            <option
              value={lang("SHUTTERS", "КАПАЦИ", "FENSTERLÄDEN", "TAPPARELLE")}
            >
              {lang("SHUTTERS", "КАПАЦИ", "FENSTERLÄDEN", "TAPPARELLE")}
            </option>
          </select>
          {products === lang("Select", "Изберете", "Wählen", "Selezionare") &&
          error ? (
            <div style={{ color: "red" }}>
              <Trans>Required field</Trans>
            </div>
          ) : null}
          <span className="select-arrow">
            <ArrowDown />
          </span>
        </span>
      </label>
      <label className="order-label">
        <span className="label-title">
          <Trans>Material</Trans> *
        </span>
        <span className="select-wrapper">
          <select onBlur={el => setMaterials(el.target.value)}>
            <option value="выбрать что-то одно">
              {lang("Select", "Изберете", "Wählen", "Selezionare")}
            </option>
            <option value="pvc">PVC</option>
            <option value="aluminium">Aluminium</option>
            <option value="legno">Legno</option>
          </select>
          {materials === "выбрать что-то одно" && error ? (
            <div style={{ color: "red" }}>
              <Trans>Required field</Trans>
            </div>
          ) : null}
          <span className="select-arrow">
            <ArrowDown />
          </span>
        </span>
      </label>
      <label className="order-label order-label__message">
        <span className="label-title">
          <Trans>Comment</Trans>
        </span>
        <textarea
          name="comments"
          value={comments}
          onChange={e => setComments(e.target.value)}
        ></textarea>
      </label>
      <label className="order-label order-label__text">
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
          if (
            products === "выбрать что-то одно" ||
            materials === "выбрать что-то одно"
          ) {
            setError(true);
          } else {
            sendingDataToMail();
            setName("");
            setPhone("");
            setProducts("выбрать что-то одно");
            setMaterials("выбрать что-то одно");
            setComments("");
            setReadAndAccepted(false);
            setError(false);
          }
        }}
        disabled={
          !name || !phone || !products || !materials || !readAndAccepted
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

export default OrderForm;
