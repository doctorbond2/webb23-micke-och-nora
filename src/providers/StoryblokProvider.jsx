'use client';
import { StoryblokCMS } from '@/utils/cms';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';

import Page from '@/components/content-types/Page';
import Grid from '@/components/nestable/Grid';
import Teaser from '@/components/nestable/Teaser';
import RichTextDefault from '@/components/nestable/RichText';
import ProductPage from '@/components/content-types/ProductPage';
const components = {
  page: Page,
  ProductPage: ProductPage,
  grid: Grid,
  teaser: Teaser,
  richtext: RichTextDefault,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
