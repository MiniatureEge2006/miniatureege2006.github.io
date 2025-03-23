document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-commands');
  const commandList = document.getElementById('command-list');

  toggleButton.addEventListener('click', function () {
    commandList.classList.toggle('visible');
    if (commandList.classList.contains('visible')) {
      toggleButton.textContent = 'Hide Commands';
    } else {
      toggleButton.textContent = 'Show Commands';
    }
  });

  const typewriterElements = document.querySelectorAll('.typewriter');
  typewriterElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 2}s`;

    const typingDuration = parseFloat(window.getComputedStyle(element).animationDuration) * 1000;
    setTimeout(() => {
      element.classList.add('typing-done');
    }, typingDuration + (index * 2000));
  });

  const buttons = document.querySelectorAll('button, .invite-button, .support-button');
  const clickSound = document.getElementById('click-sound');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      clickSound.currentTime = 0;
      clickSound.play();
    });
  });
});
