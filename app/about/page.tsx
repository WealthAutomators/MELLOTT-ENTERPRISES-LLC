import { company } from "@/data/company";
import { testimonials } from "@/data/testimonials";
import { PageHero, PageSection } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Check, Award, Heart, ShoppingBag } from "lucide-react";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${company.name}`}
        description={company.description}
        breadcrumbs={[{ label: "About Us" }]}
      />

      <Container className="pb-16">
        <div className="grid items-center gap-10 py-12 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border shadow-sm">
            <Image src="/banners/about.jpg" alt={`About ${company.name}`} fill className="object-cover" sizes="50vw" />
          </div>
          <PageSection title="Our Story">
            <p>
              Mellott Enterprises LLC was founded to make everyday shopping simpler — bringing useful
              products across home, tech, outdoors, and family life into one dependable marketplace.
              We focus on practical upgrades and essentials that earn their place.
            </p>
            <p className="mt-4">
              Based in Springfield, Tennessee, we partner with reliable suppliers to offer fair prices
              without compromising on quality. Every product is selected with care, and our team is
              dedicated to a smooth experience from browsing to delivery.
            </p>
          </PageSection>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShoppingBag, title: "Wide Selection", desc: "12+ categories covering home, tech, outdoors, and family needs." },
            { icon: Award, title: "Trusted Quality", desc: "Every product is vetted for usefulness, value, and reliability." },
            { icon: Heart, title: "Customer First", desc: "30-day returns, responsive support, and a satisfaction focus." },
            { icon: Check, title: "Easy Shopping", desc: "One marketplace, clear navigation, and a simple checkout demo." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-md border border-border bg-card p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                <Icon className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="font-display font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <PageSection title="What Our Customers Say" className="mt-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {testimonials.map((t) => (
              <div key={t.id} className="rounded-md border border-border bg-card p-6 shadow-sm">
                <StarRating rating={t.rating} showCount={false} size="md" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/shop">Shop Our Collection</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
