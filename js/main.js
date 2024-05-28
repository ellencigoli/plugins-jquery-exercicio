$(document).ready(function () {
    // Inicializa o carrossel
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    // Máscaras para os campos de entrada
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '01234-567'
    });

    // Validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome completo"
            },
            email: {
                required: "Por favor, insira seu email",
                email: "Por favor, insira um email válido"
            },
            telefone: {
                required: "Por favor, insira seu telefone"
            },
            cpf: {
                required: "Por favor, insira seu CPF"
            },
            endereco: {
                required: "Por favor, insira seu endereço completo"
            },
            cep: {
                required: "Por favor, insira seu CEP"
            }
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (event, validator) {
            alert("Por favor, preencha todos os campos corretamente para prosseguir com a compra!");
        }
    });
});
