$(document).ready(()=>{
    $('.message').hide()
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00.000-000')
    $('#telefone').mask('(00) 00000-0000')
    $('form').on('submit',(e)=>{
        e.preventDefault()
        $('.container').slideUp()
        $('h1').hide()
        $('.message').show(1000)
    })
})