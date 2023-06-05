import React, { FC } from "react";

interface Props {
  checked: boolean;
  callback: (text: boolean) => void;
}
const MenuIcon: FC<Props> = ({ callback, checked }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    callback(isChecked);
  };
  return (
    <div className="vm:hidden w-[50px] h-[50px]">
      <input
        type="checkbox"
        className="hidden"
        id="active"
        onChange={handleCheckboxChange}
        checked={checked}
      />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>
    </div>
  );
};

export default MenuIcon;
