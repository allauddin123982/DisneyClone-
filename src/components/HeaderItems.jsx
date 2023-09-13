import React from "react";

const HeaderItems = ({ name, Icon }) => {
  return (
    <>
      <div className="text-white flex items-center gap-3 text-[20px] font-serif cursor-pointer hover:underline underline-offset-8">
          <Icon />
        <h1 className="">{name}</h1>
      </div>
    </>
  );
};

export default HeaderItems;
