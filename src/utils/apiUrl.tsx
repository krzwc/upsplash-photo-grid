export const apiUrl = (keyword: string, APP_ID: string): string => {
  return `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${keyword}&client_id=${APP_ID}`;
};
