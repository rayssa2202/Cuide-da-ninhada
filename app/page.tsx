'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGame } from '@/contexts/GameContext';

const dogDefaultName = 'Mel';

export default function HomePage() {
  const { state, resetGame } = useGame();
  const router = useRouter();

  const handleStart = () => {
    resetGame();
    router.push('/character');
  };

  const displayedName = state.dogName || dogDefaultName;

  return (
    <main className="game-container">
      <section className="screen menu-screen active">
        <div className="logo">🐕 MISSÃO CÁLCIO 🐕</div>
        <div className="subtitle">Salvando a Cadela</div>

        <div className="menu-buttons">
          <a type="button" className="pixel-btn" onClick={handleStart}>
            🕹️ COMEÇAR JOGO
          </a>
          <Link href="/about" className="pixel-btn">
            ℹ️ SOBRE O JOGO
          </Link>
          <Link href="/credits" className="pixel-btn">
            🎮 CRÉDITOS
          </Link>
        </div>
        <div className="subtitle" style={{ marginTop: '30px' }}>
          Jogo Educativo sobre Hipocalcemia
        </div>
      </section>
    </main>
  );
}
