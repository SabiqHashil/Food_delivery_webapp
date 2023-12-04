import React from "react";
import Process1 from "../assets/Images/process1.png";
import Process2 from "../assets/Images/process2.png";
import Process3 from "../assets/Images/process3.png";

const Delivery = () => {
  return (
    <div className="container px-4 py-5 delivery-process">
      <h2 className="text-center display-4 mt-4 fw-bold">How Delivery Works</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div className="col px-5 text-center">
          <div className="mb-3">
            <img src={Process1} alt="process1" className="w-50 h-50" />
          </div>
          <h2>Pick Your Veg</h2>
          <p>
            Veggies are a bonus for you, therefore I ask you to eat more
            kohlrabi.
          </p>
        </div>
        <div className="col px-5 text-center">
          <div className="mb-3">
            <img src={Process2} alt="process2" className="w-50 h-50" />
          </div>
          <h2>We Deliver the Bag</h2>
          <p>
            Gumbo, beet greens, corn, soko (possibly a type of vegetable),
            endive, gumbo gourd, parsley.
          </p>
        </div>
        <div className="col px-5 text-center">
          <div className="mb-3">
            <img src={Process3} alt="process3" className="w-50 h-50" />
          </div>
          <h2>You Enjoy Your Veg</h2>
          <p>
            Dandelion, cucumber, earthnut (possibly a type of tuber or legume),
            pea, peanut, soko (a type of green leafy vegetable), zucchini.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
