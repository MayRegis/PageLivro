const menu = [
    {
        title:'Aventura, Ficção e Policial',
        banner:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2M5MZK5L8yyYk3WJHfigOvdd2bS5JTd-M16Di9J1lkge7URj2&s',
        link: 'afp',
        tipo: 'AFP'
    },
    {
        title:'Romance e Poesia',
        banner:'http://www.wordsandpaint.com/wp-content/uploads/2016/04/book-heart2.jpg',
        link: 'rp',
        tipo: 'RP'
    },
    {
        title:'Terror e Suspense',
        banner:'https://4.bp.blogspot.com/-xG-t-4iM7aY/VbVxJ6ByKGI/AAAAAAAAE3s/kOmlXavwF1M/s1600/Halloween_House_Wallpapers9.jpg',
        link: 'ts',
        tipo: 'TS'
    },
    {
        title:'Humor e Artes',
        banner:'https://ims.com.br/wp-content/uploads/2018/04/Expo-MF-202_1920x1080-1.jpg',
        link: 'ha',
        tipo: 'HA'
    },
    {
        title:'Economia, Direito e Historia',
        banner:'https://wp.ufpel.edu.br/direito/files/2019/04/direito-52a99f45aaaa294d5b73dbc2c584313e.jpg',
        link: 'edh',
        tipo: 'EDH'
    },
    {
        title:'Ciencias e Medicina',
        banner:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXIgcxgVXoKJN-A99XdTs-2P1vG_LTO5xPsvOC19MQwXEO1-ee&s',
        link: 'cm',
        tipo: 'CM'
    }
];
const livros = [
    {
        tipo: 'AFP',
        title:'Astrofísica para Apressados',
        banner:'2018/09/Baixar-Livro-Astrof%C3%ADsica-Para-Apressados-Neil-deGrasse-Tyson-em-Pdf-Mobi-ou-ler-Online-174x270.jpg',
        texto: 'Quem nunca olhou para o céu numa noite estrelada e se perguntou: que lugar ocupo no espaço? O que tudo isso significa? Como funciona? Em Astrofísica para apressados, o aclamado astrofísico e pesquisador Neil deGrasse Tyson responde a essas e outras perguntas que certamente todos já fizeram sobre o universo. De forma clara e sucinta, Tyson traduz o cosmos numa obra organizada em capítulos enxutos...',
        link: 'Neil deGrasse Tyson/Astrofisica Para Apressados (1184)/Astrofisica Para Apressados - Neil deGrasse Tyson?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true'
    },
    {
        tipo: 'AFP',
        title:'Justiça Ancilar – Ann Leckie',
        banner:'2019/01/Baixar-Livro-Justi%C3%A7a-Ancilar-Ann-Leckie-em-Epub-Mobi-e-Pdf-ou-Ler-Online-174x270.jpg',
        texto: 'Em um remoto planeta gelado, Breq está prestes a concluir seus planos de vingança. Ex-membro do Radch, o império que domina a galáxia, Breq era a nave Justiça de Toren – uma porta-tropas gigantesca com uma única inteligência artificial que habitava e controlava o corpo de milhares de soldados. Mas um ato de traição destruiu tudo o que Breq conhecia, e agora só lhe resta um único e frágil organismo ...',
        link: 'Ann Leckie/Justica Ancilar (1369)/Justica Ancilar - Ann Leckie?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true'
    },
    {
        tipo: 'AFP',
        title:'A Última Estrela – Quinta Onda Vol 03 – Rick Yancey',
        banner:'2018/11/Baixar-Livro-A-%C3%9Altima-Estrela-Quinta-Onda-Vol-03-Rick-Yancey-Em-Pdf-Epub-e-Mobi-ou-Ler-online-174x270.jpg',
        texto: 'TO inimigo são os Outros. O inimigo somos nós mesmos. Eles vieram até nós porque querem a Terra. Vieram para acabar conosco. Vieram para nos salvar. Eles não inventaram a morte, mas a aperfeiçoaram. Deram um rosto a ela, porque sabiam que era a única maneira de nos exterminar. Por quê? Quem são eles realmente? O que querem de verdade? Atrás de tantas perguntas e enigmas, há uma verdade: Cassie ...',
        link: 'Rick Yancey/A Ultima Estrela (1240)/A Ultima Estrela - Rick Yancey?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true',
    },
    {   
        tipo: 'CM',
        title:'Breves Respostas para Grandes Questões – Stephen Hawking',
        banner:'2019/11/Baixar-Livro-Breves-Respostas-para-Grandes-Questoes-Stephen-Hawking-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large-174x270.jpg',
        texto: 'Em textos inéditos, o físico e autor do best-seller Uma breve história do tempo nos presenteia com seus pensamentos finais sobre as maiores perguntas da humanidade. Desde Einstein, o mundo não via um cientista tão reverenciado quanto Stephen Hawking. Com seu trabalho revolucionário em física e cosmologia, ele encantou milhões de leitores com a origem do universo e a natureza dos buracos negros ...',
        link: 'Stephen Hawking/Breves respostas para grandes questoes (24)/Breves respostas para grandes questoes - Stephen Hawking?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true"'
    },
    {
        tipo: 'CM',
        title:'10% Humano – Alanna Collen',
        banner:'2019/10/baixar-livro-10-humano-alanna-collen-em-pdf-epub-mobi-ou-ler-online-174x270.jpg',
        texto: 'Para cada célula humana em nosso organismo, há outras nove impostoras, pegando carona. Você não é formado apenas de carne e osso, sangue e músculo, mas também de bactérias e fungos. Não é um indivíduo, mas uma colônia – um ecossistema. Somos apenas 10% humanos Até pouco tempo atrás, os micróbios eram vistos como invasores, inimigos, parasitas. Estávamos decididos a exterminá-los. ...',
        link: 'Alanna%20Collen/10%25%20Humano%20%2844%29/10%25%20Humano%20-%20Alanna%20Collen?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true.',
    },
    {
        tipo: 'CM',
        title:'A Última Estrela – Quinta Onda Vol 03 – Rick Yancey',
        banner:'2016/11/Baixar-Livro-Enxaqueca-Alexandre-Feldman-em-PDF-ePub-e-Mobi-ou-ler-online-174x270.jpg',
        texto: 'Enxaqueca tem cura? Que médico devo pro-curar? O que eu sinto é enxaqueca? Que remédios existem? Que mal podem fazer? Qual o papel da alimentação? Do sono? Dos hormônios? Da atividade física? Do stress? O que faço? As respostas dariam um livro. E esse livro existe: Enxaqueca, só tem quem quer. O médico Alexandre Feldman resumiu seus 20 anos de experiência no tratamento da en-xaqueca neste ...',
        link: 'Alexandre Feldman/Enxaqueca (2422)/Enxaqueca - Alexandre Feldman?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true',
    },
    {   
        tipo: 'EDH',
        title:' A Dialética entre Valores e Forma Jurídica – José Marcos Miné Vanzella',
        banner:'2018/05/Baixar-A-dialetica-entre-valores-e-forma-juridica-Vanzella-Jos-Marcos-Min-em-Pdf-ePub-e-Mobi-ou-ler-online.jpg',
        texto: 'Esta obra coletiva trata da dialética entre valores e forma jurídica, por meio de diversas abordagens, apresentando, em perspectiva pluralista, a temática do reconhecimento e da efetivação dos direitos. Ela oferece ao leitor um diálogo profundo, porém conciso, entre o pensamento filosófico dos profissionais do grupo de trabalho de Ética e Cidadania, da Associação Nacional ...',
        link: 'Vanzella, Jose Marcos Mine/A dialetica entre valores e forma juridica/A dialetica entre valores e forma juridica - Vanzella, Jose Marcos Mine?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true'
    },
    {
        tipo: 'EDH',
        title:'A Economia do Intervencionismo – Fabio Barbieri',
        banner:'2017/11/Baixar-A-Economia-do-Intervencionismo-Fabio-Barbieri-em-Pdf-ePub-e-Mobi-ou-ler-online-174x270.jpg',
        texto: 'As economias deveriam ser examinadas à luz de uma teoria sobre sistemas econômicos intervencionistas e não sob a dicotomia tradicional capitalismo  socialismo. Essa última faz com que todos os defeitos das economias reais sejam atribuídos aos mercados e as soluções atribuídas ao estado corretor dessas “falhas de mercado”  desvios de um ideal teórico inalcançável. Mas, util ...',
        link: 'Fabio Barbieri/A Economia do Intervencionismo/A Economia do Intervencionismo - Fabio Barbieri?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true',
    },
    {
        tipo: 'EDH',
        title:'Como funciona o Fascismo – Jason Stanley',
        banner:'2019/10/baixar-livro-como-funciona-o-fascismo-jason-stanley-em-pdf-epub-mobi-ou-ler-online-174x270.jpg',
        texto: 'Fascismo: originalmente, regime de cunho ideológico estabelecido pelo ditador Benito Mussolini na Itália da década de 1920, que valoriza ideais de nação e raça em detrimento dos valores individuais e é representado por um líder autoritário. Mas por que esse termo voltou à ordem do dia em pleno século XXI? À luz de episódios recentes de democracias que enveredaram para regimes mais...',
        link: 'Jason%20Stanley/Como%20Funciona%20o%20Fascismo%20%2892%29/Como%20Funciona%20o%20Fascismo%20-%20Jason%20Stanley?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true',
    },
    {   
        tipo: 'HA',
        title:' Quinze Tons de Constrangimento – Ana Paula Barbi',
        banner:'2018/05/Baixar-Quinze-Tons-de-Constrangimento-Ana-Paula-Barbi-em-Pdf-ePub-e-Mobi-ou-ler-online-174x270.jpg',
        texto: 'Quinze anos de atividade sexual, quinze anos do mais puro constrangimento. Ainda não me humilhei publicamente o bastante, então resolvi compilar minhas quinze piores vergonhas para ver se descolo uma grana para pagar a terapia. Prefácio de Clara Averbuck:“Socorro, pesadelo: sonhei que você tinha lido e odiado e postado uma resenha falando muito mal antes de falar comigo, daí a gente ...',
        link: 'Ana Paula Barbi/Quinze Tons de Constrangimento/Quinze Tons de Constrangimento - Ana Paula Barbi?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true'
    },
    {
        tipo: 'HA',
        title:'Minha Mãe é uma Peça – Paulo Gustavo',
        banner:'2017/11/Baixar-Minha-mae-e-uma-Peca-Paulo-Gustavo-em-Pdf-ePub-e-Mobi-ou-ler-online-174x270.jpg',
        texto: 'Minha mãe é uma peça, agora em livro e com histórias inéditas de Dona Hermínia Essas crianças ainda matam Dona Hermínia de tanta preocupação. Após berrar com os filhos no teatro, no cinema e na TV, ela agora narra as desventuras com a família em livro. Marcelina, que está “imensa de gorda”, e Juliano, que em vez de trabalhar prefere decorar as coreografias daquela “cantora negona linda, ...',
        link: 'Paulo Gustavo/Minha Mae e uma Peca/Minha mae e Uma Peca - Paulo Gustavo?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true',
    },
    {
        tipo: 'HA',
        title:'Contos e Novelas – Voltaire',
        banner:'2019/12/Baixar-Livro-Contos-e-Novelas-Voltaire-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large-174x270.jpg',
        texto: '“Contos e novelas” é composto por textos curtos, como os antológicos “Micrômegas” e “O mundo como está”, e alguns escritos maiores, como a famosa novela “Cândido ou o otimismo”, um dos textos mais influentes do Iluminismo. Voltaire alia estilo límpido, claro e direto à tentativa de criar uma ficção de tom filosófico em que os temas nunca são corriqueiros ou banais. ...',
        link: 'Voltaire/Contos e novelas (98)/Contos e novelas - Voltaire?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true',
    },
    {   
        tipo: 'TS',
        title:' Areia Movediça – Malin Persson Giolito',
        banner:'2019/11/Baixar-Livro-Areia-Movedica-Malin-Persson-Giolito-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large-174x270.jpg',
        texto: 'Toda história tem mais de um lado. Em qual deles você vai acreditar?A vida de Maja Norberg parecia incrível: ela era jovem, bonita, inteligente e popular. Nada iria dar errado. Até que houve o tiroteio na escola: seu namorado e sua melhor amiga estão mortos e ela é a única acusada dos crimes. Maja não consegue refazer mentalmente os caminhos que a colocaram nessa situação, ...',
        link: 'Malin Persson Giolito/Areia Movedica (57)/Areia Movedica - Malin Persson Giolito?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true'
    },
    {
        tipo: 'TS',
        title:'A Corrente – Adrian McKinty',
        banner:'2019/11/Baixar-Livro-a-Corrente-Adrian-McKinty-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large-174x270.jpg',
        texto: 'Vítima. Sobrevivente. Sequestrador. Criminoso. Você vai se tornar cada um deles. O dia começa como qualquer outro. Rachel Klein deixa no ponto de ônibus a filha de 13 anos, Kylie, e segue sua rotina. Mas o telefonema de um número desconhecido muda tudo. Do outro lado, uma voz de mulher avisa que Kylie está no banco de trás de seu carro, e que Rachel só verá a filha de novo ...',
        link: 'Adrian McKinty/A corrente (52)/A corrente - Adrian McKinty?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true',
    },
    {
        tipo: 'TS',
        title:'O Que Aconteceu Com Annie – C.J. Tudor',
        banner:'2019/11/baixar-livro-o-que-aconteceu-com-annie-c-j-tudor-em-pdf-epub-mobi-ou-ler-online-174x270.jpg',
        texto: 'Quando Joe Thorne era adolescente, sua irmã mais nova desapareceu. Vinte e cinco anos depois, um e-mail anônimo o leva mais uma vez ao passado: “Eu sei o que aconteceu com sua irmã. Está acontecendo de novo.” Atolado em dívidas e bem longe do vilarejo onde cresceu, Joe precisa escapar das pessoas perigosas que estão atrás dele, mas também vê a oportunidade de resolver o que ...',
        link: 'C.%20J.%20Tudor/O%20Que%20Aconteceu%20Com%20Annie%20%28111%29/O%20Que%20Aconteceu%20Com%20Annie%20-%20C.%20J.%20Tudor?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true',
    },
    {   
        tipo: 'RP',
        title:' Poesia que Transforma – Bráulio Bessa',
        banner:'2019/02/Baixar-Livro-Poesia-que-Transforma-Br%C3%A1ulio-Bessa-em-Pdf-Epub-e-Mobi-ou-Ler-Online-174x270.jpg',
        texto: 'Bráulio Bessa conquistou o Brasil com seus cordéis no programa Encontro com Fátima Bernardes. O livro inclui o poema Recomece e ilustrações do artista baiano Elano Passos. “O Bráulio mexe com nossas memórias, nossos sentimentos, faz aflorar o melhor da gente. É poesia que sai do coração. Que alegria tê-lo toda semana no meu programa!” – Fátima Bernardes “Cada palavra que ...',
        link: 'Braulio Bessa/Poesia que Transforma (1447)/Poesia que Transforma - Braulio Bessa?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true'
    },
    {
        tipo: 'RP',
        title:'Bagagem – Adélia Prado',
        banner:'2018/04/Baixar-Bagagem-Adelia-Prado-em-Pdf-ePub-e-Mobi-ou-ler-online-174x270.jpg',
        texto: 'BAGAGEM, primeiro livro de Adélia Prado, mostra em suas páginas o talento que faria da escritora uma das mais aclamadas poetisas da literatura brasileira, com um estilo que contrasta a leveza das palavras com a força dos sentimentos. Os poemas, no entanto, percorreram longo caminho antes que pudessem ser apreciados pelo público. Mesmo escrevendo sonetos desde os 14 anos, ...',
        link: 'Adelia Prado/Bagagem/Bagagem - Adelia Prado?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true',
    },
    {
        tipo: 'RP',
        title:'Beijo de Carnaval – Julia Mendez',
        banner:'2019/12/Baixar-Livro-Beijo-de-Carnaval-Julia-Mendez-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large-174x270.jpg',
        texto: 'Conto não indicado para menores, pois contém cenas de sexo explícito. Beijo da meia-noite é o primeiro conto dessa coleção de crônicas que terá sempre o mesmo casal. Nesse novo conto, Heloisa e Zé Renato vão enfrentar a primeira crise de ciúmes do casal, que terminará em um baile de carnaval onde Heloisa vai com tudo para defender seu namoro de uma deputada que se coloca ...',
        link: 'Julia Mendez/Beijo de Carnaval_ Conto erotico (123)/Beijo de Carnaval_ Conto erotico - Julia Mendez?chave=1677cfea7cb1b4e721f78316a481fd9c&dsl=1&ext=.pdf&embedded=true',
    }
];
function listLivro(){
    menu.map(e=>menuFilme(e.title, e.banner, e.link, e.tipo));
}

