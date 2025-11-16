'use client';

import { createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import type { CharacterSize, GameState, StoryOutcome } from '../lib/types';

type GameAction =
  | { type: 'selectCharacter'; payload: { size: CharacterSize; breed: string } }
  | { type: 'setDogName'; payload: string }
  | { type: 'registerOutcome'; payload: StoryOutcome }
  | { type: 'registerPhaseFailure'; payload: { phaseId: string; outcome: StoryOutcome } }
  | { type: 'resetStoryStats' }
  | { type: 'resetGame' };

const difficultyBySize: Record<CharacterSize, number> = {
  small: 0.8,
  medium: 1,
  large: 1.3,
};

const createStoryStats = () => ({
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
  failedPhases: [],
});

interface GameContextValue {
  state: GameState;
  selectCharacter: (size: CharacterSize, breed: string) => void;
  setDogName: (name: string) => void;
  registerStoryOutcome: (outcome: StoryOutcome) => void;
  recordPhaseFailure: (phaseId: string, outcome: StoryOutcome) => void;
  resetStoryStats: () => void;
  resetGame: () => void;
}

const GameContext = createContext<GameContextValue | undefined>(undefined);

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'selectCharacter': {
      const difficulty = difficultyBySize[action.payload.size];
      return {
        ...state,
        selectedCharacter: {
          size: action.payload.size,
          breed: action.payload.breed,
        },
        difficulty,
      };
    }
    case 'setDogName':
      return {
        ...state,
        dogName: action.payload,
      };
    case 'registerOutcome': {
      const nextStats = {
        ...state.storyStats,
        totalDecisions: state.storyStats.totalDecisions + 1,
      };

      switch (action.payload) {
        case 'best':
          nextStats.totalCorrect += 1;
          break;
        case 'critical':
          nextStats.criticalMistakes += 1;
          nextStats.majorMistakes += 1;
          break;
        case 'bad':
          nextStats.majorMistakes += 1;
          break;
        default:
          break;
      }

      return {
        ...state,
        storyStats: nextStats,
      };
    }
    case 'registerPhaseFailure': {
      if (state.failedPhases.some(failure => failure.phaseId === action.payload.phaseId)) {
        return state;
      }

      return {
        ...state,
        failedPhases: [...state.failedPhases, action.payload],
      };
    }
    case 'resetStoryStats':
      return {
        ...state,
        storyStats: createStoryStats(),
      };
    case 'resetGame':
      return createInitialState();
    default:
      return state;
  }
}

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, createInitialState());

  const selectCharacter = useCallback(
    (size: CharacterSize, breed: string) => dispatch({ type: 'selectCharacter', payload: { size, breed } }),
    []
  );

  const setDogName = useCallback((name: string) => dispatch({ type: 'setDogName', payload: name }), []);

  const registerStoryOutcome = useCallback(
    (outcome: StoryOutcome) => dispatch({ type: 'registerOutcome', payload: outcome }),
    []
  );

  const recordPhaseFailure = useCallback(
    (phaseId: string, outcome: StoryOutcome) =>
      dispatch({ type: 'registerPhaseFailure', payload: { phaseId, outcome } }),
    []
  );

  const resetStoryStats = useCallback(() => dispatch({ type: 'resetStoryStats' }), []);

  const resetGame = useCallback(() => dispatch({ type: 'resetGame' }), []);

  const contextValue = useMemo<GameContextValue>(
    () => ({
      state,
      selectCharacter,
      setDogName,
      registerStoryOutcome,
      recordPhaseFailure,
      resetStoryStats,
      resetGame,
    }),
    [state, selectCharacter, setDogName, registerStoryOutcome, recordPhaseFailure, resetStoryStats, resetGame]
  );

  return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within GameProvider');
  }
  return context;
}
