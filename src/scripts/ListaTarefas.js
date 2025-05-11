var listaHtml = document.getElementById("lista");
var inputs = document.querySelectorAll("input[type='checkbox']");
var btnAbrirFiltros = document.getElementById("btnFiltros");
var btnAdd = document.getElementById("btnAdd");
var barraInput = document.getElementById("pesquisa");

var tarefas = JSON.parse(localStorage.getItem("tarefas"));

var menuInferior = document.getElementById("menuInferior");
var menuEscondido = document.getElementById("menuEscondido");

var btnMenu = document.getElementById("btnMenu");

btnMenu.addEventListener("click", () => {
    if (menuInferior.style.height == "100%") {
        menuInferior.style.height = "8%";
        menuEscondido.style.display = "none";
    }
    else {
        menuInferior.style.height = "100%";
        menuEscondido.style.display = "flex";
    }

})

function fecharModal() {
    let modal = document.getElementById("modal");
    modal.remove();
}

function preencherLista(query) {
    let filtro = document.getElementById("btnFiltros").innerHTML;
    if (filtro === "Filtros") {
        filtro = null;
    }
    listaHtml.innerHTML = "";
    tarefas = JSON.parse(localStorage.getItem("tarefas"));
    if (tarefas) {
        conteudo = "";
        for (let i = 0; i < tarefas.length; i++) {
            if (filtro) {
                if (tarefas[i].categoria === filtro) {
                    if (query === "" || query == null) {
                        conteudo += `
                        <div id="${tarefas[i].id}" class="tarefa">
                            <input class="check" type="checkbox"
                            `;
                        if (tarefas[i].checked) conteudo += ` checked`;
                        conteudo += ` />
                            <div class="textoTarefa">
                                <div class="nodoTexto nome">${tarefas[i].nome}</div>
                                <div class="nodoTexto">${tarefas[i].dataadd.slice(0, 10).split('-').reverse().join('/')}</div>
                                <div class="nodoTexto">${tarefas[i].categoria}</div>
                                <div class="nodoTexto">${tarefas[i].datavenc.slice(0, 10).split('-').reverse().join('/')}</div>
                            </div>
                        </div>
                        `;
                    }
                    else if (tarefas[i].nome.toLowerCase().includes(query.toLowerCase()) || tarefas[i].desc.toLowerCase().includes(query.toLowerCase())) {
                        conteudo += `
                        <div id="${tarefas[i].id}" class="tarefa">
                            <input class="check" type="checkbox"`;
                        if (tarefas[i].checked) conteudo += ` checked`;
                        conteudo += ` />
                            <div class="textoTarefa">
                                <div class="nodoTexto nome">${tarefas[i].nome}</div>
                                <div class="nodoTexto">${tarefas[i].dataadd.slice(0, 10).split('-').reverse().join('/')}</div>
                                <div class="nodoTexto">${tarefas[i].categoria}</div>
                                <div class="nodoTexto">${tarefas[i].datavenc.slice(0, 10).split('-').reverse().join('/')}</div>
                            </div>
                        </div>
                            `;
                    }
                }
            }
            else if (query === "" || query == null) {
                conteudo += `
                <div id="${tarefas[i].id}" class="tarefa">
                    <input class="check" type="checkbox"
                    `;
                if (tarefas[i].checked) conteudo += ` checked`;
                conteudo += ` />
                    <div class="textoTarefa">
                        <div class="nodoTexto nome">${tarefas[i].nome}</div>
                        <div class="nodoTexto">${tarefas[i].dataadd.slice(0, 10).split('-').reverse().join('/')}</div>
                        <div class="nodoTexto">${tarefas[i].categoria}</div>
                        <div class="nodoTexto">${tarefas[i].datavenc.slice(0, 10).split('-').reverse().join('/')}</div>
                    </div>
                </div>
                `;
            }
            else if (tarefas[i].nome.toLowerCase().includes(query.toLowerCase()) || tarefas[i].desc.toLowerCase().includes(query.toLowerCase())) {
                conteudo += `
                <div id="${tarefas[i].id}" class="tarefa">
                    <input class="check" type="checkbox"`;
                if (tarefas[i].checked) conteudo += ` checked`;
                conteudo += ` />
                    <div class="textoTarefa">
                        <div class="nodoTexto nome">${tarefas[i].nome}</div>
                        <div class="nodoTexto">${tarefas[i].dataadd.slice(0, 10).split('-').reverse().join('/')}</div>
                        <div class="nodoTexto">${tarefas[i].categoria}</div>
                        <div class="nodoTexto">${tarefas[i].datavenc.slice(0, 10).split('-').reverse().join('/')}</div>
                    </div>
                </div>
                    `;
            }
        }
        if (!(conteudo.length > 0)) {
            conteudo = `<div id = "divVazio"> <p id="semTarefas"><strong>Nada encontrado</strong></p></div> `;
        }
        listaHtml.innerHTML = conteudo;
        var checkboxes = document.querySelectorAll(".check");
        checkboxes.forEach(box => {
            box.addEventListener("click", () => {
                trocarEstado(box.parentNode.id);
            })
        })
        var btnTarefas = document.querySelectorAll(".nome");
        btnTarefas.forEach(tarefa => {
            tarefa.addEventListener("click", () => {
                abrirModalGenerico(tarefa.parentNode.parentNode.id);
            })
        })
    }
    else {
        listaHtml.innerHTML = `<div id = "divVazio"> <p id="semTarefas"><strong>Não há tarefas registradas</strong></p></div> `;
    }
}


