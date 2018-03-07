import Head from 'next/head';
import App from './App';
//import '../node_modules/leaflet/dist/leaflet.css'
//import node_modules/leaflet-draw/dist/leaflet.draw.css

const Index = () => (
  <div>
    <Head>
      <title>Leaflet_AKRA</title>
      <link href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" rel="stylesheet" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.2/leaflet.draw.css" />
    </Head>
    <style jsx global>{`
       .sr-only {
        display: none;
      }
    `}</style>
        <App />
        
  </div>
)

export default Index