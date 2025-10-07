import { completeStep1, randomName, selectCharacter, setupTouchInteractions, showCredits, showInfo } from './actions';
import { goToStep } from './navigation';
import { initStoryEngine, startStoryExperience } from './storyEngine';
import type { CharacterSize } from './types';

document.addEventListener('DOMContentLoaded', () => {
  setupTouchInteractions();
  randomName();
  initStoryEngine();
});

function goToStepWithStory(stepNumber: number) {
  goToStep(stepNumber);

  if (stepNumber === 3) {
    startStoryExperience();
  }
}

declare global {
  interface Window {
    goToStep: typeof goToStepWithStory;
    showInfo: typeof showInfo;
    showCredits: typeof showCredits;
    selectCharacter: (size: CharacterSize, breed: string) => void;
    completeStep1: () => void;
    randomName: () => void;
  }
}

window.goToStep = goToStepWithStory;
window.showInfo = showInfo;
window.showCredits = showCredits;
window.selectCharacter = selectCharacter;
window.completeStep1 = completeStep1;
window.randomName = randomName;
