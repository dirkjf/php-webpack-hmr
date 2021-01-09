import example from './example.js';

let element = example(); // Store the element to re-render on changes

const elementContainer = document.getElementById('vanilla-example');
elementContainer.appendChild(element);

if (module.hot) {
  module.hot.accept('./example.js', function () {
    console.log('Accepting the update in example.js');
    elementContainer.removeChild(element);
    element = example(); // Re-render the element.
    elementContainer.appendChild(element);
  })
}