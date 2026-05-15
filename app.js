// ============================================
// APP LOGIC — SIMULADOR EXAMEN UTS
// ============================================

let currentQuestion = 0;
let userAnswers = new Array(QUESTIONS.length).fill(null);

let studentName = "Estudiante";
let examFinished = false;

// ==================
// INICIO
// ==================
function startExam() {
  const nameInput = document.getElementById('studentName');
  studentName = nameInput.value.trim() || "Estudiante";

  document.getElementById('startScreen').classList.remove('active');
  document.getElementById('examScreen').classList.add('active');

  buildQuestionDots();
  renderQuestion();

}



// ==================
// RENDERIZADO
// ==================
function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  const catInfo = CATEGORY_INFO[q.category];

  // Meta
  const badge = document.getElementById('categoryBadge');
  badge.className = `category-badge ${q.category}`;
  badge.textContent = `${catInfo.icon} ${catInfo.name}`;

  document.getElementById('questionNumber').textContent = `Pregunta ${currentQuestion + 1} de ${QUESTIONS.length}`;
  document.getElementById('progressText').textContent = `${currentQuestion + 1} / ${QUESTIONS.length}`;
  document.getElementById('progressBar').style.width = `${((currentQuestion + 1) / QUESTIONS.length) * 100}%`;

  // Texto de la pregunta
  document.getElementById('questionText').textContent = q.question;

  // Opciones
  const container = document.getElementById('optionsContainer');
  const letters = ['A', 'B', 'C', 'D'];
  container.innerHTML = '';

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (userAnswers[currentQuestion] === i) btn.classList.add('selected');

    btn.innerHTML = `
      <span class="option-letter">${letters[i]}</span>
      <span class="option-content">${opt}</span>
    `;

    btn.addEventListener('click', () => selectOption(i));
    container.appendChild(btn);
  });

  // Nav buttons
  document.getElementById('prevBtn').disabled = currentQuestion === 0;
  document.getElementById('nextBtn').textContent = currentQuestion === QUESTIONS.length - 1 ? 'Finalizar →' : 'Siguiente →';

  // Submit button visibility
  const answeredCount = userAnswers.filter(a => a !== null).length;
  const submitBtn = document.getElementById('submitBtn');
  if (answeredCount >= Math.floor(QUESTIONS.length * 0.5)) {
    submitBtn.classList.remove('hidden');
  }

  // Dots
  updateDots();

  // Animation
  const card = document.querySelector('.question-card');
  card.style.animation = 'none';
  card.offsetHeight; // trigger reflow
  card.style.animation = 'fadeInUp 0.35s ease';
}

function selectOption(index) {
  userAnswers[currentQuestion] = index;

  // Visual update
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach((btn, i) => {
    btn.classList.toggle('selected', i === index);
  });

  updateDots();

  // Auto-advance after short delay
  setTimeout(() => {
    if (currentQuestion < QUESTIONS.length - 1) {
      nextQuestion();
    }
  }, 350);
}

// ==================
// NAVEGACIÓN
// ==================
function nextQuestion() {
  if (currentQuestion === QUESTIONS.length - 1) {
    submitExam();
    return;
  }
  currentQuestion++;
  renderQuestion();
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

function goToQuestion(index) {
  currentQuestion = index;
  renderQuestion();
}

// ==================
// DOTS
// ==================
function buildQuestionDots() {
  const container = document.getElementById('questionDots');
  container.innerHTML = '';
  QUESTIONS.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'q-dot';
    dot.title = `Pregunta ${i + 1}`;
    dot.addEventListener('click', () => goToQuestion(i));
    container.appendChild(dot);
  });
}

function updateDots() {
  const dots = document.querySelectorAll('.q-dot');
  dots.forEach((dot, i) => {
    dot.classList.remove('answered', 'current');
    if (userAnswers[i] !== null) dot.classList.add('answered');
    if (i === currentQuestion) dot.classList.add('current');
  });
}

