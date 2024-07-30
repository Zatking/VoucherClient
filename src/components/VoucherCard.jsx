import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const Card = ({ voucher }) => {
  return (
    <div className=" ">
      <Link to={`/DetailVoucher/${voucher.id}`}>
        <div className="bg-[#252041] rounded-lg overflow-hidden  pb-5 my-4 mx-2">
          <img src={voucher.image} alt={voucher.name} className="w-full h-45 object-cover" />
          <div className="px-5 mt-2">
            <h2 className="text-[#e9e9ec] text-lg font-bold">{voucher.name}</h2>
          </div>
          <div className="px-5 mt-2">
            <p className="text-[#e9e9ec] text-base font-bold">Discount: {voucher.discount}</p>
          </div>
          {partner && (
            <div className="mt-2 flex items-center px-5">
              <img className="w-8 h-8 rounded-full" src={partner.logo} alt={partner.name} />
              <span className="ml-2 text-gray-300">{partner.name}</span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

Card.propTypes = {
  voucher: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    partnerId: PropTypes.number.isRequired
  }).isRequired,
  partners: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
  })).isRequired
};

export default Card;
