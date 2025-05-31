const projects = [
  {
    title: "CleanHome",
    description: "Сервис для поиска и заказа клининговых услуг с удобным интерфейсом и системой отзывов.",
    image: "https://pavpl.github.io/cleanhome/preview.png", // Добавьте изображение позже
    url: "https://pavpl.github.io/cleanhome/",
    category: "web"
  },

  {
    title: "PassGen",
    description: "Сервис для генерации надежный паролей.",
    image: "https://pavpl.github.io/PassGen/preview.png",
    url: "https://pavpl.github.io/PassGen/",
    category: "web"
  },

  {
    title: "WarGame",
    description: "Это текстовая игра, вдохновлённая фильмом 'Военные игры' (WarGames, 1983). Ваша задача — взаимодействовать с терминалом WOPR, как в фильме..",
    image: "https://pavpl.github.io/WarGame/preview.png",
    url: "https://pavpl.github.io/WarGame/",
    category: "web"
  },

  {
    title: "Car Counter",
    description: "Эта программа автоматически определяет и подсчитывает автомобили и людей на фотографиях, аэрофото, спутниковых снимках и видео с помощью нейросети YOLOv8. Результаты визуализируются в виде графического окна с исходным и обработанным изображением или кадром.",
    image: "https://github.com/pavpl/Car-Counter/blob/main/Video_frame.jpg",
    url: "https://github.com/pavpl/Car-Counter/",
    category: "data"
  },

  {
    title: "Media Tracker",
    description: "Приложение для отслеживания просмотренных фильмов, сериалов и книг.",
    image: "https://pavpl.github.io/media-tracker/preview.png",
    url: "https://pavpl.github.io/media-tracker",
    category: "web"
  },
  // Добавляйте новые проекты сюда
];

const projectsList = document.getElementById('projects-list');
const searchInput = document.getElementById('search-input');
const categoryTabs = document.querySelectorAll('.category-tab');

let currentCategory = 'all';
let currentSearch = '';

function renderProjects() {
  projectsList.innerHTML = '';
  let filtered = projects.filter(p => {
    const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(currentSearch) ||
      p.description.toLowerCase().includes(currentSearch);
    return matchesCategory && matchesSearch;
  });
  if (filtered.length === 0) {
    projectsList.innerHTML = '<div style="color:#90adcb">Проекты не найдены</div>';
    return;
  }
  filtered.forEach(p => {
    const project = document.createElement('a');
    project.href = p.url;
    project.target = '_blank';
    project.rel = 'noopener noreferrer';
    project.className = 'project-card hover:opacity-90 transition-opacity';
    let imgBlock = `<div class="project-image-block">
      <img src="${p.image}" alt="${p.title}" onerror="this.style.display='none';this.parentNode.innerHTML='<div class=\'project-image-placeholder\'>Нет изображения</div>';" />
    </div>`;
    project.innerHTML = imgBlock + `<div><p class="project-title">${p.title}</p><p class="project-desc">${p.description}</p></div>`;
    projectsList.appendChild(project);
  });
}

searchInput.addEventListener('input', e => {
  currentSearch = e.target.value.trim().toLowerCase();
  renderProjects();
});

categoryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    categoryTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentCategory = tab.dataset.category;
    renderProjects();
  });
});

// Инициализация
renderProjects(); 
