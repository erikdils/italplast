import React from 'react';
import Form from './Form/Form';

const Cooperation = () => {
  return (
    <section className="cooperation">
      <div className="container-fluid">
        <header className="section-header">
          <span className="h2">Forse ti stiamo cercando</span>
          <p className="section-header__text">
            Se vuoi contribuire alla nostra azienda ed essere inserito nel
            nostro database, compila il form sottostante:
          </p>
        </header>
        <Form />
      </div>
    </section>
  );
};

export default Cooperation;
