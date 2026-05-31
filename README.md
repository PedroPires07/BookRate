# BookRate — Rede Social para Avaliar Livros

Landing page/protótipo de uma plataforma onde usuários podem avaliar livros, dar notas, escrever críticas e descobrir novas leituras.

## Demo

[Acessar via GitHub Pages](https://pedropires07.github.io/BookRate)

---

## Escopo do Projeto

**BookRate** é uma rede social para leitores com as seguintes seções:

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação da plataforma com cards flutuantes decorativos |
| **Stats** | Números da plataforma (leitores, avaliações, livros) |
| **Recursos** | Três funcionalidades principais: Avaliar, Descobrir, Conectar |
| **Livros em Destaque** | Grid de livros filtráveis por gênero, renderizados via JavaScript |
| **Buscar** | Campo de busca que consome a API pública Open Library |
| **Avaliar** | Formulário completo com estrelas interativas e validação dinâmica |
| **Cadastro** | Formulário de pré-cadastro com validação e feedback de sucesso |

---

## Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/PedroPires07/BookRate.git
   cd BookRate
   ```

2. Abra o arquivo `index.html` diretamente no navegador, ou use a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code para hot-reload.

3. Para a busca de livros funcionar, o projeto precisa de conexão com a internet (requisição à API da Open Library).

Não há dependências de build — o projeto usa Tailwind via CDN.

---

## Estrutura de arquivos

```
BookRate/
├── index.html
├── styles.css
├── script.js
└── README.md
```

---

## Critérios atendidos

- **HTML semântico**: uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<abbr>`, `role`, `aria-label`, `aria-live`, `aria-expanded`, `aria-pressed`
- **Layout responsivo**: Tailwind CSS via CDN com breakpoints `sm`, `md`, `lg`, `xl`
- **Organização visual**: hierarquia clara, paleta consistente (fundo escuro + âmbar)
- **Formulários**: dois formulários completos (avaliação + cadastro)
- **Validação nativa e dinâmica**: `novalidate` + validação manual campo a campo com mensagens de erro individuais
- **DOM e eventos**: menu mobile, filtro de cards, renderização de array, contador de caracteres, estrelas interativas, scroll reveal
- **Feedback visual**: estados `has-error` / `is-valid` nos inputs, mensagens de sucesso animadas, contador de chars colorido, estrelas animadas

---

## Funcionalidades dinâmicas implementadas

### 1. Menu mobile com hamburger animado
O botão exibe/oculta o menu mobile e anima as três barras em um x. Fecha ao pressionar `Esc` ou clicar em qualquer link.

### 2. Filtro de cards por gênero
Os livros são armazenados em um array JavaScript com metadados. Ao clicar nos botões de filtro, o grid é reconstruído dinamicamente com animação de entrada.

### 3. Renderização de cards via array
Os 10 livros em destaque são gerados pelo `script.js` a partir de um array de objetos — nenhum card está hardcoded no HTML.

### 4. Busca via API pública (Open Library)
A seção "Buscar" faz um `fetch` à [Open Library Search API](https://openlibrary.org/developers/api) com o termo digitado, exibindo estados de loading, erro e resultado com capas dos livros.

### 5. Validação dinâmica de formulário
Ambos os formulários têm:
- Validação por campo no evento `blur`
- Validação completa no `submit`
- Mensagens de erro individuais abaixo de cada campo
- Bordas vermelhas/verdes por estado
- Foco automático no primeiro campo com erro

### 6. Avaliação por estrelas interativa
As 5 estrelas respondem a hover e click, preenchendo-se progressivamente. O valor é armazenado em um `<input hidden>` e validado no submit.

### 7. Contador de caracteres (textarea)
O campo de crítica tem um contador ao vivo que muda de cor ao atingir o mínimo de 50 caracteres.

### 8. Mensagens de sucesso animadas
Após submit válido, o formulário é ocultado e uma mensagem de confirmação aparece com animação CSS.

### 9. Scroll reveal
Seções e cards animam ao entrar no viewport via `IntersectionObserver`.

### 10. Header dinâmico + botão "Voltar ao topo"
O header ganha `backdrop-filter: blur` ao rolar a página. O botão de voltar ao topo aparece após 400px de scroll.

---

## Decisões técnicas

| Decisão | Justificativa |
|---|---|
| **Tailwind via CDN** | Sem etapa de build — simplicidade para um projeto estático |
| **JavaScript vanilla** | Sem frameworks desnecessários para a escala do projeto |
| **Paleta dark + âmbar** | Conforto visual para leitura prolongada; âmbar remete ao papel e à luz de leitura |
| **Open Library API** | API pública, gratuita, sem necessidade de chave — ideal para protótipos |
| **`novalidate` + JS** | Controle total sobre mensagens de erro localizadas em português |
| **`IntersectionObserver`** | Animações de scroll performáticas sem libs externas |
| **`aria-live`, `role="alert"`** | Acessibilidade para leitores de tela nas mensagens dinâmicas |

---

## Publicação no GitHub Pages

1. Acesse **Settings → Pages** no repositório.
2. Em **Source**, selecione `Deploy from a branch → main → / (root)`.
3. Aguarde alguns segundos e acesse `https://pedropires07.github.io/BookRate`.
