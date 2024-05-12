import { Post } from "@/types/types";
import Link from "next/link";

interface PostProps {
  post: Post;
}

const PostDetail = ({ post }: PostProps) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.author}</p>
      <p>{post.content}</p>
      <ul>
        {post.tags?.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <div>{post.date}</div>
    </div>
  );
};

export default PostDetail;
