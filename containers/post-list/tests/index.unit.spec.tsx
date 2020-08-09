import React from "react";
import sinon from "sinon";
import faker from "faker";
import { render, cleanup } from "@testing-library/react";
import { PostList } from "..";
import { Post } from "../../../interfaces/post";

const sandbox = sinon.createSandbox();
const {
  random: { number },
  lorem: { words },
} = faker;

describe("PostList Unit Tests", () => {
  let posts: Post[];
  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  beforeEach(() => {
    posts = Array(number({ min: 1, max: 3 }))
      .fill(null)
      .map(() => ({ title: words(5), description: words(5), date: words(5) }));
  });

  it("should render posts", () => {
    // Arrange

    // Act
    const { container, queryAllByText } = render(<PostList posts={posts} />);

    // Assert
    expect(container.querySelectorAll("article")).toHaveLength(posts.length);
    expect(queryAllByText(posts[0].title)).toHaveLength(1);
    expect(queryAllByText(posts[0].date)).toHaveLength(1);
    expect(queryAllByText(posts[0].description)).toHaveLength(1);
  });
});
