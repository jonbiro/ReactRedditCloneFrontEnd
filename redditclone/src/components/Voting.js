import React from "react";

const Voting = props => {
  return (
    <div>
      <span
        role="img"
        aria-label="up"
        id="upVote"
        onClick={() => props.upFunc(props.postId, props.votes)}
      >
        {" "}
        ⬆️{" "}
      </span>
      ️ {props.votes}{" "}
      <span
        role="img"
        aria-label="down"
        id="downVote"
        onClick={() => props.downFunc(props.postId, props.votes)}
      >
        {" "}
        ⬇️{" "}
      </span>
    </div>
  );
};

export default Voting;
