function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
  }

  // Botón volver arriba
  const backToTop = document.getElementById("backToTop");
  window.onscroll = function() {
    if (document.documentElement.scrollTop > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  };
  function scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  // Juego
  const questions = [
    {
      question: "¿Qué caracteriza a la comunicación asertiva?",
      options: ["Imponer mi opinión", "Evitar dar mi punto de vista", "Expresarme con respeto y claridad"],
      answer: 2
    },
    {
      question: "Ejemplo de comunicación no verbal asertiva:",
      options: ["Cruzar los brazos y evitar mirar", "Mantener contacto visual y postura abierta", "Hablar en tono elevado"],
      answer: 1
    },
    {
      question: "En el ámbito laboral, la comunicación asertiva implica:",
      options: ["Ignorar opiniones distintas", "Dar feedback respetuoso", "Imponer mis ideas"],
      answer: 1
    },
    {
      question: "En la vida cotidiana, ser asertivo significa:",
      options: ["Decir lo que pienso gritando", "Callar para evitar conflictos", "Expresar mis sentimientos sin agredir"],
      answer: 2
    },
    {
      question: "Un ejemplo de comunicación verbal asertiva es:",
      options: ["Decir 'No estoy de acuerdo, pero respeto tu opinión'", "Quedarse en silencio", "Interrumpir al hablar"],
      answer: 0
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  const questionEl = document.querySelector(".question");
  const optionsEl = document.querySelector(".options");
  const resultEl = document.getElementById("result");
  const restartBtn = document.getElementById("restartBtn");

  function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(index, btn);
      optionsEl.appendChild(btn);
    });
  }

  function checkAnswer(selected, btn) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
      btn.classList.add("correct");
      score++;
    } else {
      btn.classList.add("incorrect");
    }
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        endGame();
      }
    }, 800);
  }

  function endGame() {
    questionEl.textContent = "Juego terminado.";
    optionsEl.innerHTML = "";
    if (score === questions.length) {
      resultEl.textContent = "🎉 ¡Felicidades! Respondiste correctamente todas las preguntas.";
    } else {
      resultEl.textContent = `Tu puntaje fue ${score} de ${questions.length}. ¡Sigue practicando!`;
    }
    restartBtn.style.display = "inline-block";
  }

  function restartGame() {
    currentQuestion = 0;
    score = 0;
    resultEl.textContent = "";
    restartBtn.style.display = "none";
    loadQuestion();
  }

  loadQuestion();

  // Emojis
  const emojis = document.querySelectorAll('.emoji');
  const emojiResult = document.getElementById('emoji-result');
  emojis.forEach(emoji => {
    emoji.addEventListener('click', () => {
      emojiResult.textContent = emoji.dataset.msg;
    });
  });

  // Checklist
  function evaluarChecklist() {
    const checks = document.querySelectorAll('.checklist input[type="checkbox"]');
    let count = 0;
    checks.forEach(c => { if (c.checked) count++; });
    const resultado = document.getElementById('resultado-checklist');
    if (count === checks.length) {
      resultado.textContent = "¡Excelente! Tu estilo de comunicación es muy asertivo 🎉";
      resultado.style.color = "#38b000";
    } else if (count >= 3) {
      resultado.textContent = "Vas por buen camino, sigue practicando tu asertividad 💪";
      resultado.style.color = "#f9a825";
    } else {
      resultado.textContent = "Necesitas mejorar tu comunicación asertiva. ¡Ánimo, puedes lograrlo! 🌱";
      resultado.style.color = "#d00000";
    }
  }
