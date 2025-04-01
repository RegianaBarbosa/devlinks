function toggleTheme() {
  const html = document.documentElement

  /*mudar theme*/
  // if (html.classList.contains("light-theme")) {
  //   html.classList.remove("light-theme")
  // } else {
  //   html.classList.add("light-theme")
  // }

  html.classList.toggle("light-theme")

  /* mudar imagem */
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light-theme")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Regiana Cruz, uma mulher de cabelo castanho cacheado preso, vestindo um moletom cinza e com óculos de pixels."
    )
  } else {
    //se não tiver light-theme adicionar a imagem padrão

    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Regiana Cruz, uma mulher de cabelo castanho cacheado preso, vestindo um moletom cinza."
    )
  }
}
