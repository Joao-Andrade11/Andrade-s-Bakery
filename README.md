# Andrade's Bakery — Landing page

Site de confeitaria artesanal, feito à mão em HTML, CSS e JavaScript puro.
Sem framework, sem build, sem dependência externa: é só abrir o `index.html`.

- **Cores:** branco `#FFFFFF` · preto quente `#14100D` · marrom `#7A5230` / `#2E1C10`, com caramelo `#C89052` como detalhe e verde WhatsApp no botão de pedido.
- **Tipografia:** Fraunces (títulos), Inter (texto) e Caveat (acentos à mão) — **hospedadas no próprio projeto** (`assets/fonts/`), nenhuma requisição para Google Fonts ou CDN.
- **WhatsApp:** +55 21 99072-6282
- **Instagram:** [@andrades.bakery](https://www.instagram.com/andrades.bakery)

---

## 1. O que já está pronto

| Área | O que tem |
|---|---|
| **Topo** | Aviso de prazos (fechável), cabeçalho fixo com navegação e botão de WhatsApp, menu lateral no celular |
| **Abertura** | Título, texto de venda, dois botões de ação, três provas rápidas (prazo, entrega, receita) e colagem de fotos com selo |
| **Cardápio** | 14 itens com foto, descrição, preço, tags ("mais pedido", "novidade"), filtro por categoria e botão **Pedir** em cada item que abre o WhatsApp já com o produto escrito. Lista de "outros sabores" sem foto e cartão de pedido avulso |
| **Datas especiais** | 4 abas — **Páscoa, Dia das Mães, Dia dos Namorados e Aniversários** — cada uma com foto, texto próprio, tabela de preços, prazo de reserva e botão de reserva no WhatsApp |
| **Vídeos** | Grade de 3 vídeos com pôster, duração e botão de play; abre em lightbox (arquivo `.mp4`) ou leva ao reel do Instagram |
| **Feedbacks** | Carrossel com 6 depoimentos (nota em estrelas, nome, motivo), controles por seta, bolinhas, teclado e arrasto no dedo; troca automática que pausa no hover |
| **Sobre** | História da confeitaria, três diferenciais, assinatura à mão e o processo em 4 passos |
| **Dúvidas** | Acordeão com 5 perguntas frequentes |
| **Encomenda** | Formulário que monta a mensagem do WhatsApp (nome, item, data, quantidade, sabor, observações), cartões de contato, horário, entrega, pagamento e Instagram |
| **Extras** | Botão flutuante de WhatsApp, rodapé completo, dados estruturados do Google (`Bakery` + cardápio), Open Graph para compartilhar com foto, acessibilidade (teclado, foco visível, `prefers-reduced-motion`) e versão para impressão |

---

## 2. Como ver o site

**No preview ao vivo** (servidor já rodando neste ambiente): abra a porta 8000 do preview.

**Na sua máquina**, com Python instalado:

```bash
cd Andrade-s-Bakery
python3 -m http.server 8000
# depois abra http://localhost:8000
```

Também funciona dando **duplo clique no `index.html`** — mas com servidor local é que tudo (fontes, imagens) carrega igual à produção.

---

## 3. Publicar (grátis)

**Netlify (mais fácil):** entre em [app.netlify.com/drop](https://app.netlify.com/drop) e **arraste a pasta inteira** `Andrade-s-Bakery`. Pronto, sai um endereço público. Depois você pode apontar seu domínio (`andradesbakery.com.br`) nas configurações do Netlify.

**Vercel:** importe o repositório em [vercel.com/new](https://vercel.com/new), framework = "Other", sem comando de build. Publica a cada `git push`.

**GitHub Pages:** *Settings → Pages → Source: Deploy from branch → main / root*. Fica em `https://usuario.github.io/Andrade-s-Bakery/`.

> Antes de publicar, confira a seção **5. O que falta** — principalmente **preços** e **depoimentos**, que hoje estão com valores de exemplo.

---

## 4. Onde editar cada coisa

Quase tudo se muda em **dois arquivos**, sem mexer no HTML.

### `js/config.js` — telefone, endereço, horários, redes

| O que | Campo |
|---|---|
| Número do WhatsApp | `whatsapp.numero` (só números, com 55 + DDD) e `whatsapp.exibicao` |
| Mensagem que já vem escrita | `whatsapp.mensagemPadrao` |
| Instagram | `instagram.usuario` / `instagram.url` |
| Cidade e estado | `cidade`, `uf` |
| Endereço / só encomenda | `endereco.somenteEncomenda` (`true` esconde o endereço do site) |
| Horários | `horarios` (lista) e `horarioResumo` |
| Prazos | `prazo.comum` e `prazo.dataComemorativa` |
| Entrega, pagamentos | `entrega`, `pagamentos` |
| Faixa de aviso no topo | `avisoTopo` |
| Título e descrição no Google | `seo.titulo`, `seo.descricao`, `seo.site`, `seo.imagem` |

### `js/menu-data.js` — cardápio, datas especiais, vídeos, depoimentos, FAQ

- **Produto:** copie um bloco `{ ... }` inteiro da lista `produtos` e edite. `preco` aceita texto livre (`"a partir de R$ 189,90"`). `img: null` faz o card aparecer com um marcador desenhado em vez de um espaço vazio.
- **Prato sem foto:** vai em `outros` (só nome + preço) e sai na lista enxuta embaixo do cardápio.
- **Datas especiais:** cada objeto de `sazonais` vira uma aba. `prazo`, `itens` (tabela de preços) e `obs` são editáveis.
- **Vídeo:** `src: 'assets/video/arquivo.mp4'` toca aqui no site; se deixar `src: null` e preencher `reel`, o card abre o link (Instagram) em outra aba.
- **Depoimento:** `texto`, `nome`, `origem`, `nota`.

### Textos que estão no `index.html`

Frases de abertura ("Bolo de verdade, feito à mão..."), a história da confeitaria na seção **Sobre** e as descrições dos contatos. Estão entre `<!-- ... -->` sinalizados, fáceis de achar.

---

## 5. O que falta (pendências)

### Dados que preciso que você confirme

1. **Preços** — todos os valores estão como **exemplo** em `js/menu-data.js`.
2. **Depoimentos** — os 6 textos são de exemplo; quero os feedbacks reais (prints do WhatsApp servem).
3. **Cidade e atendimento** — hoje está "Itaboraí — RJ" e "somente por encomenda, sem loja física". Confirme.
4. **Horários** de funcionamento reais.
5. **Formas de pagamento** e política de sinal.
6. **Prazo real** de encomenda (está 48h comum / 5 a 7 dias em datas comemorativas).
7. **Recheios e itens** que vocês realmente fazem — para o cardápio não prometer o que não existe.

### Arquivos que preciso que você mande

| Arquivo | Onde colocar | Observação |
|---|---|---|
| Logo real | `assets/logo/logo-andrades.png` | PNG transparente; **substitui** o monograma "AB" atual |
| Fotos de produto | `assets/img/` | nomes já usados: `bolo-chocolate.jpg`, `bolo-ninho-morango.jpg`, `bolo-cenoura.jpg`, `bolo-red-velvet.jpg`, `doces-finos.jpg`, `brigadeiros.jpg`, `pudim.jpg`, `salgados-assados.jpg`, `pao-de-queijo.jpg`, `kit-cafe-manha.jpg` |
| Fotos das campanhas | `assets/img/sazonal-*.jpg` | `sazonal-pascoa.jpg`, `sazonal-maes.jpg`, `sazonal-namorados.jpg`, `sazonal-aniversario.jpg` |
| Vídeos | `assets/video/*.mp4` | até ~30 MB cada; depois aponte o nome em `menu-data.js` |
| Foto da mesa/ambiente | `assets/img/mesa-completa.jpg` | hoje é temporária |

> **Importante:** as fotos que estão no site agora são **imagens de demonstração** geradas para montar o layout (bolo, doces, mesa, mão confeitando). Elas são bonitas, mas **são genéricas e não são da sua produção** — a ideia é trocar pelas reais. Ao substituir, mantenha o mesmo nome de arquivo e **nada mais precisa ser editado**.

Guia detalhado do que fotografar, com prioridade: [`assets/README.md`](assets/README.md).

---

## 6. Analisar o Instagram (@andrades.bakery) com o Apify

O ambiente onde eu trabalho **não tem acesso à API do Apify nem ao Instagram** (firewall bloqueia as chamadas), e credencial não deve ser colada no chat. O caminho que funciona:

1. Entre no [console do Apify](https://console.apify.com/) e abra o actor **Instagram Scraper** (`apify/instagram-scraper`).
2. Em **Input**, coloque `andrades.bakery` em *Username* e rode.
3. Quando terminar, clique em **Export → JSON** (ou *Download*).
4. **Anexe o arquivo JSON aqui na conversa.**

Com esse arquivo eu consigo extrair, offline, coisas que mudam o site de verdade:

- quais **produtos aparecem mais** nos posts → ordem do cardápio e destaques;
- **desempenho** por post (curtidas/comentários) → que foto usar na abertura;
- **sazonalidade** real (Páscoa, Dia das Mães, Dia dos Namorados) → o que destacar em cada aba;
- **legendas e vocabulário** que vocês já usam → textos do site com a voz da marca, não texto genérico;
- **horários** de postagem e hashtags → rodapé e compartilhamento.

Alternativa mais simples: me mande **prints** dos posts ou os **links dos reels** — eu leio daqui.

---

## 7. Estrutura de arquivos

```
Andrade-s-Bakery/
├── index.html              ← todas as seções (o conteúdo vem dos .js)
├── css/
│   ├── fonts.css           ← @font-face das 3 fontes (SIL OFL, uso comercial livre)
│   └── style.css           ← design system: tokens, componentes, responsivo, impressão
├── js/
│   ├── config.js           ← TELEFONE, ENDEREÇO, HORÁRIOS, SEO  ← comece por aqui
│   ├── menu-data.js        ← CARDÁPIO, DATAS ESPECIAIS, VÍDEOS, DEPOIMENTOS, FAQ
│   └── app.js              ← comportamento (não precisa mexer)
├── assets/
│   ├── fonts/              ← Fraunces, Inter, Caveat (.woff2)
│   ├── img/                ← fotos do site
│   ├── logo/               ← logo, favicon e ícone de atalho do celular
│   ├── video/              ← vídeos .mp4
│   └── README.md           ← checklist do que fotografar
└── LICENSE
```

---

## 8. Notas técnicas

- **Peso:** página inicial com ~1,7 MB de imagens já otimizadas (JPEG progressivo, maior lado em 1200–1500 px), 0 requisição externa e nenhum JavaScript de terceiros.
- **Sem flash de conteúdo:** o JS monta tudo no `DOMContentLoaded` e as animações de entrada respeitam `prefers-reduced-motion`.
- **Se uma foto faltar**, o card mostra um marcador desenhado ("foto a caminho") em vez de imagem quebrada — nada quebra o layout.
- **Acessibilidade:** navegação por teclado nas abas e no cardápio, `aria-*` correto, foco visível, contraste alto opcional, link "ir para o conteúdo" e textos alternativos nas fotos.
- **SEO:** `title`/`description` por config, Open Graph (`assets/img/og-andrades.jpg`) e JSON-LD de `Bakery` com horários, telefone e itens do cardápio.
- **Impressão:** o cardápio imprime sem cabeçalho, vídeos nem botões flutuantes.

## 9. Licença

Código e textos deste projeto: uso livre pela Andrade's Bakery.
Fontes: SIL Open Font License 1.1 (Fraunces, Inter, Caveat) — podem ser usadas comercialmente, inclusive embutidas no site.
