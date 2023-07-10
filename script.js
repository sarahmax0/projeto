function toggleMode() {
    const html = document.documentElement

    //se tá no modo light, retira o modo light. (else) se não estiver no modo light adiciona o light
    //if(html.classList.contains('light')) {
    //    html.classList.remove('light')
    //} else {
    //    html.classList.add('light')
    //}

    //mesmo código, mas simplificado
    html.classList.toggle('light')


    //pegar a tag img
    //const img = document.querySelector("#profile img")

    //substituir a imagem
    //if(html.classList.contains('light')) {
        //se tiver light mode, adicionar a imagem light
        //        img.setAttribute('src', './assets/avatar.png')
    //} else {
        //se tiver sem light mode, manter a imagem normal
      //  img.setAttribute('src', './assets/avatar.png')
    //}
}