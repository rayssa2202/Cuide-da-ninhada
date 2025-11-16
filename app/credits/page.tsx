'use client';

import Link from 'next/link';

export default function CreditsPage() {
  return (
    <main className="game-container">
      <section className="screen info-screen active">
        <h2 className="info-title">Créditos</h2>
        <div className="info-content">
          <p>
            ?? Jogo Educativo Cuide da Ninhada
            <br />
            Desenvolvido para conscientização sobre hipocalcemia em cadelas grávidas e lactantes.
          </p>
          <p>
            ?? Design: Pixel art interativo
            <br />
            ?? Conteúdo: enriquecido com conhecimento veterinário real
          </p>
          <p>?? Objetivo: educação, prevenção e cuidado responsável para cadelas e filhotes.</p>
          <p>&quot;A prevenção é o melhor remédio!&quot;</p>
        </div>
        <div className="story-navigation">
          <Link href="/" className="pixel-btn">
            ← Voltar ao Menu
          </Link>
        </div>
      </section>
    </main>
  );
}
