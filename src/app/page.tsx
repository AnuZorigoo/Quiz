import prisma from "@/lib/prisma";

const Home = async () => {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div>
      {posts.map((post: (typeof posts)[0]) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>Author: {post.author.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
