import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'



// Step 2: Define your component
const WebPage = () => {
  return (
    <Layout pageTitle="Web Dev">
      <p></p>

    </Layout>
  )
}

export const Head = () => (
    <>
      <title>Wev Dev</title>
      <meta name="description" content="Your description" />
    </>
  )
// Step 3: Export your component
export default WebPage