import { z, defineCollection } from 'astro:content';

const homeCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    hero_kicker: z.string(),
    hero_title: z.string(),
    hero_desc: z.string(),
    hero_cta: z.string(),
    about_title: z.string(),
    about_desc: z.string(),
    services: z.array(
      z.object({
        title: z.string(),
        description: z.string()
      })
    ),
    portfolio: z.array(
      z.object({
        title: z.string(),
        type: z.string(),
        image: z.string()
      })
    ),
    commission_title: z.string(),
    commission_desc: z.string(),
    faq: z.array(
      z.object({
        q: z.string(),
        a: z.string()
      })
    ),
    footer_text: z.string()
  })
});

export const collections = {
  home: homeCollection
};
