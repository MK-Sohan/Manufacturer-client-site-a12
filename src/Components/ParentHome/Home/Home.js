import React from "react";
import Banner from "../Banner/Banner";
import Clients from "../Clients/Clients";
import Joinus from "../Joinus/Joinus";
import Jurnals from "../Jurnals/Jurnals";
import Message from "../Message/Message";

import Reviews from "../Reviews/Reviews";
import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Tools></Tools>
      <Clients></Clients>
      <Joinus></Joinus>
      <Reviews></Reviews>
      <Jurnals></Jurnals>
      <Message></Message>
    </div>
  );
};

export default Home;
