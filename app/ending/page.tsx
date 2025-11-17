'use client';

import Link from 'next/link';
import { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useGame } from '@/contexts/GameContext';
import { buildEndingViewData, parseEndingContext } from '@/lib/endingUtils';

const dogDefaultName = 'Mel';

function withDogName(value: string, dogName: string) {
  const resolvedName = dogName || dogDefaultName;
  return value.replace(/\{\{dogName\}\}/g, resolvedName);
}

function toneClass(tone: string) {
  return `tone-${tone}`;
}

function EndingContent() {
  const { state, resetGame } = useGame();
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();
  const hasQueryParams = Boolean(queryString);
  const queryContext = hasQueryParams ? parseEndingContext(searchParams) : null;

  useEffect(() => {
    if (!hasQueryParams) {
      router.replace('/Cuide-da-ninhada/');
    }
  }, [hasQueryParams, router]);

  const endingContext = queryContext ?? {
    dogName: state.dogName,
    storyStats: state.storyStats,
    failedPhases: state.failedPhases,
  };

  const endingData = buildEndingViewData(endingContext);
  const displayDogName = endingContext.dogName || dogDefaultName;

  return (
    <main className="game-container">
      <section className="screen story-screen active">
        <div className="story-ending">
          <h2 className="story-title">{withDogName(endingData.ending.title, displayDogName)}</h2>
          <div className={`story-ending-highlight ${toneClass(endingData.ending.highlightTone)}`}>
            {withDogName(endingData.ending.highlight, displayDogName)}
          </div>
          {endingData.failedPhase && endingData.failureLabel && (
            <p className="story-ending-phase-note">
              {endingData.failureLabel}: {endingData.failedPhase.title}
            </p>
          )}
          <div className="story-ending-details">
            {endingData.ending.sections.map(section => (
              <div className="story-ending-section" key={section.heading}>
                <h3>{section.heading}</h3>
                <p>{withDogName(section.body, displayDogName)}</p>
              </div>
            ))}
          </div>
          <div className="story-ending-stats">
            <div>
              <strong>Decisoes corretas:</strong> {endingData.storyStats.totalCorrect} /{' '}
              {endingData.storyStats.totalDecisions}
            </div>
          </div>
          <Link
            href="/Cuide-da-ninhada"
            className="pixel-btn"
            style={{ padding: 0, marginTop: 15 }}
            onClick={() => resetGame()}
          >
            Voltar ao Menu
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function EndingPage() {
  return (
    <Suspense fallback={null}>
      <EndingContent />
    </Suspense>
  );
}
