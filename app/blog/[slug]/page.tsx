
import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "../../lib/sanity";
import Image from 'next/image';
import {PortableText} from '@portabletext/react'

export const revalidate = 30;

async function getData(slug: string) {
    const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]
    `
    const data = await client.fetch(query);
    return data;
}

export default async function BlogArticle({params}: {params: {slug: string}}) {
    const data: fullBlog = await getData(params.slug);
    console.log(data);
    return (
        <div className="max-w-2xl mx-auto space-y-4">
            <h1>
                <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
            </h1>
            <div className="flex items-center justify-center">
            <Image src={urlFor(data.titleImage).url()} priority width={800} height={800} alt="title image" className="border rounded-lg mt-8" />
            </div>
            <div className="mt-16 prose prose-blue prose-lg dark:prose-invert">
                <PortableText value={data.content} />
            </div>
        </div>
    );
}