/* ============================================================
   Intraducible — datos, estado y lógica de la app
   Todo vive en memoria: no hay fetch, no hay storage, no hay login.
   ============================================================ */

   const LANGUAGES = {
    en: {
      name: "inglés",
      words: [
        { t: "threshold", s: "umbral" },
        { t: "wanderlust", s: "ansias de viajar" },
        { t: "blueprint", s: "plano / proyecto" },
        { t: "overwhelmed", s: "abrumado" },
        { t: "stubborn", s: "terco" },
        { t: "bittersweet", s: "agridulce" },
      ],
      media: [
        { tag: "Podcast", title: "The English We Speak (BBC)", desc: "Episodios cortos centrados en modismos reales, ideal para el viaje en colectivo." },
        { tag: "Serie", title: "Friends", desc: "Inglés cotidiano, oraciones cortas y humor fácil de seguir con subtítulos." },
        { tag: "Película", title: "La La Land", desc: "Diálogos claros y pausados, perfecta para practicar oído sin perder el hilo." },
      ],
    },
    he: {
      name: "hebreo",
      words: [
        { t: "שלום", s: "hola / paz" },
        { t: "תודה", s: "gracias" },
        { t: "אהבה", s: "amor" },
        { t: "חלום", s: "sueño" },
        { t: "בית", s: "casa" },
        { t: "חבר", s: "amigo" },
      ],
      media: [
        { tag: "Podcast", title: "StreetWise Hebrew", desc: "Hebreo de la calle, explicado despacio y pensado para principiantes." },
        { tag: "Serie", title: "Shtisel", desc: "Ritmo pausado y dicción clara, muy usada por estudiantes de hebreo." },
        { tag: "Película", title: "Foxtrot", desc: "Hebreo contemporáneo con una fotografía que vale la pena igual sin entender todo." },
      ],
    },
    fr: {
      name: "francés",
      words: [
        { t: "dépaysement", s: "sensación de estar fuera de lugar" },
        { t: "flâner", s: "pasear sin rumbo" },
        { t: "retrouvailles", s: "reencuentro" },
        { t: "chez-soi", s: "hogar propio" },
        { t: "coup de foudre", s: "amor a primera vista" },
        { t: "ainsi", s: "así, de este modo" },
      ],
      media: [
        { tag: "Podcast", title: "Français Authentique", desc: "Francés hablado despacio, pensado específicamente para no nativos." },
        { tag: "Serie", title: "Lupin", desc: "Thriller ligero con francés bastante claro y muchos cognados con el español." },
        { tag: "Película", title: "Amélie", desc: "Narración muy enunciada, buena para acostumbrar el oído al ritmo del francés." },
      ],
    },
    it: {
      name: "italiano",
      words: [
        { t: "magari", s: "ojalá" },
        { t: "boh", s: "qué sé yo" },
        { t: "sprezzatura", s: "elegancia sin esfuerzo aparente" },
        { t: "abbondanza", s: "abundancia" },
        { t: "dolcezza", s: "dulzura" },
        { t: "passeggiata", s: "paseo vespertino" },
      ],
      media: [
        { tag: "Podcast", title: "Coffee Break Italian", desc: "Estructura de curso, ideal si te gusta aprender con progresión clara." },
        { tag: "Serie", title: "Il Commissario Montalbano", desc: "Italiano bien vocalizado, con un dialecto siciliano suave de fondo." },
        { tag: "Película", title: "La vita è bella", desc: "Registro emotivo y accesible, muy usada en cursos de italiano." },
      ],
    },
    pt: {
      name: "portugués",
      words: [
        { t: "saudade", s: "nostalgia profunda por algo o alguien" },
        { t: "cafuné", s: "caricia en el pelo" },
        { t: "desenrascanço", s: "ingenio para resolver cualquier lío" },
        { t: "friorento", s: "friolento" },
        { t: "xodó", s: "cariño, persona querida" },
        { t: "gambiarra", s: "solución improvisada" },
      ],
      media: [
        { tag: "Podcast", title: "Portuguese Lab Podcast", desc: "Portugués de Brasil, con episodios pensados para hispanohablantes." },
        { tag: "Serie", title: "3%", desc: "Ciencia ficción brasileña con diálogos claros y buen ritmo para aprender." },
        { tag: "Película", title: "Cidade de Deus", desc: "Portugués carioca intenso: exigente, pero muy representativo del habla real." },
      ],
    },
    de: {
      name: "alemán",
      words: [
        { t: "Feierabend", s: "el momento en que termina la jornada laboral" },
        { t: "Fernweh", s: "nostalgia por lugares lejanos que nunca visitaste" },
        { t: "Doch", s: "sí, pero contradiciendo algo negativo" },
        { t: "Gemütlichkeit", s: "sensación de calidez y confort" },
        { t: "Ohrwurm", s: "canción que se te pega en la cabeza" },
        { t: "Waldeinsamkeit", s: "soledad reconfortante en el bosque" },
      ],
      media: [
        { tag: "Podcast", title: "Slow German", desc: "Alemán hablado lento y con vocalización clara, pensado para principiantes." },
        { tag: "Serie", title: "Dark", desc: "Alemán denso pero muy bien articulado, ideal para oído más avanzado." },
        { tag: "Película", title: "Das Leben der Anderen", desc: "Diálogos formales y pausados, útiles para practicar estructura gramatical." },
      ],
    },
    ja: {
      name: "japonés",
      words: [
        { t: "木漏れ日", s: "la luz del sol filtrándose entre las hojas" },
        { t: "もったいない", s: "qué desperdicio" },
        { t: "頑張って", s: "¡esfuérzate! / dale para adelante" },
        { t: "懐かしい", s: "nostálgico" },
        { t: "いただきます", s: "se dice antes de comer, agradeciendo la comida" },
        { t: "先輩", s: "compañero o compañera con más experiencia" },
      ],
      media: [
        { tag: "Podcast", title: "Nihongo con Teppei", desc: "Pensado para hispanohablantes, con japonés cotidiano y ritmo pausado." },
        { tag: "Serie", title: "Terrace House", desc: "Japonés real de conversación diaria, sin el vocabulario forzado de un curso." },
        { tag: "Película", title: "El viaje de Chihiro", desc: "Buena entrada al oído japonés, con diálogos claros pese a lo fantástico de la trama." },
      ],
    },
  };
  
  const LEVELS = [
    { min: 0, name: "Curioso" },
    { min: 50, name: "Aprendiz" },
    { min: 150, name: "Explorador" },
    { min: 300, name: "Políglota" },
  ];
  
  const BADGES = [
    { id: "first-match", icon: "◧◨", name: "Primer contacto", test: (s) => s.memoryCompletions >= 1 },
    { id: "streak-3", icon: "▲▲▲", name: "Cazador de rachas", test: (s) => s.bestStreak >= 3 },
    { id: "streak-5", icon: "★★★", name: "Políglota en potencia", test: (s) => s.bestStreak >= 5 },
    { id: "both-games", icon: "◐◑", name: "Coleccionista", test: (s) => s.memoryCompletions >= 1 && s.quizAnswers >= 1 },
    { id: "max-level", icon: "♛", name: "Nivel máximo", test: (s) => s.xp >= 300 },
  ];
  
  /* ---------------- Estado global de la sesión ---------------- */
  const state = {
    lang: "en",
    game: "memory",
    xp: 0,
    streak: 0,
    bestStreak: 0,
    memoryCompletions: 0,
    quizAnswers: 0,
  };
  
  /* ---------------- Helpers ---------------- */
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  function currentLevel() {
    let level = LEVELS[0];
    for (const l of LEVELS) if (state.xp >= l.min) level = l;
    return level;
  }
  
  function nextLevelThreshold() {
    const idx = LEVELS.findIndex((l) => l.name === currentLevel().name);
    return LEVELS[idx + 1] || null;
  }
  
  function addXP(amount) {
    state.xp += amount;
    renderBackpack();
  }
  
  /* ---------------- Render: idiomas ---------------- */
  function renderLangPicker() {
    document.querySelectorAll(".lang-chip").forEach((chip) => {
      const active = chip.dataset.lang === state.lang;
      chip.setAttribute("aria-pressed", String(active));
    });
    document.getElementById("media-lang-name").textContent = LANGUAGES[state.lang].name;
  }
  
  /* ---------------- Render: mochila / recompensas ---------------- */
  function renderBackpack() {
    const level = currentLevel();
    const next = nextLevelThreshold();
  
    document.getElementById("stat-level").textContent = level.name;
    document.getElementById("stat-xp").textContent = state.xp;
    document.getElementById("stat-streak").textContent = state.streak;
  
    const bar = document.getElementById("xp-bar");
    const fill = document.getElementById("xp-bar-fill");
    const caption = document.getElementById("xp-caption");
  
    if (next) {
      const span = next.min - level.min;
      const progressed = state.xp - level.min;
      const pct = Math.max(0, Math.min(100, (progressed / span) * 100));
      fill.style.width = pct + "%";
      bar.setAttribute("aria-valuenow", String(Math.round(pct)));
      caption.textContent = `Faltan ${next.min - state.xp} pts para pasar a ${next.name}.`;
    } else {
      fill.style.width = "100%";
      bar.setAttribute("aria-valuenow", "100");
      caption.textContent = "Llegaste al tope de esta sesión: Políglota.";
    }
  
    const grid = document.getElementById("badges-grid");
    grid.innerHTML = "";
    BADGES.forEach((b) => {
      const unlocked = b.test(state);
      const el = document.createElement("div");
      el.className = "badge" + (unlocked ? " is-unlocked" : "");
      el.innerHTML = `
        <span class="badge__icon">${b.icon}</span>
        <span class="badge__name">${b.name}</span>
      `;
      grid.appendChild(el);
    });
  }
  
  /* ---------------- Render: media ---------------- */
  function renderMedia() {
    const grid = document.getElementById("media-grid");
    grid.innerHTML = "";
    LANGUAGES[state.lang].media.forEach((m) => {
      const card = document.createElement("article");
      card.className = "media-card";
      card.innerHTML = `
        <span class="media-card__tag">${m.tag}</span>
        <p class="media-card__title">${m.title}</p>
        <p class="media-card__desc">${m.desc}</p>
      `;
      grid.appendChild(card);
    });
  }
  
  /* ================================================================
     JUEGO 1 — Memoria Relámpago
     ================================================================ */
  let memoryState = null;
  
  function startMemoryGame() {
    const words = LANGUAGES[state.lang].words;
    const cards = [];
    words.forEach((w, i) => {
      cards.push({ pairId: i, label: w.t, isWord: true });
      cards.push({ pairId: i, label: w.s, isWord: false });
    });
  
    memoryState = {
      cards: shuffle(cards).map((c, idx) => ({ ...c, uid: idx, flipped: false, matched: false })),
      flippedUids: [],
      moves: 0,
      matches: 0,
      locked: false,
    };
  
    renderMemoryGame();
  }
  
  function renderMemoryGame() {
    const stage = document.getElementById("game-stage");
    const total = memoryState.cards.length / 2;
  
    stage.innerHTML = `
      <p class="game-feedback" id="memory-feedback">Elegí dos fichas: una palabra y su significado.</p>
      <div class="memory-meta">
        <span>movimientos: ${memoryState.moves}</span>
        <span>pares: ${memoryState.matches} / ${total}</span>
      </div>
      <div class="memory-grid" id="memory-grid"></div>
    `;
  
    const grid = document.getElementById("memory-grid");
    memoryState.cards.forEach((card) => {
      const el = document.createElement("div");
      el.className =
        "memory-card" + (card.flipped ? " is-flipped" : "") + (card.matched ? " is-matched" : "");
      el.innerHTML = `
        <div class="memory-card__inner">
          <div class="memory-card__face memory-card__face--back">?</div>
          <div class="memory-card__face memory-card__face--front">${card.label}</div>
        </div>
      `;
      if (!card.matched) {
        el.addEventListener("click", () => flipMemoryCard(card.uid));
      }
      grid.appendChild(el);
    });
  
    if (memoryState.matches === total) {
      finishMemoryGame();
    }
  }
  
  function flipMemoryCard(uid) {
    if (memoryState.locked) return;
    const card = memoryState.cards.find((c) => c.uid === uid);
    if (!card || card.flipped || card.matched) return;
  
    card.flipped = true;
    memoryState.flippedUids.push(uid);
    renderMemoryGame();
  
    if (memoryState.flippedUids.length === 2) {
      memoryState.locked = true;
      memoryState.moves += 1;
      const [id1, id2] = memoryState.flippedUids;
      const c1 = memoryState.cards.find((c) => c.uid === id1);
      const c2 = memoryState.cards.find((c) => c.uid === id2);
  
      const isMatch = c1.pairId === c2.pairId && c1.isWord !== c2.isWord;
  
      setTimeout(() => {
        if (isMatch) {
          c1.matched = true;
          c2.matched = true;
          memoryState.matches += 1;
        } else {
          c1.flipped = false;
          c2.flipped = false;
        }
        memoryState.flippedUids = [];
        memoryState.locked = false;
        renderMemoryGame();
      }, 650);
    }
  }
  
  function finishMemoryGame() {
    state.memoryCompletions += 1;
    const total = memoryState.cards.length / 2;
    const bonus = memoryState.moves <= total * 2 ? 20 : 0;
    addXP(40 + bonus);
  
    const stage = document.getElementById("game-stage");
    const p = document.createElement("p");
    p.className = "game-feedback";
    p.textContent = bonus
      ? `¡Completaste el tablero en ${memoryState.moves} movimientos! +60 XP por hacerlo prolijo.`
      : `¡Completaste el tablero en ${memoryState.moves} movimientos! +40 XP.`;
    stage.appendChild(p);
  
    const btn = document.createElement("button");
    btn.className = "stage-action";
    btn.textContent = "Jugar de nuevo";
    btn.addEventListener("click", startMemoryGame);
    stage.appendChild(btn);
  }
  
  /* ================================================================
     JUEGO 2 — Duelo de Traducción
     ================================================================ */
  let quizState = null;
  const QUIZ_SECONDS = 10;
  
  function startQuizGame() {
    quizState = {
      order: shuffle(LANGUAGES[state.lang].words.map((_, i) => i)),
      index: 0,
      timer: null,
      timeLeft: QUIZ_SECONDS,
      answered: false,
    };
    renderQuizQuestion();
  }
  
  function renderQuizQuestion() {
    clearInterval(quizState.timer);
    const words = LANGUAGES[state.lang].words;
  
    if (quizState.index >= quizState.order.length) {
      finishQuizRound();
      return;
    }
  
    const currentIdx = quizState.order[quizState.index];
    const correct = words[currentIdx];
  
    const distractors = shuffle(
      words.filter((_, i) => i !== currentIdx)
    ).slice(0, 3).map((w) => w.s);
  
    const options = shuffle([correct.s, ...distractors]);
    quizState.answered = false;
    quizState.timeLeft = QUIZ_SECONDS;
  
    const stage = document.getElementById("game-stage");
    stage.innerHTML = `
      <p class="game-feedback" id="quiz-feedback">Racha actual: ${state.streak}</p>
      <p class="quiz-prompt">¿Qué significa esta palabra en ${LANGUAGES[state.lang].name}?</p>
      <p class="quiz-word">${correct.t}</p>
      <div class="quiz-options" id="quiz-options"></div>
      <div class="quiz-timer"><div class="quiz-timer__fill" id="quiz-timer-fill"></div></div>
    `;
  
    const optionsEl = document.getElementById("quiz-options");
    options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.textContent = opt;
      btn.addEventListener("click", () => answerQuiz(opt, correct.s, btn));
      optionsEl.appendChild(btn);
    });
  
    const fill = document.getElementById("quiz-timer-fill");
    quizState.timer = setInterval(() => {
      quizState.timeLeft -= 0.1;
      const pct = Math.max(0, (quizState.timeLeft / QUIZ_SECONDS) * 100);
      fill.style.width = pct + "%";
      if (quizState.timeLeft <= 0) {
        answerQuiz(null, correct.s, null);
      }
    }, 100);
  }
  
  function answerQuiz(chosen, correctAnswer, btnEl) {
    if (quizState.answered) return;
    quizState.answered = true;
    clearInterval(quizState.timer);
    state.quizAnswers += 1;
  
    const isCorrect = chosen === correctAnswer;
    document.querySelectorAll(".quiz-option").forEach((b) => {
      b.disabled = true;
      if (b.textContent === correctAnswer) b.classList.add("is-correct");
      else if (b === btnEl) b.classList.add("is-wrong");
    });
  
    const feedback = document.getElementById("quiz-feedback");
  
    if (isCorrect) {
      state.streak += 1;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
      const bonus = Math.min(state.streak * 2, 20);
      addXP(15 + bonus);
      feedback.textContent = `¡Correcto! +${15 + bonus} XP · racha: ${state.streak}`;
    } else {
      state.streak = 0;
      renderBackpack();
      feedback.textContent = chosen
        ? `Casi. Era "${correctAnswer}".`
        : `Se acabó el tiempo. Era "${correctAnswer}".`;
    }
  
    setTimeout(() => {
      quizState.index += 1;
      renderQuizQuestion();
    }, 1100);
  }
  
  function finishQuizRound() {
    const stage = document.getElementById("game-stage");
    stage.innerHTML = `
      <p class="game-feedback">Ronda terminada. Tu mejor racha en esta ronda: ${state.streak}.</p>
    `;
    const btn = document.createElement("button");
    btn.className = "stage-action";
    btn.textContent = "Jugar otra ronda";
    btn.addEventListener("click", startQuizGame);
    stage.appendChild(btn);
  }
  
  /* ================================================================
     Orquestación general
     ================================================================ */
  function launchCurrentGame() {
    clearInterval(quizState?.timer);
    if (state.game === "memory") {
      startMemoryGame();
    } else {
      startQuizGame();
    }
  }
  
  function setLang(lang) {
    state.lang = lang;
    renderLangPicker();
    renderMedia();
    launchCurrentGame();
  }
  
  function setGame(game) {
    state.game = game;
    document.querySelectorAll(".game-tab").forEach((tab) => {
      tab.setAttribute("aria-selected", String(tab.dataset.game === game));
    });
    launchCurrentGame();
  }
  
  /* ---------------- Listeners iniciales ---------------- */
  document.querySelectorAll(".lang-chip").forEach((chip) => {
    chip.addEventListener("click", () => setLang(chip.dataset.lang));
  });
  
  document.querySelectorAll(".game-tab").forEach((tab) => {
    tab.addEventListener("click", () => setGame(tab.dataset.game));
  });
  
  /* ---------------- Arranque ---------------- */
  renderLangPicker();
  renderMedia();
  renderBackpack();
  launchCurrentGame();