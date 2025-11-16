import type { StoryDecision, StoryEnding, StoryEndingKey, StoryPhase } from '../lib/types';

const fase1Decisions: StoryDecision[] = [
  {
    id: 'fase1-q1',
    title: "Pergunta 1 - Função que o cálcio não realiza",
    question: "O cálcio é essencial para várias funções do corpo. Qual dessas funções ele não realiza?",
    options: [
      {
        text: "A) Contração muscular",
        feedback: "Feedback: •\tMecanismo: durante a condução do potencial de ação, o retículo sarcoplasmático libera Ca²⁺. O Ca²⁺ liga-se à troponina C, provocando mudança conformacional que desloca a tropomiosina e expõe sítios de ligação para a miosina na actina. Isso permite a formação de pontes cruzadas e o ciclo de contração.\n•\tSem Ca²⁺: troponina não muda de conformação → músculo não contrai.\n•\tConclusão: o cálcio é essencial à contração — portanto a alternativa não pode ser a correta.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "B) Coagulação sanguínea",
        feedback: "Feedback: •\tMecanismo: o Ca²⁺ (fator IV) é cofator nas reações da cascata da coagulação, ajudando as proteínas dependentes de vitamina K (com resíduos γ-carboxiglutamato) a se ligar às membranas fosfolipídicas; participa nas etapas de ativação de fatores e na conversão protrombina → trombina.\n•\tSem Ca²⁺: a cascata é ineficiente → sangramento.\n•\tConclusão: cálcio é necessário — alternativa incorreta.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "C) Digestão de lipídios",
        feedback: "Feedback: Correto! A resposta respeita a fisiologia descrita na questão.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "D) Transmissão nervosa",
        feedback: "Feedback: •\tMecanismo: chegada do potencial de ação ao terminal axonal abre canais de Ca²⁺ tipo voltagem-dependente; influxo de Ca²⁺ ativa synaptotagmin/SNAREs, promovendo fusão das vesículas sinápticas e liberação de neurotransmissores.\n•\tSem Ca²⁺: nenhuma liberação de neurotransmissor, interrupção da transmissão sináptica.\n•\tConclusão: cálcio participa diretamente — alternativa incorreta.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase1-q2',
    title: "Pergunta 2 - Hormônio liberado quando Ca²⁺ sérico cai",
    question: "Quando os níveis de cálcio caem no sangue, qual hormônio é liberado para restabelecer o equilíbrio?",
    options: [
      {
        text: "A) PTH",
        feedback: "Feedback: Correto!\nMecanismo do PTH (contexto):\n•\tParatormônio é liberado por células principais das paratireoides quando o sensor (CaSR) detecta queda de Ca²⁺. PTH aumenta reabsorção renal de Ca²⁺, estimula osteoclastogênese (libera Ca²⁺ do osso) e estimula 1α-hidroxilase renal (↑ calcitriol) → ↑ absorção intestinal.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "B) Calcitonina",
        feedback: "Feedback: •\tCalcitonina é secretada pelas células C da tireoide em resposta a aumento do Ca²⁺ sérico; sua ação principal é inibir osteoclastos, diminuindo a liberação óssea de Ca²⁺.\n•\tLogo, não é liberada para elevar Ca²⁺ quando cai — faz o oposto.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "C) Insulina",
        feedback: "Feedback: •\tInsulina regula metabolismo de carboidratos, lipídios e proteínas; não regula fisiologia do Ca²⁺ sérico.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Adrenalina",
        feedback: "Feedback: •\tCatecolaminas modulam resposta ao estresse (FC, glicogenólise), não a homeostase do Ca²⁺.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase1-q3',
    title: "Pergunta 3 - Onde o PTH estimula ativação da vitamina D",
    question: "O PTH atua, entre outras coisas, estimulando a ativação da vitamina D. Onde isso acontece?",
    options: [
      {
        text: "A) Pâncreas e estômago",
        feedback: "Feedback: •\tAtivação da vitamina D não ocorre nesses órgãos. Pâncreas/estômago produzem enzimas e ácido, não participam da 25- ou 1α-hidroxilação.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "B) Fígado e rins",
        feedback: "Feedback: Correto!\nMecanismo correto (detalhe):\n•\tFígado: vitamina D (colecalciferol/ergocalciferol) → 25-hidroxivitamina D [25(OH)D] pela 25-hidroxilase.\n•\tRim: 25(OH)D → 1,25(OH)₂D (calcitriol) pela 1α-hidroxilase (CYP27B1); PTH estimula essa enzima. Calcitriol ↑ expressão de canais/p proteínas de transporte de Ca²⁺ (TRPV6, calbindina) no intestino.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "C) Intestino grosso",
        feedback: "Feedback: •\tIntestino grosso não realiza hidroxilação. A absorção de cálcio efetiva ocorre no intestino delgado (duodeno/jejuno).",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Músculos",
        feedback: "Feedback: •\tMúsculos não participam da ativação da vitamina D.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase1-q4',
    title: "Pergunta 4 - Por que o cálcio é importante para as enzimas",
    question: "Por que o cálcio é importante para o funcionamento das enzimas do nosso corpo?",
    options: [
      {
        text: "A) Porque ele dá energia para as reações químicas acontecerem",
        feedback: "Feedback: •\tEnergia química para reações vem de ATP (e gradientes eletroquímicos). Ca²⁺ não é fonte de energia.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "B) Porque ele ajuda as enzimas a funcionarem melhor e ficarem estáveis",
        feedback: "Feedback: Correto!\nMecanismo real:\n•\tCa²⁺ pode atuar como cofator (liga-se ao sítio ativo ou a domínios estruturais como EF-hand), alterando conformação e estabilidade da enzima — assim regula atividade enzimática.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "C) Porque funciona como hormônio que controla as enzimas",
        feedback: "Feedback: •\tEmbora Ca²⁺ seja um mensageiro intracelular (second messenger) que regula enzimas, não é um hormônio. Hormônios são moléculas secretadas que atuam via circulação (ex.: PTH).",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Porque ele é destruído pelas enzimas",
        feedback: "Feedback: •\tCa²⁺ é um íon inorgânico; enzimas não “o destroem”. Podem ligá-lo e liberá-lo, mas não o degradam.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
];

