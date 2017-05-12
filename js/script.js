var botaoMenuHamburguer = document.querySelector(".botao.menuHamburguer");

function abrirMenu(){
	// declarar uma variável, pegar navegacaoPrimaria

var menu = document.querySelector("#navegacaoPrimaria");
// se estiver com a className "menuHorizontal visivel" fecha o dropdown
	if (menu.className == "menuHorizontal visivel"){
	menu.className = "menuHorizontal";

	// fechar o Menu Horizontal 
	}else{
		// tornar a navegacaoPrimaria visível, adicionar a classe visível
	
	menu.className = "menuHorizontal visivel";
	}
}
botaoMenuHamburguer.onclick = abrirMenu;




// var botaoAmei = document.querySelector(".botao.amei");

// function mudarCorBotaoAmei(){
	
// 	if (botaoAmei.className == "botao amei red"){
// 		botaoAmei.className = "botao amei";
// 	}else{
// 		botaoAmei.className = "botao amei red";
// 	}
// }

// botaoAmei.onclick = mudarCorBotaoAmei;


//retorna uma Array de botão:
var botoesAmei = document.querySelectorAll(".botao.amei");

function mudarCorBotaoAmei(){

	if (this.className == "botao amei red"){
		this.className = "botao amei";
	}else{
		this.className = "botao amei red";
	}
}

botoesAmei[0].onclick = mudarCorBotaoAmei;
botoesAmei[1].onclick = mudarCorBotaoAmei;
botoesAmei[2].onclick = mudarCorBotaoAmei;



// SLIDER

function criarUmBullet(){
	// pegar a ul onde vai ser inserida a li
	var bulletUl = document.querySelector(".bullets ul");
	// criando a li
	var li = document.createElement("li");
	// criando um button para inserir no li
	var button = document.createElement("button");
	// adicionar a classe dos bullets
	button.className = "bullet";
	button.setAttribute( )
	// inserindo o button na li
	li.appendChild(button);
	// inserido li na ul dos bullets (agora sim está no Html)
	bulletUl.appendChild(li);
}

function criarBulletsNoSlider(){
// pegando todos os slides qie estão dentro de #slider
var slides = document.querySelectorAll("#slider .slide");
var quantidadesSlides = slides.length;
// Criar os BULLETS
// começa com zero e zero já é um slide. para cada bullet, o i=o significa que o contador começa no zero; condição (se i é menor que a quantidade de slides); i++ soma 1 no i
for (var i =0; i < quantidadesSlides; i++){
	// criar um bullet
	criarUmBullet();
}
}

// Funções para os botões
// botão da seta esquerda
function voltarSlide(){

}
// função para seta direita
function avancarSlide(){
// adicionando nas setas
var botaoVoltar = document.querySelector(".seta.esquerda");
botaoVoltar.onclick = voltarSlide; 
var botaoAvancar = document.querySelector(".seta.direita")
botaoAmei.onclick = avancarSlide;
}

function adicionarOnclickNosBotoes(){
	// adicionar nas setas

	// adicionar nos bullets

}
function alternarSlidesAutomaticamente(){

}

// VERIFICAR SE O SLIDE EXISTE
// SE SLIDER É IGUAL A NULL, ELE NÃO EXITE
var slider = document.querySelector("#slider");
if (slider != null) {
// CRIAR OS BULLETS DE ACORDO COM A QUANTIDADE DE SLIDES
	criarBulletsNoSlider();
	adicionarOnclickNosBotoes();
	alternarSlidesAutomaticamente();
}