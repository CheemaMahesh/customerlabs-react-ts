import { useCallback, useState } from "react";
import { SAVE_SEGMENT } from "../../Utils/constants";
import { SEGMENT_INITIAL_STATE_SCHEMA } from "../../Utils/constants/InitialStates";
import type { SchemaKey, Segment } from "../../Utils/types/segment";
import { Button } from "../Common/Button";
import { SaveSegmentSlider } from "./SaveSegmentSlider";
import { SegmentContext } from "../../Utils/context";
import { sendWebhook } from "../../Api";

export const Segments = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [segmentSchema, setSegmentSchema] = useState<Segment["schema"]>(
    SEGMENT_INITIAL_STATE_SCHEMA
  );
  const [segmentName, setSegmentName] = useState<Segment["segment_name"]>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onHandleSchemaUpdate = useCallback((type: SchemaKey) => {
    const typeValue =
      type.charAt(0).toUpperCase() + type.slice(1).replace("_", " ");

    setSegmentSchema((prevSchema) => {
      const typeExists = prevSchema.some(
        (item) => Object.keys(item)[0] === type
      );

      if (typeExists) {
        return prevSchema;
      }

      return [...prevSchema, { [type]: typeValue }];
    });
  }, []);

  const onHandleRemoveSchema = useCallback((type: SchemaKey) => {
    setSegmentSchema((prevSchema) => {
      return prevSchema.filter((item) => Object.keys(item)[0] !== type);
    });
  }, []);

  const onCancel = () => {
    setSegmentSchema(SEGMENT_INITIAL_STATE_SCHEMA);
    setSegmentName("");
    setOpenModal(false);
  };

  const onSaveSegment = async () => {
    setLoading(true);
    try {
      const data = {
        segment_name: segmentName,
        schema: segmentSchema,
      };
      if (!segmentName) {
        alert("Please enter segment name");
        return;
      }
      if (!segmentSchema.length) {
        alert("Please add items to schema");
        return;
      }
      const res = await sendWebhook(data);
      if (res) {
        alert("Segment saved successfully");
        setSegmentSchema(SEGMENT_INITIAL_STATE_SCHEMA);
        setSegmentName("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SegmentContext.Provider
      value={{
        segmentSchema,
        setSegmentSchema,
        segmentName,
        setSegmentName,
        updateSchema: onHandleSchemaUpdate,
        removeSchema: onHandleRemoveSchema,
        openModal,
        setOpenModal,
        onSaveSegment,
        loading,
        onCancel,
      }}
    >
      <div>
        <section className="flex justify-center items-center w-full h-[100vh]">
          <Button
            className="rounded-md bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 hover:from-cyan-400 hover:via-sky-500 hover:to-cyan-600 active:scale-95"
            onClick={() => setOpenModal(true)}
          >
            {SAVE_SEGMENT}
          </Button>
        </section>
        {openModal && <SaveSegmentSlider />}
      </div>
    </SegmentContext.Provider>
  );
};
