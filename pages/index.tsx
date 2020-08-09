import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { Header } from "../containers/header";
import { PersonalInfo } from "../containers/personal-info";
import { PostList } from "../containers/post-list";

function Index(props) {
  return (
    <div>
      <Header />
      <PersonalInfo />
      <PostList posts={props.posts} />
    </div>
  );
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
  let posts = [];

  const files = fs.readdirSync(`${process.cwd()}/contents`, "utf-8");

  posts = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data };
    });

  return {
    props: { posts },
  };
}

export default Index;