// ==================
// FINALIZAR EXAMEN
// ==================
function submitExam() {
  const unanswered = userAnswers.filter(a => a === null).length;
  const modal = document.getElementById('confirmModal');
  const modalText = document.getElementById('modalText');

  if (unanswered > 0) {
    modalText.innerHTML = `Tienes <strong>${unanswered} pregunta${unanswered > 1 ? 's' : ''} sin responder</strong>.<br>¿Deseas finalizar de todos modos?`;
  } else {
    modalText.innerHTML = `Has respondido las <strong>${QUESTIONS.length} preguntas</strong>.<br>¿Estás seguro de que quieres finalizar?`;
  }

  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('confirmModal').classList.add('hidden');
}

function confirmSubmit() {
  closeModal();
  finishExam();
}

function finishExam() {
  if (examFinished) return;
  examFinished = true;


  document.getElementById('examScreen').classList.remove('active');
  document.getElementById('resultsScreen').classList.add('active');

  calculateResults();
}

// ==================
// RESULTADOS
// ==================
function calculateResults() {
  let correct = 0, incorrect = 0, unanswered = 0;
  const categoryResults = {};

  Object.keys(CATEGORY_INFO).forEach(cat => {
    categoryResults[cat] = { correct: 0, total: 0 };
  });

  QUESTIONS.forEach((q, i) => {
    categoryResults[q.category].total++;
    if (userAnswers[i] === null) {
      unanswered++;
    } else if (userAnswers[i] === q.correct) {
      correct++;
      categoryResults[q.category].correct++;
    } else {
      incorrect++;
    }
  });

  const percent = Math.round((correct / QUESTIONS.length) * 100);

  // Score circle
  document.getElementById('scorePercent').textContent = `${percent}%`;

  // Add SVG gradient
  const svg = document.querySelector('.score-circle svg');
  if (!svg.querySelector('defs')) {
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    grad.id = 'scoreGradient';
    grad.innerHTML = '<stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#8b5cf6"/>';
    defs.appendChild(grad);
    svg.insertBefore(defs, svg.firstChild);
  }

  const circle = document.getElementById('scoreCircle');
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (percent / 100) * circumference;
  setTimeout(() => { circle.style.strokeDashoffset = offset; }, 100);

  // Title
  let title, subtitle;
  if (percent >= 90) { title = "🏆 ¡Excelente!"; subtitle = `${studentName}, estás más que listo/a para el examen real.`; }
  else if (percent >= 70) { title = "💪 ¡Buen trabajo!"; subtitle = `${studentName}, vas por buen camino. Refuerza las áreas débiles.`; }
  else if (percent >= 50) { title = "📚 Sigue practicando"; subtitle = `${studentName}, necesitas repasar algunos temas clave.`; }
  else { title = "⚡ A estudiar se ha dicho"; subtitle = `${studentName}, no te desanimes. Identifica tus áreas de oportunidad.`; }

  document.getElementById('resultsTitle').textContent = title;
  document.getElementById('resultsSubtitle').textContent = subtitle;
  document.getElementById('correctCount').textContent = correct;
  document.getElementById('incorrectCount').textContent = incorrect;
  document.getElementById('unansweredCount').textContent = unanswered;

  // Category breakdown
  const breakdownContainer = document.getElementById('categoryBreakdown');
  breakdownContainer.innerHTML = '';
  Object.keys(categoryResults).forEach(cat => {
    const cr = categoryResults[cat];
    const info = CATEGORY_INFO[cat];
    const catPercent = cr.total > 0 ? Math.round((cr.correct / cr.total) * 100) : 0;

    const card = document.createElement('div');
    card.className = `breakdown-card ${cat}`;
    card.innerHTML = `
      <div class="bc-header">
        <span class="bc-name">${info.icon} ${info.name}</span>
        <span class="bc-score">${cr.correct}/${cr.total}</span>
      </div>
      <div class="bc-bar">
        <div class="bc-bar-fill" style="width: 0%"></div>
      </div>
    `;
    breakdownContainer.appendChild(card);

    setTimeout(() => {
      card.querySelector('.bc-bar-fill').style.width = `${catPercent}%`;
    }, 300);
  });

  // Review list
  buildReviewList('all');
}

