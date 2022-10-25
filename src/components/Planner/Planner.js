import React from "react";
import "./Planner.css";

const Planner = (props) => {
  return (
    <div className="planner">
      <div className="plan"></div>
      <div className="Content">
        <ul>
          <li>
            <b>Roti: {props.count}</b>
          </li>
          <li>
            <b>Sabzi: {props.amount}</b>
          </li>
          <li>
            <b>Extra: {props.extra}</b>{" "}
          </li>
        </ul>
      </div>
      <div className="footer">Price: {props.price}</div>
    </div>
  );
};

export default Planner;
