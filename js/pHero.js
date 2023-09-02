const loadPhero = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const tabContainer = document.getElementById('tab-container');

    data.data.forEach((phero) =>{
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handlepHeroNews('${phero?.category_id}')" class="tab bg-gray-200 m-1 text-black hover:bg-red-600 hover:text-white rounded-lg">
        ${phero?.category}</a>
        `;
        tabContainer.appendChild(div);
    })
    // const pHeros = data.data;
}

const handlepHeroNews = async (categoryId) =>{
    console.log(categoryId);
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();

    const pheroContainer = document.getElementById('phero-container');
    pheroContainer.innerHTML = '';
    
    data.data.forEach((phero) =>{
        console.log(phero);
        const div = document.createElement('div');
        
        div.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
            <figure><img class="max-h-40 relative w-full" src=${phero?.thumbnail}/></figure>
            
            <div class="card-body">
             <div class="flex">
              <h2 class="card-title ml-10">${phero.title}</h2>
             </div>
              <div class="flex items-center">
                <img class="w-10 h-10 rounded-full mr-6" src="${phero?.authors[0].profile_picture}"
                <p class="ml-10">${phero?.authors[0].profile_name}</p>
              </div>
              <p class="ml-16">${phero?.others.views? phero?.others.views: 'No'} views</p>
            </div>
        </div>
        `;
        pheroContainer.appendChild(div);
    });
};

loadPhero();
handlepHeroNews("1000");