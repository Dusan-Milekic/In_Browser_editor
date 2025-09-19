import Document, { all_files } from "./Document";

export default function Navbar() {
  const last_file = all_files[0];
  return (
    <>
      <div className="navigation bg-black h-full">
        <nav className="px-6">
          <div className="head">
            <h2 className="text-white tracking-[5px] py-4">MARKDOWN</h2>
            <p className="opacity-50 tracking-[5px] text-xs">MY DOCUMENTS</p>
            <div className="button py-3 px-4 text-center bg-orange-600 my-5 cursor-pointer">
              <p>+ New Document</p>
            </div>
          </div>
          <div className="body py-4">
            <div className="documents-seciton flex flex-col gap-5">
              <div className="document  flex cursor-pointer  hover:opacity-50 transition-opacity">
                <Document
                  filename={last_file.name}
                  extension={last_file.extension}
                  date={last_file.createdAt}
                ></Document>
              </div>
              {all_files
                .filter((f) => f.name !== last_file.name)
                .map((f) => (
                  <div className="document flex cursor-pointer hover:opacity-50 transition-opacity">
                    <Document
                      key={f.name} // Dodajte key prop za React
                      filename={f.name}
                      extension={f.extension}
                      date={f.createdAt}
                    />
                  </div>
                ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
