import React from "react";
import Navigation from "../../components/Navigation/Navigation";
// import MainTime from "../../components/MainTime/MainTime";
// import Logo from "../../components/Logo/Logo";
import MultyClocks from "../../components/MultyClocks/MultyClocks";

const AllClocks = () => {
  return (
    <div>
      <Navigation />
      <h1>a propos</h1>
      <div id="allClocks">
        <MultyClocks />
        <MultyClocks />
        <MultyClocks />
        <MultyClocks />
        <MultyClocks />
        <MultyClocks />
      </div>
    </div>
  );
};

export default AllClocks;
