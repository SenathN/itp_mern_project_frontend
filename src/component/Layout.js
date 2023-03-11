import '../homeStyles.css';
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <main id='main_content'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout