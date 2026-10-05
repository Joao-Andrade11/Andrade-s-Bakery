# 🥖 Andrade's Bakery

Site institucional da **Andrade's Bakery** — padaria artesanal em Itaboraí, RJ.

Página única (landing page) com identidade visual em tons de creme e caramelo, construída em HTML, CSS e JavaScript puros — sem dependências, sem build.

## Como rodar

Qualquer servidor de arquivos estáticos serve. Exemplo:

```bash
python3 -m http.server 3000
```

Depois abra <http://localhost:3000>.

## Estrutura

```
.
├── index.html          # página completa (hero, sobre, destaques, cardápio, galeria, contato)
├── styles.css          # estilos, paleta e responsividade
├── script.js           # menu mobile, abas do cardápio, animações e badge "aberto agora"
└── assets/
    └── img/            # hero.jpg, paes.jpg, doces.jpg, interior.jpg
```

## Seções

- **Hero** — foto do balcão, chamada principal e números da casa
- **Sobre** — história, fermentação natural de 24h e fotos do salão
- **Destaques** — os três produtos mais pedidos
- **Cardápio** — abas de Pães, Doces & Bolos e Cafés & Bebidas
- **Galeria** — mosaico de fotos
- **Contato** — endereço, telefone/WhatsApp, e-mail, Instagram, horários e badge de aberto/fechado em tempo real
- **Rodapé + botão flutuante** de WhatsApp

## Responsividade

Layout adaptado para desktop, tablet e celular, com menu hambúrguer, grades fluidas e suporte a `prefers-reduced-motion`.

## Personalização rápida

- **Telefone/WhatsApp:** troque `5521999990000` no `index.html` (links `wa.me` e no rodapé)
- **Endereço e horários:** seção `#contato` no `index.html`; os horários do badge automático ficam em `script.js` (objeto `ranges`)
- **Cores:** variáveis no topo de `styles.css` (`:root`)
