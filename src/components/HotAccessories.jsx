import React from "react";
import "../styles/HotAccessories.css";
import HotItemCard from "./HotItemCard";
import data from "../data/data.json";

const HotAccessories = ({
  music,
  musicCover,
  smartDevice,
  smartDeviceCover,
  home,
  homeCover,
  lifeStyle,
  lifeStyleCover,
  mobileAccessories,
  mobileAccessoriesCover,
}) => {
  return (
    <div className="HotAccessories">
      <div className="left">
        <img
          src={
            musicCover ||
            smartDeviceCover ||
            homeCover ||
            lifeStyleCover ||
            mobileAccessoriesCover
          }
          alt="Cover"
        />
      </div>

      <div className="right">
        {music &&
          music.map((item, index) => (
            <HotItemCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}

        {smartDevice &&
          smartDevice.map((item, index) => (
            <HotItemCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}

        {home &&
          home.map((item, index) => (
            <HotItemCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}

        {lifeStyle &&
          lifeStyle.map((item, index) => (
            <HotItemCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}

        {mobileAccessories &&
          mobileAccessories.map((item, index) => (
            <HotItemCard
              key={item.image}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}

        <HotItemCard
          image={data.logo}
          name={"WANT TO BROWSE MORE"}
          price={"CLICK HERE"}
        />
      </div>
    </div>
  );
};

export default HotAccessories;
