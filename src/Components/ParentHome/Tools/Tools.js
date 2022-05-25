import React from "react";
import useTootls from "../../Hookes/useTootls";
import Singletool from "../Singletool/Singletool";
import { FaTools } from "react-icons/fa";

const Tools = () => {
  const [tools, setTools] = useTootls();
  return (
    <div className="">
      <h1 className="text-center text-4xl flex items-center justify-center font-bold text-cyan-500 mb-8">
        {" "}
        TOP TOOLS <FaTools className="ml-5"></FaTools>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-10/12 mx-auto justify-items-center  ">
        {tools?.slice(-6).map((tool) => (
          <Singletool key={tool._id} tool={tool}></Singletool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
