import eye_open from "./assets/icon-show-preview.svg";
export default function Editor() {
  return (
    <>
      <div className="editor-page h-full  ">
        <div className="flex justify-between h-1/12 py-7 w-full bg-gray-500">
          <h3 className="px-5">MARKDOWN</h3>
          <div className="holder px-5">
            <img src={eye_open} alt="show" className="w-8" />
          </div>
        </div>
        <textarea id="editor" name="edit" className="w-full h-11/12"></textarea>
      </div>
    </>
  );
}
