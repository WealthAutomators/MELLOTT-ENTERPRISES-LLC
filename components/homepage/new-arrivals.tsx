"use client";

import { homepageNewArrivalSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NewArrivals() {
  const products = getProductsBySlugs(homepageNewArrivalSlugs);

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-secondary uppercase">Just in</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">NEW ON THE SHELF</h2>
          </div>
          <Link href="/new-arrivals" className="text-sm font-medium underline-offset-4 hover:underline">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-5">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={cn(
                index === 0 ? "col-span-2 md:col-span-6 md:row-span-2" : "col-span-1 md:col-span-3"
              )}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
