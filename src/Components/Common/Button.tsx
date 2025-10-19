import React from "react";
import type { ButtonProps } from "../../Utils/types/common";

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  className = "",
  bg,
  loading = false,
  disabled,
  ...props
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center px-5 py-2.5 text-white font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed";

  const defaultBg = "bg-blue-500 hover:bg-blue-600 active:scale-95";

  const backgroundClasses = bg
    ? bg.startsWith("bg-")
      ? `${bg} hover:${bg} active:scale-95`
      : `bg-${bg} hover:bg-${bg} active:scale-95`
    : defaultBg;

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`${baseStyles} ${backgroundClasses} ${className}`}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          <span>Loading...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export const Button = React.memo(ButtonComponent);
