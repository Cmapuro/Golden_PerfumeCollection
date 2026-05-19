import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Topbar from './components/navigation/Topbar';
import Navbar from './components/navigation/Navbar';
import Footer from './components/footer/Footer';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Topbar />
        <Navbar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
