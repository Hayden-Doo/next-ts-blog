import { Post } from "@/types/types";
import Link from "next/link";

interface PostProps {
  post: Post;
}

const PostItem = ({ post }: PostProps) => {
  return (
    <div>
      <h2>
        <Link href={`/post/${post.id}`}>{post.title}</Link>
      </h2>
      <p
        style={{
          whiteSpace: "nowrap",
          width: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {post.content}
      </p>
      <ul>
        {post.tags?.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <div>{post.date}</div>
    </div>
  );
};

export default PostItem;
