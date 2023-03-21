import React from "react";
import logo from "../intelligent-forms-high-resolution-logo-color-on-transparent-background 1.png";
import mail from "../mail-outline.svg";
import menu from "../menu-outline.svg";
import user from "../person-circle-outline.svg";
import settings from "../settings-outline.svg";
import question from "../help-circle-outline.svg";
import telephone from "../call-outline.svg";
import location from "../location-outline.svg";
import search from "../search-outline.svg";
import functii from "./form.js";
import "./CreareFormular.css";



let o = 5;

function AddNewOption() {
  const textSect = prompt("Introdu numele secțiunii:");
  if (textSect !== null) {
    document.getElementById("Options").innerHTML +=
      "  <div className='D_Options' id='NoOpt" +
      o +
      "'>" +
      textSect +
      "<button onClick='DeleteOption(" +
      o +
      ")' type='button'>Delete</button></div>";
    console.log(o);
    o++;
  }
}

function DeleteOption(v) {
  const element = document.getElementById("NoOpt" + v);
  element.remove();
}

let s = 3;

function AddNewSection() {
  const textSect = prompt("Introdu numele secțiunii:");
  if (textSect !== null) {
    document.getElementById("Section").innerHTML +=
      "  <div className='D_Section' id='NoSection" +
      s +
      "'>" +
      textSect +
      "<button onClick='DeleteSection(" +
      s +
      ")' type='button'>Delete</button></div>";
    console.log(s);
    s++;
  }
}

function DeleteSection(y) {
  const element = document.getElementById("NoSection" + y);
  element.remove();
}

let a = 8;

function AddNew() {
  const text = prompt("Introdu numele campului:");
  if (text !== null) {
    document.getElementById("Dinamic-fields").innerHTML +=
      "  <div className='D_field' id='No" +
      a +
      "'>" +
      text +
      "<button onClick='Delete(" +
      a +
      ")' type='button'>Delete</button></div>";
    console.log(a);
    a++;
  }
}

const Delete = (x)=> {
  const element = document.getElementById("No" + x.toString());
  element.remove();
}



function CreateForm(){

 


    return(
        <div>
          <a href="/home"><img src={logo} alt="logotip" className="logotip" /></a>
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


            <p><button className="New-form">Creare formular nou</button> <button className="Preview">Previzualizare formular</button> </p>
            <b className="first-bar">Create form</b>
            <div className="Create_form">
                <form className="form" action="/home" name="Dinamic-fields">
                    <b className="Title">Title: <input type="text" name="title"/></b>
                    <div className="Dinamic-fields" id="Dinamic-fields">
                      <b>Dinamic-fields</b>
                      <div className="D_field" id="No1">Nume  <button onClick="Delete(1)"  type="button">Delete</button></div>
                      <div className="D_field" id="No2">Prenume  <button onClick="Delete(2)" type="button" >Delete</button></div>
                      <div className="D_field" id="No3">CNP  <button onClick="Delete(3)" type="button">Delete</button></div>
                      <div className="D_field" id="No4">Localitate  <button onClick="Delete(4)" type="button">Delete</button></div>
                      <div className="D_field" id="No5">Strada  <button onClick="Delete(5)" type="button">Delete</button></div>
                      <div className="D_field" id="No6">Numar  <button onClick="Delete(6)" type="button">Delete</button></div>
                      <div className="D_field" id="No7">Bloc  <button onClick="Delete(7)" type="button">Delete</button></div>
                    </div>
                    <button onClick="AddNew()" type="button" className="Add-field">Add new</button> 
                    
                    
                    <div className="Section" id="Section">
                      <b>Section</b>
                      <div className="D_Section" id="NoSection1">Secțiunea 1  <button onClick="DeleteSection(1)" type="button">Delete</button></div>
                      <div className="D_Section" id="NoSection2">Secțiunea 2  <button onClick="DeleteSection(2)" type="button" >Delete</button></div>
                    </div>
                    <button onClick="AddNewSection()"type="button" className="Add-Section">Add new</button>

                    <b className="DRP">Data Retention Period: <input type="number" defaultValue='30' className="days"/> days</b>
                    <button type="submit" className="submit">Create</button>
                    <b className="Label">Label: <select className="LabelInput" required>
                      <option value="optiune1">Solicit</option>
                      <option value="optiune2">Ofer</option>
                    </select></b>
                    <b className="keyword">Placeholder keword: <input type="text" className="Place-keyword" required>
                    </input></b>
                    <b className="Mandatary">Mandatary: <input className="check" type="checkbox" /></b>

                    <b className="F_type">Field Type: <select className="Type" required>
                      <option value="optiune1">Single-choise</option>
                      <option value="optiune2">Multiple-choise</option>
                    </select></b>



                    <div className="Options" id="Options">
                      <b>Options</b>
                      <div className="D_Options" id="NoOpt1">Inmatriculare  <button onClick="DeleteOption(1)" type="button">Delete</button></div>
                      <div className="D_Options" id="NoOpt2">Inmatriculare temporara  <button onClick="DeleteOption(2)" type="button" >Delete</button></div>
                      <div className="D_Options" id="NoOpt3">Radierea  <button onClick="DeleteOption(3)" type="button" >Delete</button></div>
                      <div className="D_Options" id="NoOpt4">transcrierea <button onClick="DeleteOption(4)" type="button" >Delete</button></div>
                    
                    </div>
                    <button onClick="AddNewOption()" type="button" className="Add-Option">Add new</button>

                    <b className="TitleContent">Content:</b> <textarea className="Content">                          CERERE
  Subsemnatul (Subsemnata) _NUME_ _PRENUME_ , _C.N.P._ 
(C.U.I.) ______________________ cu domiciliul /sediul în localitatea _LOCALITATEA_, 
strada _STRADA_, nr.___, bl.___, sc.____, et.____ ap. ____, sector/judeţul _SECTOR/JUDETUL_, 
e-mail* ______________________________, tel.* ________________, solicit:</textarea>
                  
<b className="ScanDocument">Scan document type: <select className="Type" required>
  <option value="optiune1">Cartea de identitate</option>
  <option value="optiune2">Pasaport</option>
  <option value="optiune3">Buletin</option>
</select></b>


</form>
                
            </div>
           
           
           <p className="Sfarsit">Sfarsit</p>

           <div className="footer">
        <a href="/">
        <img src={mail} alt="" className="icons" /> E-mail:
          intelligent.forms@gmail.com
        </a>

        <a href="/">
        <img src={location} alt="" className="icons" />Suceava,
          str. Universității, nr. 1
        </a>

        <a href="/">
        <img src={telephone} alt="" className="icons" />+40 (750) 948
          17 93
        </a>
      </div>
            
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
          </div>
    )
}


export default CreateForm;