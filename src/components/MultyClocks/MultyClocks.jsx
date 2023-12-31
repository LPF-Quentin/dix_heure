import React, { useEffect, useState } from "react";
import Research from "../Research/Research";

const MultyClocks = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(); // Appel initial pour récupérer l'heure actuelle
    const interval = setInterval(fetchData, 1000); // Mettre à jour l'heure toutes les 1000 ms

    return () => clearInterval(interval); // Nettoie l'intervalle lorsque le composant est démonté
  }, []);

  const fetchData = () => {
    fetch("http://worldtimeapi.org/api/timezone/America/Caracas")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Erreur lors de l'appel API:", error);
      });
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div id="multyClock">
      <div id="multyContentClock">
        {data.datetime}
        <br />
        {data.timezone}
      </div>
      <br />
      <div>
        <Research />
      </div>
    </div>
  );
};

export default MultyClocks;
