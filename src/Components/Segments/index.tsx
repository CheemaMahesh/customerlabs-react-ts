import { useCallback, useState } from "react";
import { SAVE_SEGMENT } from "../../Utils/constants";
import { SEGMENT_INITIAL_STATE_SCHEMA } from "../../Utils/constants/InitialStates";
import type { SchemaKey, Segment } from "../../Utils/types/segment";
import { Button } from "../Common/Button";
import { SaveSegmentSlider } from "./SaveSegmentSlider";

export const Segments = () => {
  const [openModal, setOpenModal] = useState<boolean>(true);

  const [segmentSchema, setSegmentSchema] = useState<Segment["schema"]>(
    SEGMENT_INITIAL_STATE_SCHEMA
  );
  const [segmentName, setSegmentName] = useState<Segment["segment_name"]>("");

  const onHandleSchemaUpdate = useCallback((type: SchemaKey) => {
    const typeValue =
      type.charAt(0).toUpperCase() + type.slice(1).replace("_", " ");
    const updatedSchema = [...segmentSchema];
    updatedSchema.push({ [type]: typeValue });
    setSegmentSchema(updatedSchema);
  }, []);

  return (
    <div>
      <section className="flex justify-center items-center w-full h-[100vh]">
        <Button className="rounded-md" onClick={() => setOpenModal(true)}>
          {SAVE_SEGMENT}
        </Button>
      </section>
      {openModal && (
        <SaveSegmentSlider
          open={openModal}
          onClose={() => setOpenModal(false)}
          segmentName={segmentName}
          setSegmentName={setSegmentName}
          segmentSchema={segmentSchema}
          updateSchema={onHandleSchemaUpdate}
        />
      )}
    </div>
  );
};
