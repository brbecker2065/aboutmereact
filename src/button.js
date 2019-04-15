function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

module.exports = Button;
function simulateClick() {
  var event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true
  });
  var cb = document.getElementById("checkbox");
  var cancelled = !cb.dispatchEvent(event);
  if (cancelled) {
    // A handler called preventDefault.
    alert("cancelled");
  } else {
    // None of the handlers called preventDefault.
    alert("not cancelled");
  }
}
