fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
        const container = document.getElementById('posts-list');
        
        posts.forEach(post => {
            container.innerHTML += `
                <article class="post-card">
                    <img src="${post.image || 'https://via.placeholder.com/300'}" alt="${post.title}">
                    <h2>${post.title}</h2>
                    <p class="date">${post.date}</p>
                    <p>${post.summary}</p>
                    <a href="post.html?id=${post.id}" class="read-more">Читать далее →</a>
                </article>
            `;
        });
    })
    .catch(error => {
        console.error('Ошибка загрузки постов:', error);
    });