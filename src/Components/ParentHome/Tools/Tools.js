import React from "react";
import useTootls from "../../Hookes/useTootls";
import Singletool from "../Singletool/Singletool";
const Tools = () => {
  const [tools, setTools] = useTootls();
  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold text-cyan-500 mb-8">
        {" "}
        Our Products
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center max-w-7xl mx-auto px-12">
        {tools.map((tool) => (
          <Singletool key={tool._id} tool={tool}></Singletool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
