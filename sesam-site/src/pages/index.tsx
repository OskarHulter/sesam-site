import React from "react"
import { Theme } from "../components/Theme"
import { SEO } from "../components/Seo"

const IndexPage: React.FC = () => (
  <>
    <SEO title="Home" />
    <Theme />
  </>
)

export default IndexPage
