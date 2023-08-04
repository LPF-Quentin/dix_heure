import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Logo from "../../components/Logo/Logo";
import MainTime from "../../components/MainTime/MainTime";

const Home = () => {
  return (
    <div>
      <Navigation />
      <h1>Accueil</h1>
      <MainTime />
    </div>
  );
};

export default Home;
