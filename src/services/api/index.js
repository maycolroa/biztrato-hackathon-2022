const API = process.env.API;

const endPoints = {
  teams: {
    all: `${API}/team`,
  },
  team: {
    onlyOne: `${API}/team/`,
  },
  matchs: {
    all: `${API}/matchs`,
    onlyTeam: `${API}/bymatch`,
  },
};

export default endPoints;
