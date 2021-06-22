
const url = 'https://jsonplaceholder.typicode.com/posts';

const dom = (objeto)  =>  {
    const container = document.getElementById('all');

    const new_element = document.createElement('div');
    new_element.className = "card";
    let template = `
        <h2 class="title">${objeto.title}</h2>

        <div class="body">${objeto.body}</div>
    `;

    new_element.innerHTML = template;
    container.appendChild(new_element);
}

async function get_posts() {
    const response = await fetch(url);

    const data = response.json()
    .then((data) => {
        data.map(dato => {
            dom(dato);
        });
    });

}

get_posts();

