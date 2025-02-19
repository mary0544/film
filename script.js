// Пример данных о фильмах
const movies = [
    {
        id: 1,
        title: "Гнев человеческий",
        image: "img/Wrat_hof_Man.jpg",
        year: 2021,
        description: "Хладнокровный Эйч идет по следу грабителей, убивших его сына. Джейсон Стэйтем в брутальном боевике Гая Ричи",
        rating: 8.5,
        director: "Гай Ричи",
        actors: ["Джейсон Стэйтем", "Холт Маккэллани"],
        link: "https://rutube.ru/video/344d1883f888035b50d8cd9dba8ac044/"
    },
    {
        id: 2,
        title: "5 волна",
        image: "img/5waves.jpg",
        year: 2016,
        description: "Первая волна оставила за собой мглу. От второй успели убежать только самые везучие. Но едва ли можно назвать везучими тех, кто уцелел после третьей. А четвертая волна стерла все человеческие законы, взамен же установила свой, один-единственный: хочешь жить — не верь никому. И вот уже накатывает пятая волна…",
        rating: 7.8,
        director: "Дж. Блэйксон",
        actors: ["Хлоя Грейс Морец", "Ник Робинсон"],
        link: "https://rutube.ru/video/0d31dc41fb08b20a6e7d9bb6036738fd/"
    },
	{
        id: 3,
        title: "Стукач",
        image: "img/stukach.jpg",
        year: 2012,
        description: "Внедриться в наркокартель, чтобы спасти сына от тюрьмы. Экшен-триллер со «Скалой», снятый по реальным событиям",
        rating: 6.8,
        director: "Рик Роман Во",
        actors: ["Дуэйн Джонсон", "Барри Пеппер"],
        link: "https://rutube.ru/video/3047fc2eed5c91fe1f01d51f578697f2/"
    },
	{
        id: 4,
        title: "Таинственное убийство",
        image: "img/Lanuitdu12.jpg",
        year: 2022,
        description: "Детектив теряет покой, пытаясь найти убийцу молодой девушки. Один из лучших триллеров последних лет",
        rating: 5.9,
        director: "Доминик Молль",
        actors: ["Бастьен Буйон", "Були Ланнерс"],
        link: "https://rutube.ru/video/4506838ba00de2cb473e40e16052623e/"
    },
	{
        id: 5,
        title: "Высшая мера",
        image: "img/log_in_or_sig_up.jpg",
        year: 2022,
        description: "Следователь ищет неуловимого убийцу в Ярославле 1970-х. Атмосферный триллер по мотивам реальной истории",
        rating: 8.0,
        director: "Вячеслав Рогожкин",
        actors: ["Александр Бухаров", "Никита Тезин"],
        link: "https://www.kinopoisk.ru/series/5367744/?utm_referrer=www.kinopoisk.ru"
    },
	{
        id: 6,
        title: "Гемини",
        image: "img/gemini.jpg",
        year: 2016,
        description: "Много лет работавший на секретную правительственную организацию первоклассный киллер Генри Броган, способный с расстояния в 2 километра поразить мишень в скоростном поезде, решает уйти на пенсию.",
        rating: 5.9,
        director: "Энг Ли",
        actors: ["Уилл Смит", "Мэри Элизабет Уинстэд"],
        link: "https://rutube.ru/video/6ce8e127a7728d0601ab905f1f938845/"
    },
	{
        id: 7,
        title: "Небоскреб",
        image: "img/neboskreb.jpg",
        year: 2018,
        description: "Самый высокий и технологичный небоскрёб в мире становится центром огненной катастрофы. ",
        rating: 6.1,
        director: "Роусон Маршалл Тёрбер",
        actors: ["Дуэйн Джонсон", "Нив Кэмпбелл"],
        link: "https://rutube.ru/video/a651d9e0224d2d7f5b886c5a3caf7a6d/"
    },
	{
        id: 8,
        title: "Плохие парни",
        image: "img/boy.jpg",
        year: 1995,
        description: "Они - полная противоположность друг друга. Один из них - примерный семьянин и не имеет состояния, другой богат и пользуется всеми благами холостяцкой жизни.",
        rating: 7.7,
        director: "Майкл Бэй",
        actors: ["Уилл Смит", "Мартин Лоуренс"],
        link: "https://rutube.ru/video/b058c2ada0db8857d5aedccd36d01a1a/"
    },
	{
        id: 9,
        title: "Паркер",
        image: "img/parker.jpg",
        year: 2012,
        description: "Вор с моральными принципами мстит кинувшим его подельникам. Эффектный боевик с суровым Джейсоном Стэйтемом",
        rating: 6.7,
        director: "Тейлор Хэкфорд",
        actors: ["Джейсон Стэйтем", "Дженнифер Лопес"],
        link: "https://www.kinopoisk.ru/film/586475/"
    },
	{
        id: 10 ,
        title: "Телохранитель киллера",
        image: "img/telohranitel.jpg",
        year: 2017,
        description: "Бывший элитный телохранитель должен защищать наемного убийцу. Комедийный экшен с Райаном Рейнольдсом",
        rating: 7.1,
        director: "Патрик Хьюз",
        actors: ["Райан Рейнольдс", "Сэмюэл Л. Джексон"],
        link: "https://www.kinopoisk.ru/film/835877/"
    },
	
    
];


