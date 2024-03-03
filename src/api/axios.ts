import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kitsu.io/api/'
});

export const getAllData = async ({ type, offset } : { type: string, offset: number }) => {
  try {
    const response = await instance.get(`edge/${type}?page[limit]=20&page[offset]=${offset}`); 
    return response.data;
  } catch (error) {
    console.error('Error while fetching data:', error);
    return null;
  }
};

export const getCategorie = async ({ type, categorie, offset }:{ type: string, categorie: string, offset: number }) => {
  try {
    const response = await instance.get(`edge/${type}?filter[categories]=${categorie}&page[limit]=20&page[offset]=${offset}`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching data:', error);
    return null;
  }
};

export const getAnimeById = async (id: number) => {
  try {
    const response = await instance.get(`edge/anime/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching data:', error);
    return null;
  }
}

export const getMangaById = async (id: number) => {
  try {
    const response = await instance.get(`edge/manga/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching data:', error);
    return null;
  }
};

export const searchAnimeByText = async (text: string) => {
  try {
    const response = await instance.get(`edge/anime?filter[text]=${text}`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching data:', error);
    return null;
  }
};

export const searchMangaByText = async (text: string) => {
  try {
    const response = await instance.get(`edge/manga?filter[text]=${text}`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching data:', error);
    return null;
  }
};

export const getCharactersList = async ({ filter, mediaId }: { filter: string, mediaId: any}) => {
  try {
    const response = await instance.get(`edge/${filter}/${mediaId}/characters`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching data:', error);
    return null;
  }
};

export const getCharacterById = async ({ characterId }: { characterId: any }) => {
  try {
    const response = await instance.get(`edge/media-characters/${characterId}/character`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching data:', error);
    return null;
  }
};
