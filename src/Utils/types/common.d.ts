export interface SliderProps {
  open: boolean;
  onClose: () => void;
  width?: string;
  closeIcon?: React.ReactNode;
  children?: React.ReactNode;
  hideCloseIcon?: boolean;
}
