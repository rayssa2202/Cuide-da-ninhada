import { nomes_cadelas } from './femaleNames.json';
import { goToStep } from './navigation';
import { gameState, selectCharacter as updateCharacterSelection, setDogName } from './state';
import type { CharacterSize } from './types';
import { highlightCharacterCard } from './ui/characterSelection';

export function selectCharacter(size: CharacterSize, breed: string) {
  highlightCharacterCard(breed);
  updateCharacterSelection(size, breed);
}

export function completeStep1() {
  const input = document.getElementById('dogName') as HTMLInputElement | null;
  const nameInput = (input?.value || '').trim();

  if (!gameState.selectedCharacter) {
    alert('Por favor, escolha uma cadela!');
    return;
  }

  if (!nameInput) {
    alert('Por favor, digite um nome para sua cadela!');
    return;
  }

  setDogName(nameInput);

  const span = document.getElementById('selectedDogName');
  if (span) {
    span.textContent = gameState.dogName;
  }

  goToStep(2);
}

export function showInfo() {
  alert('🎮 SOBRE O JOGO\n\nEste é um jogo educativo sobre hipocalcemia em cadelas grávidas e lactantes.\n\n🎯 Você aprenderá:\n• Como identificar sintomas\n• Tratamentos adequados\n• Prevenção da doença\n• Cuidados durante gravidez e lactação\n\n📚 Baseado em conhecimento veterinário real!');
}

export function showCredits() {
  alert('⭐ CRÉDITOS\n\n🎮 Jogo Educativo: Cuide da Ninhada\nDesenvolvido para conscientização sobre hipocalcemia\n\n🎨 Design: Pixel art interativo\n📚 Conteúdo: Baseado em conhecimento veterinário\n🎯 Objetivo: Educação e prevenção\n\n"A prevenção é o melhor remédio!"');
}

export function randomName() {
  const nameInput = document.getElementById('dogName') as HTMLInputElement | null;
  if (nameInput) {
    nameInput.value = nomes_cadelas[Math.floor(Math.random() * nomes_cadelas.length)];
  }
}

export function setupTouchInteractions() {
  const tappables = document.querySelectorAll<HTMLElement>('button, .character-card');
  tappables.forEach(element => {
    element.addEventListener('touchstart', event => {
      const target = event.currentTarget as HTMLElement | null;
      if (target) {
        target.style.transform = 'scale(0.95)';
      }
    }, { passive: true });

    element.addEventListener('touchend', event => {
      const target = event.currentTarget as HTMLElement | null;
      if (target) {
        target.style.transform = '';
      }
    }, { passive: true });

    element.addEventListener('touchend', event => {
      event.preventDefault();
      const target = event.currentTarget as HTMLElement | null;
      target?.click();
    });
  });

  const nameInput = document.getElementById('dogName') as HTMLInputElement | null;
  if (nameInput) {
    nameInput.addEventListener('focus', () => {
      setTimeout(() => {
        nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    });
  }
}
