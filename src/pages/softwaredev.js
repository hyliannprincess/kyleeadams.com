import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'



// Step 2: Define your component
const SoftwarePage = () => {
  return (
    <Layout pageTitle="Software Dev">
      <p></p>

    </Layout>
  )
}

export const Head = () => (
    <>
      <title>Software Dev</title>
      <meta name="description" content="Your description" />
    </>
  )
// Step 3: Export your component
export default SoftwarePage