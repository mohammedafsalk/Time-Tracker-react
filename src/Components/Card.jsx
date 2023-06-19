import React from "react";
import slugify from "slugify";

const Card = ({ item, time }) => {
  let value;
  if (time === "daily") {
    value = "Day";
  } else if (time === "weekly") {
    value = "Week";
  } else {
    value = "Month";
  }
  let slug = slugify(item.title, { lower: true });
  return (
    <div className={`card ${slug}`}>
      <div className="content">
        <div className="activity">
          <h2>{item.title}</h2>
          <img src="images/icon-ellipsis.svg" alt="" />
        </div>
        <div className="info">
          <h2>{item.timeframes[time].current} Hrs</h2>
          <p>
            Last {value} - {item.timeframes[time].previous} Hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
