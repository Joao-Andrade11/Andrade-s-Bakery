/* ==========================================================================
   ANDRADE'S BAKERY — CONTEÚDO DO SITE
   (destaque, bolos de festa, cardápio, datas especiais, vídeos, depoimentos)
   --------------------------------------------------------------------------
   COMO EDITAR:
   • Cada item do cardápio é um bloco { } dentro da lista `produtos`.
   • `preco` aceita texto livre ("R$ 89,90" ou "a partir de R$ 189,90").
   • `img` é o caminho da foto. Com img: null o card aparece com um marcador
     desenhado no lugar da imagem (nunca um espaço quebrado).
   • `tags`: 'mais-pedido' | 'novo' | 'sem-lactose' | 'vegano' | 'data-especial'
   • ATENÇÃO: os preços, tamanhos e depoimentos abaixo são EXEMPLOS para montar
     o layout. Troque pelos seus valores e pelos feedbacks reais dos clientes.
   ========================================================================== */

window.CARDAPIO = {

  /* ======================================================================
     DESTAQUE DO MÊS — a faixa mais visível do site, logo após a abertura
     ====================================================================== */
  destaque: {
    ativo: true,
    etiqueta: 'Destaque do mês',
    titulo: 'Bolo de festa temático',
    texto: 'Você manda a referência do tema, a gente desenha como vai ficar e só produz depois da sua aprovação. Tamanho, massa, recheio e acabamento do seu jeito — entrega a combinar em São Gonçalo e Niterói.',
    preco: 'a partir de R$ 189,90',
    detalhe: 'Reserve com 5 a 7 dias · temas complexos com 1 mês',
    img: 'assets/img/sazonal-aniversario.jpg',
    msg: 'Olá! Quero um orçamento de bolo de festa temático. Tema: ____ · Data: ____ · Convidados: ____'
  },

  /* ======================================================================
     BOLOS DE FESTA — a especialidade da casa (seção própria no site)
     ====================================================================== */
  bolosDeFesta: {
    eyebrow: 'Especialidade da casa',
    titulo: 'Bolos de festa para aniversário',
    chamada: 'Bolo de festa é o que a gente faz de melhor: do desenho no papel até a mesa da sua comemoração. Fazemos sob medida — qualquer tamanho, qualquer massa, qualquer recheio, do jeito que você preferir. Nós desenhamos, você aprova e a gente produz.',
    etiquetaMarca: 'Fazemos o esboço antes de produzir',
    // Tabela de tamanhos — >>> CONFIRMAR medidas, fatias e preços
    // Referência de tamanhos — fazemos qualquer tamanho, a tabela é só um guia
    tamanhosTitulo: 'Referência de tamanho (fazemos qualquer um)',
    tamanhos: [
      { aro: 'Aro 15 cm', fatias: 'até 12 fatias', preco: 'a partir de R$ 129,90' },
      { aro: 'Aro 20 cm', fatias: '16 a 20 fatias', preco: 'a partir de R$ 189,90' },
      { aro: 'Aro 25 cm', fatias: '28 a 35 fatias', preco: 'a partir de R$ 269,90' },
      { aro: 'Aro 30 cm', fatias: '45 a 55 fatias', preco: 'a partir de R$ 359,90' },
      { aro: 'Dois andares', fatias: '70 fatias ou mais', preco: 'orçamento no WhatsApp' },
      { aro: 'Outro tamanho', fatias: 'você escolhe — nós fazemos', preco: 'orçamento no WhatsApp' }
    ],
    // O que vai incluso em todo bolo de festa (lista com marcadores)
    incluso: [
      { titulo: 'Sob medida de verdade', texto: 'Qualquer tamanho, qualquer massa, qualquer recheio. Você diz o que quer e a gente faz exatamente assim.' },
      { titulo: 'Esboço antes da produção', texto: 'Mandamos o desenho de como o bolo vai ficar. Só produzimos depois do seu "aprovado".' },
      { titulo: 'Massa e recheio à escolha', texto: 'Pão de ló, chocolate, cenoura ou red velvet, com os recheios que você preferir.' },
      { titulo: 'Topo e aplicações do tema', texto: 'Personagem, número da idade, flores, papel de arroz, laço — combinado no orçamento.' },
      { titulo: 'Mensagem escrita à mão', texto: 'Escrevemos o nome e a frase que você quiser na embalagem ou no topo, sem custo extra.' },
      { titulo: 'Entrega refrigerada', texto: 'Chega no ponto em São Gonçalo e Niterói, ou você retira aqui no horário combinado.' }
    ],
    galeria: [
      { img: 'assets/img/sazonal-aniversario.jpg', titulo: 'Tema personalizado', detalhe: 'Aro 25 · 30 convidados' },
      { img: 'assets/img/bolo-red-velvet.jpg', titulo: 'Red velvet com creme', detalhe: 'Aro 20 · 18 convidados' },
      { img: 'assets/img/bolo-ninho-morango.jpg', titulo: 'Ninho com morango', detalhe: 'Aro 25 · 30 convidados' },
      { img: 'assets/img/bolo-chocolate.jpg', titulo: 'Chocolate belga', detalhe: 'Aro 20 · 20 convidados' }
    ],
    // Detalhes que a cliente precisa saber antes de pedir
    regras: [
      'Bolos de festa: 5 a 7 dias de antecedência.',
      'Temas com personagem, escultura ou dois andares: 1 mês.',
      'Datas de fim de semana e véspera de feriado fecham primeiro.',
      'Reserva confirmada com sinal de 50%.'
    ],
    msg: 'Olá! Quero um orçamento de bolo de festa. Tema: ____ · Data: ____ · Convidados: ____ · Cidade: São Gonçalo/Niterói'
  },

  /* ======================================================================
     VITRINE DO INSTAGRAM
     ====================================================================== */
  instagram: {
    titulo: 'Do nosso dia a dia',
    chamada: 'Os bolos de festa que saem daqui e vão para o Instagram — sem produção de estúdio, do jeito que a gente entrega.',
    posts: [
      { img: 'assets/img/sazonal-aniversario.jpg', alt: 'Bolo de festa personalizado',  url: 'https://www.instagram.com/andrades.bakery' },
      { img: 'assets/img/bolo-ninho-morango.jpg',  alt: 'Bolo Ninho com morango',       url: 'https://www.instagram.com/andrades.bakery' },
      { img: 'assets/img/bolo-red-velvet.jpg',     alt: 'Bolo red velvet',              url: 'https://www.instagram.com/andrades.bakery' },
      { img: 'assets/img/doces-finos.jpg',         alt: 'Caixa de doces finos',         url: 'https://www.instagram.com/andrades.bakery' },
      { img: 'assets/img/salgados-assados.jpg',    alt: 'Salgados assados',             url: 'https://www.instagram.com/andrades.bakery' },
      { img: 'assets/img/bolo-chocolate.jpg',      alt: 'Bolo de chocolate belga',      url: 'https://www.instagram.com/andrades.bakery' }
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
    /* ============ BOLOS DE FESTA (a especialidade) ============ */
    {
      id: 'bolo-tematico',
      nome: 'Bolo Temático de Aniversário',
      categoria: 'bolos',
      descricao: 'O bolo desenhado para a festa: personagem, profissão, número da idade ou o tema que você escolher. Enviamos o esboço antes de produzir.',
      preco: 'a partir de R$ 189,90',
      detalhe: 'Aro 20 · 16 a 20 fatias · esboço incluso',
      img: 'assets/img/sazonal-aniversario.jpg',
      tags: ['mais-pedido']
    },
    {
      id: 'bolo-ninho-morango',
      nome: 'Ninho com Morango',
      categoria: 'bolos',
      descricao: 'Pão de ló fofo, creme de leite Ninho batido na hora e morangos frescos em camadas bem servidas. O queridinho dos aniversários.',
      preco: 'a partir de R$ 139,90',
      detalhe: 'Aro 20 · 16 a 20 fatias',
      img: 'assets/img/bolo-ninho-morango.jpg',
      tags: ['mais-pedido']
    },
    {
      id: 'bolo-chocolate',
      nome: 'Bolo de Chocolate Belga',
      categoria: 'bolos',
      descricao: 'Massa molhadinha de cacau 50%, ganache meio amargo por dentro e por fora, com uma pitada de flor de sal no acabamento.',
      preco: 'a partir de R$ 149,90',
      detalhe: 'Aro 20 · 16 a 20 fatias',
      img: 'assets/img/bolo-chocolate.jpg',
      tags: []
    },
    {
      id: 'bolo-red-velvet',
      nome: 'Red Velvet',
      categoria: 'bolos',
      descricao: 'Massa aveludada com leve toque de cacau e recheio generoso de cream cheese frosting, servida gelada.',
      preco: 'a partir de R$ 159,90',
      detalhe: 'Aro 20 · 16 a 20 fatias',
      img: 'assets/img/bolo-red-velvet.jpg',
      tags: []
    },
    {
      id: 'bolo-dois-andares',
      nome: 'Bolo de Dois Andares',
      categoria: 'bolos',
      descricao: 'Para festa cheia: dois andares combinando tema, cores e topo personalizado. Montagem e estrutura feitas para viajar até você.',
      preco: 'a partir de R$ 349,90',
      detalhe: '70 fatias ou mais · 1 mês de antecedência',
      img: null,
      tags: []
    },
    {
      id: 'bolo-cenoura',
      nome: 'Cenoura com Brigadeiro',
      categoria: 'bolos',
      descricao: 'Aquele clássico da tarde: cenoura ralada na hora, massa aerada e brigadeiro cremoso feito na panela.',
      preco: 'a partir de R$ 119,90',
      detalhe: 'Aro 20 · 12 a 16 fatias',
      img: 'assets/img/bolo-cenoura.jpg',
      tags: []
    },

    /* ============ DOCES & SOBREMESAS ============ */
    {
      id: 'mesa-doces',
      nome: 'Mesa de Doces da Festa',
      categoria: 'doces',
      descricao: 'Combinamos com o bolo: cem doces variados (brigadeiro, beijinho, bicho de pé, casadinho e camafeu) montados na travessa para a sua mesa.',
      preco: 'R$ 259,90',
      detalhe: 'cento (100 un.) · sabores à sua escolha',
      img: 'assets/img/doces-finos.jpg',
      tags: ['mais-pedido']
    },
    {
      id: 'doces-finos',
      nome: 'Caixa de Doces Finos',
      categoria: 'doces',
      descricao: 'Vinte doces em papel de seda, com laço — a lembrancinha que a festa leva para casa.',
      preco: 'R$ 84,90',
      detalhe: '20 unidades · sabores à sua escolha',
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
      id: 'kit-festa',
      nome: 'Kit Festa (bolo + salgados + doces)',
      categoria: 'mesa',
      descricao: 'A festa resolvida de uma vez: bolo de festa aro 20, cem salgados assados e cem doces variados, com entrega na mesma data.',
      preco: 'a partir de R$ 549,90',
      detalhe: 'serve de 20 a 25 convidados',
      img: null,
      tags: ['mais-pedido']
    },
    {
      id: 'cesta-presente',
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
  outros: [
    { nome: 'Bolo de Fubá com Goiabada', preco: 'R$ 42,90' },
    { nome: 'Naked Cake de Frutas Vermelhas', preco: 'a partir de R$ 179,90' },
    { nome: 'Cheesecake de Frutas Vermelhas', preco: 'R$ 109,90' },
    { nome: 'Torta de Limão', preco: 'R$ 89,90' },
    { nome: 'Coxinha Cremosa (cento)', preco: 'R$ 129,90' },
    { nome: 'Bolo de Três Andares (casamento)', preco: 'orçamento no WhatsApp' }
  ],

  /* ======================================================================
     DATAS ESPECIAIS (abas)
     ====================================================================== */
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
      chamada: 'A encomenda mais procurada do ano depois dos aniversários. Você escolhe o bolo e nós cuidamos da apresentação, do laço e do cartão.',
      img: 'assets/img/sazonal-maes.jpg',
      prazo: 'Reserve com 5 a 7 dias de antecedência',
      itens: [
        { nome: 'Bolo coração Ninho com Morango', preco: 'R$ 159,90' },
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
      chamada: 'Nossa especialidade. Manda o tema, a cor e o número de convidados que devolvemos um orçamento com o desenho de como vai ficar.',
      img: 'assets/img/sazonal-aniversario.jpg',
      prazo: 'Reserve com 5 a 7 dias · temas complexos, 1 mês',
      itens: [
        { nome: 'Bolo temático com aplicação e topo personalizado', preco: 'a partir de R$ 189,90' },
        { nome: 'Bolo de dois andares', preco: 'a partir de R$ 349,90' },
        { nome: 'Mesa de doces completa', preco: 'a partir de R$ 259,90' },
        { nome: 'Kit festa: bolo + 100 salgados + 100 doces', preco: 'a partir de R$ 549,90' }
      ],
      obs: 'Fazemos recheios a sua escolha e atendemos restrições alimentares sob consulta.'
    }
  ],

  /* ======================================================================
     VÍDEOS — src: 'assets/video/arquivo.mp4' toca no site · reel: abre o Instagram
     ====================================================================== */
  videos: [
    {
      titulo: 'Do esboço ao bolo pronto',
      legenda: 'Como um bolo temático nasce no papel antes de virar festa.',
      poster: 'assets/img/sazonal-aniversario.jpg',
      duracao: '0:45',
      src: null,
      reel: 'https://www.instagram.com/andrades.bakery'
    },
    {
      titulo: 'O corte do bolo de festa',
      legenda: 'Ninho com Morango, camada por camada, no dia da entrega.',
      poster: 'assets/img/bolo-ninho-morango.jpg',
      duracao: '0:38',
      src: null,
      reel: 'https://www.instagram.com/andrades.bakery'
    },
    {
      titulo: 'Mesa de doces da festa',
      legenda: 'Como montamos a mesa de doces que acompanha o bolo.',
      poster: 'assets/img/doces-finos.jpg',
      duracao: '0:52',
      src: null,
      reel: 'https://www.instagram.com/andrades.bakery'
    }
  ],

  /* ======================================================================
     DEPOIMENTOS — >>> TROCAR pelos feedbacks reais (prints do WhatsApp!)
     ====================================================================== */
  depoimentos: [
    { texto: 'Pedi o bolo temático do aniversário da minha filha e ficou igual ao desenho que eles me mandaram antes. Chegou em Niterói no horário, geladinho e montado.', nome: 'Camila R.', origem: 'Bolo de festa · Niterói', nota: 5 },
    { texto: 'O corte do bolo é o momento da festa e dessa vez sobrou só o prato. O creme de Ninho com morango era fresco de verdade.', nome: 'Rodrigo M.', origem: 'Ninho com morango · São Gonçalo', nota: 5 },
    { texto: 'Fecharam comigo o bolo, 100 salgados e 100 doces na mesma entrega. Foi a primeira festa que eu não me preocupei com comida.', nome: 'Aline C.', origem: 'Kit festa · Alcântara', nota: 5 },
    { texto: 'Encomendei em cima da hora, um dia antes, e mesmo assim me responderam rápido e conseguiram encaixar. Salvaram meu domingo.', nome: 'Vitor P.', origem: 'Bolo aro 20 · Niterói', nota: 5 },
    { texto: 'Fiz a cesta de Páscoa pro meu afilhado e o ovo vinha com o nome dele escrito à mão. Ele guardou a embalagem!', nome: 'Simone A.', origem: 'Páscoa · São Gonçalo', nota: 5 },
    { texto: 'O bolo de dois andares chegou perfeito depois de 40 minutos de carro. Estrutura firme, sem nenhum amassado.', nome: 'Marcos V.', origem: 'Dois andares · Niterói', nota: 5 }
  ],

  /* ======================================================================
     PERGUNTAS FREQUENTES
     ====================================================================== */
  faq: [
    {
      q: 'Com quanto tempo preciso encomendar o bolo de festa?',
      a: 'Bolos de festa pedem 5 a 7 dias de antecedência. Temas com personagem, escultura ou dois andares precisam de 1 mês, porque envolvem esboço, aprovação e estrutura. Datas de fim de semana e véspera de feriado fecham primeiro — se a data é importante, reserve assim que decidir.'
    },
    {
      q: 'Vocês fazem bolo de qualquer tamanho, massa e recheio?',
      a: 'Sim — é assim que trabalhamos. Fazemos sob medida: qualquer tamanho (inclusive fora da tabela), qualquer massa e qualquer recheio, do jeito que você preferir. Basta dizer o que quer no WhatsApp. Se você tiver alguma referência (uma foto, um sabor de outra confeitaria, a receita da sua família), manda que a gente reproduz.'
    },
    {
      q: 'Qual tamanho de bolo para a minha quantidade de convidados?',
      a: 'Como referência: aro 15 serve até 12 fatias · aro 20, de 16 a 20 fatias · aro 25, de 28 a 35 · aro 30, de 45 a 55 · dois andares, 70 ou mais. Mas a tabela é só um guia — fazemos o tamanho que você precisar. Diga o número de convidados no WhatsApp que a gente indica o tamanho certo, sem cobrar a mais por isso.'
    },
    {
      q: 'Como funciona o bolo personalizado com tema?',
      a: 'Você manda uma imagem de referência, o tema, a data e o número de convidados. Enviamos o orçamento junto com o esboço de como o bolo vai ficar. Só depois da sua aprovação o bolo entra na produção.'
    },
    {
      q: 'Vocês entregam? Até onde?',
      a: 'Atendemos São Gonçalo e Niterói inteiros. A taxa e o horário da entrega são combinados no WhatsApp conforme o endereço, a data e o tamanho do pedido. Bolos de festa viajam refrigerados e montados. A retirada no local também é possível, no horário combinado.'
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
