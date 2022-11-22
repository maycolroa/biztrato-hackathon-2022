import { useState } from "react";
import { Link } from "react-router-dom";
import pencil from "@icons/pencil.svg";
import statsBars from "@icons/stats-bars.svg";
import "@styles/NavBar.css";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [utcSelect, setUtcSelect] = useState("UTC");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const UTC = [
    "UTC + 6",
    "UTC + 5:45",
    "UTC + 5:30",
    "UTC + 5",
    "UTC + 4:30",
    "UTC + 4",
    "UTC + 3:30",
    "UTC + 3",
  ];

  return (
    <>
      <div className="navBar__container">
        <div className="navBar__routes">
          <Link to="..">
            <button className="navBar__container--button">
              <object data={pencil} type="image/svg+xml"></object>
              Estadística
            </button>
          </Link>
          <Link to="/probability">
            <button className="navBar__container--button">
              <object data={statsBars} type="image/svg+xml"></object>
              Probabilidades
            </button>
          </Link>
        </div>
        <div className="navBar__container--UTC">
          <p className="navBar__UTC--title">Zona Horaria:</p>
          <button className="navBar__UTC--button" onClick={handleToggle}>
            {utcSelect}
          </button>
        </div>
        {toggle && (
          <div className="list__UTC">
            <ul>
              {UTC.map((utc, i) => (
                <li key={i}>
                  <button
                    className="list__UTC--button"
                    value={utc}
                    onClick={() => {
                      setUtcSelect(utc);
                      handleToggle();
                    }}
                  >
                    {utc}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
