import React from "react";
import Banner from "../Banner/Banner";
import Message from "../Message/Message";

import Reviews from "../Reviews/Reviews";
import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <Banner></Banner>
      <Tools></Tools>
      <Reviews></Reviews>
      <Message></Message>
    </div>
  );
};

export default Home;
