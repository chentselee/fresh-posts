import { useEffect, useState } from "preact/hooks";
import type { Comment } from "../models/Comment.ts";

const Comments = ({ postId }: { postId: number }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    (async function () {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      );
      const comments = await res.json();
      setComments(comments);
    })();
  }, [postId]);
  return (
    <div class="mt-4">
      <h2 class="font-bold text-xl">Comments</h2>
      <div class="flex flex-col space-y-3.5 mt-2">
        {comments.map((comment) => (
          <div key={comment.id}>
            <div class="font-semibold text-sm">
              {comment.name} ({comment.email})
            </div>
            <div class="text-sm mt-1">{comment.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
