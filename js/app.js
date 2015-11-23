$('document').ready(function(){

  $(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

})https://developer.mozilla.org/pt-BR/docs/Web/CSS/border-right-style

function insertNews(){

    var news = {[
            'title': 'Noticia 1',
            'content': 'conteudo da noticia 1',
            'link': 'www.linknoticia1.com.br'
        ],[
        'title': 'Noticia 3',
            'content': 'conteudo da noticia 3',
            'link': 'www.linknoticia3.com.br'
        ],[
            'title': 'Noticia 3',
            'content': 'conteudo da noticia 3',
            'link': 'www.linknoticia3.com.br'
        ]
    }
}