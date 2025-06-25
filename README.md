# METFLIX 🎬

Clone do estilo Netflix, criado com React, para exibir filmes e séries via API (ex: TMDB).

---

## 📦 Tecnologias

- React (CRA ou Vite)
- JavaScript / TypeScript
- CSS moderno (ou CSS-in-JS, Tailwind, etc.)
- Consumo de API externa (The Movie DB, por exemplo)

---

## 🚀 Funcionalidades

- 🎞️ Página inicial: listas por categorias (populares, em alta, lançamentos, etc.)
- 🔍 Busca: encontre filmes ou séries por nome
- ❤️ Favoritos: adicione/quitel da lista de favoritos (persistência local/localStorage)
- 🔐 Perfis (opcional): suporte a múltiplos perfis
- 🎧 Trailer: pré-visualização via YouTube (opcional)

---

## 🧩 Estrutura do projeto

```
METFLIX/
├─ public/
│   └─ index.html
├─ src/
│   ├─ components/    # Navbar, Footer, Card, ModalTrailer...
│   ├─ pages/         # Home, Search, Profile, Favorites...
│   ├─ services/      # client API (axios/fetch)
│   ├─ context/       # estado global (React Context / Redux) — se usar
│   ├─ assets/        # imagens, ícones, etc.
│   ├─ styles/        # CSS global, variáveis, temas
│   └─ App.jsx
├─ .env              # variáveis (API_KEY, etc.)
├─ package.json
└─ README.md
```

---

## ⚙️ Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/pedropinter/METFLIX.git
   cd METFLIX
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure variáveis:
   - Crie um arquivo `.env` na raiz:
     ```
     VITE_API_KEY=SEU_API_KEY_TMBD
     VITE_API_URL=https://api.themoviedb.org/3
     VITE_YOUTUBE_EMBED_BASE_URL=https://www.youtube.com/embed
     ```

4. Rode em modo desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

---

## 🛠️ Comandos úteis

| Comando             | Descrição                              |
|---------------------|----------------------------------------|
| `npm run dev`       | Inicia o servidor de dev               |
| `npm run build`     | Gera build otimizado para produção     |
| `npm run preview`   | Visualiza build em modo preview        |
| `npm test`          | Executa testes (se houver configurado)|
| `npm run lint`      | Roda verificação de código (eslint)    |

---

## 🧪 Testes

- Possível integração com Jest + React Testing Library.
- Testes sugeridos:
  - Componentes de UI (ex: `<Card />`, `<ModalTrailer />`)
  - Páginas (Home, Search)
  - Funções de consumo de API

---

## ✅ Roadmap

- [ ] Paginação nas listas
- [ ] Multi-perfis com tema personalizado
- [ ] Autenticação real (via Auth0/Firebase)
- [ ] Layout responsivo e acessível
- [ ] Otimização de imagens (lazy loading)
- [ ] Deploy em Vercel / Netlify / Surge

---

## 🧭 Contribuindo

1. Faça fork deste repositório.
2. Crie uma branch: `git checkout -b feature/nome-da-funcionalidade`
3. Faça as alterações e commit:
   ```bash
   git commit -m "feat: descrição da sua feature"
   ```
4. Envie para o repositório remoto: `git push origin feature/nome-da-funcionalidade`
5. Abra um Pull Request.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

## 📞 Contato

- Autor: Pedro Pinter
- Repositório original: https://github.com/pedropinter/METFLIX

Obrigado por visitar! Se gostou, deixe ⭐ e contribua! 🎉