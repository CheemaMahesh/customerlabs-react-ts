import { createContext } from "react";
import type { ContextTypes } from "../types/segment";

export const SegmentContext = createContext<ContextTypes>({
  segmentSchema: [],
  setSegmentSchema: () => {},
  segmentName: "",
  setSegmentName: () => {},
  updateSchema: () => {},
  removeSchema: () => {},
  openModal: false,
  setOpenModal: () => {},
  onSaveSegment: () => {},
  loading: false,
  onCancel: () => {},
});
