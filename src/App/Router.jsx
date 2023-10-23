import { Routes, Route } from 'react-router-dom';

import Home from '@/Pages/Home';
import Drluis from '@/Pages/Drluis';
import Procedimentos from '@/Pages/Procedimentos';
import Blog from '@/Pages/Blog';
import Agendamento from '@/Pages/Agendamento';

const Router = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dr-luis" element={<Drluis />} />
      <Route path="/procedimentos" element={<Procedimentos />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/agendamento" element={<Agendamento />} />
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
    </>
  )
};

export default Router;