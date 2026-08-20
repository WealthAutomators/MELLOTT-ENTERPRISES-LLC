"use client";

import { homepageFeaturedSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import Link from "next/link";

export function FeaturedFinds() {
  const products = getProductsBySlugs(homepageFeaturedSlugs);

  return (
    <section className="bg-card py-12 md:py-16">
      <Container>
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-secondary uppercase">Featured</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
              GOOD FINDS. NO FUSS.
            </h2>
          </div>
          <Link href="/shop" className="text-sm font-medium text-foreground underline-offset-4 hover:underline">
            Shop all →
          </Link>
        </div>

        <div className="utility-rail -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 lg:gap-6">
          {products.map((product) => (
            <div key={product.id} className="w-[220px] shrink-0 md:w-auto">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
