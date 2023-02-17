import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from '~/pages/About';
import { Dish } from '~/pages/Dish';
import { Home } from '~/pages/Home';
import { Menu } from '~/pages/Menu';
import { NotFound } from '~/pages/NotFound';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { MainPage } from '../MainPage';


export function AppRouter() {
  return (
    <main className='container'>
      <Router basename="AluroniCustom/">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Home />} />            
            <Route path="cardapio" element={<Menu /> } />           
            <Route path="sobre" element={<About />} />
          </Route>
          <Route path="prato/:id" element={<Dish />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
