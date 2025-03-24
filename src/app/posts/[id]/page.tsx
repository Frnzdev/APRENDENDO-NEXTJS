import { Suspense } from "react";
import { PostProps } from "../page";
import { PostInfo } from "./_components/post";

export default async function DatailPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="bg-zinc-800 w-full text-white text-center font-bold pt-2 pb-2 m-2 rounded-4xl text-2xl">
        Detalhes do post: {id}
      </h1>

      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-gray-950"></div>
          </div>
        }
      >
        <PostInfo id={id} />
      </Suspense>
    </div>
  );
}
