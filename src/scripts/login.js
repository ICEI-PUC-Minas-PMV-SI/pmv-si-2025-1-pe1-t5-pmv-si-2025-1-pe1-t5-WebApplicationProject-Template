// login.js

const LOGIN_URL = "login.html";

let db_usuarios = {};
let usuarioCorrente = {};

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

const dadosIniciais = {
  usuarios: [
    { id: generateUUID(), login: "admin", senha: "123", nome: "Administrador", email: "admin@abc.com" },
    { id: generateUUID(), login: "user", senha: "123", nome: "Usuário Comum", email: "user@abc.com" }
  ]
};


function initLoginApp() {
  const usuarioCorrenteJSON = sessionStorage.getItem("usuarioCorrente");
  if (usuarioCorrenteJSON) {
    usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
  }

  const usuariosJSON = localStorage.getItem("db_usuarios");
  if (!usuariosJSON) {
    alert("Dados de usuários não encontrados. Carregando dados iniciais.");
    db_usuarios = dadosIniciais;
    localStorage.setItem("db_usuarios", JSON.stringify(db_usuarios));
  } else {
    db_usuarios = JSON.parse(usuariosJSON);
  }
}

function loginUser(login, senha) {
  const usuario = db_usuarios.usuarios.find(
    u => u.email === login && u.senha === senha
  );

  if (usuario) {
    usuarioCorrente = { ...usuario };
    sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));
    return true;
  }
  return false;
}

function logoutUser() {
  usuarioCorrente = {};
  sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));
  window.location.href = LOGIN_URL;
}

function addUser(nome, login, senha, email) {
  if (db_usuarios.usuarios.some(u => u.login === login)) {
    alert("Login já existe!");
    return;
  }

  const novoUsuario = {
    id: generateUUID(),
    nome,
    login,
    senha,
    email
  };

  db_usuarios.usuarios.push(novoUsuario);
  localStorage.setItem("db_usuarios", JSON.stringify(db_usuarios));
  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}

initLoginApp();
