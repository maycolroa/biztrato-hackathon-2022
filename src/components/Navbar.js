import React from "react";
import { Icone, MENU, MENUItem, MENULink, Navbarcontainer, Navbarwrapper } from "./Navbar.elements";


const Navbar = () => {
  return (
    <>
    <Navbarcontainer>
      <Navbarwrapper>
        <Icone>
        <a href="/"><img className="imgLogo" width={'100px'} src="../biztrato_logo.svg" alt="" /></a>
        </Icone>
          <MENU>
          <MENUItem>
              <MENULink>
              Fifa word cup Qatar 2020 
              </MENULink>
            </MENUItem>
            <MENUItem>
              <MENULink>
                INICIO
              </MENULink>
            </MENUItem>
            <MENUItem>
              <MENULink>
                NOSOTROS
              </MENULink>
            </MENUItem>
            <MENUItem>
              <MENULink>
                AYUDA
              </MENULink>
            </MENUItem>
          </MENU>
      </Navbarwrapper>
    </Navbarcontainer>
    </>
  )
}

export default Navbar;