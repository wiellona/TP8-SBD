import React from "react";
import SBDLogo from "./assets/SBDLogo.svg";
import Header from "./components/header.jsx";
import DMJ from "./components/DMJ.jsx";
import OS from "./components/OS.jsx";
import SBD from "./components/SBD.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <div className=" text-white bg-stone-900 min-h-screen flex flex-col justify-center items-center p-16">
        <section id="#sbd">
          <SBD />
        </section>
        <section id="#dmj">
          <DMJ />
        </section>
        <section id="#os">
          <OS />
        </section>
      </div>
    </div>
  );
}
