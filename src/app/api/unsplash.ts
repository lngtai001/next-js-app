
const clientId = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID

const UNSPLASH_ROOT = 'https://api.unsplash.com'

//https://api.unsplash.com/search/photos?query='panda'&client_id=

export const getPhotosByQuery = async ({ query }: { query: string }) => {

  const data = await fetch(
    `${UNSPLASH_ROOT}/search/photos?query=${query}&client_id=${clientId}&per_page=6`
  )
  return data
}