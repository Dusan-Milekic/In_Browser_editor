import menu from "./assets/icon-menu.svg";
import save from "./assets/icon-save.svg";
import document from "./assets/icon-document.svg";
import trash from "./assets/icon-delete.svg";
import { useState } from "react";
export default function Header() {
  function ActivationHandler() {
    const newState = !activate_burger;
    set_activate(newState);

    // Koristi setTimeout da sačekaš da se DOM ažurira
    setTimeout(() => {
      const navigation = window.document.querySelector(".navigation-bar");
      const header = window.document.querySelector(".all-content");
      if (navigation) {
        if (newState) {
          navigation.style.transform = "TranslateX(-100%)";

          header.classList.add("left-0");
          header.classList.remove("left-64");
        } else {
          navigation.style.transform = "TranslateX(0%)";
          header.classList.add("left-64");
          header.classList.remove("left-0");
        }
      }
    }, 0);
  }

  const [activate_burger, set_activate] = useState(false);
  return (
    <>
      <div className="bar flex justify-between h-20 items-center bg-gray-950">
        <div className="left flex items-center gap-2 h-full">
          <div
            className="burger px-4 h-full flex items-center bg-gray-800 cursor-pointer"
            onClick={ActivationHandler}
          >
            <img src={menu} alt="menu" />
          </div>
          <div className="icon px-3">
            <img src={document} alt="document" />
          </div>
          <div className="text flex flex-col text-sm">
            <p>Document name</p>
            <p>welcome.md</p>
          </div>
        </div>
        <div className="right flex items-center gap-4 mr-5">
          <div className="icon">
            <img src={trash} alt="trash" />
          </div>
          <div className="bg-orange-500 text-lg  px-3 py-3 border-none cursor-pointer  rounded-sm flex items-center">
            <img src={save} alt="save" />
            <p className=" pl-2 hidden sm:block">Save Changes</p>
          </div>
        </div>
      </div>
    </>
  );
}
