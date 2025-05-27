'use client';

import { Button } from '@/components/ui/button';

const useCases = [
  {
    title: "Blog Posts",
    description: "Create engaging blog content",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    title: "Social Media",
    description: "Generate viral social posts",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    title: "Email Marketing",
    description: "Craft converting emails",
    image: "https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    title: "Ad Copy",
    description: "Write compelling ad copy",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=300&h=200"
  }
];

export function UseCases() {
  return (
    <section id="templates" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Create anything in seconds
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={useCase.image}
                alt={useCase.title}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-xl font-semibold text-white mb-1">{useCase.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{useCase.description}</p>
                <Button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black hover:bg-white/90">
                  Try Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}