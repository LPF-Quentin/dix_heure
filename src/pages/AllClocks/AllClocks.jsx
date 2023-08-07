import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import MainTime from "../../components/MainTime/MainTime";
import Logo from "../../components/Logo/Logo";

const AllClocks = () => {
  return (
    <div>
      <Navigation />
      <h1>a propos</h1>
        <div id="allClocks">
          <MainTime />
          <MainTime />
          <MainTime />
          <MainTime />
          <MainTime />
          <MainTime />
        </div>
    </div>
  );
};

export default AllClocks;
