import React from "react";
import "./FirstPage.css";
import auto from "../form auto.png";
import general from "../form general.png";
import migration from "../form migration.png";
import studes from "../form studes.png";
import logo from "../intelligent-forms-high-resolution-logo-color-on-transparent-background 1.png";
import mail from "../mail-outline.svg";
import menu from "../menu-outline.svg";
import user from "../person-circle-outline.svg";
import settings from "../settings-outline.svg";
import question from "../help-circle-outline.svg";
import telephone from "../call-outline.svg";
import location from "../location-outline.svg";
import search from "../search-outline.svg";

function Home() {
  return (
    <>
      <nav>
        <img src={menu} alt="" className="icons" />
        <ul>
          <li>
            <input type="search" className="find" />
            <img src={search} alt="" className="icons" />
          </li>
          <li>
          <img src={question} alt="" className="icons" />
          </li>
          <li>
          <img src={settings} alt="" className="icons" />
          </li>
          <li>
          <img src={user} alt="" className="icons" />
          </li>
        </ul>
      </nav>

      <img
        src={logo}
        alt="logotip"
        className="logotip"
      />
      <p className="text">
        Prin lansarea serviciului de complectare a cererilor sau al altor
        formulare cu ajutorului unui scan a actului de identitate, oferim
        posibilitatea de face dovada îndeplinirii condiţiilor legale prin
        încărcarea online a documentelor justificative, înainte de prezentarea
        la ghişeul de lucru cu publicul. Prin această metodă de lucru, urmărim
        scurtarea timpului de aşteptare în faţa ghişeului şi eficientizarea
        procesului de preluare a cererilor și al altor formulare.
      </p>

      <div className="formulare">
        <a href="/create-form">
          <img src={migration} alt="migration" className="migration" />
          <img src={auto} alt="auto" className="auto" />
          <img src={studes} alt="studes" className="studes" />
          <img src={general} alt="general" className="general" />
        </a>
      </div>

      <div className="footer">
        <a href="/">
        <img src={mail} alt="" class="icons" /> E-mail:
          intelligent.forms@gmail.com
        </a>

        <a href="/">
        <img src={location} alt="" class="icons" />Suceava,
          str. Universității, nr. 1
        </a>

        <a href="/">
        <img src={telephone} alt="" class="icons" />+40 (750) 948
          17 93
        </a>
      </div>

      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
}

export default Home;
