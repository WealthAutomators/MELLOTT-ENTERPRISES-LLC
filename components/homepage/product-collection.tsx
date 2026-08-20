"use client";

import { homepageCollectionSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ProductCollection() {
  const products = getProductsBySlugs(homepageCollectionSlugs);
  const [featured, ...rest] = products;
  const rail = rest.slice(0, 4);
  const compact = rest.slice(4);

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-secondary uppercase">Merchandising</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">PRODUCT COLLECTION</h2>
            <p className="mt-2 text-muted-foreground">
              A structured mix of standouts and supporting finds from across the marketplace.
            </p>
          </div>
          <Link href="/shop" className="text-sm font-medium underline-offset-4 hover:underline">
            Shop collection →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {featured && (
            <div className="lg:col-span-5">
              <ProductCard product={featured} />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:col-span-7">
            {rail.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {compact.length > 0 && (
          <div className="utility-rail mt-8 -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
            {compact.map((product, index) => (
              <div
                key={product.id}
                className={cn("w-[200px] shrink-0 md:w-auto", index > 3 && "hidden md:block")}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
