"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { shopByNeed } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function ShopByNeed() {
  return (
    <section className="border-y border-border bg-card py-12 md:py-16">
      <Container>
        <div className="mb-8">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-secondary uppercase">Collections</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">SHOP BY NEED</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shopByNeed.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "group relative block min-h-[220px] overflow-hidden rounded-md border border-border md:min-h-[260px]",
                  index === 0 && "sm:col-span-1"
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-primary/10" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/75">{item.description}</p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-colors group-hover:bg-secondary group-hover:border-secondary">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
