import React, { useEffect } from "react";
import type { SliderProps } from "../../Utils/types/common";
import { XIcon } from "./XIcon";

const SidebarComponent: React.FC<SliderProps> = ({
  open,
  onClose,
  width = "30%",
  closeIcon,
  children,
  hideCloseIcon,
}) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out w-[30%] max-sm:w-[90%] 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {!hideCloseIcon && (
          <button
            onClick={onClose}
            className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 transition"
          >
            {closeIcon || <XIcon />}
          </button>
        )}

        <div className="overflow-y-auto h-full">{children}</div>
      </div>
    </>
  );
};

export const Slider = React.memo(SidebarComponent);
