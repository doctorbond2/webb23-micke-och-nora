import { getStoryblokApi } from '@storyblok/react/rsc';
export class StoryblokCMS {
  static IS_PROD = process.env.NODE_ENV === 'production';
  static IS_DEV = process.env.NODE_ENV === 'development';
  static VERSION = this.IS_PROD ? 'published' : 'draft';
  static TOKEN = this.IS_PROD
    ? process.env.NEXT_PUBLIC_PUBLIC_STORYBLOK_TOKEN
    : process.env.NEXT_PUBLIC_PREVIEW_STORYBLOK_TOKEN;

  static async sbGet(path, params) {
    return getStoryblokApi().get(path, params);
  }

  static async getStory(params) {
    if (!params) return {};
    const uri = params?.slug?.join('/');
    const storyUrl = 'cdn/stories/' + uri;
    const { data } = await this.sbGet(storyUrl, this.getDefaultSBParams());
    return data.story;
  }

  static getDefaultSBParams() {
    return {
      version: this.VERSION,
      resolve_links: 'url',
      cv: Date.now(),
    };
  }

  static async getConfig() {
    try {
      const { data } = await this.sbGet(
        'cdn/stories/config',
        this.getDefaultSBParams()
      );
      return data?.story;
    } catch (error) {
      console.log('CONFIG ERROR', error);
      return {};
    }
  }

  static async generateMetaFromStory(slug) {
    return {
      title: 'Fina kläder på nätet',
      description: 'Description',
    };
  }

  static async getProducts() {
    try {
      const { data } = await this.sbGet('cdn/stories/', {
        starts_with: 'products/',
        version: this.VERSION,
        per_page: 100,
      });
      return data.stories;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }
  static async getStaticPaths() {
    try {
      let sbParams = {
        version: this.VERSION,
      };

      let { data } = await this.sbGet('cdn/links/', sbParams);
      let paths = [];

      Object.keys(data.links).forEach((linkKey) => {
        const link = data.links[linkKey];
        if (link.is_folder || link.slug === 'home') {
          return;
        }
        let slug = link.slug === 'home' ? [] : link.slug;

        if (slug != '') {
          paths.push({
            slug: slug.split('/'),
          });
        }
      });

      return paths;
    } catch (error) {
      console.log('PATHS ERROR', error);
    }
  }
  static async searchForProducts(searchTerm) {
    try {
      const filterQuery = {
        component: { in: 'product_page' },
        name: { like: `%${searchTerm}%` },
      };
      const secondFilterQuery = {
        component: { in: 'product_page' },
      };
      const { data } = await this.sbGet('cdn/stories/', {
        starts_with: `products/`,
        version: this.VERSION,
        filter_query: filterQuery,
      });

      if (data.stories.length === 0) {
        const searchTwo = await this.sbGet('cdn/stories/', {
          starts_with: `products/%${searchTerm}%/`,
          version: this.VERSION,
          filter_query: secondFilterQuery,
        });

        return searchTwo.data.stories;
      }

      return data.stories;
    } catch (error) {
      console.error('Error searching for products:', error);
    }
  }
}
