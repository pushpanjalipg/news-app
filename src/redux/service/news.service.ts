export async function getNewsByAPI(slug: string = 'all') {
   
   let response = await fetch(`https://newsapi.org/v2/everything?q=${slug}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);

   let data = await response.json();

   return data.articles;
}