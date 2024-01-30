import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { simpleBlockCard } from '../lib/interface';
import { client } from '../lib/sanity';
import { Button } from '@/components/ui/button';
import { urlFor } from '../lib/sanity';
// import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

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
  
  // const { isLoading, isAuthenticated } = useKindeAuth();
  // console.log(isAuthenticated);
  // if (isLoading) {
  //   return <p>Loading...</p>; // Display loading indicator while authentication is in progress
  // } else if (isAuthenticated) {
    // Display the blog when the user is authenticated
    return (
      <div>
        <h1 className='text-center text-3xl p-6'>Welcome to my <span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>Dev Blog</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto max-w-4xl">
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
              <h3 className="text-xl m-4 line-clamp-2">{post.title}</h3>
              <p className="p-4 line-clamp-3">{post.smallDescription}</p>
              <div className='flex justify-center'>
              <Button asChild className="justify-center mt-7 ">
                <a href={`/dashboard/blog/${post.currentSlug}`}>Read More</a>
              </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
    );
  // } else {
  //   // Display a message when the user is not authenticated
  //   return <h1 className='text-center text-3xl mt-24 container'>You must be <span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>logged in</span> to see <span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>the blog</span></h1>;
  // }
}