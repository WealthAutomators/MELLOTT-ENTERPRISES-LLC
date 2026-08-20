"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { quickCategories } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function QuickCategories() {
  return (
    <section className="border-b border-border py-12 md:py-16">
      <Container>
        <div className="mb-8">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-secondary uppercase">Browse</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">START HERE</h2>
        </div>

        <div className="utility-rail -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-6 md:overflow-visible md:px-0 lg:grid-cols-12">
          {quickCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className={cn(
                "w-[150px] shrink-0 md:w-auto",
                cat.width === "wide" && "md:col-span-2 lg:col-span-3",
                cat.width === "normal" && "md:col-span-2 lg:col-span-2",
                cat.width === "narrow" && "md:col-span-2 lg:col-span-2"
              )}
            >
              <Link
                href={cat.href}
                className="group relative block aspect-[4/3] overflow-hidden rounded-md border border-border bg-card"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 150px, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-3">
                  <span className="text-sm font-semibold text-white">{cat.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
