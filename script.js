const books = [
  {
    id: 1,
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'ficção',
    rating: 4.8,
    reviews: 2341,
    icon: '📖',
    gradient: 'linear-gradient(135deg, #7f1d1d, #991b1b)',
    description: 'Uma distopia sobre vigilância, controle totalitário e resistência humana.',
  },
  {
    id: 2,
    title: 'O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'fantasia',
    rating: 4.9,
    reviews: 3891,
    icon: '💍',
    gradient: 'linear-gradient(135deg, #14532d, #166534)',
    description: 'A épica jornada de Frodo para destruir o Um Anel e salvar a Terra Média.',
  },
  {
    id: 3,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    year: 2011,
    genre: 'não-ficção',
    rating: 4.6,
    reviews: 1876,
    icon: '🧠',
    gradient: 'linear-gradient(135deg, #1e3a5f, #1d4ed8)',
    description: 'Uma breve história da humanidade e de como chegamos até aqui.',
  },
  {
    id: 4,
    title: 'Orgulho e Preconceito',
    author: 'Jane Austen',
    year: 1813,
    genre: 'romance',
    rating: 4.7,
    reviews: 2109,
    icon: '💌',
    gradient: 'linear-gradient(135deg, #831843, #be185d)',
    description: 'O romance atemporal de Elizabeth Bennet e Mr. Darcy na Inglaterra do séc. XIX.',
  },
  {
    id: 5,
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'fantasia',
    rating: 4.9,
    reviews: 5234,
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #3b0764, #7c3aed)',
    description: 'O começo da jornada mágica de Harry Potter no mundo bruxo de Hogwarts.',
  },
  {
    id: 6,
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    year: 1953,
    genre: 'ficção',
    rating: 4.5,
    reviews: 1432,
    icon: '🔥',
    gradient: 'linear-gradient(135deg, #7c2d12, #c2410c)',
    description: 'Um futuro distópico onde os bombeiros queimam livros e o conhecimento é proibido.',
  },
  {
    id: 7,
    title: 'A Culpa é das Estrelas',
    author: 'John Green',
    year: 2012,
    genre: 'romance',
    rating: 4.4,
    reviews: 3201,
    icon: '⭐',
    gradient: 'linear-gradient(135deg, #164e63, #0e7490)',
    description: 'Uma história de amor entre dois adolescentes que se conhecem num grupo de apoio.',
  },
  {
    id: 8,
    title: 'O Poder do Hábito',
    author: 'Charles Duhigg',
    year: 2012,
    genre: 'não-ficção',
    rating: 4.3,
    reviews: 987,
    icon: '💪',
    gradient: 'linear-gradient(135deg, #134e4a, #0d9488)',
    description: 'Por que fazemos o que fazemos na vida e nos negócios — e como mudar.',
  },
  {
    id: 9,
    title: 'Uma Breve História do Tempo',
    author: 'Stephen Hawking',
    year: 1988,
    genre: 'ciência',
    rating: 4.5,
    reviews: 1203,
    icon: '🌌',
    gradient: 'linear-gradient(135deg, #1e1b4b, #3730a3)',
    description: 'A complexidade do universo — buracos negros, relatividade e Big Bang — explicada para todos.',
  },
  {
    id: 10,
    title: 'O Mestre e Margarida',
    author: 'Mikhail Bulgakov',
    year: 1967,
    genre: 'ficção',
    rating: 4.7,
    reviews: 1654,
    icon: '🐱',
    gradient: 'linear-gradient(135deg, #1f2937, #374151)',
    description: 'O diabo visita a Moscou soviética numa sátira brilhante ao totalitarismo.',
  },
];

function buildStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= full) {
      html += '<span class="text-brand-400">★</span>';
    } else if (i === full + 1 && half) {
      html += '<span class="text-brand-400" style="opacity:.6">★</span>';
    } else {
      html += '<span class="text-gray-700">★</span>';
    }
  }
  return html;
}

function formatReviews(n) {
  return n >= 1000 ? (n / 1000).toFixed(1).replace('.', ',') + 'K' : String(n);
}

