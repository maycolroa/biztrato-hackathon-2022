import { useContext, useState } from "react";
import AppContext from "@context/AppContext";
import ListTeams from "@components/ListTeams";
import logoBiztrato from "@images/biztrato_logo.svg";
import logoQatar2022 from "@images/qatar2022_logo.png";
import flagFifa from "@images/flag_fifa.png";
import "@styles/Header.css";

const Header = () => {
  const { team, selectTeam } = useContext(AppContext);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    !toggle && selectTeam({ flag: flagFifa, code: "SEC" });
  };

  const selectTeams = ({ flag, code }) => {
    setToggle(!toggle);
    selectTeam({ flag, code });
  };

  return (
    <header className="header__container">
      <a href="/">
        <img src={logoBiztrato} alt="biztrato" />
      </a>
      <img src={logoQatar2022} alt="qatar2022-image" />
      <button className="header__button" onClick={handleToggle}>
        <img
          className="header__button--image"
          src={team?.flag}
          alt={team?.code}
        />
        <span>{team?.code}</span>
      </button>
      {toggle && (
        <ListTeams
          select={(team) => {
            selectTeams(team);
          }}
        />
      )}
    </header>
  );
};

export default Header;
