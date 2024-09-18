// config.js

const steps = [
    {
        message: "Oi! Queria conversar sobre a consultoria! Você pode falar agora? ",
        options: [
            { text: "Ok.", correct: false, feedback: "Será que essa seria mesmo a melhor resposta? Repense a sua escolha!" },
            { text: "Oi, Valéria, tudo bem? Posso sim, qual seria a sua dúvida?", correct: true }
        ]
    },
    {
        message: "Você havia comentado que vai fazer o atendimento do meu projeto por videochamadas, e-mail e com o uso de projeto pelo computador. Conversando com a minha família, ficamos em dúvida sobre o nome desse tipo de consultoria que você está oferecendo. Qual é o nome desse atendimento? ",
        options: [
            { text: "Claro. Nós vamos fazer uma consultoria presencial.", correct: false, feedback: "Será que essa é a consultoria correta? Reveja o material e repense a sua escolha!" },
            { text: "Claro. Nós vamos fazer uma consultoria no formato híbrido.", correct: false, feedback: "Será que essa é a consultoria correta? Reveja o material e repense a sua escolha!" },
            { text: "Claro. Nós vamos fazer uma consultoria on-line! ", correct: true }
        ]
    },
    {
        message: "Ah, entendi. Na consultoria você vai me entregar um projeto completo, certo?",
        options: [
            { text: "Sim, isso e muito mais!", correct: false, feedback: "Aqui, a proposta não é um projeto completo, e sim uma consultoria. Repense a escolha da resposta!" },
            { text: "Não, Valéria. No escopo da consultoria, vamos trabalhar com o briefing, que é o seu programa de necessidades para o ambiente. Vamos apresentar esboços do seu projeto e também moodboards, um tipo de representação visual do projeto, que pode ser composto de imagens, texto e amostras de objetos.", correct: true }
        ]
    },
    {
        message: "Certo. Bom, tenho mais algumas dúvidas. Eu preciso derrubar uma parede, então é só chamar o pedreiro, certo? ",
        options: [
            { text: "Sim, é ele que vai poder dizer se pode ou não!", correct: false, feedback: "Lembre-se das atribuições que cada profissional terá na execução do projeto!" },
            { text: "Sim, pode derrubar, sem dúvidas!", correct: false, feedback: "Lembre-se das atribuições que cada profissional terá na execução do projeto!" },
            { text: "Na verdade, vamos precisar chamar um arquiteto ou engenheiro parceiro para garantir a segurança e a viabilidade técnica do projeto, conforme estabelecem os limites da profissão.", correct: true }
        ]
    },
    {
        message: `Está bem! A Manuela, da loja de pisos, me enviou algumas sugestões para a sala. Eu comentei que queria algo industrial, com preço adequado e rejunte bem fininho. O que você acha das sugestões? <br> 
                  Opção 1 – Porcelanato retificado 80x80 - R$ 62,00/m² <br> 
                  Opção 2 – Cerâmica bold 50x50 - R$ 47,00/m² <br> 
                  Opção 3 – Porcelanato retificado 120x120 - R$ 78,00/m² 
                  <br><button type="button" class="btn btn-ampliar" id="btnAmpliar" data-bs-toggle="modal" data-bs-target="#carouselModal"> 
                  <img src="assets/img/btn-imagens.png" class="img-fluid" alt=" botão imagens ampliar">
                  </button>`,
        options: [
            { text: "A opção 2 cerâmica bold 50x50 - Acredito ser a melhor escolha!", correct: false, feedback: "Este piso tem a borda bold, ou seja, o rejunte ficará muito aparente! Repense sua escolha." },
            { text: "A opção 3 porcelanato retificado 120x120 - Acredito ser a melhor escolha!", correct: false, feedback: "Este piso tem o estilo muito diferente do industrial, além de ser o mais caro dos três! Repense sua escolha." },
            { text: "A opção 1 porcelanato retificado 80x80 - Acredito ser a melhor escolha!", correct: true }
        ]
    },
    {
        message: "Por que essa é a melhor opção?",
        options: [
            { text: "Este piso da opção 1 tem o estilo industrial, borda retificada (ou seja, rejunte fino) e com um bom preço!", correct: true }
        ]
    },
    {
        message: "Muito obrigada! Agora, gostaria de rever a escolha de tintas do quarto, pode ser? ",
        options: [
            { text: "Claro, vamos lá! ", correct: true }
        ]
    },
    {
        message: "Você sugeriu um tom de azul-claro, mas estou com medo de que o ambiente fique muito frio e impessoal. O que você acha? ",
        options: [
            { text: "Entendo sua preocupação, mas a cor azul-clara não tem a característica de deixar os ambientes frios, pois não é uma cor fria do círculo cromático. ", correct: false, feedback: "A cor azul, em qualquer tom, pertence às cores frias do círculo cromático. Repense sua escolha! " },
            { text: "Entendo sua preocupação. O azul-claro é uma cor tranquila e relaxante, perfeita para um quarto, mas, se você acha que pode ficar frio, podemos equilibrar isso com elementos decorativos mais quentes, como madeira, tecidos ou acessórios em tons de bege ou dourado. ", correct: true }
        ]
    },
    {
        message: "E se eu quiser uma cor um pouco mais quente para as paredes? Talvez algo mais neutro, como um nude ou um cinza-claro? ",
        options: [
            { text: "Claro, o nude e o cinza são ótimas opções neutras. Mas, a partir dessa escolha, não podemos mais utilizar o tom azul-claro no projeto, pois ele não se encaixa com os tons neutros.", correct: false, feedback: "Utilizar as cores e os elementos neutros, nude ou cinza, deixa a paleta de cores livre para uma composição com outras cores e elementos. Repense sua escolha!" },
            { text: "Claro! O nude e o cinza-claro são ótimas opções neutras. São versáteis e, além disso, podemos usar a cor azul-clara em detalhes, como almofadas ou cortinas, para manter a paleta suave que você gostou inicialmente. ", correct: true }
        ]
    },
    {
        message: "Gostei da ideia de usar o azul nos detalhes. Você acha que o bege vai funcionar bem com os móveis de madeira que tenho?",
        options: [
            { text: "Essa combinação vai criar um ambiente de bastante contraste e agitado, perfeito para um quarto. ", correct: false, feedback: "Quartos são ambientes de descanso, repense as características que mais se encaixam neste caso. " },
            { text: "Essa combinação vai criar um ambiente harmonioso e aconchegante, perfeito para um quarto. ", correct: true }
        ]
    },
    {
        message: "Ótimo. Estava olhando as opções de luminárias para o quarto e estou em dúvida entre um plafon simples ou um pendente ao lado da cama. O que você recomenda? ",
        options: [
            { text: "Ambos têm suas vantagens. O plafon oferece uma iluminação geral criando um ponto focal no centro do quarto, já o pendente ao lado da cama cria outro ponto focal, que será direcionado apenas para a leitura. ", correct: false, feedback: "As luminárias, plafon e pendentes, têm objetivos de usos diferentes em um quarto. O plafon tem a característica de iluminação mais uniforme e não focal. Repense sua escolha! " },
            { text: "Ambos têm suas vantagens. O plafon oferece uma iluminação geral mais uniforme e discreta, já o pendente ao lado da cama cria um ponto focal, ideal para iluminação mais direcionada, como leitura.", correct: true }
        ]
    },
    {
        message: "Entendi. E se eu quisesse usar os dois, seria exagero? ",
        options: [
            { text: "Sim, infelizmente precisamos optar por apenas um tipo de luminária no quarto.", correct: false, feedback: "Em um projeto de iluminação é possível utilizar mais de um tipo de iluminação de forma harmoniosa, atendendo às necessidades específicas. Repense sua escolha! " },
            { text: "De jeito nenhum! Você pode usar o plafon para a iluminação principal e os pendentes como luzes de apoio, próximas à cabeceira, permitindo que você ajuste a iluminação conforme a necessidade. ", correct: true }
        ]
    },
    {
        message: "Ótimo, gosto dessa ideia. Então, vamos fazer as alterações que conversamos. Obrigada pela ajuda! ",
        options: [
            { text: "De nada! Vou ajustar nosso material da consultoria com as novas informações e lhe encaminho. Fico feliz que encontramos soluções que agradaram.", correct: true }
        ]
    },
    {
        message: "Combinado! Estou ansioso para ver como vai ficar. Até logo!",
        options: [
            { text: "Até mais!", correct: true }
        ]
    },

];
