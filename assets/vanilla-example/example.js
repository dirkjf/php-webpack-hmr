import './example.scss'

export default () => {
    const elm = document.createElement("div");
    elm.className = 'example-regular'
    elm.innerHTML = "<h2>This is a vanilla component</h2> <p>Edit <code>assets/regular-example/example.js</code> to see updates.</p>";
    return elm;
}