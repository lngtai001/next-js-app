import { getPhotosByQuery } from '@/app/api/unsplash'

const query = 'people'

export const Unsplash = async () => {
    const data  = await getPhotosByQuery({query})
    console.log("unsplash data: ", data.json())

    return (
        <></>
    )
}