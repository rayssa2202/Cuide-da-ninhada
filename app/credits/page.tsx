'use client';

import Link from 'next/link';

export default function CreditsPage() {
  return (
    <main className="game-container">
      <section className="screen info-screen active">
        <h2 className="info-title">CRÉDITOS — MISSÃO CÁLCIO: SALVANDO A CADELA</h2>
        <div className="info-content">
          <p>
            <strong>PRODUÇÃO ACADÊMICA</strong>
            <br />
            Projeto desenvolvido para a disciplina de Mecanismos Morfofisiológicos da Medicina Veterinária.
          </p>
          <p>
            <strong>PROFESSORA ORIENTADORA</strong>
            <br />
            Carla Caroline Franzini de Souza
          </p>
          <p>
            <strong>EQUIPE DE DESENVOLVIMENTO</strong>
          </p>
          <ul>
            <li>Juliana Correia dos Santos</li>
            <li>Juliana de Carvalho Julianelli Lopes</li>
            <li>Juliana dos Santos Pereira</li>
            <li>Rayssa Barboza Rodrigues</li>
            <li>Vitor Hugor Souza Vicente</li>
            <li>Yasmim Dantas da Silva</li>
          </ul>
        </div>
        <div className="story-navigation">
          <Link href="/" className="pixel-btn">
            ↶ Voltar ao Menu
          </Link>
        </div>
      </section>
    </main>
  );
}
