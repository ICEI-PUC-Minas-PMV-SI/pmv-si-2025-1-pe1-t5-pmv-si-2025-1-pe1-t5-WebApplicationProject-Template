// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "contatos": [
        {
            "id": 1,
            "nome": "João Paulo",
            "cidade": "Belo Horizonte",
            "tipo": "Reformas",
            "email": "joaojp@csg.com.br",
            "celular": "(31) 99999-8888",
            "ocupacao": "Eletricista"
        },
        {
            "id": 2,
            "nome": "Maria Silva",
            "cidade": "Betim",
            "tipo": "Limpeza e conservação",
            "email": "mariasilva@csg.com.br",
            "celular": "(31) 99888-2222",
            "ocupacao": "Faxineiro(a)"
        },
        {
            "id": 3,
            "nome": "Regina Santos",
            "cidade": "Contagem",
            "tipo": "Serviços domésticos",
            "email": "regisantos@csg.com.br",
            "celular": "(31) 99777-2233",
            "ocupacao": "Babá"
        },
        {
            "id": 4,
            "nome": "José Carlos",
            "cidade": "Belo Horizonte",
            "tipo": "Outros serviços",
            "email": "jcpersonal@csg.com.br",
            "celular": "(31) 98899-4455",
            "ocupacao": "Personal trainner"
        },
        {
            "id": 5,
            "nome": "Carlos Eduardo",
            "cidade": "Contagem",
            "tipo": "Reformas",
            "email": "cadu@csg.com.br",
            "celular": "(31) 99988-7766",
            "ocupacao": "Pintor"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.contatos.length != 0)
      novoId = db.contatos[db.contatos.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "celular": contato.celular,
        "cidade" : contato.cidade,
        "tipo": contato.tipo,
        "ocupacao": contato.ocupacao
    };

    // Insere o novo objeto no array
    db.contatos.push(novoContato);
    alert('Cadastro realizado com sucesso. A partir de agora, os clientes poderão entrar em contato com você para solicitar seus serviços.')
    //displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.contatos.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.contatos[index].nome = contato.nome,
    db.contatos[index].email = contato.email,
    db.contatos[index].celular = contato.celular,
    db.contatos[index].cidade = contato.cidade,
    db.contatos[index].tipo = contato.tipo,
    db.contatos[index].ocupacao = contato.ocupacao

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.contatos = db.contatos.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}
