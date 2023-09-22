export const getRandomFunFact = () => {
  const funFactList: string[] = [
    'Honey never spoils, lasting for millennia.',
    'Octopuses have three hearts.',
    'The shortest war lasted 38-45 minutes.',
    'Strawberries have more vitamin C than oranges.',
    "A group of flamingos is a 'flamboyance.'",
    'The Eiffel Tower can be 15 cm taller in summer.',
    'Penguins propose with a pebble gift.',
    "Bananas are berries; strawberries aren't.",
    'Sneezes can exceed 100 miles per hour.',
    'Your taste buds regenerate every 10-14 days.',
  ]

  return funFactList[Math.floor(Math.random() * funFactList.length)]
}
