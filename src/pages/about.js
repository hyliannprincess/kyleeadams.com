import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'



// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p></p>

    </Layout>
  )
}

export const Head = () => (
    <>
      <title>About Me</title>
      <meta name="description" content="Your description" />
    </>
  )
// Step 3: Export your component
export default AboutPage