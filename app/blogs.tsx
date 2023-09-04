// pages/blog.tsx
"use client";
// pages/blog.tsx
import React, { useEffect, useState } from 'react';
import { fetchDevToPosts } from '@/app/api';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface DevToPost {
  id: number;
  title: string;
  body: string;
  user: {
    name: string;
  };
  cover_image: string;
  url: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<DevToPost[]>([]);

  useEffect(() => {
    async function getDevToPosts() {
      const data: DevToPost[] = await fetchDevToPosts();
      setPosts(data);
    }
    getDevToPosts();
  }, []);

  const slicedPosts = posts.slice(0, 4); // Slice the posts to display only 4 of them

  return (
    <div className="max-w-[1240px] mx-auto px-2 py-16">
      <p className="text-xl mb-4 tracking-widest uppercase text-[#5651e5]">Blog Posts</p>
      <h2 className="py-4 text-gray-600">What I&apos;ve written!</h2>{/* Center the carousel container */}
        <div className="carousel-container"> {/* This container will be centered */}
          <Carousel showArrows={true} showStatus={false} showIndicators={false} showThumbs={false} emulateTouch={true}>
            {slicedPosts.map((post) => (
              <div className="bg-white p-4 rounded-lg shadow-md" key={post.id}>
                <img src={post.cover_image} alt={post.title} className="w-full h-auto" />
                <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
                <p className="text-gray-400 mt-2">{post.body}</p>
                <p className="text-blue-500 mt-2">
                  <Link href={post.url} target="_blank" rel="noopener noreferrer">
                    Read on Dev.to
                  </Link>
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
  );
};

export default Blog;
