import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { footerLinks, paymentMethods } from "@/data/navigation";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="py-14 md:py-16">
        <div className="mb-10 max-w-lg">
          <p className="font-display text-xl font-semibold tracking-wide uppercase">{company.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/65">{company.description}</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Shop</h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Categories</h3>
            <ul className="space-y-2.5">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Customer Care</h3>
            <ul className="space-y-2.5">
              {footerLinks.customerCare.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Policies</h3>
            <ul className="space-y-2.5">
              {footerLinks.policies.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Contact</h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li className="font-medium text-white">{company.name}</li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-white">
                  {company.email}
                </a>
              </li>
              <li>
                {company.address.street}
                <br />
                {company.address.city}, {company.address.state} {company.address.zip}
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-white/50">{company.copyright}</p>
          <div className="flex items-center gap-2">
            {paymentMethods.map((method) => (
              <Image
                key={method.name}
                src={method.icon}
                alt={method.name}
                width={40}
                height={28}
                className="opacity-80"
              />
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
