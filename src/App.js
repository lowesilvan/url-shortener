import HeroSection from './Components/Content/HeroSection';
import ShortenerSection from './Components/Content/ShortenerSection';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <HeroSection />
        <ShortenerSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
