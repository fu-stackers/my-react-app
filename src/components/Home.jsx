import React from "react";
import reactimage from "../assets/reactimage.jpg";
function Home() {
  return (
    <div className="bg-white flex  h-150  justify-center items-center">
      <div className="w-1/2 flex items-center justify-center p-16">
        <img src={reactimage} alt="reactimage" className="object-contain" />
      </div>
      <div className="w-1/2 flex justify-center flex-col gap-4">
        <p className="text-[#00df9a]">DATA ANALYTICS DASHBOARD</p>
        <h1 className="text-5xl font-bold">Manage Data Analaytics Centrally</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          eligendi facere rerum totam consectetur dolorum hic laborum porro sit
          debitis quas aliquam, doloribus amet voluptate obcaecati aliquid
          placeat, cum mollitia.
        </p>
        <p className="font-medium rounded-[8px] bg-black px-6 py-1.5 text-[#00df9a] w-fit">
          Get Started
        </p>
      </div>
    </div>
  );
}

export default Home;
