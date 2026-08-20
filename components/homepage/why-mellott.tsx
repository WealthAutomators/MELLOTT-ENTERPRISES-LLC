import { Check, ShoppingBag, Star, Tag } from "lucide-react";
import { whyMellott } from "@/data/homepage";
import { Container } from "@/components/ui/container";

const iconMap = {
  check: Check,
  tag: Tag,
  cart: ShoppingBag,
  star: Star,
};

export function WhyMellott() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mb-10 text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-secondary uppercase">Brand</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">WHY MELLOTT?</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyMellott.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] ?? Check;
            return (
              <div
                key={feature.id}
                className="rounded-md border border-border bg-card p-6 transition-shadow hover:shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background">
                  <Icon className="h-4 w-4 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
