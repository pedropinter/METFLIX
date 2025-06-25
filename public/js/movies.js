document.addEventListener("DOMContentLoaded", () => {

  const API_URL = "http://localhost:3000/api/movies";
  const form = document.getElementById("formFilme");
  const nomeInput = document.getElementById("nome");
  const generoInput = document.getElementById("genero");
  const duracaoInput = document.getElementById("duracao");
  const cardsContainer = document.getElementById("cards-container");
  const formTitle = document.getElementById("form-title");

  let editandoId = null;

  function criarCard(filme) {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = filme.id;

    card.innerHTML = `
      <h3>${filme.nome}</h3>
      <p>Gênero: ${filme.genero}</p>
      <p>Duração: ${filme.duracao} min</p>
      <button class="edit-btn">Editar</button>
      <button class="delete-btn">Excluir</button>
    `;

    card.querySelector(".edit-btn").addEventListener("click", () => editarFilme(filme));
    card.querySelector(".delete-btn").addEventListener("click", () => excluirFilme(filme.id, card));

    cardsContainer.appendChild(card);
  }

  async function carregarFilmes() {
    try {
      const res = await fetch(API_URL);
      const filmes = await res.json();
      cardsContainer.innerHTML = "";
      filmes.forEach(criarCard);
    } catch (error) {
      alert("Erro ao carregar filmes");
      console.error(error);
    }
  }

  async function excluirFilme(id, card) {
    if (!confirm("Deseja excluir este filme?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (res.status === 204) {
        card.remove();
        alert("Filme excluído com sucesso.");
      } else {
        alert("Erro ao excluir filme.");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  function editarFilme(filme) {
    nomeInput.value = filme.nome;
    generoInput.value = filme.genero;
    duracaoInput.value = filme.duracao;
    formTitle.textContent = "Editar Filme";
    editandoId = filme.id;
  }

  async function salvarFilme(event) {
    event.preventDefault();

    const nome = nomeInput.value.trim();
    const genero = generoInput.value.trim();
    const duracao = parseInt(duracaoInput.value.trim());

    if (!nome || !genero || isNaN(duracao)) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    const dados = { nome, genero, duracao };

    try {
      if (editandoId) {
        // PUT para editar
        const res = await fetch(`${API_URL}/${editandoId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados)
        });

        if (!res.ok) throw new Error("Erro ao editar filme");

        atualizarCardNaTela(editandoId, dados);
        alert("Filme editado com sucesso.");
      } else {
        // POST para criar
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados)
        });

        const data = await res.json();
        criarCard(data.movies);
        alert("Filme adicionado com sucesso.");
      }

      // Resetar formulário
      form.reset();
      formTitle.textContent = "Adicionar Filme";
      editandoId = null;
    } catch (error) {
      alert("Erro ao salvar filme.");
      console.error(error);
    }
  }

  function atualizarCardNaTela(id, dados) {
    const card = document.querySelector(`.card[data-id='${id}']`);
    if (card) {
      card.querySelector("h3").textContent = dados.nome;
      card.querySelector("p:nth-of-type(1)").textContent = `Gênero: ${dados.genero}`;
      card.querySelector("p:nth-of-type(2)").textContent = `Duração: ${dados.duracao} min`;
    }
  }

  form.addEventListener("submit", salvarFilme);
  carregarFilmes();
});
