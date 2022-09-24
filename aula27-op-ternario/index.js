const pontuacaoUsuario = 1999;

//Desta maneia não preciso de if, pois a variavel defina qual valor usar. - se verdadeiro aparece primeira condição, se falso aparece a segunda
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

//se cor for numa ele pega a string 'Preta', se não ele pega a cor inserida.
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao);


