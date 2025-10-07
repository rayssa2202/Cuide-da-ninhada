import { goToStep } from './navigation';
import { storyEndings, storyPhases } from './storyData';
import { gameState, registerStoryOutcome, resetStoryStats } from './state';
import type { StoryDecision, StoryEndingKey, StoryOption, StoryPhase, StoryTone } from './types';

interface StoryElements {
  phaseTitle: HTMLElement;
  phaseIntro: HTMLElement;
  progress: HTMLElement;
  decisionTitle: HTMLElement;
  decisionDescription: HTMLElement;
  optionsContainer: HTMLElement;
  feedbackContainer: HTMLElement;
  nextButton: HTMLButtonElement;
  endingTitle: HTMLElement;
  endingHighlight: HTMLElement;
  endingDetails: HTMLElement;
  endingStats: HTMLElement;
}

let elements: StoryElements | null = null;
let currentPhaseIndex = 0;
let currentDecisionIndex = 0;
let optionSelected = false;
let initialized = false;

function withDogName(value: string) {
  const name = gameState.dogName || 'Mel';
  return value.replace(/\{\{dogName\}\}/g, name);
}

function getElements(): StoryElements | null {
  if (!elements) {
    const phaseTitle = document.getElementById('storyPhaseTitle');
    const phaseIntro = document.getElementById('storyPhaseIntro');
    const progress = document.getElementById('storyProgress');
    const decisionTitle = document.getElementById('storyDecisionTitle');
    const decisionDescription = document.getElementById('storyDecisionDescription');
    const optionsContainer = document.getElementById('storyOptions');
    const feedbackContainer = document.getElementById('storyFeedback');
    const nextButton = document.getElementById('storyNextButton');
    const endingTitle = document.getElementById('storyEndingTitle');
    const endingHighlight = document.getElementById('storyEndingHighlight');
    const endingDetails = document.getElementById('storyEndingDetails');
    const endingStats = document.getElementById('storyEndingStats');

    if (
      phaseTitle instanceof HTMLElement &&
      phaseIntro instanceof HTMLElement &&
      progress instanceof HTMLElement &&
      decisionTitle instanceof HTMLElement &&
      decisionDescription instanceof HTMLElement &&
      optionsContainer instanceof HTMLElement &&
      feedbackContainer instanceof HTMLElement &&
      nextButton instanceof HTMLButtonElement &&
      endingTitle instanceof HTMLElement &&
      endingHighlight instanceof HTMLElement &&
      endingDetails instanceof HTMLElement &&
      endingStats instanceof HTMLElement
    ) {
      elements = {
        phaseTitle,
        phaseIntro,
        progress,
        decisionTitle,
        decisionDescription,
        optionsContainer,
        feedbackContainer,
        nextButton,
        endingTitle,
        endingHighlight,
        endingDetails,
        endingStats,
      };
    }
  }

  return elements;
}

function createOptionButton(option: StoryOption, index: number) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'story-option-button';
  button.textContent = withDogName(option.text);
  button.dataset.index = String(index);
  button.addEventListener('click', () => handleOptionSelection(option, button));
  return button;
}

function renderPhaseIntro(phase: StoryPhase, phaseIntroEl: HTMLElement) {
  phaseIntroEl.innerHTML = phase.intro.map(paragraph => `<p>${withDogName(paragraph)}</p>`).join('');
}

function renderDecision(decision: StoryDecision, decisionTitleEl: HTMLElement, decisionDescriptionEl: HTMLElement) {
  decisionTitleEl.textContent = withDogName(decision.title);
  const descriptionParts: string[] = [];
  if (decision.narrative) {
    descriptionParts.push(decision.narrative);
  }
  descriptionParts.push(decision.question);
  decisionDescriptionEl.innerHTML = withDogName(descriptionParts.join('<br><br>'));
}

function updateProgress(progressEl: HTMLElement, phaseIndex: number, decisionIndex: number) {
  const phase = storyPhases[phaseIndex];
  progressEl.textContent = `Fase ${phaseIndex + 1} de ${storyPhases.length} · Pergunta ${decisionIndex + 1} de ${phase.decisions.length}`;
}

function updateNextButtonLabel(nextButton: HTMLButtonElement) {
  const phase = storyPhases[currentPhaseIndex];
  const isLastDecision = currentDecisionIndex === phase.decisions.length - 1;
  const isLastPhase = currentPhaseIndex === storyPhases.length - 1;

  if (isLastDecision && isLastPhase) {
    nextButton.textContent = 'Ver desfecho';
  } else if (isLastDecision) {
    nextButton.textContent = 'Avançar para a próxima fase';
  } else {
    nextButton.textContent = 'Próxima decisão';
  }
}

