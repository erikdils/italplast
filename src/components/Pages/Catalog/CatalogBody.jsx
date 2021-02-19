import React, { useState } from "react";
import CatalogAside from "./CatalogAside/CatalogAside";
import CatalogItems from "./CatalogItems/CatalogItems";

const CatalogBody = props => {
  // console.log(props.);
  const [itemState, setItemState] = useState(props.dataItems);
  const [activeFilter, setActiveFilter] = useState(false);
  console.log(itemState);
  function filterToggle(e) {
    e.preventDefault();
    setActiveFilter(!activeFilter);
  }

  return (
    <section className="catalog">
      <CatalogAside
        setItemState={setItemState}
        activeFilter={activeFilter}
        dataItems={props.dataItems}
       
        subCategory={props.subCategory}
        brands={props.brands}
      />
      <CatalogItems
        dataItems={itemState}
        filterToggle={filterToggle}
        activeFilter={activeFilter}

      />
    </section>
  );
};

export default CatalogBody;
