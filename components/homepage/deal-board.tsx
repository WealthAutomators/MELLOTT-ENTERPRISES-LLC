"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ShoppingBag } from "lucide-react";
import { dealsEndTime, homepageDealsSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { calculateDiscount, formatPrice } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import { Container } from "@/components/ui/container";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function DealBoard() {
  const deals = getProductsBySlugs(homepageDealsSlugs);
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (productId: string) => {
    const product = deals.find((p) => p.id === productId);
    if (!product) return;
    addToCart(product);
    setAddedId(productId);
    setTimeout(() => setAddedId(null), 1400);
  };

  return (
    <section className="bg-primary py-14 md:py-20">
      <Container>
        <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <p className="text-[11px] font-semibold tracking-[0.22em] text-accent uppercase">Live board</p>
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              DEAL BOARD
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-md border border-white/15 bg-white/5 px-4 py-3">
            <span className="text-xs font-medium tracking-wide text-white/60 uppercase">Ends in</span>
            <CountdownTimer endTime={dealsEndTime} className="text-white" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((product) => {
            const discount =
              product.salePrice && product.salePrice < product.price
                ? calculateDiscount(product.price, product.salePrice)
                : 0;

            return (
              <div
                key={product.id}
                className="flex gap-4 rounded-md border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-colors hover:bg-white/[0.08]"
              >
                <Link
                  href={`/product/${product.slug}`}
                  className="relative h-28 w-24 shrink-0 overflow-hidden rounded-md border border-white/10"
                >
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <Link href={`/product/${product.slug}`} className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-white hover:text-secondary">
                        {product.name}
                      </h3>
                    </Link>
                    {discount > 0 && (
                      <Badge variant="sale" className="shrink-0">
                        -{discount}%
                      </Badge>
                    )}
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm font-bold text-secondary">
                      {formatPrice(product.salePrice ?? product.price)}
                    </span>
                    {product.salePrice && (
                      <span className="text-xs text-white/40 line-through">{formatPrice(product.price)}</span>
                    )}
                  </div>
                  <div className="mt-auto flex items-center justify-between gap-2 pt-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wide text-accent uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      In stock
                    </span>
                    <Button
                      size="sm"
                      className="h-8 px-3"
                      onClick={() => handleAdd(product.id)}
                    >
                      {addedId === product.id ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          Added
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="h-3.5 w-3.5" />
                          Add
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary">
            <Link href="/shop?sale=true">View all deals</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
