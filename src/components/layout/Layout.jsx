import Footer from "./Footer"
import Navbar from "./Navbar"


const Layout = ({children}) => {
  return (
    <>
        <main className="bg-black-indigo" style={{minHeight:"100vh"}}>
        <Navbar/>
        {children}
        <Footer/>
        </main>
    </>
  )
}

export default Layout