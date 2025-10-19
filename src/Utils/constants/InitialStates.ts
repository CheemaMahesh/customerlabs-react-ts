import type { Option } from "../types/common";
import type { Segment } from "../types/segment";

export const SEGMENT_INITIAL_STATE_SCHEMA: Segment["schema"] = [];

export const SEGMENT_SELECTION_OPTIONS: Option[] = [
  {
    value: "first_name",
    label: "First Name",
  },
  {
    value: "last_name",
    label: "Last Name",
  },
  {
    value: "gender",
    label: "Gender",
  },
  {
    value: "age",
    label: "Age",
  },
  {
    value: "account_name",
    label: "Account Name",
  },
  {
    value: "city",
    label: "City",
  },
  {
    value: "state",
    label: "State",
  },
];
