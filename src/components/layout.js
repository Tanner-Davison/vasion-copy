/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TopMod from "./allModules/TopMod";


import "./layout.css"

const Layout = ({ children }) => {


  return (
    <>
      <TopMod/>
    </>
  )
}

export default Layout