function menuFilme(title, img, link, tipo){

    let data = `<div class="col s12 m3">
                   <div class="card">
                        <div class="card-image" style="height: 150px; widht:100px;">
                            <img src="${img}">
                        </div>
                        <div class="card-action black">
                        <a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick="box('${tipo}')">${title}</a>
                        </div>
                    </div>
                </div>
                `;
    $('.menu').append(data);
}

function box(condicao){
    $('#modal1').html("");
    $('#teste').html("");

    let livroTipo = livros.filter(e=>e.tipo == condicao);
        data = `<div class="modal-content col s12">
                    <div id="teste"></div>
                    </br>
                    <div class="modal-footer">
                        <a class="waves-effect waves-light btn modal-close waves-effect waves-green btn-flat" href="#"><i class="material-icons right">close</i>SAIR</a>
                    </div>
                </div>`,
        card = [];
                         
    livroTipo.map(e=> {  
        card += `<div class="row box">
                    <div class="card col s12  z-depth-4" href="#!" style="margin-left:100px">
                        <div class="card-image">
                            <img src="http://imagens.lelivros.love/${e.banner}">
                            <span class="card-title">${e.title}</span>
                        </div>
                        <div class="card-action black">
                            <a href="https://drive.google.com/viewerng/viewer?url=http://ler-agora.jegueajato.com/${e.link}">Ler</a>
                        </div>
                    </div>
                </div>`;
            
    });
    $('#modal1').html(data);
    $('#teste').html(card);
}

function inicio(){
    $('.modal').modal();
    listLivro();
}
$(document).ready(inicio);

