import React, { useEffect, useState } from "react";

const useTootls = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-journey-76382.herokuapp.com/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  //   console.log(tools);
  return [tools, setTools];
};

export default useTootls;
