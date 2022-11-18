import "@styles/Matchs.css";

const matchs = (utc) => {
  return (
    <div className="matchs">
      <div className="matchs__container">
        <div className="matchs__today">
          <h1 className="matchs__today--title">Hoy</h1>
          <div className="matchs__today--nextMatchs">
            <p>Dia 20 a las 19:00 | Qatar - Ecuador </p>
            <p>Dia 21 a las 16:00 | Inglaterra - Iran </p>
            <p>Dia 21 a las 19:00 | Seneagal - Holanda </p>
          </div>
        </div>
        <div className="matchs__tomorrow">
          <h1 className="matchs__tomorrow--title">Mañana</h1>
          <div className="matchs__today--nextMatchs">
            <p>Dia 20 a las 19:00 | Qatar - Ecuador </p>
            <p>Dia 21 a las 16:00 | Inglaterra - Iran </p>
            <p>Dia 21 a las 19:00 | Seneagal - Holanda </p>
          </div>
        </div>
        <div className="matchs__nextWeek">
          <h1 className="matchs__nextWeek--title">Proxima Semana</h1>
          <div className="matchs__today--nextMatchs">
            <p>Dia 20 a las 19:00 | Qatar - Ecuador </p>
            <p>Dia 21 a las 16:00 | Inglaterra - Iran </p>
            <p>Dia 21 a las 19:00 | Seneagal - Holanda </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default matchs;
