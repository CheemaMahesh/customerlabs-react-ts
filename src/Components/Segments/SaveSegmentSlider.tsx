import React, { useCallback, useContext, useMemo, useState } from "react";
import {
  ADD_SCHEMA_TO_SEGMENT,
  ENTER_THE_NAME_OF_THE_SEGMENT,
  GROUP_TRAITS,
  NAME_OF_THE_SEGMENT,
  SCHEMA_DESCRIPTION,
  USER_TRAITS,
} from "../../Utils/constants";
import { SEGMENT_SELECTION_OPTIONS } from "../../Utils/constants/InitialStates";
import { SegmentContext } from "../../Utils/context";
import type { PreviewProps, SchemaKey } from "../../Utils/types/segment";
import { Dropdown } from "../Common/Dropdown";
import { Slider } from "../Common/Slider";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const SaveSegmentSlider = () => {
  const { openModal, setOpenModal, onSaveSegment, loading, onCancel } =
    useContext(SegmentContext);
  return (
    <Slider open={openModal} onClose={() => setOpenModal(false)} hideCloseIcon>
      <section className="w-full h-full flex flex-col justify-between">
        <Header onClose={() => setOpenModal(false)} />
        <Main />
        <Footer onCancel={onCancel} onSave={onSaveSegment} loading={loading} />
      </section>
    </Slider>
  );
};

const Main = () => {
  const {
    segmentName,
    setSegmentName,
    segmentSchema,
    updateSchema,
    removeSchema,
  } = useContext(SegmentContext);
  const [selectedValue, setSelectedValue] = useState<SchemaKey | undefined>(
    undefined
  );
  const getTraitType = useCallback((trait: SchemaKey) => {
    switch (trait) {
      case "account_name":
      case "city":
      case "state":
        return "#d24572";
      default:
        return "#5ddb78";
    }
  }, []);

  const updateSchemaFromMain = () => {
    updateSchema(selectedValue as SchemaKey);
    setSelectedValue(undefined);
  };

  const getAvailableSegments = useMemo(() => {
    return SEGMENT_SELECTION_OPTIONS.filter((item) => {
      return !segmentSchema.some((schema) => {
        const key = Object.keys(schema)[0];
        return key === item.value;
      });
    });
  }, [segmentSchema]);

  return (
    <main className="w-full px-6 py-4 flex flex-col gap-4 text-black h-[calc(100vh-14vh-14vh)] overflow-y-auto scrollbar-hide">
      <section className="w-full h-fit flex flex-col gap-4">
        <label htmlFor="segmentName" className="text-black text-lg">
          {ENTER_THE_NAME_OF_THE_SEGMENT}
        </label>
        <input
          type="text"
          placeholder={NAME_OF_THE_SEGMENT}
          id="segmentName"
          value={segmentName}
          className="w-full h-10 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSegmentName(e.target.value)}
        />
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-black text-lg">{SCHEMA_DESCRIPTION}</p>
        <section className="w-full flex flex-row-reverse gap-4 text-lg">
          <section className="flex gap-2 items-center">
            <Dot bgColor="#5ddb78" />
            <p className="text-black">- {USER_TRAITS}</p>
          </section>
          <section className="flex gap-2 items-center">
            <Dot bgColor="#d24572" />
            <p className="text-black">- {GROUP_TRAITS}</p>
          </section>
        </section>
      </section>

      <section className="w-full flex flex-col gap-4">
        {/* -------------Blue-box / Selected Box------------- */}
        {segmentSchema?.length > 0 && (
          <section className="w-full flex flex-col gap-2 border-2 border-blue-500 rounded-md p-2">
            {segmentSchema?.map((schemaItem, index) => {
              const currentItem = Object.keys(schemaItem)[0];
              const dotColor = getTraitType(currentItem as SchemaKey);
              return (
                <div key={index}>
                  <Preview
                    currentItem={currentItem}
                    dotColor={dotColor}
                    updateSchema={updateSchema}
                    removeSchema={removeSchema}
                  />
                </div>
              );
            })}
          </section>
        )}

        {/* --------------Unselected box ------------ */}
        <section className="w-full flex flex-col gap-2">
          <section className="flex gap-2 items-center">
            <Dot bgColor="#e2e4e6" />
            <Dropdown
              placeholder={ADD_SCHEMA_TO_SEGMENT}
              options={getAvailableSegments}
              onChange={(value) => setSelectedValue(value as SchemaKey)}
              value={selectedValue}
            />
          </section>
          <section
            onClick={updateSchemaFromMain}
            className="flex gap-2 items-center cursor-pointer w-fit"
          >
            <p className="font-extrabold text-[#41b494]">+</p>
            <p className="text-[#41b494] font-medium  border-b-2 border-0 border-[#41b494]">
              Add new schema
            </p>
          </section>
        </section>
      </section>
    </main>
  );
};

const PreveiewSegmentsComponent = ({
  dotColor,
  currentItem,
  updateSchema,
  removeSchema,
}: PreviewProps) => {
  return (
    <section className="w-full flex gap-2 items-center">
      <Dot bgColor={dotColor} />
      <Dropdown
        placeholder={ADD_SCHEMA_TO_SEGMENT}
        options={SEGMENT_SELECTION_OPTIONS}
        onChange={(value) => updateSchema(value as SchemaKey)}
        value={currentItem}
      />
      <div
        onClick={() => {
          removeSchema(currentItem as SchemaKey);
        }}
        className="bg-[#f2fbf9] w-8 h-auto p-1 py-4 flex items-center justify-center rounded-md hover:bg-gray-100 cursor-pointer"
      >
        <div className="bg-[#657a93] rounded-lg w-4 h-1"></div>
      </div>
    </section>
  );
};

const DotComponent = ({ bgColor }: { bgColor: string }) => {
  return (
    <div
      className="w-3 h-3 rounded-full"
      style={{ backgroundColor: bgColor }}
    />
  );
};

const Preview = React.memo(PreveiewSegmentsComponent);
const Dot = React.memo(DotComponent);
