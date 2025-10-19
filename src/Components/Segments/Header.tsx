import React from "react";
import { SAVING_SEGMENT } from "../../Utils/constants";
import { LessThanIcon } from "../Common/LessThanIcon";

const HeaderComponent = ({ onClose }: { onClose: () => void }) => {
  return (
    <header className="w-full h-[14vh] bg-cyan-500 flex p-4 gap-2 items-center">
      <div
        onClick={onClose}
        className="flex items-center justify-center hover:bg-cyan-600 rounded-full p-1.5 mt-0.5 text-white"
      >
        <LessThanIcon />
      </div>
      <p className="text-lg font-semibold text-white">{SAVING_SEGMENT}</p>
    </header>
  );
};

export const Header = React.memo(HeaderComponent);
