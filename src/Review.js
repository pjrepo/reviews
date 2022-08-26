import React, { useState } from "react";
import people from "./Data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  const prevHandler = () => {
    if (index === 0) setIndex(people.length - 1);
    else setIndex(index - 1);
  };
  const nextHandler = () => {
    if (index === people.length - 1) setIndex(0);
    else setIndex(index + 1);
  };
  const randomHandler = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
      if (randomNumber > people.length - 1) setIndex(0);
    }
    setIndex(randomNumber);
  };

  return (
    <React.Fragment>
      <article>
        <div>
          <img src={image} alt={name} />
          <span>
            <FaQuoteRight />
          </span>
        </div>
        <h4>{name}</h4>
        <p>{job}</p>
        <p>{text}</p>
        <div>
          <button onClick={prevHandler}>
            <FaChevronLeft />
          </button>
          <button onClick={nextHandler}>
            <FaChevronRight />
          </button>
        </div>
        <button onClick={randomHandler}>surprise me</button>
      </article>
    </React.Fragment>
  );
};

export default Review;
