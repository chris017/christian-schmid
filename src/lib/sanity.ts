import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    apiVersion: '2021-03-25',
    projectId: '5efb9ya7',
    dataset: 'production',
    useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}