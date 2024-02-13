import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "../../lib/sanity";
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import ReactMarkdown from 'react-markdown';

export const revalidate = 30;

async function getData(slug: string) {
    const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage,
      }[0]
    `
    const data = await client.fetch(query);
    console.log(data);
    return data;
}

// Define a type for the heading object
interface Heading {
    title: string;
    level: number;
}

// Function to extract headings from markdown
function extractHeadings(markdown: string | null | undefined): Heading[] {
    if (typeof markdown !== 'string') {
        return []; 
    }
    
    const lines = markdown.split('\n');
    return lines
        .filter(line => /^#+\s/.test(line)) // Filter lines starting with one or more '#' characters
        .map(line => {
            const match = line.match(/^#+\s/); // Match the '#' characters at the beginning of the line
            if (match) {
                const level = match[0].length - 1; // Adjusted to correctly determine the heading level (subtract 1 because match includes a space)
                const title = line.replace(/^#+\s/, ''); // Remove '#' characters to extract the heading title
                return { title, level };
            }
            return null; // Return null if the line doesn't match the expected pattern
        })
        .filter(Boolean) as Heading[]; // Filter out any null values and assert the type to Heading[]
}

export default async function BlogArticle({params}: {params: {slug: string}}) {
    const data: fullBlog = await getData(params.slug);
    const headings: Heading[] = extractHeadings(data.content);

    return (
        <div className="max-w-2xl mx-1 space-y-4 md:mx-auto">
            <h1>
                <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
            </h1>
            <div className="flex items-center justify-center">
                <Image src={urlFor(data.titleImage).url()} priority width={800} height={800} alt="title image" className="border rounded-lg mt-8" />
            </div>
            {/* Render TOC */}
            <div className="toc mt-8">
                <h2 className="mt-2 block text-xl text-left leading-8 font-bold tracking-tight sm:text-2xl">Table of Contents:</h2>
                <ul>
                    {headings.map(({ title, level }) => (
                        <li key={title} style={{ marginLeft: `${(level - 1) * 20}px` }}>
                            <a href={`#${encodeURIComponent(title.trim().toLowerCase().replace(/\s+/g, '%20'))}`} className="hover:underline">- {title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-16 prose prose-blue prose-lg dark:prose-invert">
                <ReactMarkdown
                    components={{
                        // Add custom heading components to create anchor links
                        h1: ({ node, children }) => <h1 id={encodeURIComponent((children as string) ?? '').toLowerCase()}>{children}</h1>,
                        h2: ({ node, children }) => <h2 id={encodeURIComponent((children as string) ?? '').toLowerCase()}>{children}</h2>,
                        h3: ({ node, children }) => <h3 id={encodeURIComponent((children as string) ?? '').toLowerCase()}>{children}</h3>,
                        h4: ({ node, children }) => <h4 id={encodeURIComponent((children as string) ?? '').toLowerCase()}>{children}</h4>,
                        h5: ({ node, children }) => <h5 id={encodeURIComponent((children as string) ?? '').toLowerCase()}>{children}</h5>,
                        h6: ({ node, children }) => <h6 id={encodeURIComponent((children as string) ?? '').toLowerCase()}>{children}</h6>,
                    }}
                >
                    {data.content}
                </ReactMarkdown>
            </div>
        </div>
    );
}
