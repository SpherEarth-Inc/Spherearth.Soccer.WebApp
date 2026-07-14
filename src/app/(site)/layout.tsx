import { PageLoader } from "@/components/layout/page-loader";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteSearch } from "@/components/layout/site-search";
import { WhatsAppWidget } from "@/components/layout/whatsapp-widget";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <PageLoader />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsAppWidget />
      <SiteSearch />
    </>
  );
}
