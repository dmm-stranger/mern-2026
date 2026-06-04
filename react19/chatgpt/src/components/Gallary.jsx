import Conditional from "./conditionalRndr/Conditional";
import CurlyBrs from "./CurlyBrs";
import Profile2 from "./passingprops/Profile2";
import Profile from "./Profile";
import List from "./renderingList/List";


export default function Gallery() {
  return <>
    <p style={{ backgroundColor: "cyan" }}>component:</p>
    <Profile />


    <p style={{ backgroundColor: "cyan" }}>js in jsx:</p>
    <CurlyBrs />


    <p style={{ backgroundColor: "cyan" }}>props in jsx:</p>
    <Profile2 />


    <p style={{ backgroundColor: "cyan" }}>conditional rendering:</p>
    <Conditional />


    <p style={{ backgroundColor: "cyan" }}>rendering lists:</p>
    <List />


    <p style={{ backgroundColor: "cyan" }}>component:</p>


    {/* 
    <p style={{ backgroundColor: "cyan" }}>component:</p>



    <p style={{ backgroundColor: "cyan" }}>component:</p>


    <p style={{ backgroundColor: "cyan" }}>component:</p>


    <p style={{ backgroundColor: "cyan" }}>component:</p> */}
  </>
}

