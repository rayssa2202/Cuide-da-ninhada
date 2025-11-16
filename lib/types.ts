export type CharacterSize = 'small' | 'medium' | 'large';

export interface CharacterSelection {
  size: CharacterSize;
  breed: string;
}

export type StoryOutcome = 'best' | 'ok' | 'bad' | 'critical';

export type StoryTone = 'success' | 'warning' | 'neutral' | 'fun' | 'danger';

export interface StoryOption {
  text: string;
  feedback: string;
  tone: StoryTone;
  outcome: StoryOutcome;
}

export interface StoryDecision {
  id: string;
  title: string;
  narrative?: string;
  question: string;
  options: StoryOption[];
}

export interface StoryPhase {
  id: string;
  title: string;
  intro: string[];
  decisions: StoryDecision[];
}

export type StoryEndingKey = 'bad' | 'happy' | 'partial' | 'tragic';

export interface StoryEndingSection {
  heading: string;
  body: string;
}

export interface StoryEnding {
  title: string;
  highlight: string;
  highlightTone: StoryTone;
  sections: StoryEndingSection[];
}

export interface StoryStats {
  totalCorrect: number;
  totalDecisions: number;
  majorMistakes: number;
  criticalMistakes: number;
}

export interface GameState {
  currentStep: number;
  selectedCharacter: CharacterSelection | null;
  dogName: string;
  difficulty: number;
  storyStats: StoryStats;
  failedPhases: { phaseId: string; outcome: StoryOutcome }[];
}
