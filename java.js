async function name() {
    
        const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
        const data = await response.json();
        
        const result = data.recipes.map(user => 
        `
        <div class="user">
            <h2>${user.title}</h2>
            <img src="${user.image_url}" alt="${user.title}">
        </div>
        `
        ).join('');

        document.querySelector(".one").innerHTML = result;
 
}

name();


