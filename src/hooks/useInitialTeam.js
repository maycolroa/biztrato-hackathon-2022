import { useState } from "react";
import flagFifa from "@images/flag_fifa.png";

const initialState = { flag: flagFifa, code: "País" };

const useInitialTheme = () => {
  const [team, setTeam] = useState(initialState);

  const selectTeam = (select) => {
    setTeam(select);

    return team;
  };

  return { team, selectTeam };
};

export default useInitialTheme;
