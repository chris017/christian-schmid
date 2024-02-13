export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'titleImage',
            title: 'Title Image',
            type: 'image',
        },
        {
            name: 'smallDescription',
            title: 'Small Description',
            type: 'text',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of : [{type: 'block'}]
        },
        {
            type: "markdown",
            description: "A Github flavored markdown field with image uploading",
            name: "content"
          },
    ],
}
