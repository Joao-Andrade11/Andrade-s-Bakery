/* ==========================================================================
   ANDRADE'S BAKERY — COMPORTAMENTO DO SITE
   --------------------------------------------------------------------------
   JavaScript puro, sem bibliotecas. Tudo é montado a partir de:
     • js/config.js     (telefone, endereço, horários, textos gerais)
     • js/menu-data.js  (cardápio, datas especiais, vídeos, depoimentos, FAQ)
   Não precisa editar este arquivo, a menos que queira mudar o comportamento.
   ========================================================================== */
(function () {
  'use strict';

  var CFG = window.ANDRADES || {};
  var DADOS = window.CARDAPIO || {};
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ======================================================================
     UTILIDADES
     ====================================================================== */

  // Monta o link do WhatsApp com a mensagem já codificada
  function linkWhatsApp(mensagem) {
    var numero = (CFG.whatsapp && CFG.whatsapp.numero) || '';
    var texto = mensagem || (CFG.whatsapp && CFG.whatsapp.mensagemPadrao) || '';
    return 'https://wa.me/' + numero + '?text=' + encodeURIComponent(texto);
  }

  // Aplica o link do WhatsApp em qualquer elemento com [data-wa]
  function aplicarWhatsApp() {
    $$('[data-wa]').forEach(function (el) {
      var msg = el.getAttribute('data-wa-msg') || null;
      el.setAttribute('href', linkWhatsApp(msg));
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    });
  }

  // Detecta se a pessoa prefere menos movimento (com proteção para navegadores antigos)
  function prefereMenosMovimento() {
    try {
      return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    } catch (e) { return false; }
  }

  // Cria um elemento com atributos
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    if (html != null) n.innerHTML = html;
    return n;
  }

  // Marca de lugar para fotos que ainda não chegaram (nunca um quadrado cinza)
  function midiaPlaceholder(rotulo) {
    return '<div class="produto__vazio">' +
             '<i aria-hidden="true">AB</i>' +
             '<small>' + (rotulo || 'foto a caminho') + '</small>' +
           '</div>';
  }

  // Se a imagem não existir no servidor, troca pelo marcador desenhado
  function comFallbackDeImagem(img) {
    img.addEventListener('error', function () {
      var caixa = img.closest('picture') ? img.closest('picture').parentElement : img.parentElement;
      if (!caixa || caixa.querySelector('.produto__vazio')) return;
      (img.closest('picture') || img).remove();
      caixa.insertAdjacentHTML('afterbegin', midiaPlaceholder(caixa.getAttribute('data-fallback') || 'foto a caminho'));
    });
  }

  // Rótulos das etiquetas do cardápio
  var TAGS = {
    'mais-pedido':  { texto: 'Mais pedido', classe: 'chip--solid' },
    'novo':         { texto: 'Novidade',    classe: 'chip--caramel' },
    'sem-lactose':  { texto: 'Sem lactose', classe: '' },
    'vegano':       { texto: 'Vegano',      classe: '' },
    'data-especial':{ texto: 'Data especial', classe: '' }
  };

  // Mostrar preço no site? (js/config.js → mostrarPrecos)
  // Quando está desligado, cada item exibe "sob orçamento" e o aviso do cardápio
  // explica que o valor varia conforme tamanho, massa, recheio e acabamento.
  function mostraPrecos() {
    return !(CFG && CFG.mostrarPrecos === false);
  }

  // Preço (ou o rótulo de orçamento, quando os preços estão ocultos)
  function precoOuOrcamento(preco) {
    if (mostraPrecos()) return '<span class="produto__preco">' + (preco || '') + '</span>';
    return '<span class="produto__orcamento">sob orçamento</span>';
  }

  // Linha de preço das listas (cardápio, datas especiais, tabela de tamanhos)
  function linhaPreco(preco) {
    if (!mostraPrecos()) return '';
    return '<i></i><span>' + (preco || '') + '</span>';
  }

  // Escapa texto que vai dentro de atributo HTML
  function attr(txt) {
    return String(txt == null ? '' : txt)
      .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // <picture> com WebP + JPEG de reserva: quase metade do peso no celular,
  // e se o .webp faltar o navegador usa o .jpg sozinho — nada quebra.
  function imgTag(src, alt, opcoes) {
    var o = opcoes || {};
    var attrs = o.prioridade
      ? ' fetchpriority="high" decoding="async"'
      : ' loading="lazy" decoding="async"';
    return '<picture>' +
             '<source type="image/webp" srcset="' + attr(String(src).replace(/\.jpe?g$/i, '.webp')) + '">' +
             '<img src="' + attr(src) + '" alt="' + attr(alt || '') + '"' + attrs + '>' +
           '</picture>';
  }

  function htmlTags(tags) {
    if (!tags || !tags.length) return '';
    return '<div class="produto__tags">' + tags.map(function (t) {
      var d = TAGS[t] || { texto: t, classe: '' };
      return '<span class="chip ' + d.classe + '">' + d.texto + '</span>';
    }).join('') + '</div>';
  }

  /* ======================================================================
     TÍTULO, META TAGS E TEXTOS GERAIS
     ====================================================================== */
  function aplicarIdentidade() {
    var seo = CFG.seo || {};
    if (seo.titulo) document.title = seo.titulo;

    function meta(seletorCriacao, attr, valor) {
      if (!valor) return;
      var m = $(seletorCriacao);
      if (!m) {
        m = el('meta');
        var partes = seletorCriacao.replace(/^meta\[|\]$/g, '').split('=');
        m.setAttribute(partes[0], partes[1].replace(/["']/g, ''));
        document.head.appendChild(m);
      }
      m.setAttribute(attr, valor);
    }
    document.documentElement.setAttribute('lang', 'pt-BR');
    meta('meta[name="description"]', 'content', seo.descricao);
    meta('meta[property="og:title"]', 'content', seo.titulo);
    meta('meta[property="og:description"]', 'content', seo.descricao);
    meta('meta[property="og:image"]', 'content', seo.imagem);
    meta('meta[property="og:url"]', 'content', seo.site);

    // Aviso do topo
    var aviso = $('#avisoTexto');
    if (aviso && CFG.avisoTopo) aviso.textContent = CFG.avisoTopo;

    // Ano do rodapé
    var anoEl = $('#ano');
    if (anoEl) anoEl.textContent = String(new Date().getFullYear());

    var cidadeEl = $('#rodapeCidade');
    if (cidadeEl && CFG.cidade) cidadeEl.textContent = CFG.cidade + ' — ' + (CFG.uf || 'RJ');

    // Contatos
    var num = $('#contatoNumero');
    if (num) num.textContent = (CFG.whatsapp && CFG.whatsapp.exibicao) || '';

    var hor = $('#contatoHorario');
    if (hor) hor.textContent = resumoHorarios();

    var horDet = $('#contatoHorarioDetalhe');
    if (horDet) {
      var st = statusAgora();
      horDet.textContent = st.texto + (st.detalhe ? ' (' + st.detalhe + ')' : '') + ' · ' + listaHorarios();
    }

    var ent = $('#contatoEntrega');
    if (ent) ent.textContent = CFG.entrega || '';

    var entDet = $('#contatoEntregaDetalhe');
    if (entDet) {
      entDet.textContent = CFG.entregaDetalhe ||
        'Taxa de entrega combinada no WhatsApp conforme o endereço.';
    }

    var sinalEl = $('#contatoSinal');
    if (sinalEl && CFG.sinal) sinalEl.textContent = CFG.sinal;

    var pag = $('#contatoPagamento');
    if (pag && CFG.pagamentos) pag.textContent = CFG.pagamentos.join(' · ');

    var drHor = $('#drawerHorario');
    if (drHor) drHor.textContent = statusAgora().texto;

    // Frase de personalização (a casa faz qualquer tamanho, massa e recheio)
    var sob = $('#heroSobMedida');
    if (sob && CFG.sobMedida) sob.textContent = CFG.sobMedida;

    // Faixa animada
    var itens = [
      'Bolos por encomenda', 'Doces finos', 'Salgados assados', 'Pão de queijo mineiro',
      'Bolos de festa personalizados', 'Bolos temáticos de aniversário', 'Kit festa completo',
      'Doces finos para mesa', 'Salgados assados', 'Entrega em ' + (CFG.areasAtendidas || [CFG.cidade || 'nossa cidade']).join(' e ')
    ];
    var trilhaHTML = itens.map(function (i) { return '<span>' + i + '</span>'; }).join('');
    ['#marqueeTrilha', '#marqueeTrilha2'].forEach(function (s) {
      var t = $(s);
      if (t) t.innerHTML = trilhaHTML;
    });

    // Logo: se o arquivo não existir, mostra o monograma
    var logo = $('#marcaLogo');
    var mono = $('#marcaMono');
    if (logo) {
      logo.addEventListener('error', function () { logo.hidden = true; if (mono) mono.hidden = false; });
      logo.addEventListener('load', function () {
        logo.hidden = false;                 // a logo existe: mostra ela
        if (mono) mono.hidden = true;
      });
    }

    /* Logo oficial: basta salvar o arquivo na pasta assets/logo/ que o site
       troca sozinho, sem editar código nenhum.
         assets/logo/logo-andrades.png        → cabeçalho (fundo claro)
         assets/logo/logo-andrades-claro.png  → rodapé (fundo escuro)
         assets/logo/logo-andrades-icone.png  → ícone ao salvar no celular */
    function existeImagem(src) {
      return new Promise(function (resolve) {
        var teste = new Image();
        teste.onload = function () { resolve(true); };
        teste.onerror = function () { resolve(false); };
        teste.src = src;
      });
    }
    existeImagem('assets/logo/logo-andrades.png').then(function (temLogo) {
      if (temLogo) {
        $$('.site-header .marca__logo').forEach(function (el) { el.hidden = false; el.src = 'assets/logo/logo-andrades.png'; });
      }
      return existeImagem('assets/logo/logo-andrades-claro.png');
    }).then(function (temClara) {
      if (temClara) $$('.rodape .marca__logo').forEach(function (el) { el.src = 'assets/logo/logo-andrades-claro.png'; });
      return existeImagem('assets/logo/logo-andrades-icone.png');
    }).then(function (temIcone) {
      if (!temIcone) return;
      var icone = $('link[rel="apple-touch-icon"]');
      if (icone) icone.setAttribute('href', 'assets/logo/logo-andrades-icone.png');
    });

    // Horários no rodapé de dados estruturados já estão no HTML estático
  }

  /* ======================================================================
     CARDÁPIO
     ====================================================================== */

  // Aviso "os valores variam" — aparece quando os preços estão ocultos
  function renderAvisoOrcamento() {
    var box = $('#avisoPrecos');
    if (!box || mostraPrecos()) { if (box) box.hidden = true; return; }

    var txt = CFG.avisoOrcamento || 'Os valores variam conforme tamanho, massa, recheio e acabamento — fale com a gente para receber o orçamento.';
    box.innerHTML =
      '<span class="aviso-precos__icone" aria-hidden="true">' +
        '<svg width="17" height="17"><use href="#i-wa"/></svg>' +
      '</span>' +
      '<p>' + txt + '</p>' +
      '<a class="aviso-precos__link" href="' + linkWhatsApp(CFG.whatsapp.mensagemOrcamento) + '" ' +
        'target="_blank" rel="noopener">Pedir orçamento' +
        '<svg width="14" height="14" aria-hidden="true"><use href="#i-arrow"/></svg>' +
      '</a>';
    box.hidden = false;
  }

  var estado = { categoria: 'todos' };

  function renderFiltros() {
    var box = $('#filtros');
    if (!box || !DADOS.categorias) return;
    box.innerHTML = DADOS.categorias.map(function (c, i) {
      return '<button class="filtro" type="button" data-cat="' + c.id + '" ' +
             'aria-pressed="' + (i === 0 ? 'true' : 'false') + '">' + c.nome + '</button>';
    }).join('');

    box.addEventListener('click', function (e) {
      var b = e.target.closest('.filtro');
      if (!b) return;
      estado.categoria = b.getAttribute('data-cat');
      $$('.filtro', box).forEach(function (x) {
        x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
      });
      filtrarProdutos();
    });
  }

  function filtrarProdutos() {
    $$('.produto').forEach(function (card) {
      var cat = card.getAttribute('data-cat');
      var mostrar = estado.categoria === 'todos' || cat === estado.categoria;
      card.classList.toggle('is-oculto', !mostrar);
    });
  }

  function renderProdutos() {
    var grade = $('#gradeProdutos');
    if (!grade || !DADOS.produtos) return;

    grade.innerHTML = DADOS.produtos.map(function (p) {
      var midiaHTML = p.img
        ? imgTag(p.img, p.nome)
        : midiaPlaceholder('foto a caminho');

      var msgPedido = 'Olá! Quero encomendar: ' + p.nome +
                      (!mostraPrecos() || !p.preco ? '' : ' (' + p.preco + ')') +
                      '. Estou pensando para o dia ____. Podem me passar o orçamento?';

      return '' +
        '<article class="produto" data-cat="' + p.categoria + '">' +
          '<div class="produto__midia" data-fallback="foto a caminho">' +
            midiaHTML + htmlTags(p.tags) +
          '</div>' +
          '<div class="produto__corpo">' +
            '<h3 class="produto__linha">' +
              '<span class="produto__nome">' + p.nome + '</span>' +
              precoOuOrcamento(p.preco) +
            '</h3>' +
            '<p class="produto__desc">' + (p.descricao || '') + '</p>' +
            '<div class="produto__detalhe">' +
              '<span>' + (p.detalhe || '') + '</span>' +
              '<a class="produto__pedir" href="' + linkWhatsApp(msgPedido) + '" target="_blank" rel="noopener">' +
                'Pedir<svg width="14" height="14" aria-hidden="true"><use href="#i-arrow"/></svg>' +
              '</a>' +
            '</div>' +
          '</div>' +
        '</article>';
    }).join('');

    $$('img', grade).forEach(comFallbackDeImagem);
  }

  function renderOutros() {
    var lista = $('#outrosSabores');
    if (!lista || !DADOS.outros) return;
    lista.innerHTML = DADOS.outros.map(function (o) {
      return '<div class="outros__item"><b>' + o.nome + '</b>' + linhaPreco(o.preco) + '</div>';
    }).join('');
  }

  /* ======================================================================
     DATAS ESPECIAIS (abas sazonais)
     ====================================================================== */
  function renderSazonais() {
    var abas = $('#abasSazonais');
    var paineis = $('#paineisSazonais');
    if (!abas || !paineis || !DADOS.sazonais) return;

    abas.innerHTML = DADOS.sazonais.map(function (s, i) {
      return '<button class="aba" type="button" role="tab" id="aba-' + s.id + '" ' +
             'aria-controls="painel-' + s.id + '" aria-selected="' + (i === 0 ? 'true' : 'false') + '" ' +
             'tabindex="' + (i === 0 ? '0' : '-1') + '">' +
             '<i>0' + (i + 1) + '</i>' + s.aba +
             '</button>';
    }).join('');

    paineis.innerHTML = DADOS.sazonais.map(function (s, i) {
      var msg = 'Olá! Quero encomendar para o ' + s.aba + '. Podem me passar as opções e o prazo?';
      var midiaHTML = s.img
        ? imgTag(s.img, s.titulo)
        : midiaPlaceholder('foto da campanha');

      return '' +
        '<div class="painel' + (i === 0 ? ' is-ativo' : '') + '" id="painel-' + s.id + '" role="tabpanel" ' +
             'aria-labelledby="aba-' + s.id + '" tabindex="0"' + (i === 0 ? '' : ' hidden') + '>' +
          '<div class="painel__midia">' +
            '<div class="photo" data-fallback="foto da campanha">' + midiaHTML + '</div>' +
            '<div class="painel__etiqueta">' +
              '<b>' + s.aba + '</b>' +
              '<span>' + s.prazo + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="painel__texto">' +
            '<h3>' + s.titulo + '</h3>' +
            '<p>' + s.chamada + '</p>' +
            '<ul class="lista-precos' + (mostraPrecos() ? '' : ' sem-preco') + '">' + (s.itens || []).map(function (it) {
              return '<li><b>' + it.nome + '</b>' + linhaPreco(it.preco) + '</li>';
            }).join('') + '</ul>' +
            (s.obs ? '<p class="painel__obs">' + s.obs + '</p>' : '') +
            '<div class="painel__acoes">' +
              '<a class="btn btn--wa" href="#" data-wa data-wa-msg="' + attr(msg) + '">' +
                '<svg width="18" height="18" aria-hidden="true"><use href="#i-wa"/></svg> Reservar pelo WhatsApp' +
              '</a>' +
              '<span class="painel__prazo">' +
                '<svg width="15" height="15" aria-hidden="true"><use href="#i-clock"/></svg>' + s.prazo +
              '</span>' +
            '</div>' +
          '</div>' +
        '</div>';
    }).join('');

    $$('#paineisSazonais img').forEach(comFallbackDeImagem);
    aplicarWhatsApp();

    var botoes = $$('.aba', abas);

    function ativar(botao) {
      botoes.forEach(function (b) {
        var sel = b === botao;
        b.setAttribute('aria-selected', sel ? 'true' : 'false');
        b.setAttribute('tabindex', sel ? '0' : '-1');
        var painel = $('#painel-' + b.id.replace('aba-', ''));
        if (painel) {
          painel.classList.toggle('is-ativo', sel);
          if (sel) painel.removeAttribute('hidden'); else painel.setAttribute('hidden', '');
        }
      });
    }

    abas.addEventListener('click', function (e) {
      var b = e.target.closest('.aba');
      if (b) ativar(b);
    });

    // Navegação por teclado entre as abas (setas, Home, End)
    abas.addEventListener('keydown', function (e) {
      var atual = document.activeElement;
      if (!atual || !atual.classList.contains('aba')) return;
      var i = botoes.indexOf(atual);
      var alvo = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') alvo = botoes[(i + 1) % botoes.length];
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   alvo = botoes[(i - 1 + botoes.length) % botoes.length];
      if (e.key === 'Home') alvo = botoes[0];
      if (e.key === 'End')  alvo = botoes[botoes.length - 1];
      if (alvo) { e.preventDefault(); ativar(alvo); alvo.focus(); }
    });
  }

  /* ======================================================================
     VÍDEOS
     ====================================================================== */
  function renderVideos() {
    var grade = $('#gradeVideos');
    if (!grade || !DADOS.videos) return;

    grade.innerHTML = DADOS.videos.map(function (v, i) {
      var temArquivo = !!v.src;
      var poster = v.poster
        ? imgTag(v.poster, '')
        : midiaPlaceholder('vídeo');
      return '' +
        '<button class="video" type="button" data-video="' + i + '" aria-label="Assistir: ' + v.titulo + '">' +
          poster +
          '<span class="video__fonte">' +
            '<svg width="13" height="13" aria-hidden="true"><use href="' + (temArquivo ? '#i-play' : '#i-ig') + '"/></svg>' +
            (temArquivo ? 'Vídeo' : 'Instagram') +
          '</span>' +
          (v.duracao ? '<span class="video__dur">' + v.duracao + '</span>' : '') +
          '<span class="video__play"><svg width="22" height="22" aria-hidden="true"><use href="#i-play"/></svg></span>' +
          '<span class="video__txt">' +
            '<b>' + v.titulo + '</b>' +
            '<span>' + (v.legenda || '') + '</span>' +
          '</span>' +
        '</button>';
    }).join('');

    $$('.video', grade).forEach(function (b) {
      b.addEventListener('click', function () {
        var v = DADOS.videos[parseInt(b.getAttribute('data-video'), 10)];
        if (!v) return;
        if (v.src) abrirLightbox(v);
        else if (v.reel) window.open(v.reel, '_blank', 'noopener');
      });
    });
  }

  function abrirLightbox(v) {
    var lb = $('#lightbox');
    var midia = $('#lightboxMidia');
    var legenda = $('#lightboxLegenda');
    if (!lb || !midia) return;

    midia.innerHTML = '<video src="' + v.src + '" controls autoplay playsinline preload="metadata"></video>';
    if (legenda) legenda.textContent = v.titulo + (v.legenda ? ' — ' + v.legenda : '');
    lb.hidden = false;
    document.body.classList.add('is-locked');
    requestAnimationFrame(function () { lb.classList.add('is-open'); });
    var fechar = $('#lightboxFechar');
    if (fechar) fechar.focus();
  }

  function fecharLightbox() {
    var lb = $('#lightbox');
    var midia = $('#lightboxMidia');
    if (!lb) return;
    lb.classList.remove('is-open');
    document.body.classList.remove('is-locked');
    setTimeout(function () {
      lb.hidden = true;
      if (midia) midia.innerHTML = '';
    }, 320);
  }

  /* ======================================================================
     DEPOIMENTOS (carrossel)
     ====================================================================== */
  function renderDepoimentos() {
    var trilha = $('#depoTrilha');
    var bolinhas = $('#depoBolinhas');
    if (!trilha || !DADOS.depoimentos || !DADOS.depoimentos.length) return;

    var DEPO = DADOS.depoimentos;

    trilha.innerHTML = DEPO.map(function (d, i) {
      var inicial = (d.nome || '?').trim().charAt(0).toUpperCase();
      var estrelas = '';
      for (var s = 0; s < (d.nota || 5); s++) {
        estrelas += '<svg width="16" height="16" aria-hidden="true"><use href="#i-star"/></svg>';
      }
      return '' +
        '<figure class="depo__item' + (i === 0 ? ' is-ativo' : '') + '">' +
          '<div class="estrelas" aria-label="' + (d.nota || 5) + ' de 5 estrelas">' + estrelas + '</div>' +
          '<blockquote class="depo__texto">' + d.texto + '</blockquote>' +
          '<figcaption class="depo__autor">' +
            '<span class="depo__avatar" aria-hidden="true">' + inicial + '</span>' +
            '<span><b>' + d.nome + '</b><span>' + (d.origem || '') + '</span></span>' +
          '</figcaption>' +
        '</figure>';
    }).join('');

    if (bolinhas) {
      bolinhas.innerHTML = DEPO.map(function (d, i) {
        return '<button class="bolinha" type="button" aria-label="Depoimento de ' + d.nome + '" ' +
               'aria-current="' + (i === 0 ? 'true' : 'false') + '" data-i="' + i + '"></button>';
      }).join('');
    }

    var atual = 0;
    var itens = $$('.depo__item', trilha);
    var pontos = $$('.bolinha', bolinhas);

    function irPara(i) {
      atual = (i + DEPO.length) % DEPO.length;
      itens.forEach(function (it, n) { it.classList.toggle('is-ativo', n === atual); });
      pontos.forEach(function (p, n) { p.setAttribute('aria-current', n === atual ? 'true' : 'false'); });
    }

    var anterior = $('#depoAnterior');
    var proximo = $('#depoProximo');
    if (anterior) anterior.addEventListener('click', function () { irPara(atual - 1); reiniciar(); });
    if (proximo) proximo.addEventListener('click', function () { irPara(atual + 1); reiniciar(); });
    if (bolinhas) bolinhas.addEventListener('click', function (e) {
      var b = e.target.closest('.bolinha');
      if (b) { irPara(parseInt(b.getAttribute('data-i'), 10)); reiniciar(); }
    });

    // Troca automática (respeita quem prefere menos movimento)
    var timer = null;
    var reduzido = prefereMenosMovimento();
    function reiniciar() {
      if (reduzido) return;
      clearInterval(timer);
      timer = setInterval(function () { irPara(atual + 1); }, 8000);
    }
    reiniciar();

    var palco = $('.depo__palco');
    if (palco) {
      palco.addEventListener('mouseenter', function () { clearInterval(timer); });
      palco.addEventListener('mouseleave', reiniciar);
      palco.addEventListener('focusin', function () { clearInterval(timer); });
      palco.addEventListener('focusout', reiniciar);
      // Deslizar com o dedo, no celular
      var x0 = null;
      palco.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      palco.addEventListener('touchend', function (e) {
        if (x0 === null) return;
        var dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 45) { irPara(dx < 0 ? atual + 1 : atual - 1); reiniciar(); }
        x0 = null;
      }, { passive: true });
    }
  }

  /* ======================================================================
     PERGUNTAS FREQUENTES
     ====================================================================== */
  function renderFAQ() {
    var box = $('#faqLista');
    if (!box || !DADOS.faq) return;
    box.innerHTML = DADOS.faq.map(function (f, i) {
      return '<details' + (i === 0 ? ' open' : '') + '>' +
               '<summary>' + f.q + '<i aria-hidden="true"></i></summary>' +
               '<p>' + f.a + '</p>' +
             '</details>';
    }).join('');

    // Um aberto por vez
    var todos = $$('details', box);
    todos.forEach(function (d) {
      d.addEventListener('toggle', function () {
        if (!d.open) return;
        todos.forEach(function (o) { if (o !== d) o.open = false; });
      });
    });
  }

  /* ======================================================================
     FORMULÁRIO → WHATSAPP
     ====================================================================== */
  function iniciarFormulario() {
    var form = $('#formEncomenda');
    if (!form) return;
    var erro = $('#formErro');

    // Campos de bolo aparecem só quando faz sentido (massa, recheio, escrita)
    var campoTipo = $('#f-tipo');
    var camposBolo = $('#camposBolo');
    function alternarCamposBolo() {
      if (!campoTipo || !camposBolo) return;
      var texto = (campoTipo.value || '').toLowerCase();
      camposBolo.hidden = !/bolo|anivers|páscoa|pascoa|namorados|mães|maes|torta|kit festa/.test(texto);
    }
    if (campoTipo) {
      campoTipo.addEventListener('change', alternarCamposBolo);
      alternarCamposBolo();
    }

    // Impede datas no passado
    var campoData = $('#f-data');
    if (campoData) {
      var hoje = new Date();
      var iso = new Date(hoje.getTime() - hoje.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
      campoData.setAttribute('min', iso);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var d = {
        nome:   ($('#f-nome') || {}).value || '',
        tipo:   ($('#f-tipo') || {}).value || '',
        data:   ($('#f-data') || {}).value || '',
        pessoas:($('#f-pessoas') || {}).value || '',
        sabor:  ($('#f-sabor') || {}).value || '',
        obs:    ($('#f-obs') || {}).value || '',
        restricao: ($('#f-restricao') || {}).value || '',
        tamanho: ($('#f-tamanho') || {}).value || '',
        massa:  ($('#f-massa') || {}).value || '',
        recheio: ($('#f-recheio') || {}).value || '',
        escrita: ($('#f-escrita') || {}).value || ''
      };

      var faltando = [];
      if (!d.nome.trim())    faltando.push('seu nome');
      if (!d.tipo)           faltando.push('o que quer encomendar');
      if (!d.data)           faltando.push('a data');
      if (!d.pessoas.trim()) faltando.push('a quantidade');

      if (faltando.length) {
        if (erro) {
          erro.textContent = 'Só falta preencher: ' + faltando.join(', ') + '.';
          erro.classList.add('is-on');
        }
        var primeiro = form.querySelector('input:invalid, select:invalid, textarea:invalid') || $('#f-nome');
        if (primeiro) primeiro.focus();
        return;
      }
      if (erro) erro.classList.remove('is-on');

      // Data em formato brasileiro
      var partes = d.data.split('-');
      var dataBR = partes.length === 3 ? partes[2] + '/' + partes[1] + '/' + partes[0] : d.data;

      var linhas = [
        'Olá! Quero fazer uma encomenda 🍰',
        '',
        '*Nome:* ' + d.nome.trim(),
        '*Encomenda:* ' + d.tipo,
        '*Data:* ' + dataBR,
        '*Quantidade:* ' + d.pessoas.trim()
      ];
      if (d.sabor.trim()) linhas.push('*Sabor/tema:* ' + d.sabor.trim());

      // Detalhes que só fazem sentido para bolo (e não vêm preenchidos por padrão)
      if (camposBolo && !camposBolo.hidden) {
        if (d.tamanho && d.tamanho.indexOf('Ainda não sei') !== 0) linhas.push('*Tamanho:* ' + d.tamanho);
        if (d.massa && d.massa !== 'Escolher depois')   linhas.push('*Massa:* ' + d.massa);
        if (d.recheio && d.recheio !== 'Escolher depois') linhas.push('*Recheio:* ' + d.recheio);
        if (d.escrita.trim()) linhas.push('*Mensagem no bolo:* ' + d.escrita.trim());
      }
      if (d.restricao && d.restricao !== 'Nenhuma') linhas.push('*Restrição alimentar:* ' + d.restricao);
      if (d.obs.trim())   linhas.push('*Observação:* ' + d.obs.trim());
      linhas.push('', '(mensagem enviada pelo site da Andrade\'s Bakery)');

      window.open(linkWhatsApp(linhas.join('\n')), '_blank', 'noopener');
    });
  }

  /* ======================================================================
     CABEÇALHO, MENU MOBILE E AVISO
     ====================================================================== */
  function iniciarCabecalho() {
    var header = $('#cabecalho');
    var burger = $('#burger');
    var drawer = $('#drawer');
    var btnFechar = $('#drawerFechar');
    var waFlutuante = $('#waFlutuante');

    function aoRolar() {
      var y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle('is-stuck', y > 12);
      if (waFlutuante) waFlutuante.classList.toggle('is-on', y > 520);
    }
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });

    function abrirDrawer() {
      if (!drawer || !burger) return;
      drawer.classList.add('is-open');
      burger.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('is-locked');
      // Entrada escalonada dos links
      $$('nav a', drawer).forEach(function (a, i) {
        a.style.transitionDelay = (90 + i * 55) + 'ms';
      });
      var primeiro = $('nav a', drawer);
      if (primeiro) primeiro.focus();
    }
    function fecharDrawer() {
      if (!drawer || !burger) return;
      drawer.classList.remove('is-open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('is-locked');
      $$('nav a', drawer).forEach(function (a) { a.style.transitionDelay = '0ms'; });
    }

    if (burger) burger.addEventListener('click', function () {
      drawer && drawer.classList.contains('is-open') ? fecharDrawer() : abrirDrawer();
    });
    if (btnFechar) btnFechar.addEventListener('click', fecharDrawer);
    if (drawer) drawer.addEventListener('click', function (e) {
      if (e.target.closest('a')) fecharDrawer();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      fecharDrawer();
      fecharLightbox();
    });

    // Aviso do topo (não reaparece na mesma sessão)
    var aviso = $('#avisoTopo');
    var btnAviso = $('#avisoFechar');
    if (aviso) {
      try { if (sessionStorage.getItem('ab-aviso') === '1') aviso.classList.add('is-hidden'); } catch (err) {}
      if (btnAviso) btnAviso.addEventListener('click', function () {
        aviso.classList.add('is-hidden');
        try { sessionStorage.setItem('ab-aviso', '1'); } catch (err) {}
      });
    }

    // Lightbox
    var lbFechar = $('#lightboxFechar');
    var lb = $('#lightbox');
    if (lbFechar) lbFechar.addEventListener('click', fecharLightbox);
    if (lb) lb.addEventListener('click', function (e) { if (e.target === lb) fecharLightbox(); });

    // Destaque do link da seção visível
    var secoes = $$('main section[id]');
    var linksNav = $$('.nav a');
    if ('IntersectionObserver' in window && secoes.length) {
      var obs = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (en) {
          if (!en.isIntersecting) return;
          var id = en.target.id;
          linksNav.forEach(function (a) {
            a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
          });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      secoes.forEach(function (s) { obs.observe(s); });
    }
  }

  /* ======================================================================
     ANIMAÇÃO DE ENTRADA DOS BLOCOS
     ====================================================================== */
  function iniciarRevelacao() {
    var alvos = $$('[data-rev]');
    if (!alvos.length) return;
    if (!('IntersectionObserver' in window) || prefereMenosMovimento()) {
      alvos.forEach(function (a) { a.classList.add('is-in'); });
      return;
    }
    // 1) O que já está na tela no primeiro instante aparece na hora. Sem isso, o
    //    topo do site pode ficar invisível até a primeira rolagem em alguns
    //    navegadores (webviews de Instagram/Facebook, navegadores antigos).
    var vh = window.innerHeight || window.document.documentElement.clientHeight || 800;
    alvos.forEach(function (a) {
      var r = a.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh * .92) a.classList.add('is-in');
    });

    // 2) O resto entra conforme a rolagem
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          obs.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    alvos.forEach(function (a) { if (!a.classList.contains('is-in')) obs.observe(a); });

    // 3) Rede de segurança: se o observador não disparar (navegador que bloqueia
    //    a API ou erro de renderização), mostra o site inteiro em 1,2 s.
    setTimeout(function () {
      var algum = false;
      alvos.forEach(function (a) { if (a.classList.contains('is-in')) algum = true; });
      if (!algum) alvos.forEach(function (a) { a.classList.add('is-in'); });
    }, 1200);
  }

  /* ======================================================================
     HORÁRIO DE FUNCIONAMENTO E STATUS "ABERTO AGORA"
     ====================================================================== */

  // 19.5 -> "19h30" · 9 -> "9h"
  function horaTexto(n) {
    if (n == null) return '—';
    var h = Math.floor(n);
    var m = Math.round((n - h) * 60);
    return h + 'h' + (m ? String(m).padStart(2, '0') : '');
  }

  // "Segunda a sexta" -> "Seg a Sex" · "Sábado" -> "Sáb"
  function abreviar(rotulo) {
    var tres = function (t) { return t.charAt(0).toUpperCase() + t.slice(1, 3).toLowerCase(); };
    var partes = String(rotulo).split(/\s+a\s+/i);
    return partes.length > 1 ? tres(partes[0]) + ' a ' + tres(partes[1]) : tres(rotulo);
  }

  function faixasDoDia(dia) {
    return (CFG.funcionamento || []).filter(function (f) {
      return f.dias && f.dias.indexOf(dia) >= 0 && f.abre != null;
    }).sort(function (a, b) { return a.abre - b.abre; });
  }

  function resumoHorarios() {
    return (CFG.funcionamento || []).filter(function (f) { return f.abre != null; })
      .map(function (f) { return abreviar(f.rotulo) + ', ' + horaTexto(f.abre) + ' às ' + horaTexto(f.fecha); })
      .join(' · ');
  }

  function listaHorarios() {
    return (CFG.funcionamento || []).map(function (f) {
      return f.rotulo + ': ' + (f.abre == null ? 'Fechado' : horaTexto(f.abre) + ' — ' + horaTexto(f.fecha));
    }).join(' · ');
  }

  // Descobre se está aberto agora — usado no cabeçalho e nos contatos
  function statusAgora() {
    var agora = new Date();
    var dia = agora.getDay();
    var h = agora.getHours() + agora.getMinutes() / 60;
    var nomes = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];

    var hoje = faixasDoDia(dia);
    for (var i = 0; i < hoje.length; i++) {
      if (h >= hoje[i].abre && h < hoje[i].fecha) {
        return { aberto: true, texto: 'Aberto agora', detalhe: 'fecha às ' + horaTexto(hoje[i].fecha) };
      }
    }
    for (var j = 0; j < hoje.length; j++) {
      if (h < hoje[j].abre) {
        return { aberto: false, texto: 'Fechado agora', detalhe: 'abre hoje às ' + horaTexto(hoje[j].abre) };
      }
    }
    for (var k = 1; k <= 7; k++) {
      var d = (dia + k) % 7;
      var prox = faixasDoDia(d);
      if (prox.length) {
        return {
          aberto: false,
          texto: 'Fechado agora',
          detalhe: 'abre ' + nomes[d] + ' às ' + horaTexto(prox[0].abre)
        };
      }
    }
    return { aberto: false, texto: 'Fechado', detalhe: '' };
  }

  function renderStatus() {
    var st = statusAgora();
    var alvo = $('#statusTopo');
    if (alvo) {
      alvo.hidden = false;
      alvo.className = 'status' + (st.aberto ? '' : ' is-fechado');
      alvo.innerHTML = '<b>' + st.texto + '</b>' + (st.detalhe ? '<span>' + st.detalhe + '</span>' : '');
      alvo.setAttribute('title', st.texto + (st.detalhe ? ' — ' + st.detalhe : ''));
    }
  }

  /* ======================================================================
     DESTAQUE DO MÊS  (js/menu-data.js → `destaque`)
     ====================================================================== */
  function renderDestaque() {
    var sec = $('#destaque');
    var d = DADOS.destaque;
    if (!sec || !d || !d.ativo) return;

    var msg = d.msg || ('Olá! Quero encomendar o destaque do mês: ' + d.titulo + '.');
    var midia = d.img
      ? imgTag(d.img, d.titulo, { prioridade: true })
      : midiaPlaceholder('foto do destaque');

    sec.innerHTML =
      '<div class="wrap destaque__in">' +
        '<div class="destaque__midia">' +
          '<div class="photo" data-fallback="foto do destaque">' + midia + '</div>' +
        '</div>' +
        '<div class="destaque__texto">' +
          '<span class="chip chip--caramel">' + (d.etiqueta || 'Destaque do mês') + '</span>' +
          '<h2 class="h-l">' + d.titulo + '</h2>' +
          (d.texto ? '<p class="lead" style="margin-top:.9rem;max-width:36rem">' + d.texto + '</p>' : '') +
          '<div class="destaque__rodape">' +
            '<div class="destaque__preco">' +
              '<b>' + (mostraPrecos() ? (d.preco || '') : 'Sob orçamento') + '</b>' +
              (d.detalhe ? '<span>' + d.detalhe + '</span>' : '') +
            '</div>' +
            '<a class="btn btn--wa" href="#" data-wa data-wa-msg="' + attr(msg) + '">' +
              '<svg width="18" height="18" aria-hidden="true"><use href="#i-wa"/></svg> Reservar no WhatsApp' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    sec.hidden = false;
    $$('img', sec).forEach(comFallbackDeImagem);
    aplicarWhatsApp();
  }

  /* ======================================================================
     BOLOS DE FESTA  (js/menu-data.js → `bolosDeFesta`)
     ====================================================================== */
  function renderBolosDeFesta() {
    var f = DADOS.bolosDeFesta;
    var sec = $('#bolos-de-festa');
    if (!sec || !f) { if (sec) sec.hidden = true; return; }

    // Cabeçalho da seção
    var eb = $('#festaEyebrow');  if (eb && f.eyebrow) eb.textContent = f.eyebrow;
    var ti = $('#festaTitulo');   if (ti && f.titulo)  ti.textContent  = f.titulo;
    var ch = $('#festaChamada');  if (ch && f.chamada) ch.textContent  = f.chamada;

    // Botão de orçamento (leva a mensagem padrão do config, se existir)
    var botao = $('#festaOrcamento');
    if (botao) {
      botao.setAttribute('href', linkWhatsApp(f.msg));
      botao.setAttribute('target', '_blank');
      botao.setAttribute('rel', 'noopener');
    }

    var et = $('#festaEtiqueta');
    if (et && f.etiquetaMarca) { et.textContent = f.etiquetaMarca; et.hidden = false; }

    // Tabela de tamanhos (referência — fazemos qualquer tamanho)
    var tituloTam = $('#festaTamanhosTitulo');
    if (tituloTam && f.tamanhosTitulo) tituloTam.textContent = f.tamanhosTitulo;

    var tamanhos = $('#festaTamanhos');
    if (tamanhos && f.tamanhos) {
      tamanhos.innerHTML = f.tamanhos.map(function (t) {
        return '<li><b>' + t.aro + '<small>' + t.fatias + '</small></b>' + linhaPreco(t.preco) + '</li>';
      }).join('');
      if (!mostraPrecos()) tamanhos.classList.add('sem-preco');
    }

    // O que vem incluso (lista numerada)
    var incluso = $('#festaIncluso');
    if (incluso && f.incluso) {
      incluso.innerHTML = f.incluso.map(function (i) {
        return '<li><b>' + i.titulo + '</b><span>' + i.texto + '</span></li>';
      }).join('');
    }

    // Galeria de bolos entregues
    var galeria = $('#festaGaleria');
    if (galeria && f.galeria) {
      galeria.innerHTML = f.galeria.map(function (g) {
        return '<figure class="festa__item" data-fallback="foto do bolo">' +
                 imgTag(g.img, g.titulo + ' — ' + (g.detalhe || '')) +
                 '<figcaption><b>' + g.titulo + '</b>' + (g.detalhe ? '<span>' + g.detalhe + '</span>' : '') + '</figcaption>' +
               '</figure>';
      }).join('');
      $$('img', galeria).forEach(comFallbackDeImagem);
    }

    // Nota da tabela de tamanhos (reforça que o valor varia)
    var notaTam = $('#festaNota');
    if (notaTam && f.notaTamanhos) notaTam.textContent = f.notaTamanhos;

    // Regras rápidas
    var regras = $('#festaRegras');
    if (regras && f.regras) {
      regras.innerHTML = f.regras.map(function (r) {
        return '<li><svg width="13" height="13" aria-hidden="true"><use href="#i-clock"/></svg>' + r + '</li>';
      }).join('');
    }
  }

  /* ======================================================================
     VITRINE DO INSTAGRAM  (js/menu-data.js → `instagram`)
     ====================================================================== */
  function renderInstagram() {
    var grade = $('#igGrade');
    var ig = DADOS.instagram;
    var sec = $('#instagram');
    if (!grade || !ig || !ig.posts || !ig.posts.length) {
      if (sec) sec.hidden = true;
      return;
    }

    var t = $('#igTitulo');   if (t && ig.titulo)  t.textContent = ig.titulo;
    var c = $('#igChamada');  if (c && ig.chamada) c.textContent = ig.chamada;
    var u = $('#igUser');     if (u && CFG.instagram) u.textContent = '@' + CFG.instagram.usuario;
    var b = $('#igBotao');    if (b && CFG.instagram) b.setAttribute('href', CFG.instagram.url);

    var padrao = (CFG.instagram && CFG.instagram.url) || '#';
    grade.innerHTML = ig.posts.map(function (post) {
      return '<a class="ig__post" href="' + attr(post.url || padrao) + '" target="_blank" rel="noopener" ' +
             'aria-label="' + attr(post.alt || 'Ver no Instagram') + '">' +
               imgTag(post.img, post.alt || '') +
               '<svg width="19" height="19" aria-hidden="true"><use href="#i-ig"/></svg>' +
             '</a>';
    }).join('');

    $$('img', grade).forEach(comFallbackDeImagem);
  }

  /* ======================================================================
     ONDE ENTREGAMOS  (js/config.js → `atendimento`)
     ====================================================================== */
  function renderAtendimento() {
    var bloco = $('#bairrosBloco');
    var lista = $('#bairrosLista');
    var titulo = $('#bairrosTitulo');
    var a = CFG.atendimento;
    if (!bloco || !lista || !a || !a.itens || !a.itens.length) return;

    if (titulo) titulo.textContent = a.titulo || 'Onde entregamos';
    lista.innerHTML = a.itens.map(function (i) { return '<span>' + attr(i) + '</span>'; }).join('');
    bloco.hidden = false;
  }

  /* ======================================================================
     LISTA DE NOVIDADES NO WHATSAPP  ([data-wa-lista])
     ====================================================================== */
  function iniciarLista() {
    var msg = (CFG.whatsapp && CFG.whatsapp.mensagemLista) || 'Olá! Quero receber as novidades.';
    $$('[data-wa-lista]').forEach(function (el) {
      el.setAttribute('href', linkWhatsApp(msg));
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    });
  }

  /* ======================================================================
     INICIALIZAÇÃO
     ====================================================================== */
  function iniciar() {
    aplicarIdentidade();
    renderAvisoOrcamento();
    renderFiltros();
    renderProdutos();
    renderOutros();
    renderSazonais();
    renderVideos();
    renderBolosDeFesta();
    renderDestaque();
    renderInstagram();
    renderAtendimento();
    iniciarLista();
    renderStatus();
    renderDepoimentos();
    renderFAQ();
    aplicarWhatsApp();
    iniciarFormulario();
    iniciarCabecalho();
    iniciarRevelacao();

    // Links do rodapé que abrem direto a aba da data especial
    $$('[data-aba-alvo]').forEach(function (a) {
      a.addEventListener('click', function () {
        var aba = $('#aba-' + a.getAttribute('data-aba-alvo'));
        if (aba) aba.click();
      });
    });

    // Animação suave para links internos (com compensação do cabeçalho)
    $$('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (!id || id === '#') return;
        var alvo = document.querySelector(id);
        if (!alvo) return;
        e.preventDefault();
        var topo = alvo.getBoundingClientRect().top + window.scrollY - 78;
        window.scrollTo({
          top: topo,
          behavior: prefereMenosMovimento() ? 'auto' : 'smooth'
        });
        history.replaceState(null, '', id);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
