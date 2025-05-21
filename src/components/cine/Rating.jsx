import React from "react";
import Star from "../../assets/star.svg";

export default function Rating({ value }) {
  const stars = Array(value).fill(Star);
  return (
    <>
      {stars.map((star, i) => (
        <img src={star} key={i} alt="star" width="14" height="14" />
      ))}
    </>
  );
}
