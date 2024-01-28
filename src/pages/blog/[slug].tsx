import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { fullBlog } from "@/lib/interface";
import { client, urlFor } from "../../lib/sanity";
import Navigation from "../../components/Navigation";

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
    console.log(data);
    return data;
}

export default function BlogArticle() {
    const { slug } = useParams<{ slug: string }>();
    const [data, setData] = useState<fullBlog | null>(null);

    useEffect(() => {
        if (slug) {
            getData(slug).then(fetchedData => {
                setData(fetchedData);
            });
        }
    }, [slug]);

    if (!data) {
        return <div>Loading...</div>; // Or any other loading state representation
    }

    return (
        <div>
        <Navigation />
        <div className="max-w-2xl mx-auto space-y-4">
            <h1>
                <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
            </h1>
            <div className="flex items-center justify-center">
                <img src={urlFor(data.titleImage).url()} width={800} height={800} alt="title image" className="border rounded-lg mt-8" />
            </div>
            <div className="mt-16 prose prose-blue prose-lg dark:prose-invert">
                <PortableText value={data.content} />
            </div>
        </div>
        </div>
    );
}
