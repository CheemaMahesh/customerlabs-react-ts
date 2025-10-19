import React from "react";
import { SAVE_THE_SEGMENT, CANCEL } from "../../Utils/constants";
import { Button } from "../Common/Button";

export const FooterComponent = ({
  onSave,
  onCancel,
  loading,
}: {
  onSave: () => void;
  onCancel: () => void;
  loading: boolean;
}) => {
  return (
    <footer className="w-full h-[14vh] bg-[#f6f6f6] flex p-4 gap-2 items-center">
      <Button
        bg="bg-[#41b494]"
        className="rounded-md px-4 py-2 font-semibold hover:bg-[#41b494]/80 transition-all ease-in-out duration-300 "
        onClick={onSave}
        loading={loading}
      >
        {SAVE_THE_SEGMENT}
      </Button>
      <Button
        bg="bg-white text-[#da658d]"
        className="rounded-md px-4 py-2 font-semibold hover:bg-white/80 hover:text-[#da658d]/80 transition-all ease-in-out duration-300 "
        onClick={onCancel}
        disabled={loading}
      >
        {CANCEL}
      </Button>
    </footer>
  );
};

export const Footer = React.memo(FooterComponent);
