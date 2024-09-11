import { StoryblokCMS as cms } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_PRODUCTION_STORYBLOK_TOKEN,
    use: [apiPlugin],
  });

export default async function sitemap() {
    try {
        const pages = (await cms.getStaticPaths()).filter(
            (path) => path?.slug?.[0] !== "config"
        );

        const sitemap = pages.map((page) => {
            const slug = page?.slug.filter((item) => item !== "")
            let finalSlug = slug?.length > 0 ? slug.join("/") : slug
            const url = `localhost:3000/${finalSlug ?? ""}`
            return {
                url: url,
                lastModiefied: new Date(),
                priority: 1,
            }
        })

        return sitemap;


    } catch (error) {
        return []
    }
}