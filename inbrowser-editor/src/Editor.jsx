import { useRef, useState } from "react";
import eye_open from "./assets/icon-show-preview.svg";
export default function Editor() {
  const [show, setShow] = useState(true);
  const editor = useRef(null);
  const compailed = useRef(null);
  let for_compailing_text = "";
  const [result, setResult] = useState([]);
  function CompaileText() {
    let word = "";
    for (let index = 0; index < for_compailing_text.length; index++) {
      let char = for_compailing_text[index];
      word += char;

      if (char === "\n") {
        const line = word.replace(/\r?\n$/, ""); // skini \n ili \r\n
        if (line.startsWith("###")) {
          setResult((prev) => [
            ...prev,
            <h1 key={prev.length} className="text-black font-light text-4xl">
              {line}
            </h1>,
          ]);
        } else if (line.startsWith("#")) {
          setResult((prev) => [
            ...prev,
            <h1 key={prev.length} className="text-black text-4xl">
              {line}
            </h1>,
          ]);
        } else if (line.startsWith("-")) {
          setResult((prev) => [
            ...prev,
            <p key={prev.length} className="text-blue-500">
              {line}
            </p>,
          ]);
        } else if (line.startsWith(".")) {
          console.log(line);
          setResult((prev) => [
            ...prev,
            <ol key={prev.length}>
              <li className="text-amber-600">{line}</li>
            </ol>,
          ]);
        }

        word = "";
      }
    }
    return null; // ako nije nađen naslov
  }

  function ShowCode() {
    if (show) {
      for_compailing_text = editor.current.value;
      CompaileText();
      editor.current.style.display = "none";
      compailed.current.style.display = "block";
      setShow(false);
    } else {
      editor.current.style.display = "block";
      compailed.current.style.display = "none";
      setShow(true);
    }
  }

  return (
    <>
      <div className="editor-page h-full  ">
        <div className="flex justify-between h-1/12 py-7 w-full bg-gray-500">
          <h3 className="px-5">MARKDOWN</h3>
          <div className="holder px-5 cursor-pointer" onClick={ShowCode}>
            <img src={eye_open} alt="show" className="w-8" />
          </div>
        </div>
        <textarea
          id="editor"
          name="edit"
          className="w-full h-11/12"
          ref={editor}
        ></textarea>
        <div className="compailed hidden h-full bg-white" ref={compailed}>
          {result}
        </div>
      </div>
    </>
  );
}
