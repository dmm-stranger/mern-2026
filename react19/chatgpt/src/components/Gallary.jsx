import Conditional from "./conditionalRndr/Conditional";
import CurlyBrs from "./CurlyBrs";
import HtmlToJsx from "./html-to-jsx/HtmlToJsx";
import Profile2 from "./passingprops/Profile2";
import Profile from "./Profile";
import List from "./renderingList/List";

import {
  RouterProvider,
} from "react-router";
import { router } from "./react-router7/app/router";
import "../index.css"



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


    <p style={{ backgroundColor: "cyan" }}>HTML to JSX:</p>
    <HtmlToJsx />

    <p style={{ backgroundColor: "cyan" }}>react route 7.17:</p>
    <RouterProvider router={router} />


    <p style={{ backgroundColor: "cyan" }}>react-router 7.17: client</p>


    {/* 
    <p style={{ backgroundColor: "cyan" }}>component:</p>


    <p style={{ backgroundColor: "cyan" }}>component:</p> */}
  </>
}

