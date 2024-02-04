import { Card, CardContent } from "@/components/ui/card";
import { simpleBlockCard } from "../../lib/interface";
import { client } from "../../lib/sanity";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

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

export default async function Dashboard() {
  const { isAuthenticated } = getKindeServerSession();
  const data: simpleBlockCard[] = await getData();
  console.log(data);
  return (await isAuthenticated()) ? (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            alt="image"
            width={800}
            height={800}
            src={urlFor(post.titleImage).url()}
            className="rounded-t-lg h-[200px] object-cover"
          />
          <CardContent className="mt-5">
            <h3 className="text-xl line-clamp-2">{post.title}</h3>
            <p className="line-clamp-3">{post.smallDescription}</p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  ) : (
    <div>This page is protected, please Login to view it</div>
  );
}