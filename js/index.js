artigo.innerHTML = openPage('artigo', 'main.html')

const headerList = document.querySelectorAll('li>a')
headerList.forEach((navButton) => navButton.addEventListener("click", () => {
    document.querySelector('.selected').classList.remove('selected')
    navButton.classList.add('selected')
}
))

$('.formulario').hide(0).delay(15000).css("right","5px").slideDown(1000)

$('.x').click(function(){
    $('.formulario').slideUp(1000)
})


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
