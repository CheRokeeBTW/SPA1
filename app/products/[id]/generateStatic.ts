import axios from 'axios';

export async function generateStaticParams() {
  try {
    const response = await axios.get('https://mmo-games.p.rapidapi.com/games', {
      headers: {
        'X-RapidAPI-Key': '2aebb80693msh933786e73da56d5p1a2cbajsnd03f5955141c', 
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
      },
    });

    const products = response.data;

    return products.map((product: any) => ({
      id: product.id.toString(),
      title: product.title,
      thumbnail: product.thumbnail,
      short_description: product.short_description,
      genre: product.genre,
      platform: product.platform,
      publisher: product.publisher,
      release_date: product.release_date,
    }));
  } catch (error) {
    console.error('Error fetching products for static paths:', error);
    return [];
  }
}