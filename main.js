// Задание 1  ===========================================================


// AJAX (Asynchronous JavaScript and XML) - это набор технологий, 
// позволяющих веб-страницам загружать данные асинхронно без 
// необходимости перезагрузки страницы. AJAX использует 
// объект XMLHttpRequest для отправки запросов на сервер 
// и получения данных. Это позволяет обновлять часть веб-страницы 
// новыми данными без полной перезагрузки страницы, что улучшает 
// пользовательский опыт и делает веб-приложения более 
// интерактивными. AJAX также может работать с данными в формате JSON, 
// что делает его ещё более удобным для современных веб-приложений.

// Google - Поиск и многие другие сервисы Google используют AJAX для 
// обновления результатов поиска без перезагрузки страницы.
// YouTube - Видеоплеер и другие функции YouTube используют AJAX для
//  воспроизведения видео и обновления интерфейса.
// Facebook - AJAX используется для обновления новостной ленты, чатов 
// и других функций в реальном времени.
// Twitter - AJAX позволяет обновлять твиттер в реальном времени 
// без необходимости перезагружать страницу.
// Amazon - AJAX используется для обновления списков товаров, 
// отзывов и других функций на сайте.



// Задание 2  ===========================================================

// Это простой запрос на сервер с выводом данных в консоль
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        var posts = JSON.parse(xhr.responseText);
        posts.forEach(function(post) {
            console.log(post.title); // Выводим в консоль заголовки постов
        });
    } else {
        console.error('Ошибка в запросе:', xhr.statusText);
    }
};
xhr.onerror = function () {
    console.error('Ошибка сети');
};
xhr.send();



// Задание 3  ===========================================================

// создаем переменные для контейнера и кнопки
let postsContainer = document.getElementById('postsContainer')
let buttonLoadTitles = document.getElementById('buttonLoadTitles')
// создаем новый материнский элемент списка 'ul'
let list = document.createElement('ul')
// даем этому элементу стили из bootstrap
list.classList.add('list-group')

// Добавляем обработчик событии для кнопки
// Запрос на сервер будет выполняться после нажатия на кнопку
buttonLoadTitles.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            var posts = JSON.parse(xhr.responseText);

            // перебираем каждый пост
            posts.forEach(function(post) {

                // Создаем элемент списка "li", и присваем ему нужный нам класс стилей
                let listItem = document.createElement('li')
                listItem.classList.add('list-group-item')

                // вписываем в этот элемент списка заголовок поста
                listItem.textContent = post.title

                // вставляем с конца в материнский элемент списка
                list.appendChild(listItem)
            });
        } else {
            console.error('Ошибка в запросе:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Ошибка сети');
    };
    xhr.send();
    
    // Вставляем весь список заголовков в контейнер для постов
    postsContainer.appendChild(list)

    // Делаем кнопку неактивной, чтобы она не загружала список 
    // повторно при повторном нажатии
    buttonLoadTitles.disabled = true;
})



// Задание 4  ===========================================================

// Здесь все тоже самое. Отличие ниже выводе данных
let postsContainer2 = document.getElementById('postsContainer2')
let buttonLoadPosts = document.getElementById('buttonLoadPosts')
let listOfPosts = document.createElement('ul')
listOfPosts.classList.add('list-group')

buttonLoadPosts.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            var posts = JSON.parse(xhr.responseText);

            // перебираем каждый пост
            posts.forEach(function(post) {

                // Создаем элемент списка "li", и присваем ему нужный нам класс стилей
                let listItem = document.createElement('li')
                listItem.classList.add('list-group-item')

                // Создаем элемент для заголовка и вставляем туда 
                // текст заголовка
                let postTitle = document.createElement('h4')
                postTitle.textContent = post.title

                // Создаем элемент для текста и вставляем туда
                // id пользователя, припысываем классы bootstrap
                let userId = document.createElement('p')
                userId.textContent = `user ID: ${post.userId}`
                userId.classList.add('fw-bold')
                userId.classList.add('text-secondary')

                // Создаем элемент для тела поста
                // вставляем тело поста
                let postBody = document.createElement('p')
                postBody.textContent = post.body

                // Теперь все эти элементы вставляем в элемент списка
                // и вставляем этот элемент в материнский элемент списка 
                listItem.appendChild(postTitle)
                listItem.appendChild(userId)
                listItem.appendChild(postBody)
                listOfPosts.appendChild(listItem)
            });
        } else {
            console.error('Ошибка в запросе:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Ошибка сети');
    };
    xhr.send();
    
    // Вставляем весь список постов в контейнер для постов
    postsContainer2.appendChild(listOfPosts)

    // Делаем кнопку неактивной, чтобы она не загружала список 
    // повторно при повторном нажатии
    buttonLoadPosts.disabled = true;
})



// Задание 5  ===========================================================

