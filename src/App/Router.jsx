import { Routes, Route } from 'react-router-dom';

import Home from '@/Pages/Home';
import Drluis from '@/Pages/Drluis';
import Procedimentos from '@/Pages/Procedimentos';
import Blog from '@/Pages/Blog';
import Agendamento from '@/Pages/Agendamento';

const Router = () => {
  return (
    <Routes>
      <Route path="/dr-luis/" element={<Home />} />
      <Route path="/dr-luis/dr-luis-fernando" element={<Drluis />} />
      <Route path="/dr-luis/procedimentos" element={<Procedimentos />} />
      <Route path="/dr-luis/blog" element={<Blog />} />
      <Route path="/dr-luis/agendamento" element={<Agendamento />} />
      <Route path="*" element={<div className='h-100 w-100'>Página não encontrada</div>} />
    </Routes>
  )
};

export default Router;