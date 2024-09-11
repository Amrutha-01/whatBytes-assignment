"use client";
import NavBar from "./components/NavBar/page";
import Sidebar from "./components/SideBar/page";
import MainPage from "./components/MainPage/page";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState(1);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="bg-white">
      <NavBar setOpenSidebar={setOpenSidebar} />
      <div className="flex">
        <Sidebar
          selected={selected}
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          setSelected={setSelected}
        />
        {selected == 0 && <div>DashBoard Page</div>}
        {selected == 1 && <MainPage />}
        {selected == 2 && <div>Internship Page</div>}
      </div>
    </div>
  );
}
