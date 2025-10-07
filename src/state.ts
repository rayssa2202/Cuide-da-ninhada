import type { CharacterSize, GameState, StoryOutcome, StoryStats } from './types';

const difficultyBySize: Record<CharacterSize, number> = {
  small: 0.8,
  medium: 1.0,
  large: 1.3,
};

const createStoryStats = (): StoryStats => ({
  totalCorrect: 0,
  totalDecisions: 0,
  majorMistakes: 0,
  criticalMistakes: 0,
});

const createInitialState = (): GameState => ({
  currentStep: 0,
  selectedCharacter: null,
  dogName: '',
  difficulty: 1,
  storyStats: createStoryStats(),
});

export const gameState: GameState = createInitialState();

export function setCurrentStep(step: number) {
  gameState.currentStep = step;
}

export function selectCharacter(size: CharacterSize, breed: string) {
  gameState.selectedCharacter = { size, breed };
  gameState.difficulty = difficultyBySize[size];
}

export function setDogName(name: string) {
  gameState.dogName = name;
}

export function resetStoryStats() {
  gameState.storyStats = createStoryStats();
}

export function registerStoryOutcome(outcome: StoryOutcome) {
  gameState.storyStats.totalDecisions += 1;

  switch (outcome) {
    case 'best':
      gameState.storyStats.totalCorrect += 1;
      break;
    case 'critical':
      gameState.storyStats.criticalMistakes += 1;
      gameState.storyStats.majorMistakes += 1;
      break;
    case 'bad':
      gameState.storyStats.majorMistakes += 1;
      break;
    default:
      break;
  }
}

export function resetGame() {
  Object.assign(gameState, createInitialState());
}
