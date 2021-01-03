import client from "../../components/ApolloClient"
import graphql from "graphql-tag"
import Layout from "../../components/Layout"
import style from "../../styles/Brazil.module.css"
import Link from "next/link"

const featuredNew = graphql`
query MyQuery {
    post(id: "cG9zdDoyOQ==") {
      id
      databaseId
      title
      content
      uri
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`

const previewNew = graphql`
query MyQuery {
    post(id: "cG9zdDozMQ==") {
      databaseId
      id
      title
      content
      uri
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`

const nextNew = graphql`
query MyQuery {
    post(id: "cG9zdDoyNw==") {
      id
      databaseId
      title
      content
      uri
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`

const lastNew = graphql`
query MyQuery {
    post(id: "cG9zdDoyNQ==") {
      id
      databaseId
      title
      content
      uri
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`

const fifthNew = graphql`
query MyQuery {
    post(id: "cG9zdDoyMw==") {
      id
      databaseId
      title
      content
      uri
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`

export default function Uri(props) {
    const { featuredNew } = props
    const { previewNew } = props
    const { nextNew } = props
    const { lastNew } = props
    const { fifthNew } = props
    return(
        <Layout>
            <div className="container">
                <div className="row">
                    {featuredNew ? (
                        <div className="col-8 col-sm-8 col-md-8">
                            <h1 className={`text-center ${style.mainTitle}`}>{featuredNew.title}</h1>
                            <img src={featuredNew.featuredImage.node.sourceUrl} alt="Imagem da notícia principal" id={style.mainNew}></img>
                            <p className={`text-justify ${style.content}`}>{featuredNew.content.replace(/(<([^>]+)>)/ig, "")}</p>
                        </div>
                    ) : ""}
                    <div className="col-4 col-sm-4 col-md-4">
                        <h1 className={`text-center ${style.mainTitle}`}>Outras notícias sobre o Brasil</h1>
                        {previewNew ? (
                            <div className="card mb-2">
                                <h2 className={style.secondaryTitle}>{previewNew.title}</h2>
                                <img src={previewNew.featuredImage.node.sourceUrl} alt="Imagem da notícia" className={style.imageNews}></img>
                                <div className="card-body">
                                    <p className={`text-justify ${style.cardParagraph}`}>{previewNew.content.slice(0, 60).replace(/(<([^>]+)>)/ig, "")}</p>
                                    <Link href={`/brasil${previewNew.uri}`}>
                                        <a>
                                            <button className={`btn btn-link btn-block ${style.readMore}`}>Leia mais</button>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ) : ""}
                        {nextNew ? (
                            <div className="card mb-2">
                                <h2 className={style.secondaryTitle}>{nextNew.title}</h2>
                                <img src={nextNew.featuredImage.node.sourceUrl} alt="Imagem da notícia" className={style.imageNews}></img>
                                <div className="card-body">
                                    <p className={`text-justify ${style.cardParagraph}`}>{nextNew.content.slice(0, 60).replace(/(<([^>]+)>)/ig, "")}</p>
                                    <Link href={`/brasil${nextNew.uri}`}>
                                        <a>
                                            <button className={`btn btn-link btn-block ${style.readMore}`}>Leia mais</button>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ) : ""}
                        {lastNew ? (
                            <div className="card mb-2">
                                <h2 className={style.secondaryTitle}>{lastNew.title}</h2>
                                <img src={lastNew.featuredImage.node.sourceUrl} alt="Imagem da notícia" className={style.imageNews}></img>
                                <div className="card-body">
                                    <p className={`text-justify ${style.cardParagraph}`}>{lastNew.content.slice(0, 60).replace(/(<([^>]+)>)/ig, "")}</p>
                                    <Link href={`/brasil${lastNew.uri}`}>
                                        <a>
                                            <button className={`btn btn-link btn-block ${style.readMore}`}>Leia mais</button>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ) : ""}
                        {fifthNew ? (
                            <div className="card mb-2">
                                <h2 className={style.secondaryTitle}>{fifthNew.title}</h2>
                                <img src={fifthNew.featuredImage.node.sourceUrl} alt="Imagem da notícia" className={style.imageNews}></img>
                                <div className="card-body">
                                    <p className={`text-justify ${style.cardParagraph}`}>{fifthNew.content.slice(0, 60).replace(/(<([^>]+)>)/ig, "")}</p>
                                    <Link href={`/brasil${fifthNew.uri}`}>
                                        <a>
                                            <button className={`btn btn-link btn-block ${style.readMore}`}>Leia mais</button>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ) : ""}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

Uri.getInitialProps = async function() {
    const news = await client.query({query: featuredNew})
    const previewNews = await client.query({query: previewNew})
    const nextNews = await client.query({query: nextNew})
    const lastNews = await client.query({query: lastNew})
    const fifthNews = await client.query({query: fifthNew})
    return {
        featuredNew: news.data.post,
        previewNew: previewNews.data.post,
        nextNew: nextNews.data.post,
        lastNew: lastNews.data.post,
        fifthNew: fifthNews.data.post
    }
}