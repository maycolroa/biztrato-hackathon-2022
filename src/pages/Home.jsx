import NavBar from "@containers/NavBar";
import Matchs from "@containers/Matchs";
import Games from "@containers/Games";
import useGetData from "@hooks/useGetData";
import endPoints from "@api";

const Home = () => {
  const API = endPoints.matchs.all;

  const { data } = useGetData(API);

  return (
    <main>
      <NavBar />
      <Matchs data={data} />
      <Games data={data} />
    </main>
  );
};

export default Home;
