try{
    //console.log(a);
    console.log('Abrir um arquivo');
    console.log('Manipulei o arquio e deu erro');
    console.log('Fechei o arquivo');

    try{
        console.log(b);
    }
    catch(e){
        console.log('Deu erro');
    }
}
catch(e){
    confirm.log('Tratando o erro');
}finally{
    console.log('Finally sempre é executado');
}
// finally sempre é executado