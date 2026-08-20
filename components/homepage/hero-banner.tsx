"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroGridSlugs, heroSlides } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];
  const [line1, line2] = slide.headline.split("\n");
  const products = getProductsBySlugs(heroGridSlugs);
  const [feature, supportA, supportB, promo] = products;

  return (
    <section className="relative overflow-hidden border-b border-border bg-primary">
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt=""
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />
      </div>

      <Container className="relative py-14 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-block rounded-sm bg-secondary px-2.5 py-1 text-[10px] font-bold tracking-[0.2em] text-secondary-foreground uppercase">
              Mellott Selects
            </span>
            <h1 className="mt-5 font-display text-4xl leading-[0.95] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              <span className="block">{line1}</span>
              <span className="block">{line2}</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
              {slide.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={slide.ctaLink}>{slide.ctaText}</Link>
              </Button>
              {slide.secondaryCtaText && slide.secondaryCtaLink && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white hover:text-primary"
                >
                  <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
                </Button>
              )}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-12 grid-rows-2 gap-3 sm:gap-4 lg:col-span-7"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            {feature && (
              <Link
                href={`/product/${feature.slug}`}
                className="group relative col-span-12 row-span-2 min-h-[280px] overflow-hidden rounded-md border border-white/15 sm:col-span-7 sm:min-h-[360px]"
              >
                <Image
                  src={feature.images[0]}
                  alt={feature.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="text-sm font-semibold text-white">{feature.name}</p>
                  <p className="mt-1 text-xs text-white/70">{formatPrice(feature.salePrice ?? feature.price)}</p>
                </div>
              </Link>
            )}

            {supportA && (
              <Link
                href={`/product/${supportA.slug}`}
                className="group relative col-span-6 min-h-[140px] overflow-hidden rounded-md border border-white/15 sm:col-span-5 sm:min-h-[172px]"
              >
                <Image
                  src={supportA.images[0]}
                  alt={supportA.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 22vw"
                />
                <div className="absolute inset-0 bg-primary/25" />
              </Link>
            )}

            {supportB && (
              <Link
                href={`/product/${supportB.slug}`}
                className="group relative col-span-6 min-h-[140px] overflow-hidden rounded-md border border-white/15 sm:col-span-5 sm:min-h-[172px]"
              >
                <Image
                  src={supportB.images[0]}
                  alt={supportB.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 22vw"
                />
                <div className="absolute inset-0 bg-primary/25" />
              </Link>
            )}

            {promo && (
              <Link
                href={`/product/${promo.slug}`}
                className="col-span-12 flex min-h-[88px] items-center justify-between gap-4 rounded-md border border-secondary/40 bg-secondary px-4 py-3 text-secondary-foreground sm:col-span-5 sm:min-h-0 sm:flex-col sm:items-start sm:justify-center sm:py-4"
              >
                <div>
                  <p className="text-[10px] font-bold tracking-[0.18em] uppercase">Featured</p>
                  <p className="mt-1 text-sm font-semibold leading-snug">{promo.name}</p>
                </div>
                <p className="text-sm font-bold">{formatPrice(promo.salePrice ?? promo.price)}</p>
              </Link>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
