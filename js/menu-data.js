/* ==========================================================================
   ANDRADE'S BAKERY — CONTEÚDO DO SITE
   (destaque, bolos de festa, cardápio, datas especiais, vídeos, depoimentos)
   --------------------------------------------------------------------------
   ATUALIZADO COM AS FOTOS E VÍDEOS REAIS (enviados pelo cliente em 05/10/2026)

   COMO EDITAR:
   • Cada item do cardápio é um bloco { } dentro da lista `produtos`.
   • `preco` aceita texto livre ("R$ 89,90" ou "a partir de R$ 189,90").
   • `img: null` faz o card aparecer com um marcador desenhado no lugar da foto
     (é o caso dos itens que ainda não foram fotografados — fica bonito e
     deixa claro que a foto está por vir).
   • `tags`: 'mais-pedido' | 'novo' | 'sem-lactose' | 'vegano' | 'data-especial'

   💡 OS PREÇOS NÃO APARECEM NO SITE (decisão do cliente). Cada item mostra
      "sob orçamento" e o cardápio explica que o valor varia conforme tamanho,
      massa, recheio e acabamento. Os valores abaixo continuam cadastrados e
      estão prontos: para exibi-los, basta trocar `mostrarPrecos` para true em
      js/config.js. Nada mais precisa ser feito.

   ⚠️ PENDÊNCIAS MARCADAS COM >>> no arquivo:
      • preços (todos são de exemplo)
      • depoimentos (os textos são de exemplo)
      • fotos dos doces, salgados, kits e das campanhas de Páscoa/Mães/Namorados
   ========================================================================== */

