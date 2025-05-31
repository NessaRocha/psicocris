# Painel Administrativo - Psicocris

Sistema completo de gerenciamento de pacientes e pareceres, com criptografia, autenticação e interface moderna.

---

## **Requisitos**

- Node.js 16.x ou superior
- npm 7.x ou superior
- PostgreSQL 12+ (para o backend)

---

## **Instalação**

### 1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd psicocris
```

### 2. Instale as dependências do frontend e backend:
```bash
npm install
cd backend
npm install
cd ..
```

### 3. Configure as variáveis de ambiente:

#### **Frontend (`.env` na raiz):**
```
REACT_APP_API_URL=http://localhost:3001
```

#### **Backend (`backend/.env`):**
```
DB_NAME=psicocris
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_HOST=127.0.0.1
DB_PORT=5432
JWT_SECRET=sua_jwt_secret
EMAIL_HOST=smtp.seuprovedor.com
EMAIL_USER=seu@email.com
EMAIL_PASS=sua_senha_email
EMAIL_PORT=587
```

### 4. Configure o banco de dados:
- Crie o banco `psicocris` no PostgreSQL.
- Rode as migrations:
```bash
cd backend
npx sequelize-cli db:migrate
cd ..
```

### 5. Inicie o backend:
```bash
cd backend
npm start
```

### 6. Inicie o frontend:
```bash
npm start
```

---

## **Funcionalidades**

- Cadastro, edição e exclusão de pacientes
- CRUD de pareceres com criptografia AES
- Autenticação JWT e recuperação de senha por e-mail
- Interface responsiva e acessível
- Proteção de dados sensíveis (pareceres só podem ser lidos com senha)
- Mensagens globais de erro/sucesso (Snackbar)
- Código modularizado, com hooks customizados e serviços reutilizáveis

---

## **Boas Práticas e Segurança**

- Código desacoplado e DRY
- Validação de dados no frontend e backend
- Senhas e tokens nunca expostos no frontend
- Controle de acesso por roles
- Uso de variáveis de ambiente para segredos

---

## **Testes**

Para rodar os testes do frontend:
```bash
npm test
```

---

## **Deploy**

- Recomenda-se usar ambientes separados para dev/homologação/produção.
- Automatize deploys com CI/CD (ex: Vercel, Netlify, Heroku, Railway).

---

## **Licença**

Este projeto é privado e confidencial. 