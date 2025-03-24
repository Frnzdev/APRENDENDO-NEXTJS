"use client";

import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PageTeste() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">
        TODOS OS POSTS
      </h1>

      <div className="flex flex-col gap-4 mx-2">
        {posts.map((post: Post) => (
          <div key={post.id} className="bg-gray-200 p-4 rounded-md">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}