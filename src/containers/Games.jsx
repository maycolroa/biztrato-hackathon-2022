import Game from "@components/Game";
import "@styles/Games.css";

const Games = ({ data }) => {

  return (
    <div className="games__container">
      <div className="games__category">
        <h1 className="games__category--title">Primera fase: Grupo A</h1>
        <Game home="" away="" />
      </div>
    </div>
  );
};

export default Games;
