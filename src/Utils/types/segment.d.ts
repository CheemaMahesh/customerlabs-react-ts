export type SchemaKey =
  | "first_name"
  | "last_name"
  | "gender"
  | "age"
  | "account_name"
  | "city"
  | "state";

export type SchemaItem = {
  [K in SchemaKey]?: string;
};

export interface Segment {
  segment_name: string;
  schema: SchemaItem[];
}

export type SaveSegmentSliderProps = {
  open: boolean;
  onClose: () => void;
  segmentName: Segment["segment_name"];
  setSegmentName: React.Dispatch<React.SetStateAction<Segment["segment_name"]>>;
  segmentSchema: Segment["schema"];
  updateSchema: (type: SchemaKey) => void;
  removeSchema: (type: SchemaKey) => void;
};

export type PreviewProps = {
  currentItem: string;
  dotColor: string;
  updateSchema: (type: SchemaKey) => void;
  removeSchema: (type: SchemaKey) => void;
};

export type ContextTypes = {
  segmentSchema: Segment["schema"];
  setSegmentSchema: React.Dispatch<React.SetStateAction<Segment["schema"]>>;
  segmentName: Segment["segment_name"];
  setSegmentName: React.Dispatch<React.SetStateAction<Segment["segment_name"]>>;
  updateSchema: (type: SchemaKey) => void;
  removeSchema: (type: SchemaKey) => void;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSaveSegment: () => void;
  loading: boolean;
  onCancel: () => void;
};
