import { Route, Routes } from 'react-router-dom';
import Section from '../components/Section/Section';
import ScrolledPage from '../Layout/ScrolledPage';
import Contact from '../Layout/Contact';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ScrolledPage />} />
        <Route
          path='/klimatyzacja-domowa'
          element={<Section wrapper={true} bgcolor='royalblue' id='uslugi' />}
        />
        <Route
          path='/klimatyzacja-mobilna'
          element={<Section wrapper={true} bgcolor='royalblue' id='uslugi' />}
        />
        <Route
          path='/czyszczenie-klimatyzacji'
          element={<Section wrapper={true} bgcolor='royalblue' id='uslugi' />}
        />
        <Route path='/kontakt' element={<Contact />} />
      </Routes>
    </>
  );
};
export default Routing;
