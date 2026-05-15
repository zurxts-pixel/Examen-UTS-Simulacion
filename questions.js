// ============================================
// BANCO DE 50 PREGUNTAS — EXAMEN UTS
// ============================================
const QUESTIONS = [

  // ========== PENSAMIENTO MATEMÁTICO (13) ==========
  {
    id:1, category:"math",
    question:"Si ¾ de un número es igual a 45, ¿cuál es ⅖ de ese mismo número?",
    options:["20","24","30","36"], correct:1,
    explanation:"Si ¾ del número = 45, el número = 45 × 4/3 = 60.\nLuego ⅖ × 60 = 24."
  },
  {
    id:2, category:"math",
    question:"Simplifica la expresión: (2x + 3)² − (2x − 3)²",
    options:["12x","24x","36x","9"], correct:1,
    explanation:"Usamos diferencia de cuadrados: a² − b² = (a+b)(a−b).\na = (2x+3), b = (2x−3).\n(4x)(6) = 24x."
  },
  {
    id:3, category:"math",
    question:"Si f(x) = 3x² − 2x + 1, ¿cuál es el valor de f(−2)?",
    options:["9","17","13","21"], correct:1,
    explanation:"f(−2) = 3(4) − 2(−2) + 1 = 12 + 4 + 1 = 17."
  },
  {
    id:4, category:"math",
    question:"¿Cuáles son las soluciones de 2x² − 8x + 6 = 0?",
    options:["x = 2 y x = 4","x = 1 y x = 3","x = −1 y x = −3","x = 0 y x = 3"], correct:1,
    explanation:"Dividimos entre 2: x² − 4x + 3 = 0.\nFactorizamos: (x−1)(x−3) = 0 → x = 1 y x = 3."
  },
  {
    id:5, category:"math",
    question:"¿Cuál es el valor de log₂(32)?",
    options:["4","5","6","3"], correct:1,
    explanation:"Buscamos n tal que 2ⁿ = 32. Como 2⁵ = 32, log₂(32) = 5."
  },
  {
    id:6, category:"math",
    question:"Al lanzar dos dados, ¿cuál es la probabilidad de que la suma sea 7?",
    options:["1/12","1/6","1/9","1/4"], correct:1,
    explanation:"36 resultados posibles. Combinaciones que suman 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6.\nP = 6/36 = 1/6."
  },
  {
    id:7, category:"math",
    question:"En la sucesión aritmética 5, 9, 13, 17, ..., ¿cuál es el término 20?",
    options:["77","81","85","73"], correct:1,
    explanation:"Diferencia común d = 4.\na₂₀ = 5 + (20−1)(4) = 5 + 76 = 81."
  },
  {
    id:8, category:"math",
    question:"Resuelve el sistema:\n2x + y = 7\nx − y = 2",
    options:["x = 2, y = 3","x = 3, y = 1","x = 4, y = −1","x = 1, y = 5"], correct:1,
    explanation:"Sumamos ambas ecuaciones: 3x = 9 → x = 3.\nSustituyendo: 3 − y = 2 → y = 1."
  },
  {
    id:9, category:"math",
    question:"Un artículo cuesta $800. Se aplica 15% de descuento y luego 16% de IVA. ¿Precio final?",
    options:["$756.00","$788.80","$812.00","$768.00"], correct:1,
    explanation:"Con descuento: 800 × 0.85 = $680.\nCon IVA: 680 × 1.16 = $788.80."
  },
  {
    id:10, category:"math",
    question:"Simplifica: (2³ × 2⁴) ÷ 2⁵",
    options:["2","4","8","16"], correct:1,
    explanation:"Leyes de exponentes: 2^(3+4) ÷ 2⁵ = 2⁷ ÷ 2⁵ = 2² = 4."
  },
  {
    id:11, category:"math",
    question:"La media aritmética del conjunto {4, 8, 6, 10, 12} es:",
    options:["7","8","9","10"], correct:1,
    explanation:"Media = (4+8+6+10+12)/5 = 40/5 = 8."
  },
  {
    id:12, category:"math",
    question:"Factoriza: x² − 9",
    options:["(x−9)(x+1)","(x+3)(x−3)","(x−3)²","(x+9)(x−1)"], correct:1,
    explanation:"Diferencia de cuadrados: a²−b² = (a+b)(a−b).\nx²−9 = (x+3)(x−3)."
  },
  {
    id:13, category:"math",
    question:"El perímetro de un rectángulo es 40 cm y su largo es 3 veces su ancho. ¿Cuál es el área?",
    options:["75 cm²","100 cm²","60 cm²","120 cm²"], correct:0,
    explanation:"Sea w = ancho, largo = 3w.\nPerímetro: 2(w+3w) = 8w = 40 → w = 5, largo = 15.\nÁrea = 5 × 15 = 75 cm²."
  },

  // ========== COMPRENSIÓN LECTORA Y REDACCIÓN (12) ==========
  {
    id:14, category:"reading",
    question:"Lee el texto:\n\n«La automatización industrial no implica la eliminación del factor humano, sino su reubicación hacia tareas de supervisión, diseño y toma de decisiones estratégicas. Las máquinas ejecutan; los humanos dirigen.»\n\n¿Cuál es la intención principal del autor?",
    options:[
      "Advertir sobre el desempleo que causa la automatización",
      "Argumentar que la automatización complementa al ser humano",
      "Promover la compra de maquinaria industrial",
      "Describir el funcionamiento de los robots industriales"
    ], correct:1,
    explanation:"El autor dice que el humano se 'reubica', no se elimina. La clave: 'Las máquinas ejecutan; los humanos dirigen.' No hay intención de alarmar ni de vender."
  },
  {
    id:15, category:"reading",
    question:"Identifica la oración CORRECTAMENTE escrita:",
    options:[
      "Hubieron muchos problemas en el evento.",
      "Habrán nuevas oportunidades para los estudiantes.",
      "Hubo varios incidentes durante la ceremonia.",
      "Han habido quejas sobre el servicio al cliente."
    ], correct:2,
    explanation:"'Haber' impersonal siempre va en singular: 'hubo' (no 'hubieron'), 'habrá' (no 'habrán'), 'ha habido' (no 'han habido'). Solo C es correcta."
  },
  {
    id:16, category:"reading",
    question:"Lee el texto:\n\n«El calentamiento global no es un fenómeno del futuro; sus efectos ya se manifiestan en el deshielo polar y eventos climáticos extremos. La inacción de hoy será la catástrofe de mañana.»\n\n¿Qué tipo de texto es?",
    options:[
      "Narrativo: cuenta una historia sobre el clima",
      "Argumentativo: busca persuadir sobre la urgencia de actuar",
      "Descriptivo: solo detalla fenómenos naturales",
      "Expositivo: presenta datos sin opinión"
    ], correct:1,
    explanation:"La frase 'La inacción de hoy será la catástrofe de mañana' expresa una postura clara del autor que busca persuadir. Eso lo hace argumentativo."
  },
  {
    id:17, category:"reading",
    question:"¿Qué significa 'elocuente' en: «Su discurso fue tan elocuente que convenció a toda la audiencia»?",
    options:[
      "Confuso y desordenado",
      "Breve y conciso",
      "Persuasivo y expresivo",
      "Silencioso y discreto"
    ], correct:2,
    explanation:"'Elocuente' significa expresarse de manera persuasiva y convincente. El contexto ('convenció a toda la audiencia') lo confirma."
  },
  {
    id:18, category:"reading",
    question:"Selecciona la opción con ortografía CORRECTA:",
    options:[
      "El exámen de admición será el próximo lunes.",
      "El examen de admisión será el proximo lunes.",
      "El examen de admisión será el próximo lunes.",
      "El exámen de admisión será el próximo lunes."
    ], correct:2,
    explanation:"'Examen' NO lleva acento (grave terminada en n). 'Admisión' va con s. 'Próximo' SÍ lleva acento (esdrújula). Solo C cumple todo."
  },
  {
    id:19, category:"reading",
    question:"En «Los estudiantes, quienes aprobaron el curso, recibirán su diploma», las comas indican que:",
    options:[
      "La información entre comas es esencial para identificar a los estudiantes",
      "Se trata de una oración explicativa: TODOS aprobaron",
      "Hay un error gramatical y las comas sobran",
      "La frase 'quienes aprobaron' es el sujeto principal"
    ], correct:1,
    explanation:"Las comas hacen la cláusula EXPLICATIVA (no restrictiva), significando que TODOS los estudiantes aprobaron. Sin comas sería restrictiva (solo algunos)."
  },
  {
    id:20, category:"reading",
    question:"Lee:\n\n«México posee una biodiversidad extraordinaria. Con apenas el 1.4% de la superficie terrestre, alberga entre el 10% y 12% de todas las especies conocidas.»\n\n¿Cuál es la idea principal?",
    options:[
      "México tiene un territorio muy pequeño",
      "La superficie de México es el 1.4% del planeta",
      "México tiene riqueza biológica desproporcionada respecto a su tamaño",
      "México es el país con más especies del mundo"
    ], correct:2,
    explanation:"El texto contrasta el pequeño porcentaje de superficie (1.4%) con el gran porcentaje de especies (10-12%). Esa desproporción positiva es la idea central."
  },
  {
    id:21, category:"reading",
    question:"¿Qué conector completa correctamente?\n\n«Estudió intensamente para el examen; _______, obtuvo una calificación excelente.»",
    options:["sin embargo","por consiguiente","aunque","a pesar de que"], correct:1,
    explanation:"'Por consiguiente' indica CONSECUENCIA: el resultado (buena nota) es producto de la causa (estudiar). 'Sin embargo' indicaría contraste, lo cual no tiene sentido aquí."
  },
  {
    id:22, category:"reading",
    question:"Identifica la opción con ERROR de concordancia:",
    options:[
      "La mayoría de los alumnos aprobó el examen.",
      "El grupo de científicas publicaron sus resultados.",
      "Las noticias fueron difundidas rápidamente.",
      "El equipo celebró su victoria con entusiasmo."
    ], correct:1,
    explanation:"'El grupo' es SINGULAR, el verbo debe concordar: 'El grupo publicó' (no 'publicaron'). Las demás oraciones tienen concordancia correcta."
  },
  {
    id:23, category:"reading",
    question:"¿Cuál es el ANTÓNIMO de 'efímero'?",
    options:["Transitorio","Perdurable","Fugaz","Instantáneo"], correct:1,
    explanation:"'Efímero' = de corta duración. Su antónimo es 'perdurable' (que dura mucho). Transitorio, fugaz e instantáneo son sinónimos de efímero."
  },
  {
    id:24, category:"reading",
    question:"En «A María le gusta leer; a Pedro, escribir», el punto y coma se usa para:",
    options:[
      "Separar ideas sin relación",
      "Indicar una pausa más larga que el punto",
      "Separar oraciones relacionadas donde la segunda omite el verbo",
      "Corregir un error gramatical"
    ], correct:2,
    explanation:"El punto y coma separa dos oraciones yuxtapuestas. En la segunda se omite 'le gusta' (elipsis verbal), señalado con la coma tras 'Pedro'."
  },
  {
    id:25, category:"reading",
    question:"Lee:\n\n«El pensamiento crítico no consiste en rechazar toda información, sino en evaluarla con rigor. Quien piensa críticamente no es escéptico por naturaleza, sino analítico por convicción.»\n\n¿Cuál resume MEJOR la postura del autor?",
    options:[
      "Pensar críticamente significa dudar de todo",
      "El pensamiento crítico es análisis riguroso, no rechazo automático",
      "Las personas escépticas son las que mejor piensan",
      "La información debe rechazarse si no se puede verificar"
    ], correct:1,
    explanation:"El autor distingue 'rechazar' de 'evaluar con rigor'. Su postura: pensar críticamente = análisis, no rechazo automático."
  },

  // ========== PENSAMIENTO ANALÍTICO Y LÓGICO (13) ==========
  {
    id:26, category:"logic",
    question:"¿Qué número continúa la serie?\n2, 6, 18, 54, ___",
    options:["108","162","72","128"], correct:1,
    explanation:"Serie geométrica: cada término × 3.\n2→6→18→54→162."
  },
  {
    id:27, category:"logic",
    question:"Si todos los BLIPS son GLOPS, y algunos GLOPS son DRAKS, ¿cuál es NECESARIAMENTE verdadera?",
    options:[
      "Todos los BLIPS son DRAKS",
      "Algunos BLIPS podrían ser DRAKS",
      "Ningún BLIP es DRAK",
      "Todos los DRAKS son BLIPS"
    ], correct:1,
    explanation:"BLIPS ⊂ GLOPS, y GLOPS ∩ DRAKS ≠ ∅. Es posible (pero no seguro) que algunos BLIPS sean DRAKS. No se puede afirmar 'todos' ni 'ninguno'."
  },
  {
    id:28, category:"logic",
    question:"¿Qué número continúa la serie?\n1, 1, 2, 3, 5, 8, 13, ___",
    options:["18","20","21","26"], correct:2,
    explanation:"Sucesión de Fibonacci: cada número = suma de los dos anteriores.\n8 + 13 = 21."
  },
  {
    id:29, category:"logic",
    question:"En un estacionamiento hay autos y motos. Se cuentan 18 vehículos y 50 llantas. ¿Cuántos autos hay?",
    options:["5","7","11","14"], correct:1,
    explanation:"a + m = 18; 4a + 2m = 50.\nm = 18−a → 4a + 2(18−a) = 50 → 2a + 36 = 50 → a = 7."
  },
  {
    id:30, category:"logic",
    question:"Completa la analogía:\nMédico es a Hospital como Maestro es a ___",
    options:["Libro","Alumno","Escuela","Enseñanza"], correct:2,
    explanation:"Relación: PROFESIONAL → LUGAR DE TRABAJO.\nMédico → Hospital; Maestro → Escuela."
  },
  {
    id:31, category:"logic",
    question:"¿Qué número continúa?\n3, 7, 15, 31, 63, ___",
    options:["95","127","96","100"], correct:1,
    explanation:"Patrón: (anterior × 2) + 1.\n3→7→15→31→63→127."
  },
  {
    id:32, category:"logic",
    question:"En un grupo de 40 estudiantes: 25 estudian inglés, 18 francés y 8 ambos. ¿Cuántos no estudian ninguno?",
    options:["3","5","7","10"], correct:1,
    explanation:"Inclusión-exclusión: 25+18−8 = 35 estudian al menos uno.\nNinguno: 40−35 = 5."
  },
  {
    id:33, category:"logic",
    question:"Si hoy es miércoles, ¿qué día será dentro de 100 días?",
    options:["Lunes","Martes","Jueves","Viernes"], correct:3,
    explanation:"100 ÷ 7 = 14 semanas + 2 días.\nMiércoles + 2 = viernes."
  },
  {
    id:34, category:"logic",
    question:"¿Cuál NO pertenece al grupo?\nCirculo rojo, Circulo azul, Circulo verde, Circulo amarillo, Cuadrado negro",
    options:["Circulo rojo","Circulo amarillo","Cuadrado negro","Circulo azul"], correct:2,
    explanation:"Todos son círculos de colores excepto el cuadrado negro, que difiere en FORMA."
  },
  {
    id:35, category:"logic",
    question:"Pedro es más alto que Juan. Luis es más bajo que Juan. María es más alta que Pedro. ¿Quién es el más bajo?",
    options:["Pedro","Juan","Luis","María"], correct:2,
    explanation:"Orden: María > Pedro > Juan > Luis.\nLuis es el más bajo."
  },
  {
    id:36, category:"logic",
    question:"Si A = {1,2,3,4,5} y B = {3,4,5,6,7}, ¿cuál es A ∩ B?",
    options:["{1,2,6,7}","{3,4,5}","{1,2,3,4,5,6,7}","{6,7}"], correct:1,
    explanation:"La intersección contiene elementos en AMBOS conjuntos: {3, 4, 5}."
  },
  {
    id:37, category:"logic",
    question:"Un reloj marca las 3:15. ¿Cuál es el ángulo entre la manecilla de la hora y la del minuto?",
    options:["0°","7.5°","15°","22.5°"], correct:1,
    explanation:"A las 3:15, el minutero está en el 3 (90°). La hora avanza 0.5° por minuto: 3×30 + 15×0.5 = 90+7.5 = 97.5°.\nDiferencia: 97.5−90 = 7.5°."
  },
  {
    id:38, category:"logic",
    question:"Si se necesitan 5 máquinas para hacer 5 piezas en 5 minutos, ¿cuántas máquinas se necesitan para hacer 100 piezas en 100 minutos?",
    options:["100","20","5","50"], correct:2,
    explanation:"Cada máquina hace 1 pieza en 5 minutos. En 100 minutos, cada máquina hace 20 piezas.\nPara 100 piezas: 100/20 = 5 máquinas."
  },

  // ========== CIENCIAS EXPERIMENTALES (12) ==========
  {
    id:39, category:"science",
    question:"¿Cuántos moles de H₂O se producen en la combustión de 2 moles de CH₄?\n\nCH₄ + 2O₂ → CO₂ + 2H₂O",
    options:["2 moles","4 moles","1 mol","6 moles"], correct:1,
    explanation:"Por cada mol de CH₄ se producen 2 moles de H₂O.\nCon 2 moles de CH₄: 2 × 2 = 4 moles de H₂O."
  },
  {
    id:40, category:"science",
    question:"Un objeto cae desde 80 m (sin fricción, g = 10 m/s²). ¿Cuánto tarda en llegar al suelo?",
    options:["2 s","4 s","8 s","6 s"], correct:1,
    explanation:"h = ½gt² → 80 = ½(10)t² → t² = 16 → t = 4 segundos."
  },
  {
    id:41, category:"science",
    question:"¿En qué organelo se realiza la respiración celular aeróbica?",
    options:["Ribosomas","Aparato de Golgi","Mitocondria","Retículo endoplásmático"], correct:2,
    explanation:"La mitocondria es la 'central energética' de la célula donde ocurre la respiración aeróbica (ciclo de Krebs y cadena de transporte de electrones)."
  },
  {
    id:42, category:"science",
    question:"¿Cuál es el número atómico del carbono y qué indica?",
    options:[
      "6; indica el número de neutrones",
      "12; indica la masa atómica",
      "6; indica el número de protones",
      "12; indica el número de electrones"
    ], correct:2,
    explanation:"El número atómico (Z=6 para el carbono) indica la cantidad de PROTONES en el núcleo. La masa atómica (≈12) es protones + neutrones."
  },
  {
    id:43, category:"science",
    question:"Según la tercera ley de Newton, si empujas una pared con 50 N de fuerza, la pared:",
    options:[
      "No ejerce ninguna fuerza",
      "Ejerce 50 N en la dirección opuesta sobre ti",
      "Ejerce 25 N hacia ti",
      "Se mueve con aceleración constante"
    ], correct:1,
    explanation:"Tercera ley: acción y reacción. Si empujas con 50 N, la pared empuja de vuelta con 50 N en dirección opuesta. Las fuerzas son iguales y opuestas."
  },
  {
    id:44, category:"science",
    question:"¿Cuál es la molécula responsable de almacenar la información genética?",
    options:["ARN","ATP","ADN","Proteínas"], correct:2,
    explanation:"El ADN (ácido desoxirribonucleico) almacena la información genética. El ARN la transcribe, el ATP es energía, y las proteínas son productos de la expresión génica."
  },
  {
    id:45, category:"science",
    question:"Una solución con pH = 3 es:",
    options:["Neutra","Básica","Ácida","Alcalina"], correct:2,
    explanation:"pH < 7 = ácido, pH = 7 = neutro, pH > 7 = básico/alcalino.\npH 3 es ácido (como el jugo de limón)."
  },
  {
    id:46, category:"science",
    question:"¿Qué tipo de energía tiene un objeto en reposo a 10 metros de altura?",
    options:[
      "Energía cinética",
      "Energía potencial gravitatoria",
      "Energía térmica",
      "Energía elástica"
    ], correct:1,
    explanation:"Un objeto en reposo a cierta altura tiene energía potencial gravitatoria (Ep = mgh). No tiene cinética porque su velocidad es cero."
  },
  {
    id:47, category:"science",
    question:"¿Cuál es el proceso por el cual las plantas convierten CO₂ y agua en glucosa usando luz solar?",
    options:["Respiración celular","Fotosíntesis","Fermentación","Quimiosíntesis"], correct:1,
    explanation:"La fotosíntesis: 6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂.\nOcurre en los cloroplastos usando clorofila para captar la luz."
  },
  {
    id:48, category:"science",
    question:"¿Qué tipo de enlace se forma cuando dos átomos COMPARTEN electrones?",
    options:["Iónico","Covalente","Metálico","Puente de hidrógeno"], correct:1,
    explanation:"En el enlace COVALENTE los átomos comparten electrones. En el iónico se transfieren. El metálico es un 'mar de electrones'. El puente de hidrógeno es una fuerza intermolecular."
  },
  {
    id:49, category:"science",
    question:"La velocidad de una onda se calcula con la fórmula v = λ × f. Si λ = 2 m y f = 50 Hz, ¿cuál es la velocidad?",
    options:["25 m/s","100 m/s","52 m/s","200 m/s"], correct:1,
    explanation:"v = λ × f = 2 m × 50 Hz = 100 m/s.\nλ (lambda) es la longitud de onda y f la frecuencia."
  },
  {
    id:50, category:"science",
    question:"La selección natural, propuesta por Darwin, establece que:",
    options:[
      "Los organismos más fuertes siempre sobreviven",
      "Los organismos mejor adaptados a su ambiente tienen mayor probabilidad de reproducirse",
      "Todas las especies evolucionan al mismo ritmo",
      "Los cambios genéticos son siempre intencionales"
    ], correct:1,
    explanation:"Darwin propuso que los organismos mejor ADAPTADOS (no necesariamente más fuertes) tienen ventaja reproductiva. La evolución no es intencional ni uniforme."
  },

  // ========== NUEVAS — PENSAMIENTO MATEMÁTICO (13 más) ==========
  {
    id:51, category:"math",
    question:"¿Cuál es el área de un trapecio con bases de 8 cm y 12 cm, y altura de 5 cm?",
    options:["50 cm²","40 cm²","100 cm²","60 cm²"], correct:0,
    explanation:"Área = ((B+b)/2) × h = ((12+8)/2) × 5 = 10 × 5 = 50 cm²."
  },
  {
    id:52, category:"math",
    question:"En un triángulo rectángulo, si un cateto mide 3 y el otro 4, ¿cuánto mide la hipotenusa?",
    options:["6","7","5","8"], correct:2,
    explanation:"Teorema de Pitágoras: c² = 3² + 4² = 9 + 16 = 25 → c = 5."
  },
  {
    id:53, category:"math",
    question:"De una baraja de 52 cartas, ¿cuál es la probabilidad de sacar un As?",
    options:["1/13","1/52","1/4","4/13"], correct:0,
    explanation:"Hay 4 Ases en 52 cartas. P = 4/52 = 1/13."
  },
  {
    id:54, category:"math",
    question:"¿Cuál es el dominio de la función f(x) = √(x − 3)?",
    options:["x > 3","x ≥ 3","Todos los reales","x ≤ 3"], correct:1,
    explanation:"La raíz cuadrada requiere argumento ≥ 0. Entonces x − 3 ≥ 0 → x ≥ 3."
  },
  {
    id:55, category:"math",
    question:"Si el discriminante (b²−4ac) de una ecuación cuadrática es negativo, la ecuación tiene:",
    options:["Dos soluciones reales","Una solución real","Ninguna solución real","Infinitas soluciones"], correct:2,
    explanation:"Discriminante < 0 significa que no hay raíces reales (las soluciones son complejas/imaginarias)."
  },
  {
    id:56, category:"math",
    question:"¿Cuál es la circunferencia de un círculo con radio de 7 cm? (usa π ≈ 22/7)",
    options:["44 cm","42 cm","49 cm","38 cm"], correct:0,
    explanation:"C = 2πr = 2 × (22/7) × 7 = 44 cm."
  },
  {
    id:57, category:"math",
    question:"La mediana del conjunto {3, 7, 1, 9, 5} es:",
    options:["7","3","5","9"], correct:2,
    explanation:"Ordenamos: {1, 3, 5, 7, 9}. La mediana es el valor central = 5."
  },
  {
    id:58, category:"math",
    question:"Si un producto sube de $200 a $250, ¿cuál fue el porcentaje de aumento?",
    options:["20%","25%","50%","15%"], correct:1,
    explanation:"Aumento = 250−200 = 50. Porcentaje = (50/200) × 100 = 25%."
  },
  {
    id:59, category:"math",
    question:"¿Cuál es el valor de sen(30°)?",
    options:["√3/2","1/2","√2/2","1"], correct:1,
    explanation:"sen(30°) = 1/2. Es uno de los ángulos notables que hay que memorizar."
  },
  {
    id:60, category:"math",
    question:"Si se lanzan 3 monedas al aire, ¿cuál es la probabilidad de obtener exactamente 2 caras?",
    options:["1/8","3/8","1/2","1/4"], correct:1,
    explanation:"Espacio muestral = 2³ = 8. Casos con 2 caras: CCA, CAC, ACC = 3. P = 3/8."
  },
  {
    id:61, category:"math",
    question:"Resuelve: |2x − 6| = 10",
    options:["x = 8 y x = −2","x = 8 y x = 2","x = −8 y x = 2","x = 3 y x = 5"], correct:0,
    explanation:"2x−6 = 10 → x = 8. O bien 2x−6 = −10 → x = −2. Soluciones: x = 8 y x = −2."
  },
  {
    id:62, category:"math",
    question:"¿Cuántas diagonales tiene un hexágono?",
    options:["6","9","12","8"], correct:1,
    explanation:"Fórmula: n(n−3)/2 = 6(6−3)/2 = 6×3/2 = 9 diagonales."
  },
  {
    id:63, category:"math",
    question:"Si log(x) = 3, ¿cuál es el valor de x? (logaritmo base 10)",
    options:["30","1000","100","300"], correct:1,
    explanation:"log₁₀(x) = 3 significa 10³ = x = 1000."
  },

  // ========== NUEVAS — COMPRENSIÓN LECTORA (12 más) ==========
  {
    id:64, category:"reading",
    question:"Lee el texto:\n\n«La inteligencia artificial no piensa como un ser humano. Procesa datos, identifica patrones y ejecuta algoritmos, pero carece de conciencia, emociones y voluntad propia. Llamarla 'inteligente' es una metáfora útil, no una descripción literal.»\n\n¿Qué quiere decir el autor con 'metáfora útil'?",
    options:[
      "Que la IA es realmente inteligente",
      "Que el término es práctico pero no exacto",
      "Que las metáforas no sirven en ciencia",
      "Que la IA pronto tendrá conciencia"
    ], correct:1,
    explanation:"El autor dice que llamarla 'inteligente' es útil para comunicarse, pero no describe literalmente lo que hace la IA. Es práctico pero inexacto."
  },
  {
    id:65, category:"reading",
    question:"¿Cuál es el SINÓNIMO más preciso de 'pragmático'?",
    options:["Teórico","Práctico","Idealista","Abstracto"], correct:1,
    explanation:"'Pragmático' se refiere a lo práctico y funcional, enfocado en resultados reales. Es opuesto a teórico o idealista."
  },
  {
    id:66, category:"reading",
    question:"Lee:\n\n«Primero se seleccionan los materiales. Después se cortan las piezas según el molde. A continuación se ensamblan y finalmente se realiza el control de calidad.»\n\n¿Qué tipo de estructura textual presenta?",
    options:["Causa-efecto","Comparación","Secuencial/cronológica","Problema-solución"], correct:2,
    explanation:"Las palabras clave 'primero', 'después', 'a continuación', 'finalmente' indican una estructura secuencial (orden de pasos)."
  },
  {
    id:67, category:"reading",
    question:"En la frase «Sus palabras fueron una daga clavada en mi orgullo», la figura retórica utilizada es:",
    options:["Símil","Metáfora","Hipérbole","Personificación"], correct:1,
    explanation:"Es metáfora porque compara directamente las palabras con una daga SIN usar 'como' o 'cual'. Si dijera 'como una daga' sería símil."
  },
  {
    id:68, category:"reading",
    question:"¿Cuál oración usa INCORRECTAMENTE el gerundio?",
    options:[
      "Salió corriendo hacia la puerta.",
      "El documento conteniendo los datos fue enviado.",
      "Estaba estudiando cuando llegaste.",
      "Caminando por el parque, encontré una moneda."
    ], correct:1,
    explanation:"En español, el gerundio NO debe usarse como adjetivo. Lo correcto: 'El documento que contiene los datos'. Las demás oraciones usan el gerundio correctamente."
  },
  {
    id:69, category:"reading",
    question:"Lee:\n\n«La Revolución Industrial transformó radicalmente la producción. Lo que antes se fabricaba artesanalmente en semanas, ahora se producía en horas. Sin embargo, este progreso trajo consigo la explotación laboral y el deterioro ambiental.»\n\nEl conector 'sin embargo' indica que el autor:",
    options:[
      "Va a reforzar la idea anterior",
      "Va a introducir una consecuencia lógica",
      "Va a presentar un contraste o contraargumento",
      "Va a dar un ejemplo"
    ], correct:2,
    explanation:"'Sin embargo' es un conector ADVERSATIVO que introduce una idea contraria u objeción. El autor reconoce el progreso pero señala sus consecuencias negativas."
  },
  {
    id:70, category:"reading",
    question:"¿Cuál es el SINÓNIMO de 'lacónico'?",
    options:["Extenso","Breve","Confuso","Elocuente"], correct:1,
    explanation:"'Lacónico' significa breve, conciso, que usa pocas palabras. Viene de Laconia (Esparta), cuyos habitantes eran famosos por su brevedad al hablar."
  },
  {
    id:71, category:"reading",
    question:"Elige la opción donde TODAS las palabras estén bien acentuadas:",
    options:[
      "cámara, exámen, próximo",
      "cámara, examen, próximo",
      "camara, examen, proximo",
      "cámara, examen, proximo"
    ], correct:1,
    explanation:"'Cámara' (esdrújula, siempre lleva acento). 'Examen' (grave terminada en n, NO lleva). 'Próximo' (esdrújula, siempre lleva). Solo B cumple las tres reglas."
  },
  {
    id:72, category:"reading",
    question:"En «Pedro le dijo a María que ÉL iría al evento», el pronombre 'él' se refiere a:",
    options:["María","Pedro","Otra persona no mencionada","Es ambiguo"], correct:1,
    explanation:"Por contexto gramatical, 'él' se refiere al sujeto de la oración principal: Pedro. Si fuera otra persona, se necesitaría especificar."
  },
  {
    id:73, category:"reading",
    question:"Lee:\n\n«Los videojuegos han sido satanizados por décadas, pero estudios recientes demuestran que ciertos géneros mejoran la coordinación ojo-mano, la toma de decisiones rápida y la capacidad de resolver problemas.»\n\n¿Cuál es el propósito del texto?",
    options:[
      "Condenar el uso de videojuegos",
      "Contradecir la percepción negativa con evidencia favorable",
      "Explicar cómo se fabrican los videojuegos",
      "Narrar la historia de los videojuegos"
    ], correct:1,
    explanation:"El autor usa 'satanizados' (negativo) + 'pero estudios demuestran' (evidencia positiva). El propósito es contradecir la mala percepción con datos a favor."
  },
  {
    id:74, category:"reading",
    question:"¿Qué signo de puntuación falta en la oración?\n\n«Necesito comprar lo siguiente leche pan huevos y queso.»",
    options:["Punto y coma","Comillas","Dos puntos (después de 'siguiente') y comas en la enumeración","Paréntesis"], correct:2,
    explanation:"Antes de una enumeración se usan DOS PUNTOS: 'lo siguiente: leche, pan, huevos y queso.' Las comas separan los elementos de la lista."
  },
  {
    id:75, category:"reading",
    question:"La palabra 'homógrafo' se refiere a palabras que:",
    options:[
      "Suenan igual pero se escriben diferente",
      "Se escriben igual pero tienen distinto significado",
      "Significan lo mismo",
      "Son opuestas en significado"
    ], correct:1,
    explanation:"'Homo' = igual, 'grafo' = escritura. Homógrafos: misma escritura, distinto significado (ej. 'vino' de venir vs. 'vino' la bebida)."
  },

  // ========== NUEVAS — PENSAMIENTO ANALÍTICO (13 más) ==========
  {
    id:76, category:"logic",
    question:"¿Qué número continúa?\n1, 4, 9, 16, 25, ___",
    options:["30","36","49","32"], correct:1,
    explanation:"Son cuadrados perfectos: 1², 2², 3², 4², 5², 6² = 36."
  },
  {
    id:77, category:"logic",
    question:"Si en un código A=1, B=2, C=3... ¿qué valor tiene la palabra 'CASA'?",
    options:["24","27","28","30"], correct:0,
    explanation:"C=3, A=1, S=19, A=1. Total = 3+1+19+1 = 24."
  },
  {
    id:78, category:"logic",
    question:"Si llueve → las calles se mojan.\nLas calles NO están mojadas.\n¿Qué se puede concluir?",
    options:["Está lloviendo","No está lloviendo","Las calles están secas porque hace calor","No se puede concluir nada"], correct:1,
    explanation:"Modus tollens: Si P→Q y ¬Q, entonces ¬P. Si llueve→calles mojadas, y calles NO mojadas, entonces NO llueve."
  },
  {
    id:79, category:"logic",
    question:"¿Qué número continúa?\n2, 3, 5, 7, 11, 13, ___",
    options:["15","17","19","14"], correct:1,
    explanation:"Son números primos consecutivos. Después de 13, el siguiente primo es 17."
  },
  {
    id:80, category:"logic",
    question:"Ana es mayor que Beto. Carlos es menor que Diana. Diana es menor que Beto. ¿Quién es el menor?",
    options:["Ana","Beto","Carlos","Diana"], correct:2,
    explanation:"Ana > Beto > Diana > Carlos. Carlos es el menor de todos."
  },
  {
    id:81, category:"logic",
    question:"Si A ∪ B = {1,2,3,4,5,6} y A = {1,2,3,4}, ¿cuál es el MÍNIMO conjunto B?",
    options:["{5,6}","{1,2,3,4,5,6}","{4,5,6}","{6}"], correct:0,
    explanation:"B debe aportar los elementos que faltan en A para completar la unión. Faltan 5 y 6, así que el mínimo B = {5,6}."
  },
  {
    id:82, category:"logic",
    question:"¿Qué número continúa?\n1, 2, 6, 24, 120, ___",
    options:["240","600","720","480"], correct:2,
    explanation:"Son factoriales: 1!, 2!, 3!, 4!, 5!. El siguiente es 6! = 720."
  },
  {
    id:83, category:"logic",
    question:"Tres amigos (X, Y, Z) se sientan en fila. X no está en un extremo. Z está a la izquierda de Y. ¿Cuál es el orden de izquierda a derecha?",
    options:["X, Z, Y","Z, X, Y","Y, X, Z","Z, Y, X"], correct:1,
    explanation:"X no está en extremo → X está en medio. Z está a la izquierda de Y. Orden: Z, X, Y."
  },
  {
    id:84, category:"logic",
    question:"¿Qué número continúa?\n1, 3, 2, 6, 4, 12, 8, ___",
    options:["16","24","10","20"], correct:1,
    explanation:"Hay dos series alternadas: posiciones impares (1,2,4,8: ×2) y pares (3,6,12,___: ×2). 12×2 = 24."
  },
  {
    id:85, category:"logic",
    question:"Si la operación ★ se define como: a ★ b = 2a + b − 1, ¿cuánto es 3 ★ 5?",
    options:["10","11","12","9"], correct:0,
    explanation:"3 ★ 5 = 2(3) + 5 − 1 = 6 + 5 − 1 = 10."
  },
  {
    id:86, category:"logic",
    question:"Un cubo tiene 6 caras pintadas de rojo. Si se corta en 27 cubitos iguales (3×3×3), ¿cuántos cubitos NO tienen ninguna cara pintada?",
    options:["0","1","8","6"], correct:1,
    explanation:"Solo el cubito del centro del cubo 3×3×3 no tiene ninguna cara expuesta. Total = 1."
  },
  {
    id:87, category:"logic",
    question:"Completa: Libro es a Biblioteca como Cuadro es a ___",
    options:["Pintor","Museo","Arte","Marco"], correct:1,
    explanation:"Relación: OBJETO → LUGAR donde se colecciona/exhibe. Libros → Biblioteca; Cuadros → Museo."
  },
  {
    id:88, category:"logic",
    question:"Si el 40% de los alumnos reprobó y aprobaron 36 alumnos, ¿cuántos alumnos hay en total?",
    options:["90","60","72","50"], correct:1,
    explanation:"Si 40% reprobó, 60% aprobó. 60% del total = 36 → total = 36/0.60 = 60."
  },

  // ========== NUEVAS — CIENCIAS EXPERIMENTALES (12 más) ==========
  {
    id:89, category:"science",
    question:"La fórmula de la energía cinética es Ec = ½mv². Si m = 4 kg y v = 3 m/s, ¿cuál es la Ec?",
    options:["12 J","18 J","36 J","6 J"], correct:1,
    explanation:"Ec = ½(4)(3²) = ½(4)(9) = 18 Joules."
  },
  {
    id:90, category:"science",
    question:"¿A qué grupo de la tabla periódica pertenecen los gases nobles (He, Ne, Ar)?",
    options:["Grupo 1","Grupo 7","Grupo 17","Grupo 18"], correct:3,
    explanation:"Los gases nobles están en el Grupo 18 (antes llamado Grupo VIII-A). Son inertes porque tienen su capa de valencia completa."
  },
  {
    id:91, category:"science",
    question:"La mitosis produce:",
    options:[
      "4 células con la mitad de cromosomas",
      "2 células idénticas a la original",
      "1 célula con el doble de cromosomas",
      "4 células idénticas a la original"
    ], correct:1,
    explanation:"La mitosis produce 2 células hijas IDÉNTICAS (mismo número de cromosomas). La meiosis produce 4 células con la mitad."
  },
  {
    id:92, category:"science",
    question:"Según la ley de Ohm, si V = 12 V y R = 4 Ω, ¿cuál es la corriente I?",
    options:["48 A","3 A","8 A","0.33 A"], correct:1,
    explanation:"Ley de Ohm: V = IR → I = V/R = 12/4 = 3 Amperes."
  },
  {
    id:93, category:"science",
    question:"¿Cuántos átomos de oxígeno hay en 3 moléculas de H₂SO₄?",
    options:["4","7","12","3"], correct:2,
    explanation:"Cada molécula de H₂SO₄ tiene 4 átomos de O. En 3 moléculas: 3 × 4 = 12 átomos de oxígeno."
  },
  {
    id:94, category:"science",
    question:"¿En qué órgano del aparato digestivo se absorbe la mayor parte de los nutrientes?",
    options:["Estómago","Intestino delgado","Intestino grueso","Esófago"], correct:1,
    explanation:"El intestino delgado es donde ocurre la mayor absorción de nutrientes gracias a las vellosidades intestinales que aumentan la superficie de contacto."
  },
  {
    id:95, category:"science",
    question:"La fórmula del trabajo mecánico es W = F × d. Si F = 20 N y d = 5 m, el trabajo es:",
    options:["4 J","25 J","100 J","15 J"], correct:2,
    explanation:"W = F × d = 20 N × 5 m = 100 Joules."
  },
  {
    id:96, category:"science",
    question:"¿Cuál es la diferencia principal entre un compuesto y una mezcla?",
    options:[
      "El compuesto es siempre líquido",
      "En el compuesto los elementos se unen químicamente; en la mezcla no",
      "La mezcla siempre es homogénea",
      "No hay diferencia real"
    ], correct:1,
    explanation:"En un compuesto, los elementos se unen por enlaces químicos en proporciones fijas (ej. H₂O). En una mezcla, los componentes se combinan físicamente sin reacción."
  },
  {
    id:97, category:"science",
    question:"Si ambos padres son portadores de un gen recesivo (Aa × Aa), ¿qué probabilidad hay de un hijo homocigoto recesivo (aa)?",
    options:["50%","75%","25%","100%"], correct:2,
    explanation:"Cuadro de Punnett: AA, Aa, Aa, aa. Probabilidad de aa = 1/4 = 25%. Es la primera ley de Mendel."
  },
  {
    id:98, category:"science",
    question:"La presión se define como:",
    options:["Fuerza × Área","Fuerza ÷ Área","Masa × Velocidad","Masa × Aceleración"], correct:1,
    explanation:"P = F/A (Fuerza entre Área). Se mide en Pascales (Pa). A mayor área, menor presión con la misma fuerza."
  },
  {
    id:99, category:"science",
    question:"¿Qué cambio de estado ocurre en la sublimación?",
    options:["Líquido a gas","Sólido a gas directamente","Gas a líquido","Sólido a líquido"], correct:1,
    explanation:"La sublimación es el paso directo de sólido a gas sin pasar por líquido. Ejemplo: el hielo seco (CO₂ sólido) se sublima."
  },
  {
    id:100, category:"science",
    question:"¿Qué tipo de vaso sanguíneo lleva la sangre DESDE el corazón hacia los órganos?",
    options:["Venas","Arterias","Capilares","Vénulas"], correct:1,
    explanation:"Las ARTERIAS llevan sangre del corazón al cuerpo. Las VENAS la regresan al corazón. Los capilares son donde ocurre el intercambio de gases y nutrientes."
  }
];

// Metadatos de categorías
const CATEGORY_INFO = {
  math: { name: "Pensamiento Matemático", icon: "🔢", count: 26 },
  reading: { name: "Comprensión Lectora", icon: "📖", count: 24 },
  logic: { name: "Pensamiento Analítico", icon: "🧩", count: 26 },
  science: { name: "Ciencias Experimentales", icon: "🔬", count: 24 }
};
