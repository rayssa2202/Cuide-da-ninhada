import { phaseTragicEndings, storyEndings, storyPhases } from '@/data/storyData';
import type { StoryOutcome, StoryStats, StoryEndingKey } from './types';

export type FailureRecord = { phaseId: string; outcome: StoryOutcome };

const isStoryOutcome = (value: unknown): value is StoryOutcome =>
  value === 'best' || value === 'ok' || value === 'bad' || value === 'critical';

export interface EndingContext {
  dogName?: string;
  storyStats: StoryStats;
  failedPhases: FailureRecord[];
}

export interface EndingViewData {
  dogName: string;
  endingKey: StoryEndingKey;
  ending: (typeof storyEndings)[StoryEndingKey];
  failureLabel: string | null;
  failedPhase: (typeof storyPhases)[number] | null;
  storyStats: StoryStats;
}

export function getLastFailure(failedPhases: FailureRecord[]) {
  return failedPhases.length ? failedPhases[failedPhases.length - 1] : null;
}

export function determineEndingKey(storyStats: StoryStats, failedPhases: FailureRecord[]): StoryEndingKey {
  const failureDetails = getLastFailure(failedPhases);
  const forcedEndingKey =
    failureDetails?.outcome === 'critical' ? 'tragic' : failureDetails ? 'bad' : null;

  const defaultEndingKey =
    storyStats.totalCorrect === storyStats.totalDecisions && storyStats.totalDecisions > 0
      ? 'happy'
      : 'partial';

  return forcedEndingKey ?? defaultEndingKey;
}

export function buildEndingViewData(context: EndingContext): EndingViewData {
  const failureDetails = getLastFailure(context.failedPhases);
  const failureLabel =
    failureDetails?.outcome === 'critical' ? 'Falha crítica' : failureDetails ? 'Falha na fase' : null;
  const failedPhase = failureDetails
    ? storyPhases.find(phase => phase.id === failureDetails.phaseId) ?? null
    : null;
  const endingKey = determineEndingKey(context.storyStats, context.failedPhases);
  const forcedPhaseEnding = failureDetails
    ? phaseTragicEndings[failureDetails.phaseId as keyof typeof phaseTragicEndings]
    : null;
  const ending = forcedPhaseEnding ?? storyEndings[endingKey];

  return {
    dogName: context.dogName || '',
    endingKey,
    ending,
    failureLabel,
    failedPhase,
    storyStats: context.storyStats,
  };
}

export function serializeEndingContext(context: EndingContext) {
  const params = new URLSearchParams();
  if (context.dogName) {
    params.set('dogName', context.dogName);
  }
  params.set('totalCorrect', String(context.storyStats.totalCorrect));
  params.set('totalDecisions', String(context.storyStats.totalDecisions));
  params.set('majorMistakes', String(context.storyStats.majorMistakes));
  params.set('criticalMistakes', String(context.storyStats.criticalMistakes));
  params.set('failedPhases', JSON.stringify(context.failedPhases));
  return params.toString();
}

export function parseEndingContext(searchParams: URLSearchParams) {
  if (!searchParams.toString()) {
    return null;
  }

  const parseNumberParam = (key: string) => {
    const value = searchParams.get(key);
    return value ? Number(value) : 0;
  };

  let failedPhases: FailureRecord[] = [];
  const failedPhasesParam = searchParams.get('failedPhases');
  if (failedPhasesParam) {
    try {
      const parsed = JSON.parse(failedPhasesParam);
      if (Array.isArray(parsed)) {
        failedPhases = parsed.filter(
          (entry): entry is FailureRecord =>
            typeof entry === 'object' &&
            entry !== null &&
            typeof entry.phaseId === 'string' &&
            isStoryOutcome(entry.outcome)
        );
      }
    } catch {
      failedPhases = [];
    }
  }

  return {
    dogName: searchParams.get('dogName') ?? '',
    storyStats: {
      totalCorrect: parseNumberParam('totalCorrect'),
      totalDecisions: parseNumberParam('totalDecisions'),
      majorMistakes: parseNumberParam('majorMistakes'),
      criticalMistakes: parseNumberParam('criticalMistakes'),
    },
    failedPhases,
  };
}
