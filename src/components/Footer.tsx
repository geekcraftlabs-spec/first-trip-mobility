import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy border-t border-sand/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <Logo variant="light" />
        <p className="text-sand/45 text-sm">
          © {new Date().getFullYear()} First Trip Mobility. All rights reserved.
        </p>
      </div>
    </footer>
  );
}