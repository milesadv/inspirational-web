export const site = {
  name: "Inspirationally Propelled",
  description: "Beautifully illustrated stories shaped by timeless Stoical wisdom.",
  contactEmail: "hello@inspirationallypropelled.co.uk"
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/ethos", label: "Our Ethos" },
  { href: "/story", label: "Our Story" },
  { href: "/team", label: "The Team" },
  { href: "/journey", label: "Your Journey" },
  { href: "/shop", label: "The Shop" }
];

export type Character = {
  slug: string;
  name: string;
  epithet: string;
  virtue: string;
  animal: string;
  origin: string;
  summary: string;
  quote: string;
};

export const characters: Character[] = [
  {
    slug: "arden",
    name: "Arden",
    epithet: "the Eagle",
    virtue: "Wisdom",
    animal: "Eagle",
    origin: "High places and clear sight",
    summary: "Arden helps readers pause, rise above the noise, and choose the next right step with steadiness.",
    quote: "See clearly. Choose carefully. Move with purpose."
  },
  {
    slug: "roscoe",
    name: "Roscoe",
    epithet: "the Stag",
    virtue: "Courage",
    animal: "Stag",
    origin: "Woodland paths and quiet resolve",
    summary: "Roscoe stands for brave progress: not loud, not reckless, but committed when the path gets steep.",
    quote: "Courage is the decision to keep walking."
  },
  {
    slug: "zephyr",
    name: "Zephyr",
    epithet: "the Rabbit",
    virtue: "Temperance",
    animal: "Rabbit",
    origin: "Fast feet, soft attention",
    summary: "Zephyr brings lightness, pace, and restraint, showing that agility works best when guided by care.",
    quote: "Quick is useful. Gentle is powerful."
  },
  {
    slug: "kael",
    name: "Kael",
    epithet: "the Raven",
    virtue: "Justice",
    animal: "Raven",
    origin: "Shadow, wit, and honest seeing",
    summary: "Kael invites readers to look beneath appearances and act with fairness, even when it costs something.",
    quote: "Truth is a responsibility, not a weapon."
  }
];

export type Product = {
  title: string;
  type: "Book" | "Print";
  price?: string;
  status: "Live" | "Coming Soon";
  imageLabel: string;
};

export const products: Product[] = [
  { title: "Inspirationally Propelled: Book One", type: "Book", price: "£12.99", status: "Live", imageLabel: "Book 1 cover" },
  { title: "Inspirationally Propelled: Book Two", type: "Book", price: "£12.99", status: "Live", imageLabel: "Book 2 cover" },
  { title: "The Eagle's Lesson", type: "Book", status: "Coming Soon", imageLabel: "Coming soon book" },
  { title: "The Stag's Path", type: "Book", status: "Coming Soon", imageLabel: "Coming soon book" },
  { title: "The Raven's Question", type: "Book", status: "Coming Soon", imageLabel: "Coming soon book" },
  ...Array.from({ length: 12 }, (_, index) => ({
    title: `Illustration Print ${index + 1}`,
    type: "Print" as const,
    price: "£19.99",
    status: "Live" as const,
    imageLabel: `Print ${index + 1}`
  }))
];

export const pillars = [
  { title: "Beautifully Illustrated", text: "Warm, story-rich visuals with space for wonder.", href: "/about" },
  { title: "Timelessly Wise", text: "Stoical ideas translated into humane, memorable moments.", href: "/ethos" },
  { title: "For Every Age", text: "Books, gifts, and reflections for young readers and adults.", href: "/shop" }
];

export const virtues = [
  { title: "Wisdom", text: "Clear judgement before action.", href: "/team/arden" },
  { title: "Courage", text: "Bravery that keeps its feet on the ground.", href: "/team/roscoe" },
  { title: "Justice", text: "Fairness, honesty, and responsibility.", href: "/team/kael" },
  { title: "Temperance", text: "Strength shaped by restraint.", href: "/team/zephyr" }
];
