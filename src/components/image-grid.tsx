import { Button } from "@heroui/button";

interface GridItem {
  id: string;
  image: string;
  title?: string;
  description?: string;
}

interface ImageGridProps {
  items: GridItem[];
}

export default function ImageGrid({ items }: ImageGridProps) {
  // Add size parameters to Unsplash URLs for optimal loading
  const getOptimizedImageUrl = (url: string, width: number, height: number) => {
    if (url.includes('images.unsplash.com')) {
      return `${url}?auto=format,compress&w=${width}&h=${height}&q=80`;
    }
    return url;
  };

  return (
    <div className="flex h-screen p-4 gap-4 z-10">
      {/* Left Section - 50% width */}
      <div className="w-1/2 flex flex-col h-full gap-4">

        {/* Top row - 50% height */}
        <div className="h-1/2 relative rounded-md overflow-hidden">
          <img
            src={getOptimizedImageUrl(items[0]?.image, 1200, 800)}
            alt={items[0]?.title}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
            <h2 className="text-2xl font-bold">{items[0]?.title}</h2>
            <p className="mt-2 text-sm text-gray-200">{items[0]?.description}</p>
          </div>
        </div>
        <div className="h-[40%] flex gap-4">
          <div className="w-1/2 relative rounded-md overflow-hidden">
            <div className="h-full p-4 bg-red-400 text-white">
              <h3 className="font-semibold">{items[1]?.title}</h3>
              <p className="text-sm">{items[1]?.description}</p>
            </div>
          </div>
          <div className="w-1/2 relative rounded-md overflow-hidden">
            <img
              src={getOptimizedImageUrl(items[2]?.image, 600, 600)}
              alt={items[2]?.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="h-[10%] flex gap-4">
          <div className="w-1/2 relative rounded-md overflow-hidden">
            <Button className="w-full h-full" color="primary" >Test</Button>
          </div>
          <div className="flex w-1/2 relative rounded-md overflow-hidden gap-4">
            <Button className="w-1/2 h-full" color="primary" >Test</Button>
            <Button className="w-1/2 h-full" color="primary" >Test</Button>
          </div>
        </div>
      </div>

      {/* Middle Section - 25% width */}
      <div className="w-1/4 flex flex-col h-full gap-4">
        {/* Top row - 25% height */}
        <div className="h-1/4 relative rounded-md overflow-hidden">
          <Button color="primary" className="w-full h-full">Test</Button>
        </div>
        {/* Middle row - 50% height */}
        <div className="h-1/2 relative rounded-md overflow-hidden">
          <img
            src={getOptimizedImageUrl(items[6]?.image, 400, 600)}
            alt={items[6]?.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
            <h3 className="font-semibold">{items[6]?.title}</h3>
            <p className="text-sm">{items[6]?.description}</p>
          </div>
        </div>
        {/* Bottom row - 25% height */}
        <div className="h-1/4 relative rounded-md overflow-hidden">
        <Button color="primary" className="w-full h-full">Test</Button>
        </div>
      </div>

      {/* Right Section - 25% width */}
      <div className="w-1/4 flex flex-col h-full gap-4">
        {/* Top row - 50% height */}
        <div className="h-1/2 relative rounded-md overflow-hidden">
          <img
            src={getOptimizedImageUrl(items[8]?.image, 400, 600)}
            alt={items[8]?.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
            <h3 className="font-semibold">{items[8]?.title}</h3>
            <p className="text-sm">{items[8]?.description}</p>
          </div>
        </div>
        {/* Bottom row - 50% height */}
        <div className="h-1/2 relative rounded-md overflow-hidden">
          <Button color="primary" className="w-full h-full">Test</Button>
        </div>
      </div>
    </div>
  );
}
