'use client';

import { useRouter } from 'next/navigation';
import { useGame } from '@/contexts/GameContext';

const infoParagraphs = [
  'A hipocalcemia é a diminuição perigosa dos níveis de cálcio no sangue. Em cadelas grávidas, isso pode causar sérios problemas:',
  'Durante a gestação, os filhotes em desenvolvimento precisam de enormes quantidades de cálcio para formar seus ossos e dentes, "roubando" literalmente o cálcio da mãe através da placenta.',
];

const alertList = [
  'Tremores e espasmos musculares',
  'Fraqueza extrema e letargia',
  'Dificuldade para caminhar',
  'Respiração ofegante e acelerada',
  'Perda total de apetite',
  'Convulsões (casos graves)',
];

const dogDefaultName = 'Mel';

export default function InfoPage() {
  const router = useRouter();
  const { state } = useGame();
  const dogName = state.dogName || dogDefaultName;

  return (
    <main className="game-container">
      <section className="screen info-screen active">
        <h2 className="info-title">Conhecendo a Hipocalcemia</h2>
        <div className="info-content">
          <p>
            <strong>🔬 O que é Hipocalcemia?</strong>
          </p>
          {infoParagraphs.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul>
            {alertList.map(alert => (
              <li key={alert}>
                <strong>{alert}</strong>
              </li>
            ))}
          </ul>
          <p>
            <strong>⚠️ O que acontece na gravidez?</strong>
          </p>
          <p>
            Durante a gestação, os filhotes em desenvolvimento precisam de enormes quantidades de cálcio para formar ossos e dentes, o que acaba reduzindo o cálcio circulante da mãe.
          </p>
        </div>
        <button
          type="button"
          className="pixel-btn"
          onClick={() => router.push('/contexto')}
        >
          Proxima Etapa 🚀
        </button>
      </section>
    </main>
  );
}
