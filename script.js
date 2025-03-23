document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle-commands');
  const commandList = document.getElementById('command-list');

  toggleButton.addEventListener('click', function() {
    commandList.classList.toggle('visible');
    if (commandList.classList.contains('visible')) {
      toggleButton.textContent = 'Hide Commands';
    } else {
      toggleButton.textContent = 'Show Commands';
    }
  });
});
