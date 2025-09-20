import document from "./assets/icon-document.svg";
import dayjs from "dayjs";

function LoadStorage() {
  let fileLocalStorage = [];
  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    const value = JSON.parse(localStorage.getItem(key)); // ako si ranije setovao JSON
    fileLocalStorage.push(value);
  }
  return fileLocalStorage;
}

let files;

export function SortFilesDates() {
  files = LoadStorage();
  files.sort((a, b) => dayjs(b.createdAt) - dayjs(a.createdAt));
  return files;
}

export function AddFiles(newFile) {
  localStorage.setItem(newFile.name, JSON.stringify(newFile));
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
