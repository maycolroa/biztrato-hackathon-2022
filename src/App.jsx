import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContext from "@context/AppContext";
import useInitialTeam from "@hooks/useInitialTeam";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import Probability from "@pages/Probability";
import "@styles/global.css";

const App = () => {
  const initialState = useInitialTeam();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/probability" element={<Probability />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