window.addEventListener("load", () => {
    preencherLista();
});

barraInput.addEventListener("input", () => {
    let query = document.getElementById("pesquisa").value;
    preencherLista(query);
});

btnAbrirFiltros.addEventListener("click", () => {
    abrirModalFiltros();
})

btnAdd.addEventListener("click", () => {
    abrirModalTarefas();
});

function abrirModalGenerico(id) {
    let tarefas = JSON.parse(localStorage.getItem("tarefas"));
    let modal = ``;
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].id == id) {
            modal = `
                <div id="modal" class="modalCriacao">
                    <div id="corpoModal">
                        <h3>Tarefa</h3>
                        <input readonly class="barraInput" id="nomeModal" maxlength="13" value="${tarefas[i].nome}">
                        <textarea readonly class="barraInput" id="descModal" maxlength="200">${tarefas[i].desc}</textarea> 
                        <div id="divTipo">
                            <label>Tipo</label>
                            <select disabled id="selectTipos">
                                <option value="" disabled selected>${tarefas[i].categoria}</option>
                                <option>Estudo</option>
                                <option>Lazer</option>
                                <option>Academia</option>
                                <option>Trabalho</option>
                                <option>Outro</option>
                            </select>
                        </div>
                        <div id="divDatas">
                            <div>
                                <label>Data Inicio</label>
                                <input disabled value="${tarefas[i].dataadd}" class="inputData" id="dataAddModal" type="date">
                            </div>
                            <div>
                                <label>Data Fim</label>
                                <input disabled value="${tarefas[i].datavenc}" class="inputData" id="dataVencModal" type="date">
                            </div>
                        </div>
                        <div id="divBotoes">
                            <button id="btnEdit" type="submit" class="btn">Editar</button>
                            <button class="btn btnArquivar" id="btnArquivar">Arquivar</button>
                            <button class="btn btnFechar" id="btnFechar">Fechar</button>
                        </div>
                    </div>
                </div>`;
        }
    }
    let div = document.createElement('div');
    let header = document.querySelector('header');
    div.innerHTML = modal;
    document.body.insertBefore(div, header);
    btnEdit = document.getElementById("btnEdit");
    btnEdit.addEventListener("click", () => {
        editarTarefa(btnEdit, id);
    });
    btnArquivar = document.getElementById("btnArquivar");
    btnArquivar.addEventListener("click", () => {
        arquivarTarefa(id);
    });
    btnFechar = document.getElementById("btnFechar");
    btnFechar.addEventListener("click", () => {
        fecharModal();
    });
}

