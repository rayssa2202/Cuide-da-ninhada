import type { StoryDecision, StoryEnding, StoryEndingKey, StoryPhase } from './types';

const fase1Decisions: StoryDecision[] = [
  {
    id: 'fase1-q1',
    title: 'Pergunta 1 – Conceito e base fisiológica',
    question: 'O que caracteriza a hipocalcemia em cadelas durante a lactação?',
    options: [
      {
        text: '1️⃣ Redução anormal dos níveis séricos de cálcio ionizado (< 7 mg/dL) pela alta demanda de leite.',
        feedback: '🩺 Feedback: Correto! A queda brusca de cálcio acontece quando a produção de leite supera a reposição corporal, reduzindo a excitabilidade neuromuscular.',
        tone: 'success',
        outcome: 'best',
      },
      {
        text: '2️⃣ Aumento do cálcio sérico causado pelo uso de suplementação.',
        feedback: '⚠️ Feedback: Errado. Isso seria hipercalcemia e, pior, pode suprimir o PTH e predispor à crise após o parto.',
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: '3️⃣ Acúmulo de cálcio no útero e ossos fetais.',
        feedback: '❌ Feedback: Parcialmente incorreto — o cálcio é transferido aos fetos e ao leite, mas o problema real é não repor o cálcio plasmático perdido.',
        tone: 'neutral',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase1-q2',
    title: 'Pergunta 2 – Mecanismo fisiológico e hormonal',
    question: 'Qual é o papel do paratormônio (PTH) na prevenção da hipocalcemia?',
    options: [
      {
        text: '1️⃣ Estimula a reabsorção renal e a liberação óssea de cálcio, mantendo níveis normais.',
        feedback: '🩺 Feedback: Exato! Com o PTH ativo, o organismo mobiliza cálcio rapidamente quando os filhotes começam a mamar.',
        tone: 'success',
        outcome: 'best',
      },
      {
        text: '2️⃣ Reduz a absorção intestinal de cálcio.',
        feedback: '❌ Feedback: O oposto ocorre. PTH e calcitriol aumentam a absorção intestinal.',
        tone: 'neutral',
        outcome: 'bad',
      },
      {
        text: '3️⃣ Estimula a secreção de prolactina.',
        feedback: '⚠️ Feedback: Não diretamente. Prolactina é hipofisária e não regula cálcio.',
        tone: 'fun',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase1-q3',
    title: 'Pergunta 3 – Grupos de risco',
    question: 'Quais cadelas têm maior predisposição à hipocalcemia puerperal?',
    options: [
      {
        text: '1️⃣ Raças pequenas com ninhadas numerosas.',
        feedback: '🩺 Feedback: Correto! Pouca reserva mineral e filhotes ávidos são a combinação perfeita para a crise.',
        tone: 'success',
        outcome: 'best',
      },
      {
        text: '2️⃣ Cadelas obesas e sedentárias.',
        feedback: '⚠️ Feedback: A obesidade traz outros problemas (distocia, por exemplo), mas não é gatilho direto da hipocalcemia.',
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: '3️⃣ Cadelas idosas.',
        feedback: '😂 Feedback: Hipocalcemia puerperal é exclusividade das mães lactantes. Pode rir, mas não conte para elas.',
        tone: 'fun',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase1-q4',
    title: 'Pergunta 4 – Sintomas inciais',
    question: 'Quais são os sintomas inciais de hipocalcemia incipiente?',
    options: [
      {
        text: '1️⃣ Agitação, tremores, ofegação e rigidez muscular.',
        feedback: '🩺 Feedback: Correto. Esses sinais surgem nas primeiras 24–72 horas pós-parto e podem evoluir para convulsões.',
        tone: 'success',
        outcome: 'best',
      },
      {
        text: '2️⃣ Letargia e sonolência.',
        feedback: '❌ Feedback: Nas cadelas, a fase inicial é de hiperexcitação, não de apatia.',
        tone: 'neutral',
        outcome: 'bad',
      },
      {
        text: '3️⃣ Vômito e diarreia.',
        feedback: '⚠️ Feedback: Não são sinais característicos da hipocalcemia canina.',
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase1-q5',
    title: 'Pergunta 5 – Conduta terapêutica de emergência',
    question: 'Qual é o tratamento de escolha durante uma crise aguda (eclâmpsia canina)?',
    options: [
      {
        text: '1️⃣ Gluconato de cálcio IV lento, com monitorização cardíaca.',
        feedback: '🩺 Feedback: Exato. Administrar a 10% lentamente enquanto observa a frequência cardíaca para evitar bradicardia.',
        tone: 'success',
        outcome: 'best',
      },
      {
        text: '2️⃣ Ocitocina e massagem abdominal.',
        feedback: '❌ Feedback: Inútil sem cálcio suficiente; pode até agravar o quadro.',
        tone: 'neutral',
        outcome: 'bad',
      },
      {
        text: '3️⃣ Apenas retirar os filhotes da mãe.',
        feedback: '⚠️ Feedback: Ajuda a reduzir a drenagem de cálcio, mas não substitui o tratamento emergencial.',
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
];

const fase2Decisions: StoryDecision[] = [
  {
    id: 'fase2-d1',
    title: 'Decisão 1 – Alimentação na gestação',
    narrative: '📅 Dia 35 de gestação. O apetite de {{dogName}} aumenta e o tutor entra em pânico.',
    question: 'Como ajustar a nutrição?',
    options: [
      {
        text: '1️⃣ Aumentar a quantidade de ração agora.',
        feedback: '🩸 Feedback: Cuidado. Excesso precoce leva à obesidade gestacional e distocia.',
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: '2️⃣ Manter a dieta atual e aumentar gradualmente após a 5ª semana.',
        feedback: '🩺 Feedback: Correto. Energia controlada garante fetos saudáveis e reservas de cálcio equilibradas.',
        tone: 'success',
        outcome: 'best',
      },
      {
        text: '3️⃣ Servir comida caseira como macarrão, frango e uvas',
        feedback: '⚠️ Feedback: Dieta caseira desbalanceada derruba a ingestão de cálcio e fósforo e prepara o palco da crise.',
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase2-d2',
    title: 'Decisão 2 – Suplementação de cálcio',
    narrative: 'O tutor leu na internet que cálcio diário durante toda a gestação evita eclâmpsia.',
    question: 'Qual conduta adotar?',
    options: [
      {
        text: '1️⃣ Autorizar suplementação diária até o parto.',
        feedback: '❌ Feedback: Péssima escolha. Suprimir o PTH agora impede resposta rápida quando os filhotes nascerem.',
        tone: 'neutral',
        outcome: 'bad',
      },
      {
        text: '2️⃣ Contraindicar suplementação até o final da gestação (salvo exames específicos).',
        feedback: '🩺 Feedback: Perfeito. Reposição só após o parto e de forma monitorada mantém o eixo hormonal ativo.',
        tone: 'success',
        outcome: 'best',
      },
      {
        text: '3️⃣ Substituir por leite integral.',
        feedback: '😂 Feedback: Tentativa carinhosa, porém inútil. A proporção de calcio do leite de vaca é inadequada e pode desequilibrar mais ainda.',
        tone: 'fun',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase2-d3',
    title: 'Decisão 3 – Manejo pré-natal',
    narrative: '{{dogName}} está com 50 dias de gestação e se mexe como um barril com pernas.',
    question: 'Como garantir um parto tranquilo?',
    options: [
      {
        text: '1️⃣ Incentivar exercícios leves e controlar o peso.',
        feedback: '🩺 Feedback: Correto! Menos gordura, mais tônus muscular e menos confusão com sinais de hipocalcemia.',
        tone: 'success',
        outcome: 'best',
      },
      {
        text: '2️⃣ Deixar {{dogName}} quietinha o tempo todo.',
        feedback: '⚠️ Feedback: Sedentarismo reduz a resistência muscular uterina e complica o parto.',
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: '3️⃣ Aplicar vitaminas e cálcio sem consulta.',
        feedback: '❌ Feedback: Automedicação gera desequilíbrios hormonais e minerais perigosos.',
        tone: 'neutral',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase2-d4',
    title: 'Decisão 4 – Noite pré-parto',
    narrative: '🌙 {{dogName}} está inquieta, cavando a caminha e ofegante. Contrações discretas começam.',
    question: 'Como reagir?',
    options: [
      {
        text: '1️⃣ Observar, preparar o ambiente limpo e anotar o intervalo das contrações.',
        feedback: '🩺 Feedback: Perfeito! Monitorar ajuda a detectar atonia uterina precoce relacionada à hipocalcemia.',
        tone: 'success',
        outcome: 'best',
      },
      {
        text: '2️⃣ Forçar o parto com ocitocina porque “já está demorando”.',
        feedback: '❌ Feedback: Sem cálcio, a ocitocina é inútil e pode causar ruptura uterina.',
        tone: 'neutral',
        outcome: 'bad',
      },
      {
        text: '3️⃣ Oferecer leite adoçado para dar energia.',
        feedback: '😂 Feedback: Açúcar não corrige hipocalcemia e ainda causa fermentação intestinal.',
        tone: 'fun',
        outcome: 'bad',
      },
    ],
  },
];

const fase3Decisions: StoryDecision[] = [
  {
    id: 'fase3-d1',
    title: 'Decisão 1 – Identificando o problema',
    narrative: 'Dois dias após o parto, {{dogName}} está inquieta, ofegante e com passos curtos.',
    question: 'Qual atitude tomar?',
    options: [
      {
        text: '1️⃣ Ignorar achando que é “nervosismo de mãe”.',
        feedback: '🚨 Feedback: Erro fatal. A hipocalcemia é urgência; ignorar leva a convulsões e parada.',
        tone: 'danger',
        outcome: 'critical',
      },
      {
        text: '2️⃣ Separar temporariamente os filhotes e verificar a temperatura.',
        feedback: '🩺 Feedback: Correto! Reduz a drenagem de cálcio pelo leite e permite avaliar hipertermia (> 40 °C).',
        tone: 'success',
        outcome: 'best',
      },
      {
        text: '3️⃣ Dar um banho para acalmar.',
        feedback: '⚠️ Feedback: Piora o quadro neuromuscular com estresse e queda de temperatura.',
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-d2',
    title: 'Decisão 2 – Contato com o veterinário',
    narrative: 'Você decide levar {{dogName}} à clínica. <br/>Chega lá ofegante, igual a cadela.<br/>O veterinário te recebe, com o olhar de quem já viu isso mil vezes.<br/>Ele identifica os sintomas de tremores pós-parto, rigidez muscular, taquipneia… suspeitando fortemente de uma eclâmpsia puerperal.',
    question: 'Qual exame confirma o diagnóstico?',
    options: [
      {
        text: '1️⃣ Dosagem sérica de cálcio ionizado.',
        feedback: '🩺 Feedback: Exato. Valores abaixo de 7 mg/dL confirmam hipocalcemia.',
        tone: 'success',
        outcome: 'best',
      },
      {
        text: '2️⃣ Radiografia abdominal.',
        feedback: '❌ Feedback: Inadequada aqui. O problema é bioquímico, não estrutural.',
        tone: 'neutral',
        outcome: 'bad',
      },
      {
        text: '3️⃣ Ultrassom de útero.',
        feedback: '⚠️ Feedback: Só útil se houver suspeita de retenção fetal, não para hipocalcemia.',
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-d3',
    title: 'Decisão 3 – Tratamento imediato',
    narrative: 'O ECG mostra bradicardia leve. O protocolo escolhido define o destino de {{dogName}}.',
    question: 'Qual conduta seguir?',
    options: [
      {
        text: '1️⃣ Administrar gluconato de cálcio 10% IV lento com monitorização.',
        feedback: '🩺 Feedback: Perfeito. 1 ml/kg lentamente, monitorando o coração; depois cálcio oral e dieta balanceada.',
        tone: 'success',
        outcome: 'best',
      },
      {
        text: '2️⃣ Aplicar ocitocina para “esvaziar o leite”.',
        feedback: '❌ Feedback: Grave erro. Sem cálcio, o útero não responde e o quadro piora.',
        tone: 'neutral',
        outcome: 'critical',
      },
      {
        text: '3️⃣ Aplicar dipirona e esperar melhorar.',
        feedback: '⚠️ Feedback: Tratamento sintomático que não resolve a causa; {{dogName}} continuaria tremendo.',
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-d4',
    title: 'Decisão 4 – Manejo após estabilização',
    narrative: '{{dogName}} respira melhor, mas ainda está fraca e os filhotes têm fome.',
    question: 'Como manejar a amamentação?',
    options: [
      {
        text: '1️⃣ Devolver todos os filhotes para mamar livremente.',
        feedback: '❌ Feedback: Recidiva quase certa. É preciso reduzir o tempo de mamada e suplementar artificialmente.',
        tone: 'neutral',
        outcome: 'bad',
      },
      {
        text: '2️⃣ Permitir mamadas controladas e suplementar artificialmente.',
        feedback: '🩺 Feedback: Correto. Mantém a lactação sem sobrecarregar o metabolismo de cálcio.',
        tone: 'success',
        outcome: 'best',
      },
      {
        text: '3️⃣ Suspender totalmente a amamentação.',
        feedback: '⚠️ Feedback: Pode causar ingurgitamento mamário e desconforto intenso.',
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-d5',
    title: 'Decisão 5 – Prevenção da recidiva',
    narrative: '{{dogName}} está recuperada, mas ainda lactando.',
    question: 'Qual conduta evita uma nova crise?',
    options: [
      {
        text: '1️⃣ Reintroduzir cálcio oral em doses fracionadas durante a lactação.',
        feedback: '🩺 Feedback: Correto. Suplementação controlada mantém o equilíbrio Ca:P e previne novas quedas.',
        tone: 'success',
        outcome: 'best',
      },
      {
        text: '2️⃣ Retirar totalmente o cálcio para “não viciar o corpo”.',
        feedback: '❌ Feedback: Mito perigoso. A ausência completa favorece nova hipocalcemia.',
        tone: 'neutral',
        outcome: 'bad',
      },
      {
        text: '3️⃣ Oferecer leite e queijo à vontade.',
        feedback: '😂 Feedback: “Suplementação à la padaria” não equilibra Ca:P e ainda pode gerar diarreia.',
        tone: 'fun',
        outcome: 'bad',
      },
    ],
  },
];

export const storyPhases: StoryPhase[] = [
  {
    id: 'fase1',
    title: '📘 Fase 1 – Você sabe o que é Hipocalcemia?',
    intro: [
      'Você é um tutor curioso e estudante de veterinária.',
      'Está acompanhando sua cadela {{dogName}}, uma futura mamãe.',
      'Antes de mergulhar na história, decide revisar o básico: “O que exatamente é essa tal de hipocalcemia?”',
    ],
    decisions: fase1Decisions,
  },
  {
    id: 'fase2',
    title: '🩺 Fase 2 – {{dogName}}, a mãe de primeira viagem',
    intro: [
      'A gestação avança. Cada escolha molda o cenário metabólico e hormonal para o parto.',
      'Equilíbrio, fisiologia e paciência são as palavras de ordem.',
    ],
    decisions: fase2Decisions,
  },
  {
    id: 'fase3',
    title: '🆘 Fase 3 – O parto e os primeiros sinais',
    intro: [
      'Os filhotes já nasceram, mas os riscos continuam.',
      'Hipocalcemia pós-parto é traiçoeira; agir rápido salva vidas.',
    ],
    decisions: fase3Decisions,
  },
];

export const storyEndings: Record<StoryEndingKey, StoryEnding> = {
  happy: {
    title: '🟢 Final Feliz — Mãe e filhotes salvos',
    highlight: 'Controle e ciência em todas as fases garantiram a recuperação completa de {{dogName}}.',
    highlightTone: 'success',
    sections: [
      {
        heading: 'Condição',
        body: 'Você seguiu as condutas corretas em cada fase, mantendo suplementação oral controlada e check-ups constantes.',
      },
      {
        heading: 'Cenário',
        body: '{{dogName}} está tranquila, alimentando os filhotes sob vigilância. O cálcio sérico está normal e o corpo responde bem.',
      },
      {
        heading: 'Desfecho',
        body: 'Recuperação completa, lactação mantida e filhotes fortes. A prevenção exige fisiologia e paciência — a pressa mata, o equilíbrio cura.',
      },
    ],
  },
  partial: {
    title: '🟡 Final Neutro — Vida salva, aprendizado intenso',
    highlight: 'Algumas decisões vacilaram, mas o tratamento correto evitou o pior para {{dogName}}.',
    highlightTone: 'warning',
    sections: [
      {
        heading: 'Condição',
        body: 'Alguma escolha falhou na gestação ou no manejo pós-parto, porém a crise foi reconhecida e tratada a tempo.',
      },
      {
        heading: 'Cenário',
        body: 'Após estabilizar {{dogName}}, faltou controlar as mamadas e ajustar suplementação. Tremores leves retornaram e dois filhotes precisaram de leite artificial.',
      },
      {
        heading: 'Desfecho',
        body: '{{dogName}} sobrevive, mas perde parte da produção láctea. Instinto materno não substitui manejo clínico.',
      },
    ],
  },
  tragic: {
    title: '🔴 Final Trágico — Eclâmpsia fatal',
    highlight: 'Ignorar sinais críticos ou usar protocolos errados fez o cálcio não esperar por {{dogName}}.',
    highlightTone: 'danger',
    sections: [
      {
        heading: 'Condição',
        body: 'Sinais foram ignorados ou ocitocina foi aplicada sem avaliação. A hipocalcemia evoluiu sem controle.',
      },
      {
        heading: 'Cenário',
        body: '{{dogName}} entrou em crise com tremores, rigidez e convulsões. A tentativa de “resolver em casa” atrasou o tratamento.',
      },
      {
        heading: 'Desfecho',
        body: 'A bradicardia refratária levou à morte. Fica o registro: carinho sem fisiologia não salva vidas.',
      },
    ],
  },
};
