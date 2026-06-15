import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroTiltedCards from '@/components/sections/hero/HeroTiltedCards';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import PricingMediaCards from '@/components/sections/pricing/PricingMediaCards';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import { Music, Star, Wine } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroTiltedCards
      tag="Kissimmee's Premier Destination"
      title="Barelo Bar & Grill"
      description="Experience the perfect fusion of Colombian and Dominican cuisine, handcrafted cocktails, live music, and the vibrant energy of Latin nightlife."
      primaryButton={{
        text: "Reserve a Table",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Menu",
        href: "#menu",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-her-virtual-date_23-2149307269.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/friends-posing-embraced-new-years_23-2148349097.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/shrimp-plate-garnished-with-sauce-bread-stuffing-spinach-shredded-carrot_141793-2276.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-friends-hug-night-funfair_23-2148281658.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-african-american-man-posing-inside-night-club-black-hat_627829-5507.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="why-barelo" data-section="why-barelo">
    <SectionErrorBoundary name="why-barelo">
          <FeaturesBentoGrid
      tag="The Barelo Experience"
      title="Why Everyone Loves Barelo"
      description="Authentic Latin roots meet sophisticated nightlife vibes."
      features={[
        {
          title: "Signature Cocktails",
          description: "Crafted by expert mixologists with premium ingredients.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-length-stock-photo-extremely-trendy-luxurious-brunette-model-crop-top-silver-sparkling-jacket-black-trousers-high-heels-model-trendy-outfit-sitting-bar-stool-club-bar_132075-8989.jpg",
        },
        {
          title: "Live Latin Nights",
          description: "Salsa, DJs, and unforgettable weekends.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-passionate-dancers-dancing_158595-4671.jpg",
        },
        {
          title: "Authentic Cuisine",
          description: "Colombian & Dominican dishes made with love.",
          imageSrc: "http://img.b2bpic.net/free-photo/shrimp-soup-rice-frame_23-2148725073.jpg",
        },
        {
          title: "VIP Ambience",
          description: "Safe, stylish, and high-energy atmosphere.",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-beautiful-woman-sitting-vintage-cafe-black-velvet-dress-evening-gown-rich-stylish-lady-elegant-fashion-trend-sexy-seductive-look-attractive-skinny-figure_285396-7236.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="experience" data-section="experience">
    <SectionErrorBoundary name="experience">
          <AboutTextSplit
      title="More Than a Restaurant"
      descriptions={[
        "At Barelo, every night feels like a celebration. Whether you're joining us for Happy Hour, dinner with friends, or date night, we create an atmosphere where food, music, and community come together.",
        "Our Latin percussion, candlelight cocktails, and upscale decor provide the perfect backdrop for creating lasting memories in Kissimmee.",
      ]}
      primaryButton={{
        text: "See Gallery",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>

  <div id="menu" data-section="menu">
    <SectionErrorBoundary name="menu">
          <PricingMediaCards
      tag="Taste the Passion"
      title="Signature Menu"
      description="Traditional recipes with a modern flair."
      plans={[
        {
          tag: "Dominican",
          price: "Mofongo",
          period: "Classic",
          features: [
            "Savory",
            "Authentic",
            "Comforting",
          ],
          primaryButton: {
            text: "Reserve Now",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-recipe-with-plantain_23-2151062828.jpg",
        },
        {
          tag: "Colombian",
          price: "Bandeja",
          period: "Traditional",
          features: [
            "Home-style",
            "Bold Flavors",
            "Hearty",
          ],
          primaryButton: {
            text: "Reserve Now",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-beans-sausages-dish_23-2148725027.jpg",
        },
        {
          tag: "Cocktails",
          price: "Leches",
          period: "Martini",
          features: [
            "Signature",
            "Sweet",
            "Smooth",
          ],
          primaryButton: {
            text: "Reserve Now",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/lemon-drop-martini-cocktail-isolated-white-background_123827-24016.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="events" data-section="events">
    <SectionErrorBoundary name="events">
          <FeaturesRevealCardsBento
      tag="Join the Celebration"
      title="Upcoming Events"
      description="Don't miss the ultimate social nights at Barelo."
      items={[
        {
          title: "Salsa Saturdays",
          description: "Live DJs, dancing, and high-energy nights.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-celebrating-new-year-s-eve-each-other-s-arms_23-2150901996.jpg",
        },
        {
          title: "Happy Hour",
          description: "Drink specials and premium bites.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/view-cocktail-beverage-glass-with-abstract-neo-futuristic-set_23-2150938353.jpg",
        },
        {
          title: "Latin Nights",
          description: "The best social music experience.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-staying-light-no-war-wording_23-2149377320.jpg",
        },
        {
          title: "Private Parties",
          description: "Book us for your special occasion.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/wonderful-wedding-table-amazing-restaurant_8353-9875.jpg",
        },
        {
          title: "Live Music",
          description: "Top Latin artists performing weekly.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/man-singing-retro-microphone_107420-96133.jpg",
        },
        {
          title: "Sunday Brunch",
          description: "Recover with flavor.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-breakfast-set-azerbaijani-style-eggs-with-tomatoes-toast-jam-honey-fresh-tomato-cucumber-cheese-french-bread-rolls-black-tea-cup_141793-3604.jpg",
        },
        {
          title: "VIP Night",
          description: "Exclusive table service experience.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/dark-vip-cinema-studio-still-life_23-2149500612.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeCards
      tag="Guest Voices"
      title="What Our Guests Say"
      description="Authentic experiences from our vibrant community."
      testimonials={[
        {
          name: "Sarah J.",
          role: "Foodie",
          quote: "Great vibe and atmosphere. Loved the music.",
          imageSrc: "http://img.b2bpic.net/free-photo/adults-enjoying-mexican-food_23-2149663829.jpg",
        },
        {
          name: "Michael C.",
          role: "Local",
          quote: "The menu was a mix of Colombian & Dominican food. Really enjoyable.",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-eating-drinking-wine-with-woman-foreground-festive-dinner-kitchen-talking-happy-sitting-table-dining-room-enjoying-meal-home-having-romantic-time-candle-lights_482257-3617.jpg",
        },
        {
          name: "Emily R.",
          role: "Visitor",
          quote: "Music 10/10. The Happy Hour exceeded my expectations.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-cheering-drinking-beer-while-playing-beer-pong-indoor-party_23-2149431385.jpg",
        },
        {
          name: "David K.",
          role: "Regular",
          quote: "Super chill environment, friendly staff and great food.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-handsome-male-smiling_181624-41237.jpg",
        },
        {
          name: "Maria L.",
          role: "Dancer",
          quote: "Best salsa night in Kissimmee, hands down.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-having-fun-party_23-2150188408.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="By The Numbers"
      title="The Barelo Impact"
      description="Delivering excellence one night at a time."
      metrics={[
        {
          icon: Star,
          title: "Happy Guests",
          value: "10K+",
        },
        {
          icon: Music,
          title: "Live Nights",
          value: "500+",
        },
        {
          icon: Wine,
          title: "Cocktails Served",
          value: "50K+",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Reserve Now"
      text="Experience an unforgettable evening of flavors, cocktails, and Latin nightlife at Barelo Bar & Grill."
      primaryButton={{
        text: "Reserve Your Table",
        href: "#",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "mailto:hello@barelo.com",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