function arquivarTarefa(id) {
    let tarefas = JSON.parse(localStorage.getItem("tarefas"));
    var novaArquivada = {};
    for(let i = 0; i < tarefas.length; i++){
        if(tarefas[i].id == id){
            var index = tarefas.indexOf(tarefas[i]);
            tarefas.splice(index, 1);
            novaArquivada = {
                idUsuario: tarefas[i].idUsuario,
                id: tarefas[i].id,
                checked: tarefas[i].checked,
                nome: tarefas[i].nome,
                desc: tarefas[i].desc,
                categoria: tarefas[i].categoria,
                dataadd: tarefas[i].dataadd,
                datavenc: tarefas[i].datavenc
            }
        }
    }
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    fecharModal();
    var arquivadas = [];
    if (JSON.parse(localStorage.getItem("arquivadas"))) {
        arquivadas = JSON.parse(localStorage.getItem("arquivadas"));
    }
    arquivadas.push(novaArquivada);
    localStorage.setItem("arquivadas", JSON.stringify(arquivadas));
    preencherLista();
}

function editarTarefa(btnEdit, id) {
    if (document.getElementById("nomeModal").readOnly) {
        document.getElementById("nomeModal").readOnly = false;
        document.getElementById("descModal").readOnly = false;
        document.getElementById("selectTipos").disabled = false;
        document.getElementById("dataAddModal").disabled = false;
        document.getElementById("dataVencModal").disabled = false;
        btnEdit.style.backgroundColor = "#156527";
        btnEdit.innerHTML = "Confirmar";
    }
    else {
        let nomeModal = document.getElementById("nomeModal").value;
        let descModal = document.getElementById("descModal").value;
        let selectTipos = document.getElementById("selectTipos").value;
        let dataAddModal = document.getElementById("dataAddModal").value;
        let dataVencModal = document.getElementById("dataVencModal").value;

        if (dataAddModal > dataVencModal) {
            alert("A data de início não pode ser depois da data de término!");
        }
        else {
            document.getElementById("nomeModal").readOnly = true;
            document.getElementById("descModal").readOnly = true;
            document.getElementById("selectTipos").disabled = true;
            document.getElementById("dataAddModal").disabled = true;
            document.getElementById("dataVencModal").disabled = true;
            btnEdit.style.backgroundColor = "#227852";
            btnEdit.innerHTML = "Editar";
            let tarefas = JSON.parse(localStorage.getItem("tarefas"));
            for (let i = 0; i < tarefas.length; i++) {
                if (tarefas[i].id == id) {
                    tarefas[i].nome = nomeModal;
                    tarefas[i].desc = descModal;
                    if (selectTipos !== null && selectTipos !== "") {
                        tarefas[i].categoria = selectTipos;
                    }
                    tarefas[i].dataadd = dataAddModal;
                    tarefas[i].datavenc = dataVencModal;
                    localStorage.setItem("tarefas", JSON.stringify(tarefas));
                    preencherLista();
                }
            }
        }
    }
}

