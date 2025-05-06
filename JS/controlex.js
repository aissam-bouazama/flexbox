document.addEventListener("submit", (e) => {
  e.preventDefault();
  const code = _Gethtml(e),
    css = _GetCss(e),
    id = e.target.id;

  window.location.href = `editor.html?code=${encodeURIComponent(
    code
  )}&css=${encodeURIComponent(css)}&id=${id}`;
});

function _Gethtml(e) {
  return e.target.codehtml.value;
}

function _GetCss(e) {
  return e.target.codecss.value;
}
