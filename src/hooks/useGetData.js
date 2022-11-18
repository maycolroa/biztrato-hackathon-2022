import { useEffect, useState } from "react";

import match from "./match.json";

const useGetTeams = (API) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      let response;
      const TOKEN = process.env.TOKEN;

      try {
        /* Due to bugs with the API and the short 
        time for the presentation of the project 
        we will use JSON formats of the backend 
        response */

        response = await match;
        // response = await fetch(API, {
        //   method: "GET",
        //   headers: {
        //     Authorization: `Bearer ${TOKEN}`,
        //     "Content-Type": "application/json",
        //   },
        // });

        // var myHeaders = new Headers();
        // myHeaders.append("Authorization", `Bearer ${TOKEN}`);
        // myHeaders.append("Content-Type", "application/json");

        // let requestOptions = {
        //   method: 'GET',
        //   headers: myHeaders,
        //   redirect: 'follow'
        // };

        // fetch(API, requestOptions)
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));

        // response = await response.json();
        setTeams(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAPI();
  }, []);

  return teams;
};

export default useGetTeams;
