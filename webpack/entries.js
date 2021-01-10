/*
This file contains all the entries for Webpack (both for development and production).
It is recommended to group assets that are always used together with an index.js file (including style files).
For example, you can have an entry "Main" that includes all assets that are used everywhere on the front-end.
*/
const entries = {
      'main': "./assets/main/index.js",
      'vanilla-example': "./assets/vanilla-example/index.js",
      'react-example': "./assets/react-example/index.js"
};
module.exports = entries;