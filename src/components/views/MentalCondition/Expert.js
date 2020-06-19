import React from "react";
import expert_profile from "../../../assets/images/expert_profile.jpg"

const Expert = (props) => {
  console.log(props.expert);
  return (
    <div>
      {props.expert ? (
        <div className="card">
          <img
            className="card-img-top"
            src={expert_profile}
            alt={props.expert.name}
          />
          <div className="card-body">
            <h5 className="card-title text-bold">
              {props.expert.title + " " + props.expert.name}
            </h5>
            <p className="card-text">{props.expert.about}</p>
            <p className="card-text">
              Phone Number: {props.expert.phone_number}
            </p>
            <p className="card-text"> Location: {props.expert.address}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Expert;
