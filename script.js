
 const API_KEY= "468af5b976714f3d860144315961e6e7"
 const url= "https://newsapi.org/v2/everything?q="

 window.addEventListener("load", () => fetchNews("Pakistan"));

 async function fetchNews(query){
    const response = await fetch(`${url}${query}&apikey=${API_KEY}`);
    const data = await response.json();
    bindData(data.articles)
 }

 function bindData(articles){
    const cardcontainer = document.getElementById("card-container")
    const template = document.getElementById("template")

    cardcontainer.innerHTML= "";

    articles.forEach(article => {
       if(!article.urlToImage) return;
       const cardClone = template.content.cloneNode(true);
       fillDataInCard(cardClone, article);
       cardcontainer.appendChild(cardClone);
    });
 }

 function fillDataInCard(cardClone, article){
    const img = cardClone.querySelector(' #news-img');
    const title = cardClone.querySelector(' #title');
    const source = cardClone.querySelector(' #news-source');
    const description = cardClone.querySelector(' #news-desc');

    img.src = article.urlToImage;
    title.innerHTML = article.title;
    description.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US",{
        timezone:"Asia/Karachi"
    });
    source.innerHTML = `${article.source.name} . ${date}`;
    
    cardClone.firstElementChild.addEventListener('click', () =>{
      window.open(article.url, "_blank")
    } )

 }

 let selectedItems = null

 function Sports(id){
   fetchNews(id);
   const navItems = document.getElementById(id);
   selectedItems?.classList.remove('active')
   selectedItems = navItems
   selectedItems.classList.add('active');
}
function Technology(id){
   fetchNews(id);
   const navItems = document.getElementById(id);
   selectedItems?.classList.remove('active');
   selectedItems = navItems
   selectedItems.classList.add('active');
}
function Politics(id){
   fetchNews(id);
   const navItems = document.getElementById(id);
   selectedItems?.classList.remove('active');
   selectedItems = navItems
   selectedItems.classList.add('active');
}
function Finance(id){
   fetchNews(id);
   const navItems = document.getElementById(id);
   selectedItems?.classList.remove('active');
   selectedItems = navItems
   selectedItems.classList.add('active');
}

const searchbtn = document.getElementById('button') 
const searchText = document.getElementById('search-text')

searchbtn.addEventListener('click', ()=>{
   const query = searchText.value
   if(!query) return;
   fetchNews(query);
   selectedItems.classList.remove('active')
})

function reload(){
   window.location.reload();
}