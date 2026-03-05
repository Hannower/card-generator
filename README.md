# 🪪 Card Generator

Aplicação web para geração de cards profissionais com avatar automático, persistência de dados via localStorage e layout totalmente responsivo.

---

## 🚀 Funcionalidades

- Geração de cards com **nome**, **cargo** e **matrícula** automática
- Avatar gerado automaticamente via **DiceBear API** de acordo com o sexo selecionado
- **Matrícula sequencial** com formatação `#0000`
- **Persistência de dados** via localStorage — os cards continuam na tela mesmo após fechar o navegador
- **Exclusão de cards** individualmente
- Layout **responsivo** para desktop, tablet e mobile

---

## 🛠️ Tecnologias

- HTML5
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript (Vanilla)
- [DiceBear API](https://www.dicebear.com/) — geração de avatares SVG
- [Font Awesome](https://fontawesome.com/) — ícones
- [Google Fonts](https://fonts.google.com/) — tipografia Inter

---

## 📁 Estrutura do Projeto

```
card-generator/
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```

---

## ▶️ Como usar

### Opção 1 — Acesso direto pelo navegador

Acesse o projeto sem precisar instalar nada:

🔗 **[https://hannower.github.io/card-generator/](https://hannower.github.io/card-generator/)**

### Opção 2 — Rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/hannower/card-generator.git
   ```

2. Abra o arquivo `index.html` no navegador — não é necessário nenhum servidor ou instalação.

3. Preencha o formulário com **nome**, **cargo** e **sexo** e clique em **CRIAR CARD**.

---

## 💡 Como funciona

**Geração de avatar:** a API DiceBear recebe a matrícula como `seed` e o sexo para gerar um avatar SVG único e consistente para cada card.

**localStorage:** os dados de cada card são salvos em um array no localStorage em formato JSON. Ao recarregar a página, os cards são recriados automaticamente e a matrícula retoma do último número gerado.

**Exclusão:** ao excluir um card, ele é removido da tela e também do localStorage, garantindo que não reapareça ao recarregar.

---

## 📱 Responsividade

| Tamanho | Comportamento |
|---|---|
| Desktop | Cards em linha com wrap |
| Tablet (até 768px) | Formulário adaptado, cards menores |
| Mobile (até 480px) | Cards em grid de 2 colunas |
| Mobile pequeno (até 320px) | Cards em 1 coluna |


