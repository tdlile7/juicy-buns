import React from "react";
import PropTypes from "prop-types";

const Special = ({ name, deal }) => {
  return (
    <div className="special">
      <div className="special__details">
        <h2 className="headline">{name}</h2>
        <p className="description">Deal: {deal}</p>
      </div>
    </div>
  );
};

Special.propTypes = {
  name: PropTypes.string.isRequired,
  deal: PropTypes.string.isRequired
};

export default Special;
