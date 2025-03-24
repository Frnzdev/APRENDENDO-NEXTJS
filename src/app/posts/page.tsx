import Link from "next/link";

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];
}

export const revalidate = 60;

export default async function PostPage() {
  const response = await fetch("https://dummyjson.com/posts", {
    cache: "force-cache",
    next: {
      revalidate: 60,
    },
  });
  const data: ResponseProps = await response.json();

  async function handleFetchPost() {
    "use server";
    const response = await fetch("https://dummyjson.com/posts");
    const data: ResponseProps = await response.json();
    console.log(data);
    console.log("clicou");
  }

  async function handleFetchSearch(formData: FormData) {
    "use server";
    const userId = formData.get("userId");

    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
    const data: ResponseProps = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">
        TODOS OS POSTS
      </h1>

      <button onClick={handleFetchPost}>buscar posts</button>

      <form className="flex mt-2 gap-4" action={handleFetchSearch}>
        <input
          type="text"
          placeholder="ID DO USUARIO"
          className="border border-gray-200 p-2"
          name="userId"
        />
        <button className="bg-blue-500 text-white p-2" type="submit">
          BUSCAR USUARIO
        </button>
      </form>

      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map((post) => (
          <div key={post.id} className="bg-gray-200 p-4 rounded-md">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <Link
              className="bg-amber-400 border border-amber-300 rounded-md p-2 ease-in hover:bg-amber-300 hover:border  hover:border-amber-200"
              href={`./posts/${post.id}`}
            >
              Ver Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
