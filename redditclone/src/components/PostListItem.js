import React from "react";
import { Link } from "react-router-dom";
import Voting from "./Voting";

export default function PostListItem({ title, postId, votes, upFunc, downFunc }) {
  return (
    <div>
      <Link to={`/posts/${postId}`}>
        <h3>{title}</h3>
      </Link>
        <Voting postId={postId} title={title} votes={votes} upFunc={upFunc} downFunc={downFunc}/>
    </div>
  );
}
