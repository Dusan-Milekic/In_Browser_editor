import document from "./assets/icon-document.svg";
import data from "./data.json";
import dayjs from "dayjs";

let files;
export function SortFilesDates() {
  files = data.map((d) => d);
  files.sort((a, b) => dayjs(b.createdAt) - dayjs(a.createdAt));
  return files;
}

export function GetFiles() {
  return files;
}
export function AddFiles(newFiles) {
  files = newFiles;
}

let item = 0;
export function SelectItem(itemGet) {
  item = itemGet;
  globalThis.vars = itemGet;
}
export function GetSelectedItem() {
  return item;
}

export default function Document({ filename, date, text }) {
  return (
    <>
      <div className="icon pr-4 flex items-center">
        <img src={document} alt="document" className="w-5" />
      </div>

      <div className="text ">
        <p className="opacity-50">{date}</p>
        <p contenteditable="true" spellCheck="false">
          {filename}
        </p>
      </div>
      {text}
    </>
  );
}
SortFilesDates();
