import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";

export function CustomerReviews() {
  const featured = testimonials[0];
  const others = testimonials.slice(1, 5);

  return (
    <section className="border-y border-border bg-card py-12 md:py-16">
      <Container>
        <div className="mb-8 max-w-xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-secondary uppercase">Reviews</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">CUSTOMER REVIEWS</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <article className="rounded-md border border-border bg-background p-6 md:p-8 lg:col-span-7">
            <StarRating rating={featured.rating} showCount={false} size="md" />
            <blockquote className="mt-5 font-display text-2xl leading-snug font-semibold tracking-tight text-foreground md:text-3xl">
              &ldquo;{featured.text}&rdquo;
            </blockquote>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-3 border-t border-border pt-5">
              <div>
                <p className="text-sm font-semibold">{featured.name}</p>
                <p className="text-xs text-muted-foreground">{featured.location}</p>
              </div>
              {featured.product && (
                <p className="text-xs font-semibold tracking-wide text-secondary uppercase">{featured.product}</p>
              )}
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {others.map((t) => (
              <article key={t.id} className="rounded-md border border-border bg-background p-5">
                <StarRating rating={t.rating} showCount={false} size="sm" />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 flex items-end justify-between gap-2">
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                  {t.product && (
                    <p className="max-w-[45%] text-right text-[10px] font-semibold tracking-wide text-secondary uppercase">
                      {t.product}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
