import { NoticesSection } from './components/avisos/NoticesSection';
import { Countdown } from './components/countdown/Countdown';
import { DetallesSection } from './components/detalles/DetallesSection';
import { Hero } from './components/hero/Hero';
import { Itinerario } from './components/itinerario/Itinerario';
import { GrainOverlay } from './components/layout/GrainOverlay';
import { Footer } from './components/layout/Footer';
import { MusicPlayer } from './components/music/MusicPlayer';
import { Nosotros } from './components/nosotros/Nosotros';
import { RecuerdosSection } from './components/recuerdos/RecuerdosSection';
import { GiftSection } from './components/regalos/GiftSection';
import { RsvpSection } from './components/rsvp/RsvpSection';

function App() {
  return (
    <>
      <GrainOverlay />
      <Hero />
      <Countdown />
      <Nosotros />
      <DetallesSection />
      <Itinerario />
      <NoticesSection />
      <GiftSection />
      <RecuerdosSection />
      <RsvpSection />
      <Footer />
      <MusicPlayer />
    </>
  );
}

export default App;
