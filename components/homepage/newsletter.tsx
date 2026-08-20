"use client";

import { useState } from "react";
import { newsletter } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-primary py-14 md:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            {newsletter.title}
          </h2>
          <p className="mt-3 text-white/70">{newsletter.description}</p>

          {submitted ? (
            <p className="mt-8 rounded-md border border-accent/40 bg-accent/15 px-4 py-3 text-sm font-medium text-accent-foreground">
              You&apos;re on the list. Good finds incoming.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                required
                placeholder={newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 flex-1 rounded-md border-white/20 bg-white text-foreground"
              />
              <Button type="submit" size="lg" className="h-12 shrink-0">
                {newsletter.buttonText}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
