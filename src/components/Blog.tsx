import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { simpleBlockCard } from '../lib/interface';
import { client } from '../lib/sanity';
import { Button } from '@/components/ui/button';
import { urlFor } from '../lib/sanity';

export const revalidate = 30;

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
  }`;
  const data = await client.fetch(query);
  return data;
}

export default function Blog() {
  const [data, setData] = useState<simpleBlockCard[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 mx-auto max-w-6xl">
      {data.map((post, idx) => (
        <Card key={idx} className='max-w-md mx-auto'>
          <CardContent className="mt-5">
            <img
            alt="image"
            width={800}
            height={800}
            src={urlFor(post.titleImage).url()}
            className="rounded-t-lg h-[200px] object-cover"
          />
            <h3 className="text-xl line-clamp-2">{post.title}</h3>
            <p className="line-clamp-3">{post.smallDescription}</p>
            <Button asChild className="w-full mt-7">
              <a href={`/blog/${post.currentSlug}`}>Read More</a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
