import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postslice";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";

function PostsList(props) {
  const posts = useSelector(selectAllPosts);

  //   Sort the posts in reverse chronological order by datetime string
  //   Slice the array to return a new array with the first 5 elements
  const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderPosts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>

        <p className="postCredit">
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButton post={post} />
      </article>
    );
  });

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostsList;
