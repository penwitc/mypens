import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <meta name="description" content="" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Natraj Pen Pencil Company</title>
          <link rel="icon" href="/favicon.png" />
         

          <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon" />

          <link rel="stylesheet" href="/assets/css/font-awesome-5.9.0.css" />

          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />

          <link rel="stylesheet" href="/assets/css/magnific-popup.css" />

          <link rel="stylesheet" href="/assets/css/flaticon.css" />

          <link rel="stylesheet" href="/assets/css/animate.css" />

          <link rel="stylesheet" href="/assets/css/slick.css" />

          <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="stylesheet" href="/assets/css/globals.css" />

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
         

          
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/assets/js/jquery-3.6.0.min.js"></script>
          <script src="/assets/js/bootstrap.min.js"></script>
          <script src="/assets/js/appear.min.js"></script>
          <script src="/assets/js/slick.min.js"></script>
          <script src="/assets/js/jquery.magnific-popup.min.js"></script>
          <script src="/assets/js/isotope.pkgd.min.js"></script>
          <script src="/assets/js/wow.js"></script>
          <script src="/assets/js/script.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument