document.addEventListener("DOMContentLoaded", () => {
  let index_typer = 0;
  let typers = document.querySelectorAll(".text-typer span");

  document.documentElement.style.setProperty(
    "--text-typer-width",
    typers[index_typer].getBoundingClientRect().width + "px"
  );
  document.documentElement.style.setProperty(
    "--text-typer-iteration",
    typers[index_typer].innerHTML.length
  );

  const typerAnimation = document.querySelector(".text-typer");

  typers.forEach((typer, i) => {
    i !== index_typer
      ? (typer.style.visibility = "hidden") &&
        (typer.style.position = "absolute")
      : null;
  });

  typerAnimation.addEventListener("animationiteration", () => {
    index_typer = (index_typer + 1) % typers.length;
    document.documentElement.style.setProperty(
      "--text-typer-width",
      typers[index_typer].getBoundingClientRect().width + "px"
    );
    document.documentElement.style.setProperty(
      "--text-typer-iteration",
      typers[index_typer].innerHTML.length
    );
    typers.forEach((typer, i) => {
      if (i === index_typer) {
        typer.style.visibility = "visible";
        typer.style.position = "relative";
      } else {
        typer.style.visibility = "hidden";
        typer.style.position = "absolute";
      }
    });
  });
});
