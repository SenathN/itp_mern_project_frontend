import '../homeStyles.css';
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <section className="public">
        <main>
          <div style={{ display: 'flex', 'flex-direction': 'row', 'justify-content': 'space-around' }}>
            <div id='public__content_div' >
              <Outlet />
            </div>
          </div>
        </main>
      </section >
      <Footer />
    </>
  )
}

export default Layout