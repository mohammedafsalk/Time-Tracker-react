import React from "react";

const Profile = () => {
  let intervals = ["Daily", "Weekily", "Monthly"];
  return (
    <div className="profile">
      <div className="profileinfo">
        <img className="avatar" src="images/image-jeremy.png" alt="" />
        <div className="profiletitle">
          <p>Report for</p>
          <h2>Jeremy Zucker</h2>
        </div>
      </div>
      <div className="intervallist">
        {intervals.map((item, index) => (
          <div key={index} className="intervalitems">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
