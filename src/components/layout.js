/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import GlobalStyles from "./GlobalStyles";
import TopMod from "./allModules/TopMod";
import ServerlessTech from "./allModules/ServerlessTech";
import FourOption from './allModules/FourOption'
import "./layout.css"
import Carosoul from "./allModules/Carousole";
import CardComponent from "./allModules/CardComponent";
import PullQuote from "./PullQuote";
import ListSlider from "./ListSlider";
import Stats from "./Stats";
import CTA from "./CTA";
import SimpleCentered from "./SimpleCentered";
import SmallInsert from "./smallInsert";
import Last from "./Last";
const Layout = ({ children }) => {


  return (
    <>
      <GlobalStyles/>
        <TopMod />
        <ServerlessTech />
        <FourOption/>
        <Carosoul/>
        <CardComponent/>
        <PullQuote/>
        <ListSlider/>
        <Stats/>
        <CTA/>
        <SmallInsert/>
        <SimpleCentered/>
        <Last/>
    </>
  )
}

export default Layout
