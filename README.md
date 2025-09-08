# Portfólio – Naiara Cruz

Site pessoal e portfólio de **Front-end & UX/UI**.  
Projeto estático (HTML/CSS/JS) com **carrossel de projetos**, **seção de clientes** e **formulário de contato via EmailJS**.

## ☁️ Deploy
- **Site:** 
- **GitHub Pages:**

---

## ✨ Recursos
- Layout responsivo (mobile-first)
- Carrossel horizontal de **Projetos** (sem libs pesadas)
- Carrossel de **Clientes**
- Formulário com **EmailJS** (sem backend)
- Acessibilidade básica (foco visível, sem overflow horizontal)
- SEO simples (meta tags e social preview)

---

## 🛠 Tecnologias
- **HTML5**, **CSS3**, **JavaScript**
- **EmailJS** para envio do formulário
- **Typed.js** (efeito de digitação)
- **ScrollReveal** (animações — desativado nos cards do carrossel para não ocultar slides)

---

## 🗂 Estrutura de pastas

portfolio-site/
├── index.html
└── assets/
├── css/ └── style.css
├── js/ └── main.js
├── img/ └── (logos, FotoPerfil.jpg, favicon)
└── cv/ └── Curriculo_NaiaraCruz.pdf

---

## ⚙️ Configurações

EmailJS

No assets/js/main.js ajuste:

const PUBLIC_KEY  = "SUA_PUBLIC_KEY";
const SERVICE_ID  = "SEU_SERVICE_ID";
const TEMPLATE_ID = "SEU_TEMPLATE_ID";

Em EmailJS → Account → Security → Allowed origins, adicione:

`http://localhost`
`https://SEU-DOMINIO-AQUI`

---

## 🤝 Contribuindo

Issues e PRs são bem-vindos!

---

## 📬 Contato

LinkedIn: https://www.linkedin.com/in/naiara-cruz

Email: naiaraaparecida95@gmail.com

---

## ▶️ Rodando local
```bash
# clone
git clone https://github.com/NaiaraAparecida/portfolio-site.git
cd portfolio-site

# abra o index.html no navegador
# (dica) com VS Code:
code .
# use a extensão "Live Server" ou apenas clique 2x no index.html



