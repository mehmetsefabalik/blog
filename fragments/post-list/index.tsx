import React, { FunctionComponent } from "react";
import { Post } from "../../interfaces/post";

interface Props {
  posts: Post[];
}

const PostList: FunctionComponent<Props> = ({ posts }) => {
  return (
    <main>
      {Array.isArray(posts) &&
        posts.map((post, index) => (
          <article key={index} id="post-article">
            <header>
              <h3>
                <a rel="bookmark" href={`/post/${post.id}`}>
                  {post.title}
                </a>
              </h3>
              <small>{post.date}</small>
            </header>
            <p>{post.description}</p>
          </article>
        ))}
    </main>
  );
};
export { PostList };
