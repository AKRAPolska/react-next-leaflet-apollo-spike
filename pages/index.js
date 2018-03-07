import Head from 'next/head';
import App from './App';
//import '../node_modules/leaflet/dist/leaflet.css'

const Index = () => (
  <div>
    <Head>
      <title>Leaflet_AKRA</title>
      <link href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" rel="stylesheet" />
    </Head>
    <div>
      <App />
    </div>
  </div>
)

export default Index