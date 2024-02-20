import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link, type MetaFunction} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import type {
  FeaturedCollectionFragment,
  RecommendedProductsQuery,
} from 'storefrontapi.generated';
import Hero from '~/components/Home/Hero';
import ComingSoon from '~/components/Home/ComingSoon';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';
import {Button} from '~/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';

export const meta: MetaFunction = () => {
  return [{title: 'pedal center | home'}];
};

export async function loader({context}: LoaderFunctionArgs) {
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const featuredCollection = collections.nodes[0];
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);

  return defer({featuredCollection, recommendedProducts});
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="home">
      <Hero />
      <RecommendedProducts products={data.recommendedProducts} />
      <ComingSoon />
      <FeaturedCollection collection={data.featuredCollection} />
    </div>
  );
}

function FeaturedCollection({
  collection,
}: {
  collection: FeaturedCollectionFragment;
}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <section className="py-24">
      <div className="mx-auto max-w-screen-md text-center flex flex-col gap-y-16 pt-8">
        <h1 className="text-4xl">explore all our collection</h1>
        <Link
          className="featured-collection"
          to={`/collections/${collection.handle}`}
        >
          <Button className="text-3xl p-8">explore</Button>
        </Link>
      </div>
    </section>
  );
}

function RecommendedProducts({
  products,
}: {
  products: Promise<RecommendedProductsQuery>;
}) {
  return (
    <div className="recommended-products max-w-screen-lg mx-auto px-12 py-24">
      <h2 className="text-3xl font-bold mb-6">recommended pedals</h2>
      <Suspense fallback={<div>loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div>
              <Carousel
                className="w-full lowercase"
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
              >
                <CarouselContent>
                  {products.nodes.map((product, index) => (
                    <CarouselItem key={product.id}>
                      <div className="border-zinc-900 border flex flex-col sm:flex-row p-4">
                        <div className="sm:w-1/2 p-4 sm:p-8">
                          <Image
                            data={product.images.nodes[0]}
                            aspectRatio="1/1"
                            sizes="(min-width: 45em) 20vw, 50vw"
                          />
                        </div>
                        <div className="sm:w-1/2 p-4 flex flex-col justify-between">
                          <div>
                            <Link
                              key={product.id}
                              className="recommended-product"
                              to={`/products/${product.handle}`}
                            >
                              <h4 className="text-4xl mb-4">{product.title}</h4>
                            </Link>
                            <p className="hidden sm:block">
                              {product.description}
                            </p>
                          </div>
                          <div className="sm:text-right flex flex-col gap-y-4">
                            <Money
                              data={product.priceRange.minVariantPrice}
                              className="text-4xl"
                            />
                            <Link
                              key={product.id}
                              className="w-full"
                              to={`/products/${product.handle}`}
                            >
                              <Button className="w-full">buy now</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
` as const;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    description
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
` as const;