function toneClass(tone: StoryTone) {
  return `tone-${tone}`;
}

function handleOptionSelection(option: StoryOption, button: HTMLButtonElement) {
  if (optionSelected) {
    return;
  }

  const els = getElements();
  if (!els) {
    return;
  }

  optionSelected = true;
  registerStoryOutcome(option.outcome);

  els.optionsContainer.querySelectorAll('button').forEach(optionButton => {
    optionButton.setAttribute('disabled', 'true');
    optionButton.classList.add('answered');
  });

  button.classList.add('selected', toneClass(option.tone));

  els.feedbackContainer.innerHTML = `<div class="story-feedback ${toneClass(option.tone)}">${withDogName(option.feedback)}</div>`;

  updateNextButtonLabel(els.nextButton);
  els.nextButton.disabled = false;
}

function clearFeedback(els: StoryElements) {
  els.feedbackContainer.innerHTML = '';
}

function renderCurrentDecision() {
  const els = getElements();
  if (!els) {
    return;
  }

  const phase = storyPhases[currentPhaseIndex];
  const decision = phase.decisions[currentDecisionIndex];

  optionSelected = false;
  els.nextButton.disabled = true;

  els.phaseTitle.textContent = withDogName(phase.title);
  renderPhaseIntro(phase, els.phaseIntro);
  renderDecision(decision, els.decisionTitle, els.decisionDescription);
  updateProgress(els.progress, currentPhaseIndex, currentDecisionIndex);
  updateNextButtonLabel(els.nextButton);
  clearFeedback(els);

  els.optionsContainer.innerHTML = '';
  decision.options.forEach((option, index) => {
    const button = createOptionButton(option, index);
    els.optionsContainer.appendChild(button);
  });
}

function advanceStory() {
  const phase = storyPhases[currentPhaseIndex];
  const isLastDecision = currentDecisionIndex === phase.decisions.length - 1;

  if (!isLastDecision) {
    currentDecisionIndex += 1;
    renderCurrentDecision();
    return;
  }

  const isLastPhase = currentPhaseIndex === storyPhases.length - 1;
  if (!isLastPhase) {
    currentPhaseIndex += 1;
    currentDecisionIndex = 0;
    renderCurrentDecision();
    return;
  }

  showEnding();
}

function computeEndingKey(): StoryEndingKey {
  const stats = gameState.storyStats;
  if (stats.criticalMistakes > 0) {
    return 'tragic';
  }
  if (stats.totalCorrect === stats.totalDecisions && stats.totalDecisions > 0) {
    return 'happy';
  }
  if (stats.majorMistakes > 0 || stats.totalDecisions === 0) {
    return 'partial';
  }
  return 'partial';
}

function renderEndingStats(els: StoryElements) {
  const { totalCorrect, totalDecisions, majorMistakes, criticalMistakes } = gameState.storyStats;
  els.endingStats.innerHTML = `
    <div class="story-score">
      <div><strong>Decisões corretas:</strong> ${totalCorrect} / ${totalDecisions}</div>
      <div><strong>Erros graves:</strong> ${majorMistakes}</div>
      <div><strong>Crises ignoradas:</strong> ${criticalMistakes}</div>
    </div>
  `;
}

function showEnding() {
  const els = getElements();
  if (!els) {
    return;
  }

  const endingKey = computeEndingKey();
  const ending = storyEndings[endingKey];

  els.endingTitle.textContent = ending.title;
  els.endingHighlight.className = `story-ending-highlight ${toneClass(ending.highlightTone)}`;
  els.endingHighlight.textContent = withDogName(ending.highlight);

  els.endingDetails.innerHTML = ending.sections
    .map(section => `
      <div class="story-ending-section">
        <h3>${section.heading}</h3>
        <p>${withDogName(section.body)}</p>
      </div>
    `)
    .join('');

  renderEndingStats(els);

  goToStep(4);
}

function resetStoryProgress() {
  currentPhaseIndex = 0;
  currentDecisionIndex = 0;
  optionSelected = false;
  resetStoryStats();
}

function handleNextClick() {
  if (!optionSelected) {
    return;
  }
  advanceStory();
}

export function initStoryEngine() {
  if (initialized) {
    return;
  }

  const els = getElements();
  if (!els) {
    return;
  }

  els.nextButton.addEventListener('click', handleNextClick);
  initialized = true;
}

export function startStoryExperience() {
  const els = getElements();
  if (!els) {
    return;
  }

  resetStoryProgress();
  renderCurrentDecision();
}
