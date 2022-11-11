import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Categories from '../components/Categories';
import Luxe from '../components/Luxe';
import Nykaa from '../components/Nykaa';
import Fashion from '../components/Fashion';
import Beauty from '../components/Beauty';
import Advice from '../components/Advice';
import Login from '../components/Login';

export default function AllRoutes(){
  return (
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/luxe" element={<Luxe/>}></Route>
          <Route path="/nykaa" element={<Nykaa/>}></Route>
          <Route path="/fashion" element={<Fashion/>}></Route>
          <Route path="/beauty" element={<Beauty/>}></Route>
          <Route path="/advice" element={<Advice/>}></Route>
          <Route path="/categories" element={<Categories/>}></Route>
      </Routes>
  )
}



