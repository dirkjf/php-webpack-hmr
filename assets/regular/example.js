import './example.scss'

export default () => {
    const elm = document.createElement("div");
    elm.className = 'example'
    elm.innerHTML = "This lives in <code>assets/regular/example.js</code>. If you edit this file or the corresponding SCSS-file, this module will hot reload.";
    return elm;
}