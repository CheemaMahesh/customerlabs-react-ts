export interface SliderProps {
  open: boolean;
  onClose: () => void;
  width?: string;
  closeIcon?: React.ReactNode;
  children?: React.ReactNode;
  hideCloseIcon?: boolean;
}

export interface Option {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  bg?: string;
  loading?: boolean;
}

export interface WebhookResponse {
  body?: any;
  bodyUsed: boolean;
  headers: Headers;
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
  url: string;
}
