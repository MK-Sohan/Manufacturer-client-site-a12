import React, { useEffect, useState } from "react";

const useTootls = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [tools]);
  //   console.log(tools);
  return [tools, setTools];
};

export default useTootls;
