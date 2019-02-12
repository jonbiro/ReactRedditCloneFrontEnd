import React from "react";
import { Link } from "react-router-dom";
import Voting from "./Voting";

export default function PostListItem({
  title,
  postId,
  votes,
  upFunc,
  downFunc
}) {
  return (
    <div>
      <Link to={`/posts/${postId}`}>
        <h3>{title}</h3>
      </Link>
      <Voting
        postId={postId}
        votes={votes}
        upFunc={upFunc}
        downFunc={downFunc}
      />
      {/*<p>*/}
      {/*<span role="img" aria-label="up" id="upVote" onClick={ () => upFunc(postId, votes)}> ⬆️ </span>️ {votes} <span role="img" aria-label="down" id="downVote" onClick={ () => downFunc(postId, votes)}> ⬇️ </span>*/}
      {/*</p>*/}
    </div>
  );
}
