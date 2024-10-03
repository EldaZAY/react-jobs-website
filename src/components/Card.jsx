/* eslint-disable react/prop-types */
// import React from 'react'

const Card = ({
  children,
  bg = "bg-gray-100",
  rounded = "rounded-lg",
  shadow = "shadow-md",
}) => {
  return <div className={`${bg} ${rounded} ${shadow} p-6`}>{children}</div>;
};

export default Card;