// Здесь также мы создаем переменные для контейнера и кнопки
// Далее мы создаем разные элементы для карточки где будет отображаться
// информация об ошибка. Стили у карточки будут заданы с помощью 
// классов bootstrap
let errorContainer = document.getElementById('errorContainer')
let buttonLoadError = document.getElementById('buttonLoadError')
let errorCard = document.createElement('div') // тело карточки
errorCard.classList.add('card')
let errorTitle = document.createElement('h5') // заголовок карточки
errorTitle.classList.add('card-title')
errorTitle.classList.add('p-3')
let errorText = document.createElement('p') // текст карточки
errorText.classList.add('card-text')
errorText.classList.add('p-3')
let errorText2 = document.createElement('p') // доп.текст карточки
errorText.classList.add('card-text') 
errorText.classList.add('p-3')

buttonLoadError.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/300", true);
    
    xhr.onload = function () {

        // Ниже при разных статусах в тело карточки загружается
        // заголовок и текст сообщения об ошибке
        if (xhr.status >= 200 && xhr.status < 300) {
            errorTitle.textContent = `Успех!`
            errorText.textContent = `Статус - ${xhr.status}`
        } else if (xhr.status >= 400 && xhr.status < 500) {
            errorTitle.textContent = `Ошибка клиента!`
            errorText.textContent = `Статус - ${xhr.status}`
        } else if (xhr.status >= 500 && xhr.status < 600) {
            errorTitle.textContent = `Ошибка сервера!`
            errorText.textContent = `Статус - ${xhr.status}`
        } else {
            errorTitle.textContent = `Неизвестная ошибка: статус - ${xhr.status}`
            errorText.textContent = xhr.statusText
        }
    
        // Добавляем заголовок и текст ошибки в тело карточки
        errorCard.appendChild(errorTitle)
        errorCard.appendChild(errorText)
        
    };
    
    // Вставляем доп.текст об ошибке при непредвиденных ошибках сервера
    xhr.onerror = function () {
        errorText2.textContent = 'Ошибка сети или сервер не отвечает.';
        errorCard.appendChild(errorText2)
    };
    
    // Вставляем доп.текст об ошибке при отсутствии ответа от сервера
    xhr.ontimeout = function () {
        errorText2.textContent = 'Время ожидания запроса истекло.';
        errorCard.appendChild(errorText2)
    };
    
    xhr.timeout = 10000; // Установим таймаут в 10 секунд
    
    xhr.send();

    // Вставляем карточку в контейнер
    errorContainer.appendChild(errorCard)

    // Делаем кнопку неактивной, чтобы она не загружала список 
    // повторно при повторном нажатии
    buttonLoadError.disabled = true;
})



// Задание 6  ===========================================================

// Здесь все тоже самое что в задании 4
// но отличия прокомментированы
let postsContainer3 = document.getElementById('postsContainer3')
let buttonLoadPosts2 = document.getElementById('buttonLoadPosts2')
let footer = document.getElementById('footer')
let listOfPosts2 = document.createElement('ul')
listOfPosts2.classList.add('list-group')

buttonLoadPosts2.addEventListener('click', function(){

    // создаем индикатор загрузки и текст под ним
    let loaderDiv = document.createElement('div')
    let loaderText = document.createElement('p')
    loaderText.textContent = "Загрузка данных..."
    loaderDiv.classList.add('loader')

    // Вставляем индикатор и текст временно в контейнер для постов
    // Индикатор должен появится только после нажатия на кнопке "загрузить"
    postsContainer3.appendChild(loaderDiv)
    postsContainer3.appendChild(loaderText)

    // вписываем запрос на сервер в тело функции, чтобы вызвать
    // его позже, это нужно для имитации задержки
    // смотрите ниже: строка 308
    let getPosts = function(){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhr.onload = function () {

            // Убираем индикатор загрузки и текст под ним, так как 
            // ожидается загрузка постов на странице
            loaderDiv.classList.add('d-none')
            loaderText.classList.add('d-none')

            if (xhr.status >= 200 && xhr.status < 300) {
                var posts = JSON.parse(xhr.responseText);
                posts.forEach(function(post) {
                    let listItem = document.createElement('li')
                    listItem.classList.add('list-group-item')

                    let postTitle = document.createElement('h4')
                    postTitle.textContent = post.title

                    let userId = document.createElement('p')
                    userId.textContent = `user ID: ${post.userId}`
                    userId.classList.add('fw-bold')
                    userId.classList.add('text-secondary')

                    let postBody = document.createElement('p')
                    postBody.textContent = post.body

                    listItem.appendChild(postTitle)
                    listItem.appendChild(userId)
                    listItem.appendChild(postBody)
                    listOfPosts2.appendChild(listItem)
                });
            } else {
                console.error('Ошибка в запросе:', xhr.statusText);
            }
        };
        xhr.onerror = function () {
            console.error('Ошибка сети');
        };
        xhr.send();
    }

    // Имитируем задержку загрузки с сервера
    setTimeout( () => getPosts(), 2000 );

    postsContainer3.appendChild(listOfPosts2)

    buttonLoadPosts2.disabled = true;
})