const itemsPerPage = 6; 
let currentPage = 1;


function displayMovies(page) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';
    const start = (page - 1) * itemsPerPage; 
    const end = start + itemsPerPage;

    const visibleMovies = movies.slice(start, end);

    visibleMovies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
            <h2>${movie.title}</h2>
            <img src="${movie.image}" alt="${movie.title}" />
            <p>Год: ${movie.year}</p>
            <p>${movie.description.split(' ').slice(0, 10).join(' ')}...</p>
            <p>Рейтинг: ${movie.rating}</p>
            <a href="film.html?id=${movie.id}">Подробнее</a>
        `;
        movieList.appendChild(movieDiv);
    });

    updatePagination();
}

// Пагинация
function updatePagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    const pageCount = Math.ceil(movies.length / itemsPerPage);
    
    for (let i = 1; i <= pageCount; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.onclick = function() {
            currentPage = i;
            displayMovies(currentPage);
        };
        pagination.appendChild(pageButton);
    }
}

// Фильтрация фильмов
function filterMovies() {
    const yearFilter = document.getElementById('yearFilter').value;
    const countryFilter = document.getElementById('countryFilter').value.toLowerCase();
    const ratingFilter = document.getElementById('ratingFilter').value;

    const filteredMovies = movies.filter(movie => {
        const matchesYear = yearFilter ? movie.year == yearFilter : true;
        const matchesCountry = countryFilter ? movie.actors.some(actor => actor.toLowerCase().includes(countryFilter)) : true;
        const matchesRating = ratingFilter ? movie.rating >= ratingFilter : true;
        return matchesYear && matchesCountry && matchesRating;
    });

    displayFilteredMovies(filteredMovies);
}

// Отображение отфильтрованных фильмов
function displayFilteredMovies(filteredMovies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    if (filteredMovies.length === 0) {
        movieList.innerHTML = '<h2>Нет фильмов по выбранным критериям.</h2>';
        return;
    }

    filteredMovies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
            <h2>${movie.title}</h2>
            <img src="${movie.image}" alt="${movie.title}" />
            <p>Год: ${movie.year}</p>
            <p>${movie.description.split(' ').slice(0, 10).join(' ')}...</p>
            <p>Рейтинг: ${movie.rating}</p>
            <a href="film.html?id=${movie.id}">Подробнее</a>
        `;
        movieList.appendChild(movieDiv);
    });
}


displayMovies(currentPage);