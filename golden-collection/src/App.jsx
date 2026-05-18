import { BrowserRouter } from 'react-router-dom';
import Topbar from './components/navigation/Topbar';
import Navbar from './components/navigation/Navbar';
import Footer from './components/footer/Footer';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}