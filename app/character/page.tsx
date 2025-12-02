'use client';

import type { CharacterSize } from '@/lib/types';
import femaleNames from '@/data/femaleNames.json';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useGame } from '@/contexts/GameContext';
import CarameloImg from '@/public/assets/Caramelo.png';
import PastorImg from '@/public/assets/Pastor.png';
import PincherImg from '@/public/assets/Pincher.png';
import Image, { StaticImageData } from 'next/image';


const characterOptions: { size: CharacterSize; breed: string; gradient: string, sprite: StaticImageData }[] = [
  { size: 'small', breed: 'Pincher', gradient: 'linear-gradient(135deg, #8B4513, #A0522D)', sprite: PincherImg },
  { size: 'medium', breed: 'Caramelo', gradient: 'linear-gradient(135deg, #8B4513, #A0522D)', sprite: CarameloImg },
  { size: 'large', breed: 'Pastor Alemão', gradient: 'linear-gradient(135deg, #8B4513, #A0522D)', sprite: PastorImg },
];

export default function CharacterSelectionPage() {
  const { state, selectCharacter, setDogName } = useGame();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleRandomName = useCallback(() => {
    const randomName = femaleNames[Math.floor(Math.random() * femaleNames.length)] ?? 'Mel';
    setDogName(randomName);
  }, [setDogName]);

  useEffect(() => {
    if (!state.dogName) {
      handleRandomName();
    }
  }, [handleRandomName, state.dogName]);

  const handleNext = () => {
    if (!state.selectedCharacter) {
      setError('Por favor, escolha uma cadela!');
      return;
    }

    if (!state.dogName.trim()) {
      setError('Por favor, escolha um nome para sua cadela!');
      return;
    }

    setError(null);
    router.push('/info');
  };

  return (
    <main className="game-container">
      <section className="screen character-screen active">
        <div className="character-title">🐕 Escolha sua Cadela 🐕</div>
        <div className="name-input">
          <label>💝 Nome da sua cadela: </label>
          <div>
            <input
              type="text"
              value={state.dogName}
              onChange={event => setDogName(event.target.value)}
              placeholder="Digite um nome carinhoso..."
              maxLength={15}
            />
            <button type="button" onClick={handleRandomName}>
              🎲
            </button>
          </div>
        </div>

        <div className="character-options">
          {characterOptions.map(option => {
            const isSelected = state.selectedCharacter?.breed === option.breed;
            const handleSelect = () => selectCharacter(option.size, option.breed);
            return (
              <div
                key={option.breed}
                className={`character-card${isSelected ? ' selected' : ''}`}
                onClick={handleSelect}
                onKeyDown={event => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleSelect();
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div className="dog-sprite" style={{ background: option.gradient }}>
                  <Image src={option.sprite} alt={option.breed} width={80} height={80} />
                </div>
                <div className="character-info">
                  <h3>{option.breed}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <button type="button" className="pixel-btn" onClick={handleNext}>
          ➡️ PRÓXIMA ETAPA
        </button>

        {error && <p className="error-text">{error}</p>}
      </section>
    </main>
  );
}
