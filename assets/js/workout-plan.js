/* ============================================================
   Icons
   ============================================================ */
   const SVG = {
    liftIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h12M4 9v6M20 9v6M2 11v2M22 11v2"/></svg>',
    walkIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18h18M4 14l5-6 4 4 5-7 3 4"/></svg>',
    ellipticalIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16"/></svg>',
    stairIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h5v-5H3v5zM10 15h5v-5h-5v5zM17 10h5V5h-5v5z"/></svg>',
    restIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    chevR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
    chevL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
  };
  
  /* ============================================================
     Helpers
     ============================================================ */
  const $ = (selector) => document.querySelector(selector);
  
  const exerciseImage = (file, alt) =>
    `<img class="exercise-img" src="assets/imgs/${file}" alt="${alt}">`;
  
  const dayTypeClass = (day) => {
    if (day.type === 'cardio') return 'is-cardio';
    if (day.type === 'rest') return 'is-rest';
    return 'is-lift';
  };
  
  /* ============================================================
     Optional core visuals
     These are the only remaining inline SVG illustrations.
     ============================================================ */
  const OPTIONAL_ILLUS = {
    pallofPress: `<svg class="illus" viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect class="illus-bg-sage" width="240" height="180"/>
      <line class="illus-floor" x1="30" y1="155" x2="220" y2="155"/>
      <line class="illus-equip" x1="40" y1="25" x2="40" y2="155"/>
      <rect class="illus-weight" x="28" y="70" width="24" height="55" rx="2"/>
      <circle class="illus-equip" cx="40" cy="70" r="4"/>
      <line class="illus-equip-light" x1="44" y1="70" x2="130" y2="80"/>
      <circle class="illus-equip" cx="135" cy="80" r="5"/>
      <circle class="illus-body" cx="160" cy="60" r="10"/>
      <path class="illus-body-stroke" d="M160 70 L160 125"/>
      <path class="illus-body-stroke" d="M160 80 L145 82 L135 80"/>
      <path class="illus-body-stroke" d="M160 82 L145 84 L135 82"/>
      <path class="illus-body-stroke" d="M160 125 L152 155"/>
      <path class="illus-body-stroke" d="M160 125 L168 155"/>
      <path class="illus-equip-light" d="M200 80 L218 80 M214 76 L218 80 L214 84" stroke="#4F6B43"/>
    </svg>`,
    birdDog: `<svg class="illus" viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect class="illus-bg-sage" width="240" height="180"/>
      <rect x="20" y="130" width="200" height="20" rx="2" fill="rgba(122,115,104,0.12)"/>
      <line class="illus-floor" x1="20" y1="150" x2="220" y2="150"/>
      <path class="illus-body-stroke" d="M90 100 L160 100"/>
      <circle class="illus-body" cx="85" cy="98" r="10"/>
      <path class="illus-body-stroke" d="M95 102 L92 130"/>
      <path class="illus-body-stroke" d="M160 102 L168 130"/>
      <path class="illus-body-stroke" d="M85 95 L60 80"/>
      <path class="illus-body-stroke" d="M160 100 L195 115"/>
      <path class="illus-equip-light" d="M50 65 L45 70 M45 66 L45 70 L49 70" stroke="#4F6B43"/>
      <path class="illus-equip-light" d="M210 125 L215 130 M211 130 L215 130 L215 126" stroke="#4F6B43"/>
    </svg>`
  };
  
  /* ============================================================
     Plan data
     ============================================================ */
  const WARMUP = [
    'Easy treadmill walk, 4 minutes',
    'Shoulder circles, 10 each way',
    'Band pull-aparts, 12 reps',
    'Light cable row, 1 set of 12',
    'Light chest press, 1 set of 12'
  ];
  
  const DAYS = [
    {
      id: 'mon',
      label: 'Mon',
      dayName: 'Monday',
      title: 'Upper Body A',
      type: 'lift',
      icon: SVG.liftIcon,
      time: '45–55 min',
      exercises: [
        {
          name: 'Machine Chest Press',
          sets: '3 × 10–12',
          cue: 'Push forward slowly. Keep your back supported.',
          illus: exerciseImage('exercise-machine-chest-press.png', 'Woman using a machine chest press')
        },
        {
          name: 'Lat Pulldown',
          sets: '3 × 10–12',
          cue: 'Pull the bar down toward your upper chest. Stay tall.',
          illus: exerciseImage('exercise-lat-pulldown.png', 'Woman performing a lat pulldown')
        },
        {
          name: 'Seated Cable Row',
          sets: '3 × 10–12',
          cue: 'Pull the handle toward your body. Keep shoulders relaxed.',
          illus: exerciseImage('exercise-seated-cable-row.png', 'Woman performing a seated cable row')
        },
        {
          name: 'Machine Shoulder Press',
          sets: '2 × 10–12',
          cue: 'Press upward with control. Do not overarch your back.',
          illus: exerciseImage('exercise-machine-shoulder-press.png', 'Woman using a machine shoulder press')
        },
        {
          name: 'Cable Triceps Pushdown',
          sets: '2 × 12–15',
          cue: 'Keep elbows close to your sides as you press down.',
          illus: exerciseImage('exercise-cable-triceps-pushdown.png', 'Woman performing a cable triceps pushdown')
        },
        {
          name: 'Cable Biceps Curl',
          sets: '2 × 12–15',
          cue: 'Curl up slowly and lower the weight with control.',
          illus: exerciseImage('exercise-cable-biceps-curl.png', 'Woman performing a cable biceps curl')
        }
      ],
      optional: {
        name: 'Pallof Press',
        sets: '2 × 10 each side',
        cue: 'Hold the cable in front of you and keep your body still without twisting.',
        illus: OPTIONAL_ILLUS.pallofPress
      }
    },
    {
      id: 'tue',
      label: 'Tue',
      dayName: 'Tuesday',
      title: 'Incline Walking',
      type: 'cardio',
      icon: SVG.walkIcon,
      time: '20–30 min',
      cardio: {
        illus: exerciseImage('exercise-incline-walking.png', 'Woman incline walking on a treadmill'),
        phases: [
          { weeks: '1–2', detail: '<strong>20 minutes</strong> · incline <strong>3% to 5%</strong> · comfortable walking pace' },
          { weeks: '3–4', detail: '<strong>25 minutes</strong> · incline <strong>4% to 6%</strong>' },
          { weeks: '5–6', detail: '<strong>30 minutes</strong> · incline <strong>5% to 7%</strong>, only if it feels comfortable' }
        ],
        feel: 'She should be able to talk while doing this. It should feel steady, not exhausting.'
      }
    },
    {
      id: 'wed',
      label: 'Wed',
      dayName: 'Wednesday',
      title: 'Upper Body B',
      type: 'lift',
      icon: SVG.liftIcon,
      time: '45–55 min',
      exercises: [
        {
          name: 'Incline Chest Press Machine',
          sets: '3 × 10–12',
          cue: 'Press forward and slightly upward. Keep shoulders supported.',
          illus: exerciseImage('exercise-incline-chest-press-machine.png', 'Woman using an incline chest press machine')
        },
        {
          name: 'Seated Row Machine',
          sets: '3 × 10–12',
          cue: 'Sit tall, pull the handles toward your body, then return slowly.',
          illus: exerciseImage('exercise-seated-cable-row.png', 'Woman using a seated row machine')
        },
        {
          name: 'Neutral-Grip Lat Pulldown',
          sets: '3 × 10–12',
          cue: 'Hold the handles with palms facing each other and pull down with control.',
          illus: exerciseImage('exercise-neutral-grip-lat-pulldown.png', 'Woman performing a neutral-grip lat pulldown')
        },
        {
          name: 'Cable Face Pull',
          sets: '2 × 12–15',
          cue: 'Pull the rope toward face level. Keep the movement light and steady.',
          illus: exerciseImage('exercise-cable-face-pull.png', 'Woman performing a cable face pull')
        },
        {
          name: 'Cable Triceps Pushdown',
          sets: '2 × 12–15',
          cue: 'Keep elbows close to your sides as you press down.',
          illus: exerciseImage('exercise-cable-triceps-pushdown.png', 'Woman performing a cable triceps pushdown')
        },
        {
          name: 'Hammer Curl',
          sets: '2 × 12–15',
          cue: 'Curl the weights while keeping palms facing each other.',
          illus: exerciseImage('exercise-hammer-curl.png', 'Woman performing a dumbbell hammer curl')
        }
      ],
      optional: {
        name: 'Bird Dog',
        sets: '2 × 8 each side',
        cue: 'From hands and knees, slowly extend the opposite arm and leg. Keep the body steady.',
        illus: OPTIONAL_ILLUS.birdDog
      }
    },
    {
      id: 'thu',
      label: 'Thu',
      dayName: 'Thursday',
      title: 'Elliptical',
      type: 'cardio',
      icon: SVG.ellipticalIcon,
      time: '20–30 min',
      cardio: {
        illus: exerciseImage('exercise-eliptical.png', 'Woman using an elliptical machine'),
        phases: [
          { weeks: '1–2', detail: '<strong>20 minutes</strong> · low resistance · smooth, easy rhythm' },
          { weeks: '3–4', detail: '<strong>25 minutes</strong> · slightly more resistance if comfortable' },
          { weeks: '5–6', detail: '<strong>30 minutes</strong> · steady pace, no hard bursts yet' }
        ],
        feel: 'Breathing can be a little faster, but she should still be able to talk.'
      }
    },
    {
      id: 'fri',
      label: 'Fri',
      dayName: 'Friday',
      title: 'Upper Body C',
      type: 'lift',
      icon: SVG.liftIcon,
      time: '45–55 min',
      exercises: [
        {
          name: 'Seated Cable Row',
          sets: '3 × 10–12',
          cue: 'Sit tall and pull the handle in smoothly.',
          illus: exerciseImage('exercise-seated-cable-row.png', 'Woman performing a seated cable row')
        },
        {
          name: 'Pec Deck or Cable Fly',
          sets: '3 × 10–12',
          cue: 'Bring the arms together gently. Do not overstretch.',
          illus: exerciseImage('exercise-pec-dec-machine.png', 'Woman using a pec deck machine')
        },
        {
          name: 'Pullover Machine or Lat Pulldown',
          sets: '3 × 10–12',
          cue: 'Use the pullover machine if available. If not, repeat the lat pulldown from earlier in the week.',
          illus: exerciseImage('exercise-lat-pulldown.png', 'Woman performing a lat pulldown')
        },
        {
          name: 'Cable Lateral Raise',
          sets: '2 × 12–15',
          cue: 'Lift the arm out to the side slowly. Stop around shoulder height.',
          illus: exerciseImage('exercise-cable-lateral-raise.png', 'Woman performing a cable lateral raise')
        },
        {
          name: 'Cable Biceps Curl',
          sets: '2 × 12–15',
          cue: 'Curl up smoothly and lower slowly.',
          illus: exerciseImage('exercise-cable-biceps-curl.png', 'Woman performing a cable biceps curl')
        },
        {
          name: 'Rope Triceps Pushdown',
          sets: '2 × 12–15',
          cue: 'Press down and fully straighten the arms without forcing it.',
          illus: exerciseImage('exercise-rope-triceps-pushdown.png', 'Woman performing a rope triceps pushdown')
        }
      ],
      optional: null
    },
    {
      id: 'sat',
      label: 'Sat',
      dayName: 'Saturday',
      title: 'Stair Stepper',
      type: 'cardio',
      icon: SVG.stairIcon,
      time: '10–20 min',
      cardio: {
        illus: exerciseImage('exercise-stair-stepper.png', 'Woman using a stair stepper machine'),
        phases: [
          { weeks: '1–2', detail: '<strong>10 to 12 minutes</strong> · easy pace' },
          { weeks: '3–4', detail: '<strong>12 to 15 minutes</strong> · same easy pace' },
          { weeks: '5–6', detail: '<strong>15 to 20 minutes</strong> · optional: add 10–15 min easy treadmill walking afterwards' }
        ],
        feel: 'This is the most demanding cardio session of the week. Keep it steady and do not rush.'
      }
    },
    {
      id: 'sun',
      label: 'Sun',
      dayName: 'Sunday',
      title: 'Rest',
      type: 'rest',
      icon: SVG.restIcon,
      rest: {
        title: 'Rest day',
        copy: 'Take the day off. An easy casual walk is fine if you feel like moving, but nothing is required.'
      }
    }
  ];
  
  /* ============================================================
     State
     ============================================================ */
  let currentView = 'home';
  let currentDayIdx = 0;
  let currentExerciseIdx = 0;
  
  /* ============================================================
     Elements
     ============================================================ */
  const viewHome = $('#view-home');
  const viewDay = $('#view-day');
  const dayContent = $('#dayContent');
  const dayGrid = $('#dayGrid');
  const navInner = $('#navInner');
  const topbarDay = $('#topbarDay');
  const topbarTitle = $('#topbarTitle');
  const btnBack = $('#btnBack');
  const btnPrevDay = $('#btnPrevDay');
  const btnNextDay = $('#btnNextDay');
  const sheet = $('#sheet');
  const sheetBackdrop = $('#sheetBackdrop');
  const sheetClose = $('#sheetClose');
  const sheetList = $('#sheetList');
  const sheetDay = $('#sheetDay');
  const sheetTitle = $('#sheetTitle');
  
  /* ============================================================
     Home
     ============================================================ */
  function renderHome() {
    dayGrid.innerHTML = DAYS.map((day, index) => `
      <button class="day-tile ${dayTypeClass(day)}" data-idx="${index}">
        <span class="day-tile-icon">${day.icon}</span>
        <span class="day-tile-body">
          <span class="day-tile-day">${day.dayName}</span>
          <span class="day-tile-name">${day.title}</span>
        </span>
        <span class="day-tile-arrow">${SVG.chevR}</span>
      </button>
    `).join('');
  
    dayGrid.querySelectorAll('.day-tile').forEach((button) => {
      button.addEventListener('click', () => openDay(Number.parseInt(button.dataset.idx, 10)));
    });
  }
  
  /* ============================================================
     Bottom navigation
     ============================================================ */
  function renderBottomNav() {
    navInner.innerHTML = DAYS.map((day, index) => `
      <button
        class="nav-btn ${day.type === 'cardio' ? 'is-cardio' : day.type === 'rest' ? 'is-rest' : ''}"
        data-idx="${index}"
        aria-label="${day.dayName}, ${day.title}"
      >
        <span class="nav-icon">${day.icon}</span>
        <span class="nav-label">${day.label}</span>
      </button>
    `).join('');
  
    navInner.querySelectorAll('.nav-btn').forEach((button) => {
      button.addEventListener('click', () => openDay(Number.parseInt(button.dataset.idx, 10)));
    });
  }
  
  function updateNavActive() {
    navInner.querySelectorAll('.nav-btn').forEach((button, index) => {
      button.classList.toggle('active', currentView === 'day' && index === currentDayIdx);
    });
  }
  
  /* ============================================================
     Day view
     ============================================================ */
  function openDay(index) {
    currentDayIdx = index;
    currentExerciseIdx = 0;
    currentView = 'day';
  
    viewHome.classList.remove('active');
    viewDay.classList.add('active');
  
    window.scrollTo(0, 0);
    renderDay();
    updateNavActive();
  }
  
  function backToHome() {
    currentView = 'home';
  
    viewDay.classList.remove('active');
    viewHome.classList.add('active');
  
    window.scrollTo(0, 0);
    updateNavActive();
  }
  
  function renderDay() {
    const day = DAYS[currentDayIdx];
  
    topbarDay.textContent = day.dayName;
    topbarTitle.textContent = day.title;
  
    if (day.type === 'lift') {
      dayContent.innerHTML = renderLiftDay(day);
      initCarousel();
      return;
    }
  
    dayContent.innerHTML = day.type === 'cardio'
      ? renderCardioDay(day)
      : renderRestDay(day);
  }
  
  function renderLiftDay(day) {
    const totalExercises = day.exercises.length;
  
    const meta = `
      <div class="day-meta-row">
        <div class="meta-chips">
          <span class="meta-chip"><span class="dot"></span>${totalExercises} exercises</span>
          <span class="meta-chip"><span class="dot"></span>${day.time}</span>
        </div>
        <button class="overview-btn" id="btnOverview" aria-label="View full session">
          ${SVG.list} Full session
        </button>
      </div>
    `;
  
    const warmup = `
      <details class="warmup-panel">
        <summary>
          <span class="warmup-label">
            <span class="pill-mini">Warm-up</span>
            <span>About 6 minutes</span>
          </span>
        </summary>
        <ul class="warmup-list">
          ${WARMUP.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </details>
    `;
  
    const cards = day.exercises.map((exercise, index) => `
      <article class="ex-card" data-idx="${index}">
        <div class="ex-progress-mini">
          <span>Exercise ${index + 1} of ${totalExercises}</span>
          <span class="sets-pill">${exercise.sets}</span>
        </div>
        <h3 class="ex-name">${exercise.name}</h3>
        <div class="ex-image">${exercise.illus}</div>
        <div class="ex-cue">${exercise.cue}</div>
      </article>
    `).join('');
  
    const dots = day.exercises.map((_, index) => `
      <div class="dot ${index === 0 ? 'active' : ''}" data-idx="${index}"></div>
    `).join('');
  
    const controls = `
      <div class="carousel-controls">
        <button class="carousel-nav" id="btnExPrev" aria-label="Previous exercise" disabled>
          ${SVG.chevL}
        </button>
        <div class="dots" id="exDots">${dots}</div>
        <button class="carousel-nav" id="btnExNext" aria-label="Next exercise">
          ${SVG.chevR}
        </button>
      </div>
    `;
  
    const optional = day.optional ? `
      <div class="optional-core">
        <div class="opt-label">Optional core</div>
        <div class="opt-title">${day.optional.name}</div>
        <div class="opt-sets">${day.optional.sets}</div>
        <div class="opt-cue">${day.optional.cue}</div>
      </div>
    ` : '';
  
    return `
      ${meta}
      ${warmup}
      <div class="carousel-wrap">
        <div class="carousel" id="carousel">${cards}</div>
      </div>
      ${controls}
      ${optional}
    `;
  }
  
  function renderCardioDay(day) {
    const label = day.id === 'sat' ? 'Hardest cardio' : 'Low impact';
  
    const meta = `
      <div class="day-meta-row">
        <div class="meta-chips">
          <span class="meta-chip is-sage"><span class="dot"></span>${label}</span>
          <span class="meta-chip is-sage"><span class="dot"></span>${day.time}</span>
        </div>
      </div>
    `;
  
    const phases = day.cardio.phases.map((phase) => `
      <div class="phase-row">
        <div class="phase-week">${phase.weeks}<small>Weeks</small></div>
        <div class="phase-details">${phase.detail}</div>
      </div>
    `).join('');
  
    return `
      ${meta}
      <div class="cardio-screen">
        <div class="cardio-illus">${day.cardio.illus}</div>
        <div class="phase-stack">${phases}</div>
        <div class="feel-note">
          <strong>How it should feel</strong>
          ${day.cardio.feel}
        </div>
      </div>
    `;
  }
  
  function renderRestDay(day) {
    return `
      <div class="rest-screen">
        <div class="rest-moon">${SVG.moon}</div>
        <h2>${day.rest.title}</h2>
        <p>${day.rest.copy}</p>
      </div>
    `;
  }
  
  /* ============================================================
     Carousel
     ============================================================ */
  let carouselEl;
  let btnExPrev;
  let btnExNext;
  let dotEls;
  
  function initCarousel() {
    carouselEl = $('#carousel');
    btnExPrev = $('#btnExPrev');
    btnExNext = $('#btnExNext');
    dotEls = document.querySelectorAll('#exDots .dot');
  
    $('#btnOverview')?.addEventListener('click', openSheet);
  
    if (!carouselEl) return;
  
    btnExPrev?.addEventListener('click', () => scrollToExercise(currentExerciseIdx - 1));
    btnExNext?.addEventListener('click', () => scrollToExercise(currentExerciseIdx + 1));
  
    dotEls.forEach((dot) => {
      dot.addEventListener('click', () => scrollToExercise(Number.parseInt(dot.dataset.idx, 10)));
    });
  
    let scrollTimeout;
  
    carouselEl.addEventListener('scroll', () => {
      window.clearTimeout(scrollTimeout);
  
      scrollTimeout = window.setTimeout(() => {
        const cards = carouselEl.querySelectorAll('.ex-card');
        const carouselCenter = carouselEl.scrollLeft + carouselEl.clientWidth / 2;
  
        let nearestIndex = 0;
        let nearestDistance = Number.POSITIVE_INFINITY;
  
        cards.forEach((card, index) => {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const distance = Math.abs(cardCenter - carouselCenter);
  
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = index;
          }
        });
  
        if (nearestIndex !== currentExerciseIdx) {
          currentExerciseIdx = nearestIndex;
          updateCarouselUI();
        }
      }, 80);
    }, { passive: true });
  
    updateCarouselUI();
  }
  
  function scrollToExercise(index) {
    const day = DAYS[currentDayIdx];
  
    if (!day.exercises || index < 0 || index >= day.exercises.length) return;
  
    currentExerciseIdx = index;
  
    const card = carouselEl?.querySelectorAll('.ex-card')[index];
    if (card) {
      const target = card.offsetLeft - (carouselEl.clientWidth - card.offsetWidth) / 2;
      carouselEl.scrollTo({ left: target, behavior: 'smooth' });
    }
  
    updateCarouselUI();
  }
  
  function updateCarouselUI() {
    const day = DAYS[currentDayIdx];
  
    if (!day.exercises) return;
  
    if (btnExPrev) btnExPrev.disabled = currentExerciseIdx === 0;
    if (btnExNext) btnExNext.disabled = currentExerciseIdx === day.exercises.length - 1;
  
    dotEls?.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentExerciseIdx);
    });
  }
  
  /* ============================================================
     Session overview sheet
     ============================================================ */
  function openSheet() {
    const day = DAYS[currentDayIdx];
  
    if (!day.exercises) return;
  
    sheetDay.textContent = day.dayName;
    sheetTitle.textContent = day.title;
  
    let html = day.exercises.map((exercise, index) => `
      <li data-idx="${index}">
        <span class="sheet-num">${index + 1}</span>
        <span class="sheet-name">${exercise.name}</span>
        <span class="sheet-sets">${exercise.sets}</span>
      </li>
    `).join('');
  
    if (day.optional) {
      html += `
        <div class="sheet-optional-label">Optional core</div>
        <li class="is-optional" data-idx="optional">
          <span class="sheet-num">+</span>
          <span class="sheet-name">${day.optional.name}</span>
          <span class="sheet-sets">${day.optional.sets}</span>
        </li>
      `;
    }
  
    sheetList.innerHTML = html;
  
    sheetList.querySelectorAll('li').forEach((item) => {
      item.addEventListener('click', () => {
        if (item.dataset.idx !== 'optional') {
          scrollToExercise(Number.parseInt(item.dataset.idx, 10));
        }
  
        closeSheet();
      });
    });
  
    sheet.classList.add('open');
    sheetBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  function closeSheet() {
    sheet.classList.remove('open');
    sheetBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
  
  /* ============================================================
     Event wiring
     ============================================================ */
  btnBack?.addEventListener('click', backToHome);
  
  btnPrevDay?.addEventListener('click', () => {
    openDay((currentDayIdx - 1 + DAYS.length) % DAYS.length);
  });
  
  btnNextDay?.addEventListener('click', () => {
    openDay((currentDayIdx + 1) % DAYS.length);
  });
  
  sheetClose?.addEventListener('click', closeSheet);
  sheetBackdrop?.addEventListener('click', closeSheet);
  
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sheet.classList.contains('open')) {
      closeSheet();
    }
  });
  
  /* ============================================================
     Init
     ============================================================ */
  renderHome();
  renderBottomNav();
  viewHome.classList.add('active');