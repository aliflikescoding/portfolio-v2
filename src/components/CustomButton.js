import React from "react";
import Link from "next/link";

const CustomButton = ({ text, onClick, type, link }) => {
  return type === "link" ? (
    <Link href={link}>
      <button
        onClick={onClick}
        className="capitalize font-normal text-lg sm:text-xl text-white bg-primary py-1 px-4 sm:px-5 sm:py-2 rounded-lg cursor-pointer shadow-md border-[0.5px] border-primary-button-shade shadow-primary hover:shadow-lg transition-all duration-200 active:opacity-50 active:scale-95"
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className="capitalize font-normal text-lg sm:text-xl text-white bg-primary py-1 px-4 sm:px-5 sm:py-2 rounded-lg cursor-pointer shadow-md border-[0.5px] border-primary-button-shade shadow-primary hover:shadow-lg transition-all duration-200 active:opacity-50 active:scale-95"
    >
      {text}
    </button>
  );
};

export default CustomButton;
