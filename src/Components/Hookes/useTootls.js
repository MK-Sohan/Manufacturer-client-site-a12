import React, { useEffect, useState } from "react";

const useTootls = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tool", {
      method: "GET",
      headers: {
        authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  //   console.log(tools);
  return [tools, setTools];
};

export default useTootls;
