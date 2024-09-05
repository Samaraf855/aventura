const avanca = document.querySelectorAll('.bnt-proximo');

avanca.forEach(button =>{ 
    button.addEventListener('click', function(){
        const atual=document.querySelector('.ativo');
        const proximmopasso= 'passo-'+ this. getAttribute('data-proximo');

        atual.classList.romove('ativo');
        document.getElementById(proximmopasso).classList.add('ativo');
    })
 }
) 