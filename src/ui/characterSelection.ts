export function highlightCharacterCard(breed: string) {
  document.querySelectorAll<HTMLElement>('.character-card').forEach(card => {
    card.classList.remove('selected');
  });

  const cards = Array.from(document.querySelectorAll<HTMLElement>('.character-card'));
  const matchedCard = cards.find(card => {
    const heading = card.querySelector('h3');
    return heading?.textContent?.trim() === breed;
  });

  if (matchedCard) {
    matchedCard.classList.add('selected');
  }
}
