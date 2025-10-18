export type SchemaKey = 'first_name' | 'last_name' | 'gender' | 'age' | 'account_name' | 'city' | 'state';

export type SchemaItem = {
  [K in SchemaKey]?: string;
};

export interface Segment {
  segment_name: string;
  schema: SchemaItem[];
}
