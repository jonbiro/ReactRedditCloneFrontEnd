import React from "react";
import { Link } from "react-router-dom";

export default function PostListItem({ title, postId, votes }) {
  return (
    <div>
      <Link to={`/posts/${postId}`}>
        <h3>{title}</h3>
      </Link>
      <p>
        <span>⬆️ {votes} ⬇️ </span>{" "}
      </p>
    </div>
  );
}
