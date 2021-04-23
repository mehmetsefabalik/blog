import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { Header } from "../fragments/header";
import { PersonalInfo } from "../fragments/personal-info";
import { PostList } from "../fragments/post-list";

function Index(props) {
  return (
    <div id="home-container">
      <div id="home-sub-container">
        <Header />
        <PersonalInfo />
        <PostList posts={props.posts} />
      </div>
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
