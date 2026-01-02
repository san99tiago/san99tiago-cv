import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://san99tiago.com/" />
          <meta
            property="og:title"
            content="Santiago Garcia Arango - Solutions Architect AWS"
          />
          <meta
            property="og:description"
            content="Website for Santiago Garcia Arango (DevOps, AWS, GenAI) - Solutions Architect - Technology"
          />
          <meta
            property="og:image"
            content="https://san99tiago.com/images/SantiagoGarciaArango_Profile_MAIN.png"
          />
          <meta property="og:image:width" content="1920" />
          <meta property="og:image:height" content="1080" />
          <meta property="og:locale" content="es_ES" />
          <meta
            property="og:site_name"
            content="Santiago Garcia Arango - Solutions Architect AWS"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
