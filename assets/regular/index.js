import example from './example.js';

let element = example(); // Store the element to re-render on changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./example.js', function () {
    console.log('Accepting the update in example.js');
    document.body.removeChild(element);
    element = example(); // Re-render the element.
    document.body.appendChild(element);
  })
}