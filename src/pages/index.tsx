import DefaultLayout from "@/layouts/default";
import ImageGrid from "@/components/image-grid";

const gridItems = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    title: 'Coffee Culture',
    description: 'Discover the art of coffee making and brewing'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    title: 'Fresh Roasts',
    description: 'Hand-picked beans roasted to perfection'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb',
    title: 'Artisan Drinks',
    description: 'Crafted by passionate baristas'
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
    title: 'Pastries',
    description: 'Freshly baked treats'
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    title: 'Coffee Shop',
    description: 'A cozy space to enjoy'
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571',
    title: 'Morning Brew',
    description: 'Start your day right'
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096',
    title: 'Coffee Beans',
    description: 'Premium selection'
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31',
    title: 'Espresso',
    description: 'Pure energy'
  },
  {
    id: '9',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
    title: 'Latte Art',
    description: 'Coffee as art'
  },
  {
    id: '10',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    title: 'Coffee Shop',
    description: 'Your daily escape'
  }
];

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="w-full">
        <div className="hidden sm:block">
          <ImageGrid items={gridItems} />
        </div>
      </section>
    </DefaultLayout>
  );
}
