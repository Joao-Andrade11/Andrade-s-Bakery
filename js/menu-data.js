/* ==========================================================================
   ANDRADE'S BAKERY — CONTEÚDO DO SITE (cardápio, datas especiais, depoimentos)
   --------------------------------------------------------------------------
   COMO EDITAR:
   • Cada item do cardápio é um bloco { } dentro da lista `produtos`.
   • `preco` aceita texto livre ("R$ 89,90" ou "a partir de R$ 189,90").
   • `img` é o caminho da foto. Se não tiver foto ainda, deixe img: null —
     o card entra na lista de "outros sabores" com um traço no lugar da imagem.
   • `tags`: 'mais-pedido' | 'novo' | 'sem-lactose' | 'vegano' | 'data-especial'
   • ATENÇÃO: os preços e depoimentos abaixo são EXEMPLOS para montar o layout.
     Troque pelos seus valores e pelos feedbacks reais dos seus clientes.
   ========================================================================== */

window.CARDAPIO = {

  /* ---- Categorias do filtro do cardápio -------------------------------- */
  categorias: [
    { id: 'todos',    nome: 'Tudo' },
    { id: 'bolos',    nome: 'Bolos' },
    { id: 'doces',    nome: 'Doces & Sobremesas' },
    { id: 'salgados', nome: 'Salgados & Pães' },
    { id: 'mesa',     nome: 'Café & Mesa' }
  ],

  /* ---- Produtos -------------------------------------------------------- */
  produtos: [
    /* ============ BOLOS ============ */
    {
      id: 'bolo-chocolate',
      nome: 'Bolo de Chocolate Belga',
      categoria: 'bolos',
      descricao: 'Massa molhadinha de cacau 50%, ganache meio amargo por dentro e por fora, com uma pitada de flor de sal no acabamento.',
      preco: 'R$ 119,90',
      detalhe: 'Aro 20 cm · serve de 12 a 16 fatias',
      img: 'assets/img/bolo-chocolate.jpg',
      tags: ['mais-pedido']
    },
    {
      id: 'bolo-ninho-morango',
      nome: 'Ninho com Morango',
      categoria: 'bolos',
      descricao: 'Pão de ló fofo, creme de leite Ninho batido na hora e morangos frescos em camadas bem servidas.',
      preco: 'R$ 139,90',
      detalhe: 'Aro 20 cm · serve de 12 a 16 fatias',
      img: 'assets/img/bolo-ninho-morango.jpg',
      tags: ['mais-pedido']
    },
    {
      id: 'bolo-cenoura',
      nome: 'Cenoura com Brigadeiro',
      categoria: 'bolos',
      descricao: 'Aquele clássico da tarde: cenoura ralada na hora, massa aerada e brigadeiro cremoso feito na panela.',
      preco: 'R$ 89,90',
      detalhe: 'Aro 20 cm · serve de 10 a 14 fatias',
      img: 'assets/img/bolo-cenoura.jpg',
      tags: []
    },
    {
      id: 'bolo-red-velvet',
      nome: 'Red Velvet',
      categoria: 'bolos',
      descricao: 'Massa aveludada com leve toque de cacau e recheio generoso de cream cheese frosting, servido gelado.',
      preco: 'R$ 149,90',
      detalhe: 'Aro 20 cm · serve de 12 a 16 fatias',
      img: 'assets/img/bolo-red-velvet.jpg',
      tags: []
    },

    /* ============ DOCES & SOBREMESAS ============ */
    {
      id: 'doces-finos',
      nome: 'Caixa de Doces Finos',
      categoria: 'doces',
      descricao: 'Vinte doces variados em papel de seda: brigadeiro, beijinho, bicho de pé, casadinho e camafeu de nozes.',
      preco: 'R$ 84,90',
      detalhe: '20 unidades · sabores à sua escolha',
      img: 'assets/img/doces-finos.jpg',
      tags: []
    },
    {
      id: 'brigadeiro-gourmet',
      nome: 'Brigadeiro Gourmet',
      categoria: 'doces',
      descricao: 'Brigadeiro de chocolate nobre enrolado à mão, no papel e na medida. Cento fechado ou por quantidade.',
      preco: 'R$ 99,90',
      detalhe: 'cento (100 un.)',
      img: 'assets/img/brigadeiros.jpg',
      tags: []
    },
    {
      id: 'pudim',
      nome: 'Pudim de Leite Condensado',
      categoria: 'doces',
      descricao: 'Receita de família: denso, sem furinhos e com calda de caramelo no ponto certo.',
      preco: 'R$ 49,90',
      detalhe: 'pudim inteiro · 1,2 kg',
      img: 'assets/img/pudim.jpg',
      tags: []
    },

    /* ============ SALGADOS & PÃES ============ */
    {
      id: 'salgados-assados',
      nome: 'Salgados Assados',
      categoria: 'salgados',
      descricao: 'Sortido de coxinha, risoles, enroladinho de salsicha, empada e quibe, todos assados na hora da entrega.',
      preco: 'R$ 139,90',
      detalhe: 'cento (100 un.) · fritos ou assados',
      img: 'assets/img/salgados-assados.jpg',
      tags: ['mais-pedido']
    },
    {
      id: 'pao-de-queijo',
      nome: 'Pão de Queijo Mineiro',
      categoria: 'salgados',
      descricao: 'Queijo minas curado de verdade e polvilho azedo. Casca fininha, muito recheio e aquele puxa-puxa.',
      preco: 'R$ 54,90',
      detalhe: '1 kg (cerca de 30 unidades)',
      img: 'assets/img/pao-de-queijo.jpg',
      tags: []
    },
    {
      id: 'empada',
      nome: 'Empada de Frango',
      categoria: 'salgados',
      descricao: 'Massa quebradiça de manteiga e recheio de frango desfiado com catupiry e cheiro-verde. Individual.',
      preco: 'R$ 9,50',
      detalhe: 'unidade',
      img: null,
      tags: []
    },
    {
      id: 'pao-artesanal',
      nome: 'Pão de Fermentação Natural',
      categoria: 'salgados',
      descricao: 'Fermentação lenta de 24 horas com levain da casa. Casca crocante, miolo alveolado e sabor levemente azedo.',
      preco: 'R$ 32,90',
      detalhe: 'pão de 700 g · assa às quintas e sábados',
      img: null,
      tags: ['novo']
    },

    /* ============ CAFÉ & MESA ============ */
    {
      id: 'kit-cafe-manha',
      nome: 'Kit Café da Manhã',
      categoria: 'mesa',
      descricao: 'Para presentear ou começar o dia sem pressa: bolos caseiros, pães, geleia da casa, frutas e café coado.',
      preco: 'R$ 119,90',
      detalhe: 'para 2 pessoas · cestinha e cartão inclusos',
      img: 'assets/img/kit-cafe-manha.jpg',
      tags: []
    },
    {
      id: 'bolo-no-pote',
      nome: 'Bolo no Pote',
      categoria: 'mesa',
      descricao: 'Camadas de bolo, recheio e cobertura em pote de 250 ml — prático para vender no dia a dia e entregar resfriado.',
      preco: 'R$ 16,90',
      detalhe: 'unidade · 250 ml',
      img: null,
      tags: []
    },
    {
      id: 'cesta-picnic',
      nome: 'Cesta para Presente',
      categoria: 'mesa',
      descricao: 'Montamos a cesta do zero com o que você escolher: doces, bolos, salgados e uma mensagem escrita à mão.',
      preco: 'a partir de R$ 149,90',
      detalhe: 'montagem combinada pelo WhatsApp',
      img: null,
      tags: []
    }
  ],

  /* ---- Outros sabores (sem foto ainda) --------------------------------- */
  // Aparecem como lista enxuta embaixo do cardápio. Assim que você mandar a
  // foto, é só copiar o bloco lá para cima e apagar daqui.
  outros: [
    { nome: 'Bolo de Fubá com Goiabada', preco: 'R$ 42,90' },
    { nome: 'Naked Cake de Frutas Vermelhas', preco: 'R$ 159,90' },
    { nome: 'Cheesecake de Frutas Vermelhas', preco: 'R$ 109,90' },
    { nome: 'Torta de Limão', preco: 'R$ 89,90' },
    { nome: 'Coxinha Cremosa (cento)', preco: 'R$ 129,90' },
    { nome: 'Bolo Temático Infantil', preco: 'a partir de R$ 189,90' }
  ],

  /* ---- Abas de datas especiais ----------------------------------------- */
  sazonais: [
    {
      id: 'pascoa',
      aba: 'Páscoa',
      titulo: 'Ovo de colher, casca de chocolate nobre',
      chamada: 'Abrimos a agenda da Páscoa com antecedência porque a produção é limitada. Escolha o recheio e a gente confirma na hora.',
      img: 'assets/img/sazonal-pascoa.jpg',
      prazo: 'Reserve com 5 a 7 dias de antecedência',
      itens: [
        { nome: 'Ovo de colher tradicional (700 g)', preco: 'R$ 129,90' },
        { nome: 'Ovo trufado ao leite ou meio amargo', preco: 'R$ 99,90' },
        { nome: 'Cesta de Páscoa com ovos e pão de Páscoa', preco: 'a partir de R$ 189,90' },
        { nome: 'Ninho, brigadeiro, morango e maracujá', preco: 'recheios disponíveis' }
      ],
      obs: 'Casca de 4 mm, chocolate nobre, com nome escrito à mão na embalagem.'
    },
    {
      id: 'dia-das-maes',
      aba: 'Dia das Mães',
      titulo: 'Presente que se come: bolo, café e cartão escrito à mão',
      chamada: 'A encomenda mais procurada do ano. Você escolhe o bolo e nós cuidamos da apresentação, do laço e do cartão.',
      img: 'assets/img/sazonal-maes.jpg',
      prazo: 'Reserve com 5 a 7 dias de antecedência',
      itens: [
        { nome: 'Bolo coração Ninho com Morango', preco: 'R$ 159,90' },
        { nome: 'Kit Café da Manhã para a mamãe', preco: 'R$ 119,90' },
        { nome: 'Caixa de doces finos com laço', preco: 'R$ 84,90' },
        { nome: 'Cartão escrito à mão com a sua mensagem', preco: 'cortesia' }
      ],
      obs: 'Entrega agendada no sábado que antecede o domingo para o presente chegar fresco.'
    },
    {
      id: 'dia-dos-namorados',
      aba: 'Dia dos Namorados',
      titulo: 'Dois corações, uma caixa e muito chocolate',
      chamada: 'Do petit gâteau para dois às caixas coração: montamos a encomenda pensando em jantar, surpresa ou pedido de namoro.',
      img: 'assets/img/sazonal-namorados.jpg',
      prazo: 'Reserve com 3 a 5 dias de antecedência',
      itens: [
        { nome: 'Caixa coração com 12 doces finos', preco: 'R$ 119,90' },
        { nome: 'Bolo Red Velvet com coração na massa', preco: 'R$ 149,90' },
        { nome: 'Petit gâteau para 2 (massa congelada + calda)', preco: 'R$ 59,90' },
        { nome: 'Frasco de brigadeiro com colher de chocolate', preco: 'R$ 44,90' }
      ],
      obs: 'Escrevemos a mensagem que você quiser na embalagem, sem custo extra.'
    },
    {
      id: 'aniversarios',
      aba: 'Aniversários',
      titulo: 'Bolo personalizado, do tema ao papel de arroz',
      chamada: 'Manda o tema, a cor e o número de convidados que devolvemos um orçamento com desenho de como vai ficar.',
      img: 'assets/img/sazonal-aniversario.jpg',
      prazo: 'Reserve com 7 dias de antecedência',
      itens: [
        { nome: 'Bolo temático com aplicação e topo personalizado', preco: 'a partir de R$ 189,90' },
        { nome: 'Bolo de andar (2 ou 3 andares)', preco: 'a partir de R$ 349,90' },
        { nome: 'Mesa de doces completa', preco: 'orçamento no WhatsApp' },
        { nome: 'Kit festa: bolo + 100 salgados + 100 doces', preco: 'a partir de R$ 419,90' }
      ],
      obs: 'Fazemos bolos com recheios a sua escolha, sem lactose ou sem glúten sob consulta.'
    }
  ],

  /* ---- Vídeos ---------------------------------------------------------- */
  // Duas formas de usar:
  //  1) src: 'assets/video/nome.mp4'  -> o vídeo toca aqui no site
  //  2) sem src, com `reel`: link do Instagram -> o card abre o reel numa nova aba
  videos: [
    {
      titulo: 'O recheio por dentro',
      legenda: 'Corte do bolo de Ninho com Morango, camada por camada.',
      poster: 'assets/img/hero-detalhe.jpg',
      duracao: '0:38',
      src: null,
      reel: 'https://www.instagram.com/andrades.bakery'
    },
    {
      titulo: 'Fornada do dia',
      legenda: 'Pão de fermentação natural saindo do forno, 24h depois de começar.',
      poster: 'assets/img/mesa-completa.jpg',
      duracao: '1:02',
      src: null,
      reel: 'https://www.instagram.com/andrades.bakery'
    },
    {
      titulo: 'Montagem da mesa de doces',
      legenda: 'Como montamos uma mesa de festa de 100 convidados.',
      poster: 'assets/img/doces-finos.jpg',
      duracao: '0:52',
      src: null,
      reel: 'https://www.instagram.com/andrades.bakery'
    }
  ],

  /* ---- Depoimentos ----------------------------------------------------- */
  // >>> TROCAR pelos feedbacks reais (prints do WhatsApp, Google, Instagram).
  depoimentos: [
    { texto: 'Pedi o bolo Ninho com Morango pro aniversário da minha mãe e sobrou só o prato. O morango era fresco de verdade, e ela geladinha do jeito que a gente gosta.', nome: 'Camila R.', origem: 'Aniversário de 60 anos', nota: 5 },
    { texto: 'Trabalho em escritório e encomendo os salgados assados toda reunião. Chega quentinho e nunca atrasaram uma entrega.', nome: 'Rodrigo M.', origem: 'Encomenda recorrente', nota: 5 },
    { texto: 'Fiz a cesta de Páscoa pro meu afilhado e o ovo vinha com o nome dele escrito à mão. Ele guardou a embalagem!', nome: 'Simone A.', origem: 'Páscoa', nota: 5 },
    { texto: 'Encomendei em cima da hora pro Dia dos Namorados e mesmo assim me responderam rápido, com paciência, e a caixa coração ficou linda.', nome: 'Vitor P.', origem: 'Dia dos Namorados', nota: 5 },
    { texto: 'O bolo temático do meu filho ficou igual ao desenho que mandei de referência. Difícil achar quem aceite esse desafio.', nome: 'Aline C.', origem: 'Aniversário infantil', nota: 5 },
    { texto: 'Kit café da manhã foi o presente que mais agradou em casa. Pão, geleia da casa e o café já moído, muito caprichoso.', nome: 'Marcos V.', origem: 'Presente', nota: 5 }
  ],

  /* ---- Perguntas frequentes -------------------------------------------- */
  faq: [
    {
      q: 'Qual o prazo para encomendar?',
      a: 'Bolos, doces e salgados precisam de 48 horas de antecedência. Em datas comemorativas (Páscoa, Dia das Mães, Dia dos Namorados e Natal) o ideal é reservar com 5 a 7 dias, porque a agenda fecha.'
    },
    {
      q: 'Vocês entregam? Até onde?',
      a: 'Entregamos em Itaboraí e nas cidades vizinhas. A taxa é combinada no WhatsApp conforme o endereço e a data. A retirada no local é gratuita — e sempre tem um café pra você provar.'
    },
    {
      q: 'Como funciona o pagamento?',
      a: 'Pix, dinheiro, débito ou crédito. Encomendas maiores são confirmadas com sinal de 50% e o restante na retirada ou na entrega.'
    },
    {
      q: 'Fazem bolo personalizado com tema?',
      a: 'Sim. Mande a imagem de referência, o número de convidados e a data. Enviamos um orçamento com o esboço de como o bolo vai ficar antes de você confirmar.'
    },
    {
      q: 'Tem opção sem lactose, sem glúten ou vegana?',
      a: 'Alguns itens sim e outros são adaptáveis. Como a produção é artesanal e compartilhamos a cozinha, avisamos todas as restrições e possibilidades no WhatsApp antes de fechar o pedido.'
    }
  ]
};
