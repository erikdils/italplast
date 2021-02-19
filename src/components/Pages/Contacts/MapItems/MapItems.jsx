import React from 'react';
import Map from './Map';

const MapItems = ({ active }) => {
  return (
    <div className="maps">
      <Map active={active === 0}>
        <iframe
          title="1"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185787.27411553566!2d23.28281421958184!3d42.643908950921094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a8fec1c85bf089%3A0xa01269bf4c10!2z0JHQvtC70LPQsNGA0LjRjw!5e0!3m2!1sru!2sua!4v1609886710944!5m2!1sru!2sua"
        ></iframe>
      </Map>
      <Map active={active === 1}>
        <iframe
          title="2"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100600.25625734455!2d14.994325850602523!3d37.7508306406547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1316aa3714a7a0eb%3A0x1d0b042aa5c52a70!2z0K3RgtC90LA!5e0!3m2!1sru!2sua!4v1609885381431!5m2!1sru!2sua"
        ></iframe>
      </Map>
    </div>
  );
};

export default MapItems;
