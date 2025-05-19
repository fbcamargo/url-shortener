# 🔗 Encurtador de URLs com Node.js, Express & MongoDB

Um projeto simples e escalável de encurtador de URLs, feito com Node.js, Express, JavaScript, MongoDB (via Mongoose) e seguindo os princípios SOLID. Ideal para aprender boas práticas de API REST e arquitetura limpa! 🚀

---

## ✨ Funcionalidades

- ✅ Encurta URLs longas
- ✅ Redireciona automaticamente a partir da URL curta
- ✅ Contabiliza os cliques por link
- ✅ Estrutura baseada em SOLID (limpa e escalável)
- 🧱 Pronto para expansão: autenticação, analytics, etc.

---

## 🏗️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [javaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [NanoID](https://github.com/ai/nanoid) — para gerar identificadores únicos

---

## 📁 Estrutura do Projeto

```
src/
├── controllers/         # Controladores (camada HTTP)
├── services/            # Regras de negócio (Use Cases)
├── repositories/        # Abstrações e acesso a dados
│   └── implementations/ # Implementação com MongoDB
├── models/              # Schema do Mongoose
├── routes/              # Rotas da aplicação
├── config/              # Conexão com o banco
└── server.js            # Entry point
```

---

## 🚀 Como Rodar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/fbcamargo/url-shortener.git
cd url-shortener
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o `.env`

Crie um arquivo `.env` com o seguinte conteúdo:

```
MONGODB_URI=mongodb://localhost:27017/urlshortener
BASE_URL=http://localhost:3000
PORT=3000
```

### 4. Execute o projeto em modo dev

```bash
npm run dev
```

Ou para build e produção:

```bash
npm start
```

---

## 📦 Endpoints da API

### 🔹 Encurtar URL

```http
POST /api/url/shorten
Content-Type: application/json

{
  "url": "https://www.exemplo.com"
}
```

**Resposta:**
```json
{
    "_id": "123a1234cb0f0fd75efce2cb",
    "originalUrl": "https://www.exemplo.com",
    "shortId": "abc123",
    "clicks": 0,
    "createdAt": "2025-05-18T21:50:46.278Z",
    "expiresAt": "2025-05-19T21:50:46.277Z",
    "__v": 0
}
```

---

### 🔹 Redirecionar URL

```http
GET /abc123
```

Redireciona automaticamente para a URL original e incrementa os cliques.

---

## 🧠 Aprendizados com o Projeto

Este projeto foi desenvolvido seguindo os princípios **SOLID**:

- **S**ingle Responsibility: cada classe tem sua responsabilidade
- **O**pen/Closed: código aberto à extensão, fechado para modificação
- **L**iskov Substitution: dependências de abstrações, não implementações
- **I**nterface Segregation: repositórios focados no necessário
- **D**ependency Inversion: serviços dependem de interfaces

---

Feito com ❤️ por [Felipe](https://github.com/fbcamargo)