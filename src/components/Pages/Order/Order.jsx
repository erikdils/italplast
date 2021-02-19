import React from 'react';
import OrderForm from './OrderForm';

const Order = () => {
  return (
    <section className="order">
      <div className="container-fluid">
        <header className="section-header">
          <span className="h2">Forse ti stiamo cercando</span>
          <p className="section-header__text">
            Se vuoi contribuire alla nostra azienda ed essere inserito nel
            nostro database, compila il form sottostante:
          </p>
        </header>
        <OrderForm />
      </div>
    </section>
  );
};

export default Order;
