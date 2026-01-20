import path from "path";

export default function getDataUri(file) {
  if (!file || !file.buffer) return { content: "" };
  const base64 = file.buffer.toString("base64");
  const content = `data:${file.mimetype};base64,${base64}`;
  return { content };
}
