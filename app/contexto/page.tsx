'use client';

import { useRouter } from 'next/navigation';
import { useGame } from '@/contexts/GameContext';

const dogDefaultName = 'Mel';

export default function ContextPage() {
  const router = useRouter();
  const { state } = useGame();
  const dogName = state.dogName || dogDefaultName;

  return (
    <main className="game-container">
      <section className="screen info-screen active">
        <h2 className="info-title">A História Começa Aqui</h2>
        <div className="info-content">
          <p>
            Mel é uma cadela muito amada do campus universitário. Sempre dócil, sempre presente nas rodas de estudo. Até que um dia algo muda…
          </p>
          <p>
            No intervalo de uma das suas aulas, percebe uma movimentação estranha... Os funcionários começam a relatar que a Mel não está nada bem!
          </p>
          <p>É o começo da sua missão.</p>
          <p>
            <strong>🎯 Sua missão:</strong> Ajudar <span className="dog-name-placeholder">{dogName}</span> a recuperar os níveis normais de cálcio!
          </p>
        </div>
        <div className="story-navigation">
          <button type="button" className="pixel-btn" onClick={() => router.push('/story')}>
            🚀 PRÓXIMA ETAPA
          </button>
        </div>
      </section>
    </main>
  );
}
