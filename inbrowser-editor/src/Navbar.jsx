import document from "./assets/icon-document.svg";
export default function Navbar() {
  return (
    <>
      <div className="navigation bg-black h-lvh">
        <nav className="px-6">
          <div className="head">
            <h2 className="text-white tracking-[5px] py-4">MARKDOWN</h2>
            <p className="opacity-50 tracking-[5px] text-xs">MY DOCUMENTS</p>
            <div className="button py-4">
              <p>+ New Document</p>
            </div>
          </div>
          <div className="body py-4">
            <div className="documents-seciton">
              <div className="document flex">
                <div className="icon pr-4 flex items-center">
                  <img src={document} alt="document" className="w-5" />
                </div>

                <div className="text ">
                  <p>01 April 2022</p>
                  <p>welcome.md</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
