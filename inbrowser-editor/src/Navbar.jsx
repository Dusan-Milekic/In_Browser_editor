import { useState } from "react";
import Document, {
  SortFilesDates,
  GetSelectedItem,
  SelectItem,
  AddFiles,
} from "./Document";

import dayjs from "dayjs";

export default function Navbar() {
  function LoadCode(id) {
    SelectItem(id);
    console.log(GetSelectedItem());
    let text_area = document.body.querySelector("#editor");
    text_area.textContent = all_files
      .filter((f) => f.name == id)
      .map((f) => (f.content ? f.content : "No content"));
  }
  function CreateNewFile() {
    const newItem = {
      createdAt: dayjs().format("DD-MM-YYYY HH:mm"), // bolje za sortiranje/parsing
      name: "unnamed",
      content: "",
    };

    setFiles([newItem].concat(all_files));
  }
  const [all_files, setFiles] = useState(SortFilesDates());
  return (
    <>
      <div className="navigation bg-black h-full">
        <nav className="px-6">
          <div className="head">
            <h2 className="text-white tracking-[5px] py-4">MARKDOWN</h2>
            <p className="opacity-50 tracking-[5px] text-xs">MY DOCUMENTS</p>
            <div
              className="button py-3 px-4 text-center bg-orange-600 my-5 cursor-pointer"
              onClick={CreateNewFile}
            >
              <p>+ New Document</p>
            </div>
          </div>
          <div className="body py-4">
            <div className="documents-seciton flex flex-col gap-5">
              {all_files.map((f) => (
                <div
                  id={f.name}
                  className="document flex cursor-pointer hover:opacity-50 transition-opacity animate-fade-down"
                  onClick={(e) => LoadCode(e.currentTarget.id)}
                >
                  <Document key={f.name} filename={f.name} date={f.createdAt} />
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
