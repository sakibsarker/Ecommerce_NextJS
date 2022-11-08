import '../styles/globals.css'
import Navbar from '../component/Navbar'
function MyApp({ Component, pageProps }) {
  return(
    <div>
    <Navbar/>
    <Component {...pageProps} />
    </div>
  )
  
 
   
}

export default MyApp