function renderBooks(filter) {
  const grid = document.getElementById('books-grid');
  const noMsg = document.getElementById('no-books-msg');

  const filtered = filter === 'todos'
    ? books
    : books.filter(b => b.genre === filter);

  grid.innerHTML = '';

  if (filtered.length === 0) {
    noMsg.classList.remove('hidden');
    return;
  }
  noMsg.classList.add('hidden');

  filtered.forEach((book, idx) => {
    const card = document.createElement('article');
    card.className = 'book-card';
    card.style.animationDelay = `${idx * 60}ms`;
    card.innerHTML = `
      <div class="book-cover" style="background: ${book.gradient};" aria-hidden="true">
        <span>${book.icon}</span>
      </div>
      <div class="p-5">
        <span class="book-genre-badge">${book.genre}</span>
        <h3 class="font-bold text-base mt-3 mb-1 leading-snug">${book.title}</h3>
        <p class="text-xs text-gray-400 mb-3">${book.author} · ${book.year}</p>
        <div class="flex items-center gap-2 mb-3">
          <span class="flex text-sm">${buildStars(book.rating)}</span>
          <span class="text-sm font-semibold text-brand-400">${book.rating.toFixed(1)}</span>
          <span class="text-xs text-gray-500">(${formatReviews(book.reviews)})</span>
        </div>
        <p class="text-xs text-gray-400 leading-relaxed line-clamp-2">${book.description}</p>
        <button
          class="mt-4 w-full text-xs font-semibold text-brand-400 border border-brand-500/30 hover:bg-brand-500/10 py-2 rounded-lg transition-colors"
          aria-label="Avaliar ${book.title}"
          onclick="prefillReview('${book.title.replace(/'/g, "\\'")}', '${book.author.replace(/'/g, "\\'")}')">
          + Avaliar este livro
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function prefillReview(title, author) {
  document.getElementById('book-title').value = title;
  document.getElementById('book-author').value = author;
  document.getElementById('avaliar').scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.getElementById('book-title').focus();
}

function setupFilters() {
  let activeFilter = 'todos';

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      if (filter === activeFilter) return;

      activeFilter = filter;

      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active-filter');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active-filter');
      btn.setAttribute('aria-pressed', 'true');

      renderBooks(filter);
    });
  });
}

function setupMobileMenu() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');

  function toggleMenu() {
    const isOpen = menu.classList.toggle('hidden') === false;
    btn.setAttribute('aria-expanded', String(isOpen));
  }

  btn.addEventListener('click', toggleMenu);

  menu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
}

function setupScroll() {
  const header = document.getElementById('header');
  const backTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backTop.classList.add('visible');
    } else {
      backTop.classList.remove('visible');
    }
  }, { passive: true });

  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setupReveal() {
  const targets = document.querySelectorAll('section, .feature-card');
  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => observer.observe(el));
}

function setupStarRating() {
  const container = document.getElementById('star-rating');
  const input = document.getElementById('rating-value');
  let selected = 0;

  container.querySelectorAll('.star').forEach(star => {
    const val = parseInt(star.dataset.value);

    star.addEventListener('mouseenter', () => {
      container.querySelectorAll('.star').forEach(s => {
        const sv = parseInt(s.dataset.value);
        s.classList.toggle('hovered', sv <= val);
        s.classList.remove('selected');
      });
    });

    star.addEventListener('mouseleave', () => {
      container.querySelectorAll('.star').forEach(s => {
        s.classList.remove('hovered');
        const sv = parseInt(s.dataset.value);
        s.classList.toggle('selected', sv <= selected);
      });
    });

    star.addEventListener('click', () => {
      selected = val;
      input.value = val;
      container.querySelectorAll('.star').forEach(s => {
        const sv = parseInt(s.dataset.value);
        s.classList.toggle('selected', sv <= selected);
        s.setAttribute('aria-pressed', sv <= selected ? 'true' : 'false');
      });
      document.getElementById('rating-error').textContent = '';
    });

    star.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        star.click();
      }
    });
  });
}

function setError(input, message) {
  const group = input.closest('.field-group');
  const errorEl = group.querySelector('.field-error');
  input.classList.add('has-error');
  input.classList.remove('is-valid');
  if (errorEl) errorEl.textContent = message;
}

function setValid(input) {
  const group = input.closest('.field-group');
  const errorEl = group.querySelector('.field-error');
  input.classList.remove('has-error');
  input.classList.add('is-valid');
  if (errorEl) errorEl.textContent = '';
}

function clearField(input) {
  const group = input.closest('.field-group');
  const errorEl = group ? group.querySelector('.field-error') : null;
  input.classList.remove('has-error', 'is-valid');
  if (errorEl) errorEl.textContent = '';
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setupReviewForm() {
  const form = document.getElementById('review-form');
  const successEl = document.getElementById('review-success');
  const newReviewBtn = document.getElementById('new-review-btn');
  const textarea = document.getElementById('review-text');
  const charCount = document.getElementById('char-count');

  textarea.addEventListener('input', () => {
    const len = textarea.value.trim().length;
    charCount.textContent = `${len} / 50`;
    charCount.classList.toggle('text-brand-400', len >= 50);
    charCount.classList.toggle('text-gray-500', len < 50);
  });

  form.querySelectorAll('.field-input').forEach(input => {
    input.addEventListener('blur', () => validateReviewField(input));
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const title = document.getElementById('book-title');
    const author = document.getElementById('book-author');
    const ratingInput = document.getElementById('rating-value');
    const ratingError = document.getElementById('rating-error');
    const review = document.getElementById('review-text');
    const name = document.getElementById('reviewer-name');
    const email = document.getElementById('reviewer-email');

    let valid = true;

    if (!title.value.trim()) { setError(title, 'Informe o nome do livro.'); valid = false; }
    else setValid(title);

    if (!author.value.trim()) { setError(author, 'Informe o nome do autor.'); valid = false; }
    else setValid(author);

    if (!ratingInput.value) {
      ratingError.textContent = 'Selecione uma nota de 1 a 5 estrelas.';
      valid = false;
    } else {
      ratingError.textContent = '';
    }

    if (review.value.trim().length < 50) {
      setError(review, `Escreva pelo menos 50 caracteres (atual: ${review.value.trim().length}).`);
      valid = false;
    } else {
      setValid(review);
    }

    if (!name.value.trim()) { setError(name, 'Informe seu nome.'); valid = false; }
    else setValid(name);

    if (!validateEmail(email.value)) { setError(email, 'Informe um e-mail válido.'); valid = false; }
    else setValid(email);

    if (!valid) {
      form.querySelector('.has-error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    form.classList.add('hidden');
    successEl.classList.remove('hidden');
    successEl.classList.add('animate-in');
    successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  newReviewBtn.addEventListener('click', () => {
    form.reset();
    form.querySelectorAll('.field-input').forEach(input => clearField(input));
    document.querySelectorAll('.star').forEach(s => {
      s.classList.remove('selected', 'hovered');
      s.setAttribute('aria-pressed', 'false');
    });
    document.getElementById('rating-value').value = '';
    document.getElementById('rating-error').textContent = '';
    charCount.textContent = '0 / 50';
    charCount.classList.remove('text-brand-400');
    charCount.classList.add('text-gray-500');
    form.classList.remove('hidden');
    successEl.classList.add('hidden');
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.getElementById('book-title').focus();
  });
}

function validateReviewField(input) {
  if (input.id === 'reviewer-email') {
    if (!input.value.trim()) {
      setError(input, 'Informe seu e-mail.');
    } else if (!validateEmail(input.value)) {
      setError(input, 'E-mail inválido.');
    } else {
      setValid(input);
    }
  } else if (input.id === 'review-text') {
    if (input.value.trim().length < 50) {
      setError(input, `Mínimo 50 caracteres (atual: ${input.value.trim().length}).`);
    } else {
      setValid(input);
    }
  } else {
    if (!input.value.trim()) {
      setError(input, 'Este campo é obrigatório.');
    } else {
      setValid(input);
    }
  }
}

function setupSignupForm() {
  const form = document.getElementById('signup-form');
  const successEl = document.getElementById('signup-success');

  form.querySelectorAll('.field-input').forEach(input => {
    input.addEventListener('blur', () => {
      if (input.tagName === 'SELECT') {
        if (!input.value) setError(input, 'Selecione um gênero favorito.');
        else setValid(input);
      } else if (input.type === 'email') {
        if (!validateEmail(input.value)) setError(input, 'Informe um e-mail válido.');
        else setValid(input);
      } else {
        if (!input.value.trim()) setError(input, 'Este campo é obrigatório.');
        else setValid(input);
      }
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('signup-name');
    const email = document.getElementById('signup-email');
    const genre = document.getElementById('signup-genre');
    const terms = document.getElementById('signup-terms');
    const termsError = document.getElementById('terms-error');

    let valid = true;

    if (!name.value.trim()) { setError(name, 'Informe seu nome completo.'); valid = false; }
    else setValid(name);

    if (!validateEmail(email.value)) { setError(email, 'Informe um e-mail válido.'); valid = false; }
    else setValid(email);

    if (!genre.value) { setError(genre, 'Selecione um gênero favorito.'); valid = false; }
    else setValid(genre);

    if (!terms.checked) {
      termsError.textContent = 'Você precisa aceitar os termos para continuar.';
      valid = false;
    } else {
      termsError.textContent = '';
    }

    if (!valid) {
      form.querySelector('.has-error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    form.classList.add('hidden');
    successEl.classList.remove('hidden');
    successEl.classList.add('animate-in');
  });
}

function setupSearch() {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const loadingEl = document.getElementById('search-loading');
  const errorEl = document.getElementById('search-error');
  const emptyEl = document.getElementById('search-empty');
  const resultsEl = document.getElementById('search-results');

  searchForm.addEventListener('submit', async e => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;

    loadingEl.classList.remove('hidden');
    errorEl.classList.add('hidden');
    emptyEl.classList.add('hidden');
    resultsEl.innerHTML = '';

    try {
      const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=6&fields=title,author_name,first_publish_year,cover_i,ratings_average,ratings_count`;
      const res = await fetch(url);

      if (!res.ok) throw new Error(`Erro HTTP ${res.status}`);

      const data = await res.json();
      loadingEl.classList.add('hidden');

      if (!data.docs || data.docs.length === 0) {
        emptyEl.classList.remove('hidden');
        return;
      }

      data.docs.forEach((book, idx) => {
        const card = document.createElement('article');
        card.className = 'search-card';
        card.style.animationDelay = `${idx * 70}ms`;

        const coverHtml = book.cover_i
          ? `<img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="Capa de ${book.title}" class="search-cover" loading="lazy" onerror="this.parentNode.innerHTML='<div class=search-cover-placeholder>📚</div>'" />`
          : `<div class="search-cover-placeholder" aria-hidden="true">📚</div>`;

        const rating = book.ratings_average
          ? `<span class="text-brand-400 font-semibold text-sm">★ ${book.ratings_average.toFixed(1)}</span>`
          : '';

        const year = book.first_publish_year
          ? `<span class="text-gray-500">· ${book.first_publish_year}</span>`
          : '';

        const authors = book.author_name
          ? book.author_name.slice(0, 2).join(', ')
          : 'Autor desconhecido';

        card.innerHTML = `
          ${coverHtml}
          <div class="flex-1 min-w-0">
            <h3 class="font-bold text-sm leading-snug mb-1 truncate" title="${book.title}">${book.title}</h3>
            <p class="text-xs text-gray-400 mb-2">${authors} ${year}</p>
            <div class="flex items-center gap-2">${rating}</div>
            <button
              class="mt-3 text-xs text-brand-400 hover:text-brand-300 font-medium border border-brand-500/30 hover:bg-brand-500/10 px-3 py-1.5 rounded-lg transition-colors"
              aria-label="Avaliar ${book.title}"
              onclick="prefillReview(${JSON.stringify(book.title)}, ${JSON.stringify(authors)})">
              + Avaliar
            </button>
          </div>
        `;
        resultsEl.appendChild(card);
      });

    } catch (err) {
      loadingEl.classList.add('hidden');
      errorEl.textContent = 'Não foi possível conectar à Open Library. Verifique sua conexão e tente novamente.';
      errorEl.classList.remove('hidden');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderBooks('todos');
  setupFilters();
  setupMobileMenu();
  setupScroll();
  setupReveal();
  setupStarRating();
  setupReviewForm();
  setupSignupForm();
  setupSearch();
});
