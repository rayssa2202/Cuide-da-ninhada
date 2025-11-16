'use client';

import Link from 'next/link';
import { useGame } from '@/contexts/GameContext';
import { storyEndings, storyPhases, phaseTragicEndings } from '@/data/storyData';

const dogDefaultName = 'Mel';

function withDogName(value: string, dogName: string) {
  const resolvedName = dogName || dogDefaultName;
  return value.replace(/\{\{dogName\}\}/g, resolvedName);
}

function toneClass(tone: string) {
  return `tone-${tone}`;
}
export default function EndingPage() {
  const { state, resetGame } = useGame();
  const dogName = state.dogName || dogDefaultName;

  const failureDetails = state.failedPhases[state.failedPhases.length - 1];
  const failedPhase = failureDetails
    ? storyPhases.find(phase => phase.id === failureDetails.phaseId)
    : null;

  const forcedEndingKey = failureDetails
    ? failureDetails.outcome === 'critical'
      ? 'tragic'
      : 'bad'
    : null;

  const defaultEndingKey =
    state.storyStats.criticalMistakes > 0
      ? 'tragic'
      : state.storyStats.totalCorrect === state.storyStats.totalDecisions &&
        state.storyStats.totalDecisions > 0
      ? 'happy'
      : state.storyStats.majorMistakes > 0 || state.storyStats.totalDecisions === 0
      ? 'partial'
      : 'partial';
  const endingKey = forcedEndingKey ?? defaultEndingKey;
  const failureLabel = failureDetails
    ? failureDetails.outcome === 'critical'
      ? 'Falha crítica'
      : 'Falha na fase'
    : null;

  const forcedPhaseEnding = failureDetails
    ? phaseTragicEndings[failureDetails.phaseId as keyof typeof phaseTragicEndings]
    : null;

  const ending = forcedPhaseEnding ?? storyEndings[endingKey];

  return (
    <main className="game-container">
      <section className="screen story-screen active">
        <div className="story-ending">
          <h2 className="story-title">{withDogName(ending.title, dogName)}</h2>
          <div className={`story-ending-highlight ${toneClass(ending.highlightTone)}`}>
            {withDogName(ending.highlight, dogName)}
          </div>
          {failedPhase && failureLabel && (
            <p className="story-ending-phase-note">
              {failureLabel}: {failedPhase.title}
            </p>
          )}
          <div className="story-ending-details">
            {ending.sections.map(section => (
              <div className="story-ending-section" key={section.heading}>
                <h3>{section.heading}</h3>
                <p>{withDogName(section.body, dogName)}</p>
              </div>
            ))}
          </div>
          <div className="story-ending-stats">
            <div>
              <strong>Decisões corretas:</strong> {state.storyStats.totalCorrect} /{' '}
              {state.storyStats.totalDecisions}
            </div>
            <div>
              <strong>Erros graves:</strong> {state.storyStats.majorMistakes}
            </div>
          </div>
          <Link href="/" className="pixel-btn" style={{padding: 0, marginTop: 15}} onClick={() => resetGame()}>
              Voltar ao Menu
            </Link>
        </div>
      </section>
    </main>
  );
}