const fase2Decisions: StoryDecision[] = [
  {
    id: 'fase2-q5',
    title: "Pergunta 5 - Importância do cálcio na gestação",
    question: "Durante a gestação, o cálcio é importante principalmente para:",
    options: [
      {
        text: "A) A produção de leite",
        feedback: "Feedback: •\tLactogênese e produção de leite ocorrem principalmente pós-parto, sob influência de prolactina e hormônios ligados ao parto; a gestação concentra-se em crescimento fetal e mineralização esquelética.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "B) Formação dos ossos e dentes dos filhotes",
        feedback: "Feedback: Correto! A resposta respeita a fisiologia descrita na questão.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "C) Aumento da glicose no sangue",
        feedback: "Feedback: •\tRegulação da glicemia é por hormônios (insulina/glucagon); cálcio não é o responsável primário por elevação de glicose.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) A digestão de proteínas",
        feedback: "Feedback: •\tProteólise digestiva depende de pepsina, proteases pancreáticas; cálcio não é enzima digestiva.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase2-q6',
    title: "Pergunta 6 - Resposta do organismo ao aumento da demanda de Ca²⁺ na gestação",
    question: "Com o aumento da demanda de cálcio na gestação, o organismo da cadela responde:",
    options: [
      {
        text: "A) Diminuir o PTH",
        feedback: "Feedback: •\tNa verdade PTH tende a aumentar se o Ca²⁺ cair. Em gestação há adaptações (↑ PTH e ↑ 1,25(OH)₂D) para aumentar disponibilidade de Ca²⁺.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "B) Aumentando a absorção intestinal de cálcio",
        feedback: "Feedback: Correto!\nMecanismo detalhado:\n•\tDemanda fetal ↑ → PTH e fatores placentários modulam ↑ 1α-hidroxilase → ↑ calcitriol → ↑ expressão de TRPV6, calbindina no intestino → ↑ absorção de Ca²⁺. Também ocorre aumento de reabsorção renal de Ca²⁺ e mobilização óssea se necessário.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "C) Bloquear a vitamina D",
        feedback: "Feedback: •\tO contrário: há ↑ ativação da vitamina D para aumentar absorção intestinal.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Inibir reabsorção renal de cálcio",
        feedback: "Feedback: •\tPTH aumenta a reabsorção renal de Ca²⁺; inibir reabsorção agravaria perda de Ca²⁺.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase2-q7',
    title: "Pergunta 7 - Microbiota intestinal e absorção de cálcio",
    question: "A microbiota intestinal participa desse processo porque:",
    options: [
      {
        text: "A) Facilita a absorção de cálcio ao equilibrar o pH intestinal",
        feedback: "Feedback: Correto!\nMecanismo detalhado:\n•\tBactérias produzem SCFAs (acetato, butirato) que acidificam levemente o lúmen, aumentando solubilidade de fosfato/cálcio e favorecendo absorção; além disso, microbiota modula integridade da mucosa e expressão de transportadores.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "B) Produz diretamente o cálcio",
        feedback: "Feedback: •\tMicrobiota não gera o íon Ca²⁺; só modifica o ambiente (pH, metabólitos).",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "C) Inibe o transporte ativo de cálcio",
        feedback: "Feedback: •\tMuitas vezes facilita ou {{dogName}}hora o transporte, não o inibe.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Diminui a vitamina D ativa",
        feedback: "Feedback: •\tA ativação da vitamina D é hepatorenal e hormonal; microbiota pode afetar metabolismo de bile e pH, mas não “diminui” diretamente a vitamina D ativa de forma direta.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase2-q8',
    title: "Pergunta 8 - Principal reserva de cálcio",
    question: "Qual é a principal reserva de cálcio do corpo que pode ser utilizada durante a gestação?",
    options: [
      {
        text: "A) Fígado",
        feedback: "Feedback: •\tFígado armazena glicogênio e metais-trazas, não reserva de Ca²⁺.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "B) Ossos",
        feedback: "Feedback: Correto! A resposta respeita a fisiologia descrita na questão.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "C) Músculos",
        feedback: "Feedback: •\tMúsculos usam Ca²⁺ para contração, mas não constituem reserva mineral sistêmica.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Sangue",
        feedback: "Feedback: •\tSangue contém Ca²⁺ circulante (ionizado ligado e complexo), mas quantidade é pequena comparada ao osso. Os ossos (hidroxiapatita: Ca₁₀(PO₄)₆(OH)₂) são o maior reservatório.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase2-q9',
    title: "Pergunta 9 - Conduta correta sobre ração/suplementos",
    question: "Qual das alternativas descreve a conduta correta em relação à alimentação e suplementação de cálcio em cadelas gestantes?",
    options: [
      {
        text: "A) A ração de filhotes deve ser oferecida apenas após o parto, junto com suplementação de cálcio diária.",
        feedback: "Feedback: Oferecer ração de filhotes apenas após o parto e suplementar cálcio indiscriminadamente pode causar hipercalcemia ou suprimir a atividade das paratireoides, levando a risco de disfunção quando a demanda real surgir.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "B) A ração de filhotes pode ser introduzida gradualmente a partir da metade da gestação, sem necessidade de suplementação de cálcio, exceto sob orientação veterinária.",
        feedback: "Feedback: Correto!\nMecanismo chave: suplementação excessiva pré-parto pode diminuir a sensibilidade do paratireoide (feedback negativo) → após parto, quando a demanda por leite aumenta, o organismo pode estar menos capaz de responder rapidamente → eclâmpsia puerperal.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "C) A alimentação deve ser ajustada de acordo com a idade e o número de fetos, usando ração de filhotes desde a cópula, mas a suplementação de cálcio só deve ocorrer no final da gestação ou quando houver indicação clínica.",
        feedback: "Feedback: Usar ração de filhotes desde a cópula sem ajustar conforme número de fetos e idades pode superestimar necessidades e tornar suplementação desnecessária; suplementar só no final sem critério também arrisca desequilíbrios.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Deve-se manter a mesma ração de manutenção durante toda a gestação e iniciar suplementação de cálcio logo após a cópula.",
        feedback: "Feedback: Manter ração de manutenção e iniciar suplementação logo após a cópula pode expor a cadela a excesso de cálcio (prejudicial) e interferir no ajuste fisiológico do PTH/Vit D.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "E) É indicado oferecer ração comum e aumentar o cálcio desde o início da prenhez para evitar hipocalcemia.",
        feedback: "Feedback: Aumentar cálcio desde o início sem avaliação causa risco de supressão adaptativa do PTH e redução da capacidade de mobilizar cálcio quando necessário",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
];

const fase3Decisions: StoryDecision[] = [
  {
    id: 'fase3-q10',
    title: "Pergunta 10 - Cálcio e secreção do leite",
    question: "O cálcio é fundamental na secreção do leite porque:",
    options: [
      {
        text: "A) Diminui a absorção intestinal durante a lactação",
        feedback: "Feedback: •\tLactação aumenta necessidade e geralmente manutenção/↑ absorção; cálcio não diminui absorção intestinal.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "B) Atua diretamente na produção dos hormônios ovarianos",
        feedback: "Feedback: •\tProdução de hormônios ovarianos (estrogênio/progesterona) é regulada pelo eixo hipotálamo-hipófise-ovário, não diretamente pelo Ca²⁺.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "C) É essencial para a ação da ocitocina, que promove a contração das células mamárias e a ejeção do leite",
        feedback: "Feedback: Correto!\nMecanismo correto (por que C está certa, detalhado):\n•\tOxitocina se liga a receptores acoplados à proteína G nas células mioepiteliais → ativa fosfolipase C (PLC) → gera IP₃ → IP₃ promove liberação de Ca²⁺ do retículo → aumento do Ca²⁺ intracelular causa contração das mioepitélias ao redor dos alvéolos → ejeção do leite. Assim, o Ca²⁺ intracelular é necessário para a contratilidade induzida por oxitocina.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "D) Controla o volume de sangue que chega às glândulas mamárias",
        feedback: "Feedback: •\tFluxo sanguíneo local é controlado por fatores vasculares e hormonais (prolactina, estrogênios) e demanda metabólica; Ca²⁺ não “controla” esse volume.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-q11',
    title: "Pergunta 11 - Hormônio que reduz o cálcio no sangue",
    question: "Qual hormônio reduz o cálcio no sangue, favorecendo o depósito nos ossos?",
    options: [
      {
        text: "A) PTH",
        feedback: "Feedback: •\tPTH aumenta Ca²⁺ sérico; não reduz.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "B) Calcitonina",
        feedback: "Feedback: Correto!\nMecanismo da calcitonina:\n•\tSecretada pelas células C da tireoide em resposta ao ↑ Ca²⁺; inibe osteoclastos (reduz reabsorção óssea) e pode aumentar excreção renal de Ca²⁺.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "C) Vitamina D",
        feedback: "Feedback: •\tVitamina D aumenta absorção intestinal de Ca²⁺ e tende a elevar Ca²⁺ sérico.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Aldosterona",
        feedback: "Feedback: •\tAldosterona regula Na⁺ e K⁺; efeito direto no Ca²⁺ não é regulador primário.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-q12',
    title: "Pergunta 12 - PTH e vitamina D ativa durante lactação",
    question: "Durante a lactação, o PTH e a vitamina D ativa trabalham juntos para:",
    options: [
      {
        text: "A) Reduzir o cálcio sanguíneo",
        feedback: "Feedback: •\tAmbos agem para elevar Ca²⁺ sérico quando necessário.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "B) Aumentar a liberação de cálcio dos ossos e absorção intestinal",
        feedback: "Feedback: Correto!\nMecanismo detalhado:\n•\tPTH → mobiliza Ca²⁺ do osso (estimula osteoclastogênese via RANKL) e aumenta 1α-hidroxilase → ↑ calcitriol → ↑ absorção intestinal via canais e proteínas transportadoras; durante lactação esses mecanismos contribuem para suprir secreção de Ca²⁺ no leite.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "C) Inibir a função renal",
        feedback: "Feedback: •\tPTH aumenta reabsorção de Ca²⁺ no rim; não inibe função renal global como estratégia para conservar Ca²⁺.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Produzir glicose para o leite",
        feedback: "Feedback: •\tProdução de glicose (gliconeogênese) não é papel de PTH/Vit D neste contexto.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-q13',
    title: "Pergunta 13 - Por que a falta de cálcio afeta metabolismo (resposta A)",
    question: "A falta de cálcio nessa fase pode afetar o metabolismo porque o cálcio participa de:",
    options: [
      {
        text: "A) Processos de respiração celular e ativação de enzimas mitocondriais",
        feedback: "Feedback: Correto!\nMecanismo (por que A está certa, detalhado):\n•\tCa²⁺ regula várias enzimas mitocondriais — p.ex. estimula fosfatases e desidrogenases (PDH via ativação de PDH fosfatase; isocitrato desidrogenase e α-cetoglutarato desidrogenase respondem a Ca²⁺) — que aumentam fluxo através do TCA e produção de ATP conforme demanda. Falta de Ca²⁺ pode reduzir eficiência metabólica mitocondrial.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "B) Síntese de glicogênio",
        feedback: "Feedback: •\tSíntese de glicogênio é regulada por insulina, glicogênio sintase; não diretamente dependente de Ca²⁺ como cofator primário.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "C) Degradação de lipídios",
        feedback: "Feedback: •\tLipólise é mediada por hormônios (catecolaminas, glucagon) e enzimas lipases; não dependem diretamente de Ca²⁺.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Neutralização de ácidos gástricos",
        feedback: "Feedback: •\tNeutralização usa bicarbonato, tampões; cálcio não é tamponante primário.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-q14',
    title: "Pergunta 14 - Tremores e convulsões por hipocalcemia",
    question: "A hipocalcemia pode causar tremores musculares e convulsões porque o cálcio é essencial para:",
    options: [
      {
        text: "A) Aumentar a pressão arterial",
        feedback: "Feedback: •\tHipocalcemia pode ter efeitos indiretos, mas tremores/convulsões não decorrem de aumento pressórico.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "B) Transmissão nervosa e contração muscular",
        feedback: "Feedback: Correto!\nMecanismo detalhado:\n•\tBaixo Ca²⁺ extracelular reduz o limiar para abertura de canais de sódio volt-dependentes → aumenta excitabilidade neuronal → espasmos, tetania, convulsões. Nos músculos, a hipocalcemia facilita despolarizações espontâneas e contraturas.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "C) Equilíbrio de glicose",
        feedback: "Feedback: •\tConvulsões por hipocalcemia relacionam-se à excitabilidade neuronal, não à glicose.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Digestão de proteínas",
        feedback: "Feedback: •\tNão há relação direta.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-q15',
    title: "Pergunta 15 - Eclâmpsia puerperal — o que está acontecendo",
    question: "Se {{dogName}} apresentar sinais de eclâmpsia (hipocalcemia puerperal), o que está acontecendo no corpo dela?",
    options: [
      {
        text: "A) O cálcio está sendo desviado para o leite, reduzindo o cálcio no sangue",
        feedback: "Feedback: Correto!\nMecanismo clínico:\n•\tNa lactação intensa, grandes quantidades de Ca²⁺ vão para o leite. Se absorção intestinal e repositórios ósseos não compensam de forma rápida, o Ca²⁺ sérico cai, levando a sinais neuromusculares e possível colapso.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "B) O cálcio está se acumulando no sangue em excesso",
        feedback: "Feedback: •\tEclâmpsia é hipocalcemia, não hipercalcemia.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "C) O corpo está produzindo cálcio em excesso",
        feedback: "Feedback: •\tCorpo não sintetiza cálcio; depende de absorção e liberação óssea.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Os ossos estão impedindo a liberação de cálcio",
        feedback: "Feedback: •\tA falha é, na maioria das vezes, incapacidade de suprir demanda para produção de leite — ossos podem ser mobilizados, mas se o ajuste é lento/insuficiente, S-Ca²⁺ cai.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-q16',
    title: "Pergunta 16 - Microbiota na lactação",
    question: "No período de lactação, a microbiota intestinal continua importante porque:",
    options: [
      {
        text: "A) Produz substâncias que ajudam na absorção de minerais, como cálcio e magnésio",
        feedback: "Feedback: Correto!\nMecanismo detalhado:\n•\tMetabólitos microbianos (SCFAs) alteram pH e favorecem solubilidade iônica; além disso, microbiota pode modular expressão de canais transportadores e a saúde da mucosa intestinal, beneficiando absorção de Ca²⁺ e Mg²⁺.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "B) Bloqueia o cálcio do leite",
        feedback: "Feedback: •\tMicrobiota não “bloqueia” seletivamente o cálcio do leite.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "C) Reduz o PTH circulante",
        feedback: "Feedback: •\tA regulação do PTH depende do CaSR e do Ca²⁺ sérico; microbiota pode modular absorção, mas não suprimir PTH diretamente.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Impede a absorção de gordura",
        feedback: "Feedback: •\tMicrobiota pode influenciar metabolismo lipídico, mas “impedir” não é sua função principal no contexto de absorção mineral.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-q17',
    title: "Pergunta 17 - Consequência de dieta pobre em cálcio na lactação",
    question: "Se a alimentação de {{dogName}} for pobre em cálcio durante a lactação, qual consequência metabólica pode ocorrer?",
    options: [
      {
        text: "A) Desgaste ósseo acelerado (mobilização exagerada das reservas ósseas)",
        feedback: "Feedback: Correto!\nMecanismo:\n•\tDéficit → ↑ PTH → mobilização de Ca²⁺ do osso → perda mineral e fragilidade óssea (osteopenia/osteoporose se crônico).",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "B) Aumento da glicose sanguínea",
        feedback: "Feedback: •\tNão é consequência primária da falta de Ca²⁺.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "C) Redução da produção de leite",
        feedback: "Feedback: •\tA produção de leite pode ser mantida inicialmente mesmo com mobilização óssea; o problema primário sistêmico é desmineralização; produção pode cair secundariamente se a cadela adoecer.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Aumento da absorção de ferro",
        feedback: "Feedback: •\tNão existe correlação direta assim.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-q18',
    title: "Pergunta 18 - Prevenção da hipocalcemia",
    question: "Para prevenir a hipocalcemia durante a amamentação, é importante:",
    options: [
      {
        text: "A) Garantir suplementação adequada de cálcio e vitamina D",
        feedback: "Feedback: Correto!\nNota clínica: suplementação deve ser orientada; excesso também é prejudicial (veja explicação da questão 9).",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "B) Diminuir a ingestão de proteínas",
        feedback: "Feedback: •\tProteínas são necessárias; reduzir protein é contraproducente para produção de leite.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "C) Evitar que filhotes mamem com frequência",
        feedback: "Feedback: •\tPrivar filhotes não previne hipocalcemia materna e compromete comportamento e nutrição dos filhotes.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Aumentar o consumo de açúcares",
        feedback: "Feedback: •\tAçúcares não corrigem deficiência de minerais.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-q19',
    title: "Pergunta 19 - Outro mineral envolvido no equilíbrio neuromuscular",
    question: "Além do cálcio, qual outro mineral está envolvido no equilíbrio neuromuscular e pode se alterar na hipocalcemia?",
    options: [
      {
        text: "A) Magnésio",
        feedback: "Feedback: Correto!\nMecanismo do magnésio:\n•\tMg²⁺ é cofator para ATPases, influencia liberação de neurotransmissores, e níveis muito baixos de Mg²⁺ levam a disfunção de PTH e aumento de excitabilidade neuromuscular. Hipomagnesemia pode causar resistência ao PTH.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "B) Ferro",
        feedback: "Feedback: transporte de O₂ por hemoglobina; não é co-regulador direto imediato da excitabilidade neuromuscular.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "C) Zinco",
        feedback: "Feedback: cofatores enzimáticos gerais, mas não têm o papel direto e crítico que o magnésio tem na modulação da função neuromuscular e secreção de paratormônio.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Cobre",
        feedback: "cofatores enzimáticos gerais, mas não têm o papel direto e crítico que o magnésio tem na modulação da função neuromuscular e secreção de paratormônio.",
        tone: 'warning',
        outcome: 'bad',
      }
    ],
  },
  {
    id: 'fase3-q20',
    title: "Pergunta 20 - Queda severa de Ca²⁺ e excitabilidade",
    question: "Quando o cálcio sérico cai muito, o que acontece com a excitabilidade dos nervos e músculos?",
    options: [
      {
        text: "A) Diminui → fraqueza",
        feedback: "Feedback: •\tHipocalcemia inicialmente aumenta excitabilidade (tetania). Fraqueza pode ocorrer em outras condições, mas não é a resposta imediata típica da hipocalcemia aguda.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "B) Aumenta, causando tremores e espasmos",
        feedback: "Feedback: Correto!\nMecanismo detalhado: ver explicação da questão 14 (efeito sobre canais de Na⁺ e limiar de disparo).",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "C) Fica estável",
        feedback: "Feedback: •\tHá alteração significativa da excitabilidade.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Interrompe impulsos nervosos",
        feedback: "Feedback: •\tImpulsos não são interrompidos; tornam-se excessivos.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-q21',
    title: "Pergunta 21 - Após o desmame, necessidade de cálcio",
    question: "Após o desmame dos filhotes, o que acontece com a necessidade de cálcio da cadela?",
    options: [
      {
        text: "A) Diminui gradualmente, permitindo recuperação óssea",
        feedback: "Feedback: Correto!\nMecanismo: redução da demanda por leite permite equilíbrio positivo para reposição óssea (se dieta adequada), com normalização de PTH e calcitriol.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "B) Aumenta ainda mais",
        feedback: "Feedback: •\tApós lactação cessar, demanda diminui, não aumenta.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "C) Continua igual",
        feedback: "Feedback: •\tDemanda decresce progressivamente; metabolismo retorna ao estado pré-lactacional.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Depende apenas da dieta proteica",
        feedback: "Feedback: •\tRecuperação óssea depende de ingestão mineral e hormonal, não só proteína.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-q22',
    title: "Pergunta 22 - Tipo de ração durante lactação",
    question: "Durante a lactação, qual tipo de ração é mais adequada para {{dogName}}?",
    options: [
      {
        text: "A) Ração de manutenção, comum para cães adultos",
        feedback: "Feedback: •\tNão fornece níveis elevados de cálcio, fósforo e energia necessários.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "B) Ração para filhotes/lactantes",
        feedback: "Feedback: Correto!\nMecanismo/nutrição: rações para filhotes/lactantes têm balanço mineral e energético específico para sustentar produção de leite e saúde materna.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "C) Ração light",
        feedback: "Feedback: •\tBaixa energia; lactação exige alto gasto energético.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Ração sem suplementação mineral",
        feedback: "Feedback: •\tPode levar a deficiências.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-q23',
    title: "Pergunta 23 - Nutriente que ajuda absorção de cálcio",
    question: "Para ajudar na absorção adequada do cálcio presente na ração, é importante que a dieta de {{dogName}} também contenha:",
    options: [
      {
        text: "A) Vitamina D",
        feedback: "Feedback: Correto!\nMecanismo detalhado:\n•\tVitamina D ativa → aumenta transcrição de proteínas transportadoras (TRPV6), calbindina (liga Ca²⁺ no citosol) e bombear Ca²⁺ para circulação (PMCA). Isso aumenta absorção intestinal.",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "B) Vitamina C",
        feedback: "Feedback: •\tVitamina C é importante para síntese de colágeno e imunidade, não para absorção transepitelial de Ca²⁺.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "C) Ferro",
        feedback: "Feedback: •\tFerro é essencial, mas sua ingestão em excesso pode interferir na absorção de outros minerais; não facilita absorção de Ca²⁺.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "D) Magnésio",
        feedback: "Feedback: •\tMagnésio é importante para metabolismo mineral e função neuromuscular, mas não substitui a ação da vitamina D que aumenta expressão de proteínas transportadoras de Ca²⁺ no enterócito (TRPV6, calbindina, PMCA1b).",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
  {
    id: 'fase3-q24',
    title: "Pergunta 24 - Orientação sobre alimentação da lactante",
    question: "Orientação sobre alimentação da lactante",
    options: [
      {
        text: "A) Manter ração de manutenção até desmame",
        feedback: "Feedback: •\tPode não suprir demanda energética/mineral antecipada. Introduzir ração específica só após parto pode ser tardio.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "B) Ração só para filhotes (mãe continua habitual)",
        feedback: "Feedback: •\tA mãe também precisa de dieta com maiores necessidades.",
        tone: 'warning',
        outcome: 'bad',
      },
      {
        text: "C) Ração de filhotes para mãe durante gestação/lactação, acesso livre após parto (orientação vet)",
        feedback: "Feedback: Correto!\nMecanismo/nutrição: mães lactantes precisam de maior densidade energética e maiores concentrações de macro/oligoelementos para sustentar produção de",
        tone: 'success',
        outcome: 'best',
      },
      {
        text: "D) Jejuar a cadela",
        feedback: "Feedback: •\tJejum prejudica produção de leite, aumenta risco metabólico (hipoglicemia), e não previne ganho de peso de forma saudável.",
        tone: 'warning',
        outcome: 'bad',
      },
    ],
  },
];


export const storyPhases: StoryPhase[] = [
  {
    id: 'fase1',
    title: '📘 Fase 1 – O Sinal de Alerta',
    intro: [
      '{{dogName}} amanhece estranha: quieta, desconfortável, buscando atenção.',
      'Os funcionários percebem que algo está errado e pedem sua ajuda.',
      'Durante a avaliação, enquanto tenta entender o que está acontecendo, uma verdade preocupante se revela diante de você:',
      '🔥 {{dogName}} está com o cálcio perigosamente baixo. A vida dela agora depende da sua capacidade de lembrar tudo o que sabe sobre hipocalcemia.',
    ],
    decisions: fase1Decisions,
  },
  {
    id: 'fase2',
    title: '🩺 Fase 2 – Um Novo Segredo',
    intro: [
      'A situação se complica de forma inesperada: {{dogName}} está grávida.',
      'Agora, além de enfrentar a hipocalcemia, ela carrega vidas que dependem totalmente dela. Cada decisão se torna ainda mais delicada.',
      'Para proteger {{dogName}} e seus futuros filhotes, você precisará lembrar — com precisão — o que acontece no organismo de uma cadela gestante quando os níveis de cálcio estão baixos.'
    ],
    decisions: fase2Decisions,
  },
  {
    id: 'fase3',
    title: '🍼 Fase 3 – Lactação',
    intro: [
      'No silêncio da madrugada, um choro suave rompe a escuridão: {{dogName}} deu à luz.\nQuando você  chega no campus, se aproxima e encontra a ninhada — minúsculos, frágeis, totalmente indefesos, dependentes da força que a mãe já não tem.',
      'Mas o alívio dura pouco.',
      '🐶 A hipocalcemia ainda ameaça {{dogName}}, drenando suas energias quando ela mais precisa ser forte. E, se ela enfraquecer, todos os filhotes correm perigo.',
      'Agora, salvar essa família não é mais uma missão individual.\nVocê precisa unir forças, compartilhar seus conhecimentos com os funcionários e os outros estudantes do campus, e criar um revezamento dedicado que garanta cuidado, segurança e vigilância constante.',
      'A sobrevivência de {{dogName}} e de seus filhotes está nas mãos de todos vocês!'
    ],
    decisions: fase3Decisions,
  },
];

export const storyEndings: Record<StoryEndingKey, StoryEnding> = {
  bad: {
    title: '🔴 Final Ruim - Fase comprometida',
    highlight: 'Falhar nesta fase deixou {{dogName}} fragilizado e forçou o encerramento imediato.',
    highlightTone: 'danger',
    sections: [
      {
        heading: 'Condição',
        body: 'As decisões erradas agravaram a hipocalcemia e o suporte planejado não foi suficiente.',
      },
      {
        heading: 'Cenário',
        body: 'O tratamento precisou ser interrompido, os filhotes ficaram sob observação e a equipe reavaliou toda a rotina antes de prosseguir.',
      },
      {
        heading: 'Lição',
        body: 'Recomece a fase com calma, revise cada sinal clínico e garanta que o protocolo esteja claro antes de avançar.',
      },
    ],
  },
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

export const phaseTragicEndings: Record<'fase1' | 'fase2' | 'fase3', StoryEnding> = {
  fase1: {
    title: 'Final Trágico - Fase 1',
    highlight: '"Quando o primeiro alerta é ignorado"',
    highlightTone: 'danger',
    sections: [
      {
        heading: 'Manhã silenciosa',
        body: 'A manhã que começou estranha termina em silêncio. {{dogName}}, já fraca e pedindo ajuda com o olhar, não recebe as respostas de que precisava. Sua condição piora rápido demais. Os funcionários tentam acudir, mas tudo acontece como um sussurro que se apaga.',
      },
      {
        heading: 'Colapso lento',
        body: 'Sem o conhecimento que poderia ter guiado as primeiras decisões, {{dogName}} sucumbe à queda de cálcio que lentamente consumia sua força.',
      },
      {
        heading: 'O peso do vazio',
        body: 'O campus amanhece mais vazio. Você observa a caminha dela, ainda arrumada, e entende - a vida dela dependia do que você sabia, e não foi o suficiente.',
      },
    ],
  },
  fase2: {
    title: 'Final Trágico - Fase 2',
    highlight: '"O peso de duas vidas"',
    highlightTone: 'danger',
    sections: [
      {
        heading: 'Gestação interrompida',
        body: 'O segredo revelado na segunda fase não trouxe tempo para agir. {{dogName}}, gestante e enfraquecida, luta com tudo o que tem, mas o desequilíbrio em seu corpo vence a batalha antes que você consiga ajudá-la do jeito certo.',
      },
      {
        heading: 'Silêncio antes do luto',
        body: 'Os movimentos dela ficam lentos, a respiração fraca. E então, o mundo ao redor para. Os filhotes que carregava jamais verão a luz. Ela, tão corajosa, parte em silêncio - e a sala onde estava parece distante, fria, vazia demais.',
      },
      {
        heading: 'Conhecimento perdido',
        body: 'O conhecimento que poderia tê-la salvado se perdeu nas respostas erradas. E duas gerações se apagam com ela.',
      },
    ],
  },
  fase3: {
    title: 'Final Trágico - Fase 3',
    highlight: '"Quando o tempo se esgota"',
    highlightTone: 'danger',
    sections: [
      {
        heading: 'Madrugada de luto',
        body: 'A madrugada que deveria celebrar vida se transforma em luto. Você chega ao ninho tarde demais. {{dogName}}, exausta pela hipocalcemia e pelo esforço da maternidade, não resiste. Ela lutou até o último instante para proteger seus filhotes, mas seu corpo não aguentou.',
      },
      {
        heading: 'Filhotes sem amparo',
        body: 'Os filhotes, sem a mãe, ficam quietos demais - pequenos demais - frágeis demais para sobreviver por conta própria. Os funcionários tentam ajudar, mas sem a orientação correta que você deveria ter fornecido, o revezamento falha.',
      },
      {
        heading: 'Responsabilidade pesada',
        body: 'Um a um, os filhotes se vão, silenciosamente. E você fica ali, parado, cercado pelo que poderia ter sido uma história de esperança. A vida de {{dogName}} e de sua ninhada estava em suas mãos. Mas o conhecimento que salvaria todos eles não foi lembrado a tempo.',
      },
    ],
  },
};
