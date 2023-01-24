import { GraphQLClient, gql } from 'graphql-request'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const graphcms = new GraphQLClient('https://api-ap-southeast-2.hygraph.com/v2/cld8o8mxa0u7201uk57641yu9/master')

const QUERY =gql`
  {
    posts{
      id,
      title,
      datePublished,
      slug,
      content{
        html
      },
    author{
      name,
      avatar{
        url
      }
    },
    coverPhoto{
      publishedAt{
        createBY{
          id
        },
        url
      }
    }
    }
  }
`

export async function getStaticProps(){
  const {posts} = await graphcms.request(QUERY);
  return {
    props:{
      posts
    },
    revalidate:10,
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
      </main>
    </div>
  )
}
