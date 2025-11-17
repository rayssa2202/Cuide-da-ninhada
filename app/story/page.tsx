'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGame } from '@/contexts/GameContext';
import { storyPhases } from '@/data/storyData';
import { serializeEndingContext } from '@/lib/endingUtils';
import type { StoryOption, StoryTone, StoryOutcome } from '@/lib/types';

const dogDefaultName = 'Mel';

function withDogName(value: string, dogName: string) {
  const resolvedName = dogName || dogDefaultName;
  return value.replace(/\{\{dogName\}\}/g, resolvedName);
}

function toneClass(tone: StoryTone) {
  return `tone-${tone}`;
}

export default function StoryPage() {
  const router = useRouter();
  const { state, registerStoryOutcome, resetStoryStats, recordPhaseFailure } = useGame();
  const dogName = state.dogName || dogDefaultName;

  const [phaseIndex, setPhaseIndex] = useState(0);
  const [decisionIndex, setDecisionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>('');
  const [feedbackTone, setFeedbackTone] = useState<StoryTone>('neutral');
  const [navigationError, setNavigationError] = useState<string | null>(null);
  const [hasPhaseFailure, setHasPhaseFailure] = useState(false);
  const [phaseFailureOutcome, setPhaseFailureOutcome] = useState<StoryOutcome | null>(null);
  const [phaseFailureRecorded, setPhaseFailureRecorded] = useState(false);

  const currentPhase = useMemo(() => storyPhases[phaseIndex], [phaseIndex]);
  const currentDecision = useMemo(
    () => currentPhase.decisions[decisionIndex],
    [currentPhase, decisionIndex]
  );

  const buildFailedPhases = () => {
    const safeFailedPhases = [...state.failedPhases];
    if (
      phaseFailureOutcome &&
      !safeFailedPhases.some(failure => failure.phaseId === currentPhase.id)
    ) {
      safeFailedPhases.push({ phaseId: currentPhase.id, outcome: phaseFailureOutcome });
    }
    return safeFailedPhases;
  };

  const buildEndingUrl = () => {
    const queryString = serializeEndingContext({
      dogName,
      storyStats: state.storyStats,
      failedPhases: buildFailedPhases(),
    });

    return `/ending?${queryString}`;
  };

  const resetPhaseFailureState = () => {
    setHasPhaseFailure(false);
    setPhaseFailureOutcome(null);
    setPhaseFailureRecorded(false);
  };

  useEffect(() => {
    resetStoryStats();
  }, [resetStoryStats]);

  useEffect(() => {
    if (!state.selectedCharacter || !state.dogName.trim()) {
      router.push('/');
    }
  }, [router, state.dogName, state.selectedCharacter]);

  const handleOptionSelect = (option: StoryOption, index: number) => {
    if (selectedOptionIndex !== null) {
      return;
    }
    setSelectedOptionIndex(index);
    setFeedback(withDogName(option.feedback, dogName));
    setFeedbackTone(option.tone);
    setNavigationError(null);
    registerStoryOutcome(option.outcome);

    if (option.outcome === 'bad' || option.outcome === 'critical') {
      setHasPhaseFailure(true);
      setPhaseFailureOutcome(prevOutcome => {
        if (!prevOutcome) {
          return option.outcome;
        }
        if (prevOutcome === 'critical' || option.outcome === 'critical') {
          return 'critical';
        }
        return prevOutcome;
      });
    }
  };

  const GetClassNames = (index: number,option: StoryOption) => {
    let classNames = `story-option-button`;
    if (selectedOptionIndex !== null) {
      if(selectedOptionIndex === index) {
        classNames += ` selected ${toneClass(option.tone)}`;
      }
      else if(option.tone == 'success') {
        classNames += ` ${toneClass(option.tone)}`;
      }
    }
    return classNames;
  }

  const handleNext = () => {
    if (selectedOptionIndex === null) {
      setNavigationError('Escolha uma opção antes de continuar!');
      return;
    }

    setNavigationError(null);

    const isLastDecision = decisionIndex === currentPhase.decisions.length - 1;
    const isLastPhase = phaseIndex === storyPhases.length - 1;

    if (isLastDecision) {
      if (hasPhaseFailure) {
        if (!phaseFailureRecorded) {
          recordPhaseFailure(currentPhase.id, phaseFailureOutcome ?? 'bad');
          setPhaseFailureRecorded(true);
        }
        router.push(buildEndingUrl());
        return;
      }

      if (isLastPhase) {
        router.push(buildEndingUrl());
        return;
      }

      setPhaseIndex(phaseIndex + 1);
      setDecisionIndex(0);
      resetPhaseFailureState();
    } else {
      setDecisionIndex(decisionIndex + 1);
    }

    setSelectedOptionIndex(null);
    setFeedback('');
    setFeedbackTone('neutral');
  };
  const progressText = `Fase ${phaseIndex + 1} de ${storyPhases.length} · Pergunta ${
    decisionIndex + 1
  } de ${currentPhase.decisions.length}`;

  return (
    <main className="game-container">
      <section className="screen story-screen active">
        <div className="story-engine">
          <h2 className="story-title">{withDogName(currentPhase.title, dogName)}</h2>
          <div className="story-phase-intro">
            {currentPhase.intro.map(paragraph => (
              <p key={paragraph}>{withDogName(paragraph, dogName)}</p>
            ))}
          </div>

          <div className="story-progress">{progressText}</div>

          <div className="story-decision">
            <h3 className="story-decision-title">{withDogName(currentDecision.title, dogName)}</h3>
            {
              currentDecision.question && (
                <p className="story-decision-description">{withDogName(currentDecision.question, dogName)}</p>
              )
            }
          </div>

          <div className="story-options" role="list">
            {currentDecision.options.map((option, index) => (
              <button
                key={`${currentDecision.id}-${index}`}
                type="button"
                className={GetClassNames(index, option)}
                onClick={() => handleOptionSelect(option, index)}
              >
                {withDogName(option.text, dogName)}
              </button>
            ))}
          </div>

          {feedback && (
            <div className={`story-feedback-container ${toneClass(feedbackTone)}`} aria-live="polite">
              {feedback.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          )}

          {navigationError && <p className="error-text">{navigationError}</p>}

          <div className="story-navigation">
            <button type="button" className="pixel-btn" onClick={handleNext}>
              ➡️ Próxima etapa
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}



