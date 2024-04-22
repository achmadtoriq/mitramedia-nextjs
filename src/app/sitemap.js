export default function sitemap() {
    return [
      {
        url: 'https://acme.com',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://mitramedia-advertising-v1.vercel.app/abouts',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: 'https://mitramedia-advertising-v1.vercel.app/projects',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      
      },
      {
        url: 'https://mitramedia-advertising-v1.vercel.app/location-billboard',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      
      },
      {
        url: 'https://mitramedia-advertising-v1.vercel.app/contacts',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ]
  }