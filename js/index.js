artigo.innerHTML = openPage('artigo', 'main.html')

const headerList = document.querySelectorAll('li>a')
headerList.forEach((navButton) => navButton.addEventListener("click", () => {
    document.querySelector('.selected').classList.remove('selected')
    navButton.classList.add('selected')
}
))


// AJAX
function openPage(tagName, pageHTML) {
    pageHTML = `./pages/${pageHTML}`
    var xml = new XMLHttpRequest()
    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            document.getElementById(tagName).innerHTML = xml.responseText
        }
    }
    
    xml.open("GET", pageHTML, true)
    xml.send()
    
    $('article')
    .hide()
    .fadeIn(700)

}


        // // Jquery é universalmente referenciado com o dólar "$"
        // $('div').hide(1000).show(5000).fadeOut(5000) // seletor
        // console.log($('div').get(0))
        // console.log($.isEmptyObject({nome: null}))
        // console.log($.isEmptyObject({}))
        // console.log(jQuery.inArray(3, [1, 2, 3]))
        // const array1 = [55, 44, 33] // retorna posição do array, caso não esteja presente, retorna -1
        // console.log($.inArray(44, array1))
        // console.log($.inArray(45, array1)) // retorna -1. Não está presente no array.
        // $.fn.bgColor = function (){
        //     this.css('background-color', 'green')
        //     return this
        // }
        // $('body').bgColor().fadeOut(1000)