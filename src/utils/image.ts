const BASE_URL = 'https://storage.owndays.com/storage';

export const getImageUrl = (path?: string | null) => {
  if (!path) return '/placeholder.png';

  if (path.startsWith('http')) return path;

  return `${BASE_URL}/${path.replace(/^\/+/, '')}`;
};