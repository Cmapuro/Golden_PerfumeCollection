import Topbar from '../components/navigation/Topbar';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/footer/Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}