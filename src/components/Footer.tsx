import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/apply", label: "Apply" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight">
              Capped Out Labs
            </Link>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              AI revenue infrastructure for operators who are serious about
              growth — and serious about exit.
            </p>
            <p className="mt-4 text-xs text-white/40">
              A Capped Out Media company
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80">
              Get Started
            </h4>
            <p className="text-sm text-white/50 leading-relaxed">
              We take on a limited number of clients each quarter. Apply for a
              discovery call to see if we&apos;re the right fit.
            </p>
            <Link
              href="/apply"
              className="inline-block mt-4 text-sm font-semibold text-electric hover:text-white transition-colors"
            >
              Apply Now &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Capped Out Labs. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/apply"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/apply"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
