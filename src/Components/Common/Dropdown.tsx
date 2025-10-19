import React from "react";
import type { DropdownProps } from "../../Utils/types/common";

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
  defaultValue = "",
}) => {
  return (
    <select
      value={value || defaultValue}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full px-4 py-2 rounded-lg border border-gray-300  bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option
          className="text-black cursor-pointer"
          key={opt.value}
          value={opt.value}
        >
          {opt.label}
        </option>
      ))}
    </select>
  );
};
