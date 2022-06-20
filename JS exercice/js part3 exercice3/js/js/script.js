let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
let list = document.getElementById('list');

languages.forEach((item) => {
    list.innerHTML += `<li>${item}</li>`;
});

