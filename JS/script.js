if(window.SimpleSlide){
new SimpleSlide({
  slide: "quote",
  time:5000
});
new SimpleSlide({
  slide: "portifolio",
  time:5000,
  nav: true
});
}

if(window.SimpleAnime) {
new SimpleAnime();
}

if(window.SimpleForm){
new SimpleForm({
  form:"formphp", //seletor de formulário
  button:"#enviar", //seletor do botão
  erro: "<div id='form-erro'><h2> Erro no envio!</h2><p>Um erro ocorreu, tente para o email mariocarvalho755@gmail.com</p></div>",
  sucesso:"<div id='form-sucesso><h2>Formulario enviado com sucesso</h2><p> em breve eu entro em contato</p></div>",
});
}