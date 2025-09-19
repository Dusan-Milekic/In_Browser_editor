import document from "./assets/icon-document.svg";
import data from "./data.json";
import dayjs from "dayjs";

function SortFilesDates() {
  const files = data.map((d) => d);
  files.sort((a, b) => dayjs(b.createdAt) - dayjs(a.createdAt));
  return files;
}
export const all_files = SortFilesDates();

export default function Document({ filename, extension, date, text }) {
  return (
    <>
      <div className="icon pr-4 flex items-center">
        <img src={document} alt="document" className="w-5" />
      </div>

      <div className="text ">
        <p className="opacity-50">{date}</p>
        <p>{filename}</p>
      </div>
      {text}
    </>
  );
}
SortFilesDates();
