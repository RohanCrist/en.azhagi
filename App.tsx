import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RosePetals from './components/RosePetals';
import MusicPlayer from './components/MusicPlayer';
import CardStack from './components/CardStack';
import ScrollyTelling from './components/ScrollyTelling';
import EnvelopeGrid from './components/EnvelopeGrid';
import VintageLetter from './components/VintageLetter';
import Proposal from './components/Proposal';
import FloralDecorations from './components/FloralDecorations';

function App() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div className="h-screen w-full bg-gradient-to-br from-rose-950 via-rose-900 to-red-950 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
        <RosePetals />
        <FloralDecorations />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 max-w-md w-full bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-rose-900/30"
        >
          <h1 className="text-5xl font-serif text-rose-200 mb-2">Sanctuary</h1>
          <div className="h-px w-20 bg-rose-500 mx-auto my-6" />
          <p className="text-rose-100/80 mb-8 font-sans font-light">
            A story of storms, silence, and the love that survived it all.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="px-8 py-3 bg-rose-700 text-rose-50 font-serif tracking-widest text-sm rounded-full hover:bg-rose-600 transition-colors shadow-lg shadow-rose-900/50"
          >
            ENTER
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="bg-gradient-to-b from-deep-velvet via-rose-950 to-deep-velvet text-rose-50 min-h-screen selection:bg-rose-500 selection:text-white overflow-hidden">
      <RosePetals />
      <FloralDecorations />
      <MusicPlayer />
      
      <section className="relative z-10">
        <CardStack />
      </section>

      <section className="relative z-20">
        <ScrollyTelling />
      </section>

      <section className="relative z-10">
        <EnvelopeGrid />
      </section>

      <section className="relative z-10">
        <VintageLetter />
      </section>

      <section className="relative z-30">
        <Proposal />
      </section>
      
      <footer className="py-12 text-center text-rose-900/30 text-xs font-sans relative z-10">
        Made with blood, sweat, and infinite love.
      </footer>
    </main>
  );
}

export default App;