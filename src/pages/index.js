import React from "react"
import {graphql} from "gatsby"

import Scene from "../components/scene"
import Grid from "../components/Grid"
import Figure from "../components/Figure"

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const Index = ({data}) => {
  let posts = []
  posts = shuffleArray(data.allWpPost.nodes)
  console.log(posts)
  return <div>
    <Grid>
      {data.allWpPost.nodes.map(node => (
        <Figure 
        title={node.title}
        image={node.featuredImage.node.sourceUrl}
        slug={node.slug}
        />
      ))}
    </Grid>
  </div>
}

export default Index;

export let query = graphql `
{
    allWpPost {
      nodes {
        title
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }  
`