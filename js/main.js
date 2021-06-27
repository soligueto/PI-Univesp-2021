$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
});

//variáveis por id para manipulação
//etapas
var etapa1 = document.getElementById('etapa1')
var etapa2 = document.getElementById('etapa2')
var etapa3 = document.getElementById('etapa3')
var etapa4 = document.getElementById('etapa4')
var etapa5 = document.getElementById('etapa5')
var etapa6 = document.getElementById('etapa6')
var etapa7 = document.getElementById('etapa7')
var etapa8 = document.getElementById('etapa8')
var etapa9 = document.getElementById('etapa9')
var etapa10 = document.getElementById('etapa10')
//início
var apresentcao = document.getElementById('apresentcao')
var modeloCanvas = document.getElementById('modeloCanvas')
//==========================
//escondendo as etapas
etapa1.style.display = "none";
etapa2.style.display = "none";
etapa3.style.display = "none";
etapa4.style.display = "none";
etapa5.style.display = "none";
etapa6.style.display = "none";
etapa7.style.display = "none";
etapa8.style.display = "none";
etapa9.style.display = "none";
etapa10.style.display = "none";
modeloCanvas.style.display = "none"
//==========================












function enviar() {
    alert("Deu certo !")
}

var tbn = document.getElementById('etapa1')
//por enquanto inserir o id na função para funcionar
function btnanin() {
    style.color = "red"   
}

function btnanin2() {
    style.color = "black"
}


//exemplo de como ocultar deteminada div
// var btn = document.getElementById('btn')

// btn.addEventListener("click", function(){
//     var corpo = document.getElementById('corpo')
    
//     if(corpo.style.display === "block") {
//         div.style.display = "block";
//     } else {
//       corpo.style.display = "none";
//     }
//     alert("Deu certo !")
// });

//============================================
// Função para início das respostas
// após clicar inicia etapa 1
var btn1 = document.getElementById('comecar')

btn1.addEventListener("click", function(){
    
    apresentcao.style.display = "none"
    etapa1.style.display = "block"
});
//============================================

//============================================
// estilo das fontes
// etapa 1
var env1 = document.getElementById('env1')

env1.addEventListener("click", function(){
    alert("Enviado")
    etapa1.style.display = "none"
    etapa2.style.display = "block"
});

//============================================
// estilo das fontes
// etapa 2
var env2 = document.getElementById('env2')

env2.addEventListener("click", function(){
    alert("Enviado")
    etapa2.style.display = "none"
    etapa3.style.display = "block"
});

//============================================
// estilo das fontes
// etapa 3
var env3 = document.getElementById('env3')

env3.addEventListener("click", function(){
    alert("Enviado")
    etapa3.style.display = "none"
    etapa4.style.display = "block"
});

//============================================
// estilo das fontes
// etapa 4
var env4 = document.getElementById('env4')

env4.addEventListener("click", function(){
    alert("Enviado")
    etapa4.style.display = "none"
    etapa5.style.display = "block"
});

//============================================
// estilo das fontes
// etapa 5
var env5 = document.getElementById('env5')

env5.addEventListener("click", function(){
    alert("Enviado")
    etapa5.style.display = "none"
    etapa6.style.display = "block"
});

//============================================
// estilo das fontes
// etapa 6
var env6 = document.getElementById('env6')

env6.addEventListener("click", function(){
    alert("Enviado")
    etapa6.style.display = "none"
    etapa7.style.display = "block"
});

//============================================
// estilo das fontes
// etapa 7
var env7 = document.getElementById('env7')

env7.addEventListener("click", function(){
    alert("Enviado")
    etapa7.style.display = "none"
    etapa8.style.display = "block"
});

//============================================
// estilo das fontes
// etapa 8
var env8 = document.getElementById('env8')

env8.addEventListener("click", function(){
    alert("Enviado")
    etapa8.style.display = "none"
    etapa9.style.display = "block"
});

//============================================
// estilo das fontes
// etapa 9
var env9 = document.getElementById('env9')

env9.addEventListener("click", function(){
    alert("Enviado")
    etapa9.style.display = "none"
    etapa10.style.display = "block"
});

//============================================
// estilo das fontes
// etapa 10
var envModel = document.getElementById('envModel')

envModel.addEventListener("click", function(){
    alert("Enviado")
    etapa10.style.display = "none"
    modeloCanvas.style.display = "block"
});

//============================================
// botão enviar página sbore
var envSobre = document.getElementById('envSobre') 

envSobre.addEventListener("click", function(){
    alert("Obrigado !")
});

