import { MetadataRoute } from 'next';

// baseUrl
import { baseUrl } from '@/utils/baseUrl';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
