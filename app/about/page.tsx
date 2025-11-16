'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="game-container">
      <section className="screen info-screen active">
        <h2 className="info-title">Sobre o jogo</h2>
        <div className="info-content">
          <p>
            Este jogo foi desenvolvido com o objetivo de permitir que professores e universitários apliquem seus conhecimentos sobre{' '}
            <em>nutrição gestacional</em> e <em>hipocalcemia canina</em> de forma prática e interativa.
          </p>

          <p>
            Logo no início, o jogador é levado a uma <em>tela de seleção</em>, onde poderá escolher o <strong>porte</strong> e o nome do animal.
            A partir daí, começa a jornada: o acompanhamento da trajetória de uma cadelinha em sua luta pela sobrevivência.
          </p>

          <p>
            A história se desenrola na casa de um tutor que descobre que sua cadela está com <em>hipocalcemia</em>. Durante o processo de cuidado,
            o jogador percebe que a cadela também está <strong>gestante</strong>, precisando então auxiliá-la na recuperação, fortalecendo-a para
            enfrentar com sucesso as fases da <strong>gestação</strong> e <em>lactação</em>.
          </p>

          <p>
            O jogo tem formato de <em>quiz interativo</em>, com perguntas de múltipla escolha divididas em <strong>três fases</strong>:
          </p>
          <ul>
            <li>
              <strong>Fase 1 – Descoberta da doença:</strong> o jogador identifica os sintomas e aprende sobre a hipocalcemia.
            </li>
            <li>
              <strong>Fase 2 – Processo gestacional:</strong> aprofunda o entendimento sobre os cuidados nutricionais durante a gestação.
            </li>
            <li>
              <strong>Fase 3 – Fase puerperal:</strong> o jogador ajuda a mamãe e seus filhotes, encerrando o jogo com sucesso e conquistando novos aprendizados.
            </li>
          </ul>

          <p>
            Ao final, o participante não apenas vence o desafio, mas também consolida conhecimentos essenciais sobre o manejo nutricional e clínico da cadela
            gestante e lactante.
          </p>
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
