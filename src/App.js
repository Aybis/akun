import { Route, Routes } from 'react-router-dom';
import {
  Home,
  Karyawan,
  Pengajuan,
  Preview,
  Tracking,
} from './components/pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pengajuan" element={<Pengajuan />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/karyawan" element={<Karyawan />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </>
  );
}

export default App;
