"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { utilitySpotlight } from "@/data/homepage";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function UtilitySpotlight() {
  const product = getProductBySlug(utilitySpotlight.productSlug);
  if (!product) return null;

  return (
    <section className="border-y border-border bg-background py-14 md:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            className="relative aspect-[4/5] overflow-hidden rounded-md border border-border bg-card lg:col-span-6 lg:aspect-[5/4]"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.22em] text-secondary uppercase">Utility Spotlight</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
              {utilitySpotlight.headline}
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">{utilitySpotlight.description}</p>

            <div className="mt-8 rounded-md border border-border bg-card p-5 md:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border pb-4">
                <div>
                  <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{product.category}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold">{product.name}</h3>
                </div>
                <p className="font-display text-xl font-bold text-secondary">
                  {formatPrice(product.salePrice ?? product.price)}
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {utilitySpotlight.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6" size="lg">
                <Link href={`/product/${product.slug}`}>Shop Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
