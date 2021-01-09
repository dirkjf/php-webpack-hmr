import './example.scss'

export default () => {
    const elm = document.createElement("div");
    elm.className = 'example-regular'
    elm.innerHTML = "This is a vanilla component. It lives in <code>assets/regular-example/example.js</code>.";
    return elm;
}