$(document).ready(function() {
	var largura;
	var slide;
	var slides;
	var ul;
	var posicao;
	slide = 0;
	slides = $('.slider-li').length;
	largura = $(window).width();
	ul = slides * largura;

	$('.slider-ul').css('width', ul);

	$('.seta_direita').click(function(){
		if(slide < (slides - 1)){
			slide ++;
			posicao = -(slide * largura);
			$('.slider-ul').css('left', posicao);
		}
	});
	$('.seta_esquerda').click(function(){
		if(slide > 0){
			slide --;
			posicao = -(slide * largura);
			$('.slider-ul').css('left', posicao);
		}
	});

	var largura2;
	var slide2;
	var slides2;
	var ul2;
	var posicao2;
	slide2 = 0;
	slides2 = $('.pel-li').length;
	largura2= $('.pel-li').width();
	ul2 = slides2 * largura2;

	$('.pel-ul').css('width', ul2);

	$('.seta2_direita').click(function(){
		if(slide2 < (slides2 - 4)){
			slide2 ++;
			posicao2 = -(slide2 * largura2);
			$('.pel-ul').css('left', posicao2);
		}
	});
	$('.seta2_esquerda').click(function(){
		if(slide2 > 0){
			slide2 --;
			posicao2 = -(slide2 * largura2);
			$('.pel-ul').css('left', posicao2);
		}
	});

	var largura3;
	var slide3;
	var slides3;
	var ul3;
	var posicao3;
	slide3 = 0;
	slides3 = $('.jog-li').length;
	largura3= $('.jog-li').width();
	ul3 = slides3 * largura3;

	$('.jog-ul').css('width', ul3);

	$('.seta3_direita').click(function(){
		if(slide3 < (slides3 - 4)){
			slide3 ++;
			posicao3 = -(slide3 * largura3);
			$('.jog-ul').css('left', posicao3);
		}
	});
	$('.seta3_esquerda').click(function(){
		if(slide3 > 0){
			slide3 --;
			posicao3 = -(slide3 * largura3);
			$('.jog-ul').css('left', posicao3);
		}
	});

});