function buildReviewList(filter) {
  const container = document.getElementById('reviewList');
  container.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  QUESTIONS.forEach((q, i) => {
    const userAnswer = userAnswers[i];
    let status, statusClass, itemClass;

    if (userAnswer === null) {
      status = "Sin responder"; statusClass = "unanswered"; itemClass = "unanswered-item";
    } else if (userAnswer === q.correct) {
      status = "✅ Correcta"; statusClass = "correct"; itemClass = "correct-item";
    } else {
      status = "❌ Incorrecta"; statusClass = "incorrect"; itemClass = "incorrect-item";
    }

    // Apply filter
    if (filter === 'correct' && statusClass !== 'correct') return;
    if (filter === 'incorrect' && statusClass !== 'incorrect' && statusClass !== 'unanswered') return;

    const catInfo = CATEGORY_INFO[q.category];
    const item = document.createElement('div');
    item.className = `review-item ${itemClass}`;

    let answersHTML = '';
    if (userAnswer !== null && userAnswer !== q.correct) {
      answersHTML = `
        <span class="your-answer">Tu respuesta: ${letters[userAnswer]}) ${q.options[userAnswer]}</span>
        <span class="correct-answer">Correcta: ${letters[q.correct]}) ${q.options[q.correct]}</span>
      `;
    } else if (userAnswer === null) {
      answersHTML = `<span class="correct-answer">Correcta: ${letters[q.correct]}) ${q.options[q.correct]}</span>`;
    } else {
      answersHTML = `<span class="correct-answer">Tu respuesta: ${letters[q.correct]}) ${q.options[q.correct]}</span>`;
    }

    const showExplainBtn = statusClass !== 'correct';
    const explainId = `explain-${i}`;

    item.innerHTML = `
      <div class="ri-header">
        <span class="ri-question">${catInfo.icon} P${i + 1}. ${truncateText(q.question, 100)}</span>
        <span class="ri-status ${statusClass}">${status}</span>
      </div>
      <div class="ri-answers">${answersHTML}</div>
      ${showExplainBtn ? `<button class="explain-btn" onclick="toggleExplanation('${explainId}', this)">💡 Ver explicación</button>` : ''}
      <div id="${explainId}" class="explanation">
        <strong>Explicación:</strong><br>${q.explanation.replace(/\n/g, '<br>')}
      </div>
    `;

    container.appendChild(item);
  });

  if (container.children.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:20px;">No hay preguntas en esta categoría.</p>';
  }
}

function truncateText(text, maxLen) {
  const firstLine = text.split('\n')[0];
  if (firstLine.length <= maxLen) return firstLine;
  return firstLine.substring(0, maxLen) + '...';
}

function toggleExplanation(id, btn) {
  const el = document.getElementById(id);
  const isVisible = el.classList.contains('show');
  el.classList.toggle('show');
  btn.textContent = isVisible ? '💡 Ver explicación' : '🔽 Ocultar explicación';
}

function filterReview(type) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  buildReviewList(type);
}

function restartExam() {
  currentQuestion = 0;
  userAnswers = new Array(QUESTIONS.length).fill(null);

  examFinished = false;

  document.getElementById('resultsScreen').classList.remove('active');
  document.getElementById('startScreen').classList.add('active');
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (examFinished) return;
  const examScreen = document.getElementById('examScreen');
  if (!examScreen.classList.contains('active')) return;

  switch(e.key) {
    case 'ArrowRight': nextQuestion(); break;
    case 'ArrowLeft': prevQuestion(); break;
    case '1': case 'a': case 'A': selectOption(0); break;
    case '2': case 'b': case 'B': selectOption(1); break;
    case '3': case 'c': case 'C': selectOption(2); break;
    case '4': case 'd': case 'D': selectOption(3); break;
  }
});
