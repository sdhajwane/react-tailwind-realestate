import { useEffect , useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LoadingScreen from './components/LoadingScreen';
import Sidebar from './components/Sidebar';
import Navbar from './components/NavBar';
import ImageSlider from './components/ImageSlider';
import Card from './components/Card';
import CardLarge from './components/CardLarge';
import WelcomeSection from './components/WelcomeSection';
import Footer from './components/Footer';
import FirstVisitPopup from './components/FirstVisitPopup ';
import AboveFooter from './components/AboveFooter';
import PriceTableSection from './components/PriceTableSection.jsx';
import Plans from './components/Plans.jsx';
import SmallImageCarousel from './components/SmallImageCarousel.jsx';
import GallerySection from './components/GallerySection.jsx';
import LocateUs from './components/LocateUs.jsx';
import VirtualTourRequest from './components/VirtualTourRequest.jsx';
import About from './components/About.jsx';
import BrochurePopup from './components/BrochurePopup.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const [showBrochurePopup, setShowBrochurePopup] = useState(false);

  const handleOpenPopup = () => setShowBrochurePopup(true);
  const handleClosePopup = () => setShowBrochurePopup(false);


  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }


  return (
    <>





<FirstVisitPopup/>
  <Navbar />
  <Sidebar onBrochureClick={handleOpenPopup} />

  <ImageSlider />

    
    
    <CardLarge onBrochureClick={handleOpenPopup} />
    <Card onBrochureClick={handleOpenPopup} />
    <WelcomeSection onBrochureClick={handleOpenPopup} />
    <PriceTableSection onBrochureClick={handleOpenPopup}/>
    <Plans  onBrochureClick={handleOpenPopup}/>
    <SmallImageCarousel onBrochureClick={handleOpenPopup}/>
    <GallerySection onBrochureClick={handleOpenPopup}/>
    <LocateUs/>
    <VirtualTourRequest onBrochureClick={handleOpenPopup}/>
    <About id="about" />
<AboveFooter/>
    <Footer />
    {/* Include popup once in the root */}
    {showBrochurePopup && <BrochurePopup setShowPopup={handleClosePopup} />}

    </>
  )
}

export default App