window.CARDAPIO = {

  /* ======================================================================
     DESTAQUE DO MÊS — faixa mais visível do site, logo após a abertura
     ====================================================================== */
  destaque: {
    ativo: true,
    etiqueta: 'Destaque do mês',
    titulo: 'Bolo personalizado com escrita à mão',
    texto: 'Você manda a referência (tema, cores, o nome que vai no bolo), a gente desenha como vai ficar e só produz depois da sua aprovação. Tamanho, massa e recheio do seu jeito.',
    preco: 'a partir de R$ 189,90',   // >>> CONFIRMAR preço
    detalhe: 'Reserve com 5 a 7 dias · entrega em São Gonçalo e Niterói',
    img: 'assets/img/sazonal-aniversario.jpg',
    msg: 'Olá! Queria um orçamento de bolo personalizado. Tema/escrita: ____ · Data: ____ · Convidados: ____'
  },

  /* ======================================================================
     BOLOS DE FESTA — a especialidade da casa
     ====================================================================== */
  bolosDeFesta: {
    eyebrow: 'Especialidade da casa',
    titulo: 'Bolos de festa para aniversário',
    chamada: 'Bolo de festa é o que a gente faz de melhor: do desenho no papel até a mesa da sua comemoração. Fazemos sob medida — qualquer tamanho, qualquer massa, qualquer recheio, do jeito que você preferir. Nós desenhamos, você aprova e a gente produz.',
    etiquetaMarca: 'Fazemos o esboço antes de produzir',

    // Tabela de REFERÊNCIA — fazemos qualquer tamanho >>> CONFIRMAR preços reais
    tamanhosTitulo: 'Referência de tamanho (fazemos qualquer um)',
    tamanhos: [
      { aro: 'Aro 15 cm', fatias: 'até 12 fatias', preco: 'a partir de R$ 129,90' },
      { aro: 'Aro 20 cm', fatias: '16 a 20 fatias', preco: 'a partir de R$ 189,90' },
      { aro: 'Aro 25 cm', fatias: '28 a 35 fatias', preco: 'a partir de R$ 269,90' },
      { aro: 'Aro 30 cm', fatias: '45 a 55 fatias', preco: 'a partir de R$ 359,90' },
      { aro: 'Outro tamanho', fatias: 'você escolhe — nós fazemos', preco: 'orçamento no WhatsApp' }
    ],
    notaTamanhos: 'Fazemos qualquer tamanho. Os valores variam conforme tamanho, massa, recheio e acabamento — peça o orçamento no WhatsApp, sem compromisso.',

    incluso: [
      { titulo: 'Sob medida de verdade', texto: 'Qualquer tamanho, qualquer massa, qualquer recheio. Você diz o que quer e a gente faz exatamente assim.' },
      { titulo: 'Esboço antes da produção', texto: 'Mandamos o desenho de como o bolo vai ficar. Só produzimos depois do seu "aprovado".' },
      { titulo: 'Topo e aplicações do tema', texto: 'Personagem, número da idade, flores, papel de arroz, laço, escrita à mão — combinado no orçamento.' },
      { titulo: 'Acabamento à mão, no dia', texto: 'Bolo produzido e finalizado na data da entrega, com chantilly, ganache ou creme feito na hora.' },
      { titulo: 'Mensagem escrita à mão', texto: 'Escrevemos o nome e a frase que você quiser, sem custo extra.' },
      { titulo: 'Entrega combinada', texto: 'Entregamos em São Gonçalo e Niterói, com horário combinado, ou você retira no local.' }
    ],

    // Galeria com os bolos entregues (fotos reais)
    galeria: [
      { img: 'assets/img/sazonal-aniversario.jpg', titulo: 'Bolo personalizado', detalhe: 'escrita à mão e corações' },
      { img: 'assets/img/hero-bolo.jpg',           titulo: 'Corações com laço',  detalhe: 'chantilly e chocolate' },
      { img: 'assets/img/bolo-ninho-morango.jpg',  titulo: 'Bolo de flores',     detalhe: 'flores aplicadas uma a uma' },
      { img: 'assets/img/bolo-chocolate.jpg',      titulo: 'Trufado Ferrero',    detalhe: 'chocolate e amendoim torrado' },
      { img: 'assets/img/bolo-red-velvet.jpg',     titulo: 'Bicolor',            detalhe: 'camadas de chocolate e creme' },
      { img: 'assets/img/bolo-cenoura.jpg',        titulo: 'Coroa de flores',    detalhe: 'topo decorado com flores' }
    ],

    regras: [
      'Bolos de festa: 5 a 7 dias de antecedência.',
      'Temas com personagem, escultura ou muita aplicação: 1 mês.',
      'Datas de fim de semana e véspera de feriado fecham primeiro.',
      'Reserva confirmada com sinal de 50%.'   // >>> CONFIRMAR se pede sinal
    ],

    msg: 'Olá! Quero um orçamento de bolo de festa. Tema: ____ · Data: ____ · Convidados: ____ · Cidade: São Gonçalo/Niterói'
  },

  /* ======================================================================
     VITRINE DO INSTAGRAM — fotos reais da produção
     ====================================================================== */
  instagram: {
    titulo: 'Do nosso dia a dia',
    chamada: 'Os bolos que saem daqui e vão para a festa — sem produção de estúdio, do jeito que a gente entrega.',
    posts: [
      { img: 'assets/img/sazonal-aniversario.jpg', alt: 'Bolo personalizado com escrita à mão', url: 'https://www.instagram.com/andrades.bakery' },
      { img: 'assets/img/hero-bolo.jpg',           alt: 'Bolo com corações e laço',            url: 'https://www.instagram.com/andrades.bakery' },
      { img: 'assets/img/bolo-ninho-morango.jpg',  alt: 'Bolo de flores rosas',                url: 'https://www.instagram.com/andrades.bakery' },
      { img: 'assets/img/bolo-chocolate.jpg',      alt: 'Bolo trufado com bombons Ferrero',    url: 'https://www.instagram.com/andrades.bakery' },
      { img: 'assets/img/bolo-red-velvet.jpg',     alt: 'Bolo bicolor de chocolate e creme',   url: 'https://www.instagram.com/andrades.bakery' },
      { img: 'assets/img/bolo-cenoura.jpg',        alt: 'Bolo com coroa de flores',            url: 'https://www.instagram.com/andrades.bakery' }
    ]
  },

  /* ======================================================================
     CARDÁPIO
     ====================================================================== */
  categorias: [
    { id: 'todos',    nome: 'Tudo' },
    { id: 'bolos',    nome: 'Bolos de festa' },
    { id: 'doces',    nome: 'Doces & Sobremesas' },
    { id: 'salgados', nome: 'Salgados & Pães' },
    { id: 'mesa',     nome: 'Café & Mesa' }
  ],

  produtos: [
    /* ============ BOLOS DE FESTA (fotos reais) ============ */
    {
      id: 'bolo-personalizado',
      nome: 'Bolo Personalizado',
      categoria: 'bolos',
      descricao: 'Do nome escrito à mão ao personagem do tema: o bolo desenhado para a sua festa. Enviamos o esboço antes de produzir.',
      preco: 'a partir de R$ 189,90',   // >>> CONFIRMAR
      detalhe: 'Aro 20 · 16 a 20 fatias · esboço incluso',
      img: 'assets/img/sazonal-aniversario.jpg',
      tags: ['mais-pedido']
    },
    {
      id: 'bolo-laco-coracoes',
      nome: 'Bolo de Festa com Laço',
      categoria: 'bolos',
      descricao: 'Chantilly liso, corações de chocolate e laço de fita. O clássico que agrada de criança a avó.',
      preco: 'a partir de R$ 159,90',   // >>> CONFIRMAR
      detalhe: 'Aro 20 · 16 a 20 fatias',
      img: 'assets/img/hero-bolo.jpg',
      tags: []
    },
    {
      id: 'bolo-flores',
      nome: 'Bolo de Flores',
      categoria: 'bolos',
      descricao: 'Acabamento liso com flores aplicadas uma a uma — combina com aniversário adulto, chá de bebê e batizado.',
      preco: 'a partir de R$ 179,90',   // >>> CONFIRMAR
      detalhe: 'Aro 20 · 16 a 20 fatias',
      img: 'assets/img/bolo-ninho-morango.jpg',
      tags: ['mais-pedido']
    },
    {
      id: 'bolo-ferrero',
      nome: 'Bolo Trufado Ferrero',
      categoria: 'bolos',
      descricao: 'Massa de chocolate, cobertura de amendoim torrado e bombons por cima. O preferido dos adultos.',
      preco: 'a partir de R$ 199,90',   // >>> CONFIRMAR
      detalhe: 'Aro 20 · 16 a 20 fatias',
      img: 'assets/img/bolo-chocolate.jpg',
      tags: []
    },
    {
      id: 'bolo-bicolor',
      nome: 'Bolo Bicolor de Corte',
      categoria: 'bolos',
      descricao: 'Camadas de chocolate e creme em faixas, com fatias generosas. Santo antônio ou retangular para festa cheia.',
      preco: 'a partir de R$ 169,90',   // >>> CONFIRMAR
      detalhe: 'Serve de 20 a 30 pessoas',
      img: 'assets/img/bolo-red-velvet.jpg',
      tags: []
    },
    {
      id: 'bolo-coroa-flores',
      nome: 'Bolo com Coroa de Flores',
      categoria: 'bolos',
      descricao: 'Coroa de flores em volta do topo: delicado, fácil de combinar com a decoração da mesa.',
      preco: 'a partir de R$ 179,90',   // >>> CONFIRMAR
      detalhe: 'Aro 25 · 28 a 35 fatias',
      img: 'assets/img/bolo-cenoura.jpg',
      tags: []
    },
    /* ============ DOCES & SOBREMESAS (aguardando fotos) ============ */
    {
      id: 'mesa-doces',
      nome: 'Mesa de Doces da Festa',
      categoria: 'doces',
      descricao: 'Combinamos com o bolo: cem doces variados (brigadeiro, beijinho, bicho de pé, casadinho e camafeu) montados na travessa para a sua mesa.',
      preco: 'R$ 259,90',               // >>> CONFIRMAR
      detalhe: 'cento (100 un.) · sabores à sua escolha',
      img: null,                        // >>> enviar foto da mesa montada
      tags: ['mais-pedido']
    },
    {
      id: 'doces-finos',
      nome: 'Caixa de Doces Finos',
      categoria: 'doces',
      descricao: 'Vinte doces em papel de seda, com laço — a lembrancinha que a festa leva para casa.',
      preco: 'R$ 84,90',                // >>> CONFIRMAR
      detalhe: '20 unidades · sabores à sua escolha',
      img: null,                        // >>> enviar foto da caixa
      tags: []
    },
    {
      id: 'pudim',
      nome: 'Pudim de Leite Condensado',
      categoria: 'doces',
      descricao: 'Receita de família: denso, sem furinhos e com calda de caramelo no ponto certo.',
      preco: 'R$ 49,90',                // >>> CONFIRMAR
      detalhe: 'pudim inteiro · 1,2 kg',
      img: null,
      tags: []
    },

    /* ============ SALGADOS & PÃES (aguardando fotos) ============ */
    {
      id: 'salgados-assados',
      nome: 'Salgados Assados',
      categoria: 'salgados',
      descricao: 'Sortido de coxinha, risoles, enroladinho de salsicha, empada e quibe, todos assados na hora da entrega.',
      preco: 'R$ 139,90',               // >>> CONFIRMAR
      detalhe: 'cento (100 un.) · fritos ou assados',
      img: null,
      tags: ['mais-pedido']
    },
    {
      id: 'pao-de-queijo',
      nome: 'Pão de Queijo Mineiro',
      categoria: 'salgados',
      descricao: 'Queijo minas curado de verdade e polvilho azedo. Casca fininha, muito recheio e aquele puxa-puxa.',
      preco: 'R$ 54,90',                // >>> CONFIRMAR
      detalhe: '1 kg (cerca de 30 unidades)',
      img: null,
      tags: []
    },
    {
      id: 'empada',
      nome: 'Empada de Frango',
      categoria: 'salgados',
      descricao: 'Massa quebradiça de manteiga e recheio de frango desfiado com catupiry e cheiro-verde. Individual.',
      preco: 'R$ 9,50',                 // >>> CONFIRMAR
      detalhe: 'unidade',
      img: null,
      tags: []
    },
    {
      id: 'pao-artesanal',
      nome: 'Pão de Fermentação Natural',
      categoria: 'salgados',
      descricao: 'Fermentação lenta de 24 horas com levain da casa. Casca crocante, miolo alveolado e sabor levemente azedo.',
      preco: 'R$ 32,90',                // >>> CONFIRMAR
      detalhe: 'pão de 700 g · assa às quintas e sábados',
      img: null,
      tags: ['novo']
    },

    /* ============ CAFÉ & MESA (aguardando fotos) ============ */
    {
      id: 'kit-cafe-manha',
      nome: 'Kit Café da Manhã',
      categoria: 'mesa',
      descricao: 'Para presentear ou começar o dia sem pressa: bolos caseiros, pães, geleia da casa, frutas e café coado.',
      preco: 'R$ 119,90',               // >>> CONFIRMAR
      detalhe: 'para 2 pessoas · cestinha e cartão inclusos',
      img: null,
      tags: []
    },
    {
      id: 'kit-festa',
      nome: 'Kit Festa (bolo + salgados + doces)',
      categoria: 'mesa',
      descricao: 'A festa resolvida de uma vez: bolo de festa aro 20, cem salgados assados e cem doces variados, com entrega na mesma data.',
      preco: 'a partir de R$ 549,90',   // >>> CONFIRMAR
      detalhe: 'serve de 20 a 25 convidados',
      img: null,
      tags: ['mais-pedido']
    },
    {
      id: 'cesta-presente',
      nome: 'Cesta para Presente',
      categoria: 'mesa',
      descricao: 'Montamos a cesta do zero com o que você escolher: doces, bolos, salgados e uma mensagem escrita à mão.',
      preco: 'a partir de R$ 149,90',   // >>> CONFIRMAR
      detalhe: 'montagem combinada pelo WhatsApp',
      img: null,
      tags: []
    }
  ],

  /* ---- Outros sabores e massas (texto, sem foto) ----------------------- */
  // Qualquer massa e recheio: a casa faz do jeito que o cliente preferir.
  outros: [
    { nome: 'Ninho com morango', preco: 'sob consulta' },
    { nome: 'Brigadeiro cremoso', preco: 'sob consulta' },
    { nome: 'Doce de leite com ameixa', preco: 'sob consulta' },
    { nome: 'Bolo de cenoura com brigadeiro', preco: 'sob consulta' },
    { nome: 'Red velvet com cream cheese', preco: 'sob consulta' },
    { nome: 'Frutas vermelhas com chantilly', preco: 'sob consulta' },
    { nome: 'Naked cake', preco: 'sob consulta' },
    { nome: 'Torta de limão', preco: 'sob consulta' },
    { nome: 'Massa amanteigada (para andar)', preco: 'sob consulta' },
    { nome: 'Bolo sem lactose ou sem glúten', preco: 'sob consulta' }
  ],

  /* ======================================================================
     DATAS ESPECIAIS (abas)
     >>> As fotos das campanhas ainda não foram enviadas: os cards mostram um
     marcador até você mandar. Troque `img: null` pelo caminho da foto.
     ====================================================================== */
  sazonais: [
    {
      id: 'pascoa',
      aba: 'Páscoa',
      titulo: 'Ovo de colher, casca de chocolate nobre',
      chamada: 'Abrimos a agenda da Páscoa com antecedência porque a produção é limitada. Escolha o recheio e a gente confirma na hora.',
      img: null,
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
      chamada: 'A encomenda mais procurada do ano depois dos aniversários. Você escolhe o bolo e nós cuidamos da apresentação, do laço e do cartão.',
      img: null,
      prazo: 'Reserve com 5 a 7 dias de antecedência',
      itens: [
        { nome: 'Bolo coração com flores', preco: 'R$ 159,90' },
        { nome: 'Kit Café da Manhã para a mamãe', preco: 'R$ 119,90' },
        { nome: 'Caixa de doces finos com laço', preco: 'R$ 84,90' },
        { nome: 'Cartão escrito à mão com a sua mensagem', preco: 'cortesia' }
      ],
      obs: 'Entrega agendada no sábado que antecede o domingo, para o presente chegar fresco.'
    },
    {
      id: 'dia-dos-namorados',
      aba: 'Dia dos Namorados',
      titulo: 'Dois corações, uma caixa e muito chocolate',
      chamada: 'Do bolo em formato de coração às caixas com doces: montamos a encomenda pensando em jantar, surpresa ou pedido de namoro.',
      img: null,
      prazo: 'Reserve com 3 a 5 dias de antecedência',
      itens: [
        { nome: 'Bolo coração trufado', preco: 'R$ 169,90' },
        { nome: 'Caixa coração com 12 doces finos', preco: 'R$ 119,90' },
        { nome: 'Bolo com escrita personalizada', preco: 'R$ 189,90' },
        { nome: 'Frasco de brigadeiro com colher de chocolate', preco: 'R$ 44,90' }
      ],
      obs: 'Escrevemos a mensagem que você quiser na embalagem, sem custo extra.'
    },
    {
      id: 'aniversarios',
      aba: 'Aniversários',
      titulo: 'Bolo personalizado, do tema ao papel de arroz',
      chamada: 'Nossa especialidade. Manda o tema, a cor e o número de convidados que devolvemos um orçamento com o desenho de como vai ficar.',
      img: 'assets/img/sazonal-aniversario.jpg',
      prazo: 'Reserve com 5 a 7 dias · temas complexos, 1 mês',
      itens: [
        { nome: 'Bolo temático com aplicação e topo personalizado', preco: 'a partir de R$ 189,90' },
        { nome: 'Bolo com tema de personagem (papel de arroz)', preco: 'R$ 199,90' },
        { nome: 'Mesa de doces completa', preco: 'a partir de R$ 259,90' },
        { nome: 'Kit festa: bolo + 100 salgados + 100 doces', preco: 'a partir de R$ 549,90' }
      ],
      obs: 'Fazemos recheios a sua escolha e atendemos restrições alimentares sob consulta.'
    }
  ],

  /* ======================================================================
     VÍDEOS — arquivos reais enviados pelo cliente (rodam no próprio site)
     ====================================================================== */
  videos: [
    {
      titulo: 'Bolo personalizado',
      legenda: 'Escrita à mão e corações: o bolo feito para a festa do Téo.',
      poster: 'assets/img/bolo-tchau-tete-capa.jpg',
      duracao: '0:12',
      src: 'assets/video/bolo-tchau-tete.mp4',
      reel: null
    },
    {
      titulo: 'Bolo trufado Ferrero',
      legenda: 'Chocolate, amendoim torrado e bombons por cima — girando na mesa.',
      poster: 'assets/img/bolo-ferrero-capa.jpg',
      duracao: '0:06',
      src: 'assets/video/bolo-ferrero.mp4',
      reel: null
    },
    {
      titulo: 'Bolo bicolor',
      legenda: 'Camadas de chocolate e creme, montadas faixa por faixa.',
      poster: 'assets/img/bolo-bicolor-capa.jpg',
      duracao: '0:12',
      src: 'assets/video/bolo-bicolor.mp4',
      reel: null
    },
    {
      titulo: 'Bolo de flores',
      legenda: 'Flores aplicadas uma a uma no chantilly, antes de sair para a entrega.',
      poster: 'assets/img/bolo-flores-capa.jpg',
      duracao: '0:12',
      src: 'assets/video/bolo-flores.mp4',
      reel: null
    }
  ],

  /* ======================================================================
     DEPOIMENTOS — >>> TROCAR pelos feedbacks reais (prints do WhatsApp!)
     Os textos abaixo são de EXEMPLO, escritos para montar o carrossel.
     ====================================================================== */
  depoimentos: [
    { texto: 'O bolo ficou igual ao desenho que eles mandaram antes de fazer. Chegou em Niterói no horário, geladinho e montado.', nome: 'Camila R.', origem: 'Bolo personalizado · Niterói', nota: 5 },
    { texto: 'O corte do bolo é o momento da festa e dessa vez sobrou só o prato. O chantilly com as flores era fresco de verdade.', nome: 'Rodrigo M.', origem: 'Bolo de flores · São Gonçalo', nota: 5 },
    { texto: 'Fecharam comigo o bolo, 100 salgados e 100 doces na mesma entrega. Foi a primeira festa que eu não me preocupei com comida.', nome: 'Aline C.', origem: 'Kit festa · Alcântara', nota: 5 },
    { texto: 'Encomendei em cima da hora, um dia antes, e mesmo assim me responderam rápido e conseguiram encaixar. Salvaram meu domingo.', nome: 'Vitor P.', origem: 'Bolo aro 20 · Niterói', nota: 5 },
    { texto: 'Fiz a cesta de Páscoa pro meu afilhado e o ovo vinha com o nome dele escrito à mão. Ele guardou a embalagem!', nome: 'Simone A.', origem: 'Páscoa · São Gonçalo', nota: 5 },
    { texto: 'O bolo viajou 40 minutos até Niterói e chegou inteiro, montado e ainda gelado. Deu pra ver o cuidado na embalagem.', nome: 'Marcos V.', origem: 'Bolo de festa · Niterói', nota: 5 }
  ],

  /* ======================================================================
     PERGUNTAS FREQUENTES
     ====================================================================== */
  faq: [
    {
      q: 'Com quanto tempo preciso encomendar o bolo de festa?',
      a: 'Bolos de festa pedem 5 a 7 dias de antecedência. Temas com personagem, escultura ou muita aplicação precisam de 1 mês, porque envolvem esboço, aprovação e estrutura. Datas de fim de semana e véspera de feriado fecham primeiro — se a data é importante, reserve assim que decidir.'
    },
    {
      q: 'Vocês fazem bolo de qualquer tamanho, massa e recheio?',
      a: 'Sim — é assim que trabalhamos. Fazemos sob medida: qualquer tamanho (inclusive fora da tabela), qualquer massa e qualquer recheio, do jeito que você preferir. Basta dizer o que quer no WhatsApp. Se você tiver alguma referência (uma foto, um sabor de outra confeitaria, a receita da sua família), manda que a gente reproduz.'
    },
    {
      q: 'Qual tamanho de bolo para a minha quantidade de convidados?',
      a: 'Como referência: aro 15 serve até 12 fatias · aro 20, de 16 a 20 fatias · aro 25, de 28 a 35 · aro 30, de 45 a 55. Mas a tabela é só um guia — fazemos o tamanho que você precisar (e, para festas maiores, montamos a mesa com mais de um bolo). Diga o número de convidados no WhatsApp que a gente indica o tamanho certo, sem cobrar a mais por isso.'
    },
    {
      q: 'Como funciona o bolo personalizado com tema?',
      a: 'Você manda uma imagem de referência, o tema, a data e o número de convidados. Enviamos o orçamento junto com o esboço de como o bolo vai ficar. Só depois da sua aprovação o bolo entra na produção.'
    },
    {
      q: 'Vocês entregam? Até onde?',
      a: 'Atendemos São Gonçalo e Niterói inteiros. A taxa e o horário da entrega são combinados no WhatsApp conforme o endereço, a data e o tamanho do pedido. Bolos de festa viajam refrigerados. A retirada no local também é possível, no horário combinado.'
    },
    {
      q: 'Por que o site não mostra os preços?',
      a: 'Porque o valor do bolo depende de coisas que só você sabe: o tamanho (quantos convidados), a massa, o recheio, o acabamento e o tempo de decoração (flores aplicadas, escrita à mão, tema). Em vez de dar um número que não serve para ninguém, preferimos te passar o valor certo do seu bolo: manda o que você quer — tema, data e quantos convidados — e respondemos com o orçamento, normalmente no mesmo dia. Sem compromisso e sem enrolação.'
    },
    {
      q: 'Como funciona o pagamento e a reserva da data?',
      a: 'Reservamos a data com sinal de 50% por Pix, e o restante é pago na entrega ou na retirada. Aceitamos Pix, dinheiro, débito e crédito.'
    },
    {
      q: 'Tem opção sem lactose, sem glúten ou vegana?',
      a: 'Alguns itens sim e outros são adaptáveis. Como a produção é artesanal e compartilhamos a cozinha, avisamos todas as restrições e possibilidades no WhatsApp antes de fechar o pedido.'
    }
  ]
};
