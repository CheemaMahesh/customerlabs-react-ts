import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  bg?: string; // background or gradient
  loading?: boolean;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  className = "",
  bg,
  loading = false,
  disabled,
  ...props
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center px-5 py-2.5 text-white font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed";

  const defaultBg =
    "bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 hover:from-cyan-400 hover:via-sky-500 hover:to-cyan-600 active:scale-95";

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`${baseStyles} ${bg || defaultBg} ${className}`}
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

// ✅ Memoized component
export const Button = React.memo(ButtonComponent);
