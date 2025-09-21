function launchGame(gameId) {
  const urlMap = {
    'subway-surfers': 'https://now.gg/apps/sybo/6886/subway-surfers.html',
    'roblox': 'https://now.gg/apps/roblox-corporation/5349/roblox.html'
  };
  if (urlMap[gameId]) {
    window.open(urlMap[gameId], '_blank');
  } else {
    alert('Game not available yet.');
  }
}
