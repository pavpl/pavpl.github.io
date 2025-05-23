const projects = [
  {
    title: "CleanHome",
    description: "Сервис для поиска и заказа клининговых услуг с удобным интерфейсом и системой отзывов.",
    image: "https://pavpl.github.io/cleanhome/preview.png", // Добавьте изображение позже
    url: "https://pavpl.github.io/cleanhome/",
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
    projectsList.innerHTML = '<div class="text-[#90adcb]">Проекты не найдены</div>';
    return;
  }
  filtered.forEach(p => {
    const project = document.createElement('a');
    project.href = p.url;
    project.target = '_blank';
    project.rel = 'noopener noreferrer';
    project.className = 'flex flex-col gap-3 pb-3 hover:opacity-90 transition-opacity';
    let imgBlock = `<div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg">
      <img src="${p.image}" alt="${p.title}" onerror="this.style.display='none';this.parentNode.innerHTML='<div class=\'project-image-placeholder\'>Нет изображения</div>';" class="w-full h-full object-cover rounded-lg" />
    </div>`;
    project.innerHTML = imgBlock + `<div><p class="text-white text-base font-medium leading-normal">${p.title}</p><p class="text-[#90adcb] text-sm font-normal leading-normal">${p.description}</p></div>`;
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