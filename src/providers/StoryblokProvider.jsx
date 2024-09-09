'use client';
import { StoryblokCMS } from '@/utils/cms';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';

import Hero from '@/components/nestable/Hero';
import Page from '@/components/content-types/Page';
import Grid from '@/components/nestable/Grid';
import Teaser from '@/components/nestable/Teaser';
import RichTextDefault from '@/components/nestable/RichText';
import ProductPage from '@/components/content-types/ProductPage';
import ProductGrid from '@/components/nestable/ProductGrid';
import Article from '@/components/nestable/Article';

import LatestProducts from '@/components/client/LatestProducts';
const components = {
  page: Page,
  ProductPage: ProductPage,
  grid: Grid,
  teaser: Teaser,
  richtext: RichTextDefault,
  product_list: ProductGrid,
  article: Article,
  product_page: ProductPage,
  hero: Hero,
  latest_products: LatestProducts,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
