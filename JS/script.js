let htmlEditor = CodeMirror(document.getElementById("htmlEditor"), {
  mode: "xml",
  theme: "dracula",
  lineNumbers: true,
  htmlMode: true,
  lineWrapping: true,
});

let cssEditor = CodeMirror(document.getElementById("cssEditor"), {
  mode: "css",
  theme: "dracula",
  lineNumbers: true,
  lineWrapping: true,
});

function ActualitzarVista() {
  let htmlContent = htmlEditor.getValue(),
    cssContent = cssEditor.getValue();
  let $prevista = document.getElementById("vista");
  $prevista.innerHTML = htmlContent;
  let styleTag = document.createElement("style");
  styleTag.innerHTML = cssContent;
  let existeixestil = $prevista.querySelector("style");
  if (existeixestil) {
    $prevista.removeChild(existeixestil);
  }
  $prevista.appendChild(styleTag);
}

htmlEditor.on("change", ActualitzarVista);
cssEditor.on("change", ActualitzarVista);

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code"),
    css = params.get("css"),
    id = params.get("id");

  htmlEditor.setValue(code);
  cssEditor.setValue(css);

  if (id != null) {
    CrearButton(id);
  }
});
ActualitzarVista();

function CrearButton(id) {
  document.body.innerHTML += `<a class="btn-back-edit" href="index.html#${id}"><<</a>`;
}
