import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

const Menu = lazy(()=> import('~/pages/Menu').then(({Menu})=>({ default: Menu })));
const MainPage = lazy(()=> import('../MainPage').then(({MainPage})=>({ default: MainPage })));
const Home = lazy(()=> import('~/pages/Home').then(({Home})=>({ default: Home })));
const NotFound = lazy(()=> import('~/pages/NotFound').then(({NotFound})=>({ default: NotFound })));
const Dish = lazy(()=> import('~/pages/Dish').then(({Dish})=>({ default: Dish })));
const About = lazy(()=> import('~/pages/About').then(({About})=>({ default: About })));


export function AppRouter() {
  return (
    <main className='container'>
      <Router basename="AluroniCustom/">
        <Header />
        <Suspense fallback={<p>Carregando</p>}>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route index element={<Home />} />
            
              <Route path="cardapio" element={<Menu /> } />
           
              <Route path="sobre" element={<About />} />
            </Route>
            <Route path="prato/:id" element={<Dish />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}
