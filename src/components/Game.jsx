import "@styles/Game.css";

const RegionCountries = ({ home, away }) => {
  return (
    <div className="game__container">
      <div className="game__teamHome">
        <h2 className="game__teamHome--team">Brasil</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png" alt="" />
        <p>0</p>
      </div>
      <div className="game__teamAway">
        <p>0</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/125px-Flag_of_Serbia.svg.png" alt="" />
        <h2 className="game__teamHome--team">Serbia</h2>
      </div>
    </div>
  );
};

export default RegionCountries;