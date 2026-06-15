import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#"
  },
  {
    "name": "Menu",
    "href": "#menu"
  },
  {
    "name": "Events",
    "href": "#events"
  },
  {
    "name": "Reservations",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Why Barelo",
    "href": "#why-barelo"
  },
  {
    "name": "Experience",
    "href": "#experience"
  }
];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="Barelo"
      ctaButton={{
        text: "Reserve Now",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="Barelo Bar & Grill"
      columns={[
        {
          title: "Menu",
          items: [
            {
              label: "Lunch",
              href: "#",
            },
            {
              label: "Dinner",
              href: "#",
            },
            {
              label: "Cocktails",
              href: "#",
            },
          ],
        },
        {
          title: "Explore",
          items: [
            {
              label: "Events",
              href: "#",
            },
            {
              label: "Reservations",
              href: "#",
            },
            {
              label: "Gallery",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Barelo Bar & Grill. All rights reserved."
      links={[
        {
          label: "Instagram",
          href: "#",
        },
        {
          label: "Facebook",
          href: "#",
        },
        {
          label: "TikTok",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/futuristic-kitchen-interior-design_23-2151821259.jpg"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
