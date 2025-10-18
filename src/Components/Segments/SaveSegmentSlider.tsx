import { SAVING_SEGMENT } from "../../Utils/constants";
import type { SchemaKey, Segment } from "../../Utils/types/segment";
import { LessThanIcon } from "../Common/LessThanIcon";
import { Slider } from "../Common/Slider";

export const SaveSegmentSlider = ({
  open,
  onClose,
  segmentName,
  setSegmentName,
  segmentSchema,
  updateSchema,
}: {
  open: boolean;
  onClose: () => void;
  segmentName: Segment["segment_name"];
  setSegmentName: React.Dispatch<React.SetStateAction<Segment["segment_name"]>>;
  segmentSchema: Segment["schema"];
  updateSchema: (type: SchemaKey) => void;
}) => {
  return (
    <Slider open={open} onClose={onClose} hideCloseIcon>
      <section>
        <header className="w-full h-[14vh] bg-cyan-500 flex p-4 gap-2 items-center">
          <div
            onClick={onClose}
            className="flex items-center justify-center hover:bg-cyan-600 rounded-full p-1.5 mt-0.5"
          >
            <LessThanIcon />
          </div>
          <p className="text-lg font-semibold">{SAVING_SEGMENT}</p>
        </header>
        <main className="w-full h-fit px-6 py-4 flex flex-col gap-2 text-black">
          a
        </main>
      </section>
    </Slider>
  );
};
