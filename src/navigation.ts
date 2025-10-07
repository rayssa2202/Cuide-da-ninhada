import { gameState, setCurrentStep } from './state';

function updateDogNamePlaceholders() {
  const placeholders = document.querySelectorAll<HTMLElement>('.dog-name-placeholder');
  const name = gameState.dogName || 'Mel';

  placeholders.forEach(placeholder => {
    placeholder.textContent = name;
  });
}

export function showScreen(screenId: string) {
  document.querySelectorAll<HTMLElement>('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  const element = document.getElementById(screenId);
  if (element) {
    element.classList.add('active');
    element.scrollTop = 0;
  }
  updateDogNamePlaceholders();
}

export function goToStep(stepNumber: number) {
  setCurrentStep(stepNumber);

  if (stepNumber === 0) {
    showScreen('menu');
    return;
  }

  showScreen(`step${stepNumber}`);
}
