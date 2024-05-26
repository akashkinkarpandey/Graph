import React from "react";
import Button from "./Button";
import { buttonList } from "@/constant";
import { Button as ButtonInterface } from "../../interfaces/ButtonInterface";

const ButtonList = () => {
  return (
    <div className="m-auto mt-10 grid col-span-1 gap-4 h-28">
      {buttonList.map((eachButton: ButtonInterface) => (
        <Button key={eachButton.id} buttonName={eachButton.name} linkTo={eachButton.link}/>
      ))}
    </div>
  );
};

export default ButtonList;
