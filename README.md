# Ecommerce Fullstack

Aplicação fullstack de e-commerce com Node.js/Express + React/Vite.

## Stack

| Camada    | Tecnologias                                     |
|-----------|-------------------------------------------------|
| Backend   | Node.js, Express, TypeScript, Prisma, PostgreSQL |
| Frontend  | React 18, Vite, TypeScript, Tailwind CSS         |
| Banco     | PostgreSQL 16 via Docker                        |
| Auth      | JWT + bcryptjs                                  |

## Estrutura

```
ecommerce/
├── backend/
│   ├── prisma/schema.prisma   # Modelos: User, Product, Category, Order
│   └── src/
│       ├── controllers/       # auth, product, category, order
│       ├── middlewares/       # JWT auth, error handler
│       └── routes/
├── frontend/
│   └── src/
│       ├── components/        # Navbar, ProductCard, ProductModal, CartDrawer
│       ├── contexts/          # AuthContext, CartContext, ThemeContext
│       └── pages/             # Home, Products, Login, Register, Orders, Checkout
└── docker-compose.yml
```

## Pré-requisitos

- Node.js 18+
- Docker e Docker Compose

## Setup

### 1. Banco de dados

```bash
cp backend/.env.example backend/.env
docker compose up -d
```

### 2. Backend

```bash
cd backend
npm install
npm run prisma:migrate   # aplica as migrations
npm run prisma:generate  # gera o client
npm run dev              # http://localhost:3333
```

### 3. Frontend

```bash
cd frontend
npm install
npm run dev              # http://localhost:5173
```

O Vite faz proxy de `/api` para `localhost:3333`, então não é necessária configuração de CORS no desenvolvimento.

## Variáveis de ambiente (backend)

| Variável       | Padrão                                               | Descrição          |
|----------------|------------------------------------------------------|--------------------|
| `PORT`         | `3333`                                               | Porta do servidor  |
| `DATABASE_URL` | `postgresql://postgres:postgres@localhost:5432/ecommerce` | String de conexão  |
| `JWT_SECRET`   | —                                                    | Chave JWT (obrigatória) |
| `JWT_EXPIRES_IN` | `7d`                                               | Expiração do token |

## Endpoints da API

```
POST   /api/auth/register
POST   /api/auth/login

GET    /api/products          ?search=&categoryId=&page=&limit=
GET    /api/products/:id
POST   /api/products          (auth)
PUT    /api/products/:id      (auth)
DELETE /api/products/:id      (auth)

GET    /api/categories
POST   /api/categories        (auth)
PUT    /api/categories/:id    (auth)
DELETE /api/categories/:id    (auth)

GET    /api/orders            (auth)
GET    /api/orders/:id        (auth)
POST   /api/orders            (auth)

GET    /api/health
```

## Funcionalidades

- Listagem de produtos com busca e paginação
- Modal de detalhe do produto
- Carrinho de compras persistente na sessão (Context API)
- Fluxo de checkout em dois passos com integração à API
- Autenticação com JWT (registro e login)
- Dark mode com persistência no localStorage
