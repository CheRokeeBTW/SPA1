// import axios from "axios";

// export async function generateStaticParams() {
//     // Fetch the list of products from your API or Redux store
//     const response = await axios.get("https://thingproxy.freeboard.io/fetch/https://www.mmobomb.com/api1/games");
//     const products = response.data;
  
//     // Return a list of dynamic params (product ids) for pre-rendering
//     const paths = products.map((product: any) => ({
//       id: product.id.toString(), // Ensure 'id' is a string
//     }));
  
//     return paths.map((params:any) => ({
//       params,
//     }));
//   }

import axios from 'axios';

export async function generateStaticParams() {
  try {
    const response = await axios.get(
      'https://thingproxy.freeboard.io/fetch/https://www.mmobomb.com/api1/games'
    );
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