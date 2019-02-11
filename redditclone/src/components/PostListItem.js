import React from "react";
import { Link } from "react-router-dom";

export default function PostListItem({ title, postId, votes, upFunc, downFunc }) {
    // console.log(upFunc)
  return (
    <div>
      <Link to={`/posts/${postId}`}>
        <h3>{title}</h3>
      </Link>
      <p>
          <span id="upVote" onClick={ () => upFunc(postId, votes)}> ⬆️ </span>️ {votes} <span id="downVote" onClick={ () => downFunc(postId, votes)}> ⬇️ </span>{" "}
      </p>
    </div>
  );
}
