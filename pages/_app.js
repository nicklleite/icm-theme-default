import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/app.scss'

import Layout from '../components/Layout'

function IcmThemeDefault({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default IcmThemeDefault
