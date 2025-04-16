export interface Column {
  key: string;
  label: string;
}
export const columns: Column[] = [
  { key: "id", label: "ID" },
  { key: "name", label: "NAME" },
  { key: "image", label: "IMAGE" },
  { key: "likes", label: "LIKES" },
  { key: "actions", label: "ACTIONS" },
];