function abrirModalTarefas() {
    let modal = `
    <div id="modal" class="modalCriacao">
        <form id="corpoModal">
            <h3>Nova tarefa</h3>
            <input required class="barraInput" id="nomeModal" maxlength="13" placeholder="Nome">
            <textarea required class="barraInput" id="descModal" maxlength="200" placeholder="Descrição"></textarea> 
            <div id="divTipo">
                <label>Tipo</label>
                <select required id="selectTipos">
                    <option value="" disabled selected>Selecione</option>
                    <option>Estudo</option>
                    <option>Lazer</option>
                    <option>Academia</option>
                    <option>Trabalho</option>
                    <option>Outro</option>
                </select>
            </div>
            <div id="divDatas">
                <div>
                    <label>Data Inicio</label>
                    <input required class="inputData" id="dataAddModal" type="date">
                </div>
                <div>
                    <label>Data Fim</label>
                    <input required class="inputData" id="dataVencModal" type="date">
                </div>
            </div>
            <div id="divBotoes">
                <button id="btnAddModal" type="submit" class="btn">Adicionar</button>
                <button class="btn btnFechar" id="btnFechar">Cancelar</button>
            </div>
        </form>
    </div>`;
    let div = document.createElement('div');
    let header = document.querySelector('header');
    div.innerHTML = modal;
    document.body.insertBefore(div, header);
    var corpoModal = document.getElementById('corpoModal');
    corpoModal.addEventListener('submit', (e) => {
        e.preventDefault();
        addTarefa();
    })
    btnFechar = document.getElementById("btnFechar");
    btnFechar.addEventListener("click", () => {
        fecharModal();
    })
}
function abrirModalFiltros() {
    let modal = `
    <div id="modal" class="modalFiltros">
        <div id="corpoModal">
            <h3>Filtros</h3>
            <div id="divFiltros">
                <button class="btn btnEscolherFiltro" class="btn">Estudo</button>
                <button class="btn btnEscolherFiltro" class="btn">Lazer</button>
                <button class="btn btnEscolherFiltro" class="btn">Academia</button>
                <button class="btn btnEscolherFiltro" class="btn">Trabalho</button>
                <button class="btn btnEscolherFiltro" class="btn">Outro</button>   
            </div>
            <div id="divBotoes">
                <button class="btn btnFechar" id="btnFechar" class="btn">Fechar</button>
            </div>
        </div>
    </div>`;
    let div = document.createElement('div');
    let header = document.querySelector('header');
    div.innerHTML = modal;

    let btnsEscolherFiltro = div.querySelectorAll(".btnEscolherFiltro");

    let txtBtnFiltro = document.getElementById("btnFiltros").innerHTML;

    if (txtBtnFiltro !== "Filtros") {
        btnsEscolherFiltro.forEach(btn => {
            if (btn.innerHTML === txtBtnFiltro) {
                btn.id = "btnSelected";
                btnsEscolherFiltro.forEach(btn => {
                    if (btn.getAttribute('id') !== "btnSelected") {
                        btn.disabled = true;
                    }
                });
            }
        })
    }

    document.body.insertBefore(div, header);
    btnFechar = document.getElementById("btnFechar");
    btnFechar.addEventListener("click", () => {
        fecharModal();
    })
    btnsEscolherFiltro.forEach(btn => {
        btn.addEventListener("click", (e) => {
            if (btn.getAttribute('id') == "btnSelected") {
                btn.id = "";
                btnsEscolherFiltro.forEach(btn => {
                    btn.disabled = false;
                });
                document.getElementById("btnFiltros").innerHTML = "Filtros";
                preencherLista();
            }
            else {
                document.getElementById("btnFiltros").innerHTML = btn.innerHTML;
                btn.id = "btnSelected";
                btnsEscolherFiltro.forEach(btn => {
                    if (btn.getAttribute('id') !== "btnSelected") {
                        btn.disabled = true;
                    }
                });
                preencherLista();
            }
        })
    })
}

function addTarefa() {
    let nomeModal = document.getElementById("nomeModal").value;
    let descModal = document.getElementById("descModal").value;
    let selectTipos = document.getElementById("selectTipos").value;
    let dataAddModal = document.getElementById("dataAddModal").value;
    let dataVencModal = document.getElementById("dataVencModal").value;

    const novaTarefa = {
        idUsuario: 0,
        id: generateUUID(),
        checked: false,
        nome: nomeModal,
        desc: descModal,
        categoria: selectTipos,
        dataadd: dataAddModal,
        datavenc: dataVencModal
    }
    if (dataAddModal > dataVencModal) {
        alert("A data de início não pode ser depois da data de término!");
    }
    else {
        fecharModal();
        var tarefas = [];
        if (JSON.parse(localStorage.getItem("tarefas"))) {
            tarefas = JSON.parse(localStorage.getItem("tarefas"));
        }
        tarefas.push(novaTarefa);
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
        preencherLista();
    }
}

function trocarEstado(id) {
    let tarefas = JSON.parse(localStorage.getItem("tarefas"));
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].id == id) {
            tarefas[i].checked = !tarefas[i].checked;
        }
    }
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}


// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}