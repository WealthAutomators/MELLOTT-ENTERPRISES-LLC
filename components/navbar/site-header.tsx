"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { company } from "@/data/company";
import {
  categoryRailLinks,
  navigationLinks,
  topStripLinks,
} from "@/data/navigation";
import { searchProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  const searchResults = searchQuery.length > 0 ? searchProducts(searchQuery).slice(0, 5) : [];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const inDesktop = searchRef.current?.contains(target);
      const inMobile = mobileSearchRef.current?.contains(target);
      if (!inDesktop && !inMobile) setSearchOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
      setMobileOpen(false);
    }
  };

  const SearchPanel = ({ mobile = false }: { mobile?: boolean }) => (
    <div ref={mobile ? mobileSearchRef : searchRef} className={cn("relative", mobile ? "w-full" : "w-full max-w-xs xl:max-w-sm")}>
      <form onSubmit={handleSearchSubmit}>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className={cn(
              "rounded-md border-border bg-white pl-9 pr-3 text-sm shadow-none focus-visible:ring-secondary/40",
              scrolled ? "h-9" : "h-10"
            )}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSearchOpen(true);
            }}
            onFocus={() => setSearchOpen(true)}
          />
        </div>
      </form>
      {searchOpen && searchQuery.trim().length > 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-md border border-border bg-white py-1 shadow-lg">
          {searchResults.length > 0 ? (
            <>
              {searchResults.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  className="flex items-center gap-3 px-3 py-2 transition-colors hover:bg-muted"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                    setMobileOpen(false);
                  }}
                >
                  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded border border-border">
                    <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="36px" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{formatPrice(product.salePrice ?? product.price)}</p>
                  </div>
                </Link>
              ))}
              <button
                type="button"
                className="w-full border-t border-border px-3 py-2 text-left text-sm font-medium text-secondary transition-colors hover:bg-muted"
                onClick={() => {
                  router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
                  setSearchOpen(false);
                  setSearchQuery("");
                  setMobileOpen(false);
                }}
              >
                View all results for &quot;{searchQuery}&quot;
              </button>
            </>
          ) : (
            <div className="px-3 py-2.5 text-sm text-muted-foreground">
              No products found for &quot;{searchQuery}&quot;.
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="sticky top-0 z-50">
      {/* Top slim strip */}
      <div className="bg-primary text-primary-foreground">
        <Container>
          <div
            className={cn(
              "flex items-center justify-between text-[11px] font-medium tracking-wide transition-all",
              scrolled ? "h-0 overflow-hidden opacity-0" : "h-8 opacity-100"
            )}
          >
            <span className="uppercase tracking-[0.14em]">{company.shortName}</span>
            <div className="hidden items-center gap-4 sm:flex">
              {topStripLinks.map((link, i) => (
                <span key={link.href} className="flex items-center gap-4">
                  {i > 0 && <span className="text-white/30">|</span>}
                  <Link href={link.href} className="text-white/85 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Main navigation */}
      <div className="border-b border-border bg-white">
        <Container>
          {/* Desktop */}
          <div
            className={cn(
              "hidden items-center gap-6 transition-all lg:flex",
              scrolled ? "h-14" : "h-16"
            )}
          >
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/logo/logo.svg"
                alt={company.name}
                width={200}
                height={40}
                priority
                className={cn("w-auto transition-all", scrolled ? "h-8" : "h-9")}
              />
            </Link>

            <nav className="flex flex-1 justify-center">
              <ul className="flex items-center gap-0.5">
                {navigationLinks.map((link) => (
                  <li
                    key={link.href + link.label}
                    className="relative"
                    onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className="rounded-md px-3 py-2 text-sm font-medium text-foreground/85 transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                    {link.children && activeDropdown === link.label && (
                      <div className="absolute left-0 top-full z-50 mt-0 min-w-[210px] rounded-md border border-border bg-white py-1.5 shadow-lg">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <SearchPanel />
              <Button variant="ghost" size="icon" asChild className="relative h-9 w-9 rounded-md">
                <Link href="/wishlist" aria-label="Wishlist">
                  <Heart className="h-[18px] w-[18px]" />
                  {wishlist.length > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-sm bg-secondary text-[10px] font-bold text-white">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="relative h-9 w-9 rounded-md">
                <Link href="/cart" aria-label="Cart">
                  <ShoppingBag className="h-[18px] w-[18px]" />
                  {itemCount > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-sm bg-primary text-[10px] font-bold text-white">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile */}
          <div className={cn("flex items-center gap-2 lg:hidden", scrolled ? "h-12" : "h-14")}>
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/logo/logo.svg"
                alt={company.name}
                width={160}
                height={32}
                priority
                className="h-7 w-auto"
              />
            </Link>
            <div className="ml-auto flex items-center gap-0.5">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-md"
                aria-label="Search"
                onClick={() => {
                  setMobileOpen(true);
                }}
              >
                <Search className="h-[18px] w-[18px]" />
              </Button>
              <Button variant="ghost" size="icon" asChild className="relative h-9 w-9 rounded-md">
                <Link href="/cart" aria-label="Cart">
                  <ShoppingBag className="h-[18px] w-[18px]" />
                  {itemCount > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-sm bg-primary text-[10px] font-bold text-white">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-md"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
              </Button>
            </div>
          </div>
        </Container>

        {/* Category rail */}
        <div className="border-t border-border bg-background/80">
          <Container>
            <div className="utility-rail -mx-4 flex gap-1 overflow-x-auto px-4 py-2 md:mx-0 md:px-0">
              {categoryRailLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="shrink-0 rounded-md border border-transparent px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:bg-white hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>

        {mobileOpen && (
          <div className="border-t border-border bg-white lg:hidden">
            <Container className="space-y-4 py-4">
              <SearchPanel mobile />
              <ul className="space-y-0.5">
                {navigationLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <ul className="ml-3 space-y-0.5 border-l border-border pl-3">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                {topStripLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/wishlist"
                    className="block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
                    onClick={() => setMobileOpen(false)}
                  >
                    Wishlist{wishlist.length > 0 ? ` (${wishlist.length})` : ""}
                  </Link>
                </li>
              </ul>
            </Container>
          </div>
        )}
      </div>
    </div>
  );
}
