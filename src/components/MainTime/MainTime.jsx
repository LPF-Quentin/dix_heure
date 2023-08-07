import React, { useEffect, useState } from "react";

const MainTime = () => {
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
    <div id="mainClock">
      <div id="contentClock">
        {data.datetime}<br />{data.timezone}
      </div>
    </div>
  );
};

export default MainTime;
