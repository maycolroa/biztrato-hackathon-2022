import "@styles/ListTeams.css";

const RegionCountries = ({ select }) => {
  const teams = [
    {
      name_en: "Iran",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/125px-Flag_of_Iran.svg.png",
      fifa_code: "IRN",
    },
    {
      name_en: "England",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/125px-Flag_of_England.svg.png",
      fifa_code: "ENG",
    },
    {
      name_en: "United States",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png",
      fifa_code: "USA",
    },
    {
      name_en: "Qatar",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/125px-Flag_of_Qatar.svg.png",
      fifa_code: "QAT",
    },
    {
      name_en: "Ecuador",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/125px-Flag_of_Ecuador.svg.png",
      fifa_code: "ECU",
    },
    {
      name_en: "Senegal",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/125px-Flag_of_Senegal.svg.png",
      fifa_code: "SN",
    },
    {
      name_en: "Nederlands",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/125px-Flag_of_the_Netherlands.svg.png",
      fifa_code: "NL",
    },
    {
      name_en: "Argentina",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/125px-Flag_of_Argentina.svg.png",
      fifa_code: "ARG",
    },
    {
      name_en: "Saudi Arabia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/125px-Flag_of_Saudi_Arabia.svg.png",
      fifa_code: "KSA",
    },
    {
      name_en: "Mexico",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png",
      fifa_code: "MEX",
    },
    {
      name_en: "Poland",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/125px-Flag_of_Poland.svg.png",
      fifa_code: "POL",
    },
    {
      name_en: "France",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/125px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png",
      fifa_code: "FRA",
    },
    {
      name_en: "Australia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/125px-Flag_of_Australia_%28converted%29.svg.png",
      fifa_code: "AUS",
    },
    {
      name_en: "Denmark",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/125px-Flag_of_Denmark.svg.png",
      fifa_code: "DEN",
    },
    {
      name_en: "Tunisia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/125px-Flag_of_Tunisia.svg.png",
      fifa_code: "TUN",
    },
    {
      name_en: "Spain",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/125px-Flag_of_Spain.svg.png",
      fifa_code: "ESP",
    },
    {
      name_en: "Costa Rica",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/125px-Flag_of_Costa_Rica_%28state%29.svg.png",
      fifa_code: "CRC",
    },
    {
      name_en: "Germany",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png",
      fifa_code: "GER",
    },
    {
      name_en: "Japan",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png",
      fifa_code: "JPN",
    },
    {
      name_en: "Belgium",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/125px-Flag_of_Belgium.svg.png",
      fifa_code: "BEL",
    },
    {
      name_en: "Canada",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/125px-Flag_of_Canada_%28Pantone%29.svg.png",
      fifa_code: "CAN",
    },
    {
      name_en: "Morocco",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/125px-Flag_of_Morocco.svg.png",
      fifa_code: "MAR",
    },
    {
      name_en: "Croatia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/125px-Flag_of_Croatia.svg.png",
      fifa_code: "CRO",
    },
    {
      name_en: "Brazil",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png",
      fifa_code: "BRA",
    },
    {
      name_en: "Serbia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/125px-Flag_of_Serbia.svg.png",
      fifa_code: "SRB",
    },
    {
      name_en: "Switzerland",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/100px-Flag_of_Switzerland.svg.png",
      fifa_code: "SUI",
    },
    {
      name_en: "Cameroon",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/125px-Flag_of_Cameroon.svg.png",
      fifa_code: "CMR",
    },
    {
      name_en: "Portugal",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/125px-Flag_of_Portugal.svg.png",
      fifa_code: "POR",
    },
    {
      name_en: "Ghana",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/125px-Flag_of_Ghana.svg.png",
      fifa_code: "GHA",
    },
    {
      name_en: "Uruguay",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/125px-Flag_of_Uruguay.svg.png",
      fifa_code: "URU",
    },
    {
      name_en: "South Korea",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/125px-Flag_of_South_Korea.svg.png",
      fifa_code: "KOR",
    },
    {
      name_en: "Wales",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Wales_%281959%29.svg/125px-Flag_of_Wales_%281959%29.svg.png",
      fifa_code: "WAL",
    },
  ];
  return (
    <div className="list">
      <section className="list__container">
        <div className="list__listTeams">
          <ul>
            {teams.map((team, i) => (
              <li key={i}>
                <button
                  className="list__listTeams--button"
                  value={{ flag: team.flag, code: team.fifa_code }}
                  onClick={() =>
                    select({ flag: team.flag, code: team.fifa_code })
                  }
                >
                  <img
                    className="list__listTeams--image"
                    src={team.flag}
                    alt={team.name_en}
                  />
                  {team.fifa_code}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RegionCountries;
