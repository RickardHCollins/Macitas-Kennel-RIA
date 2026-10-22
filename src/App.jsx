import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/style.css';

import { Index } from './pages/Index';
import { Hundar } from './pages/Hundar';
import { Galleri } from './pages/Galleri';
import { OmOss } from './pages/OmOss';
import { Kontakt } from './pages/Kontakt';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/hundar" element={<Hundar />} />
        <Route path="/galleri" element={<Galleri />} />
        <Route path="/omoss" element={<OmOss />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;