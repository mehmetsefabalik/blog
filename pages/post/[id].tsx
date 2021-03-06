import React from "react";
import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import MarkDownIt from "markdown-it";
import highlight from "highlight.js";

function BlogPostPage(props) {
  return (
    <div className="page">
      <Head>
        <title>{props.post.title}</title>
      </Head>
      <div className="post">
        <article
          dangerouslySetInnerHTML={{
            __html: props.post.content,
          }}
        ></article>
      </div>
    </div>
  );
}

// pass props to BlogPostPage component
export async function getStaticProps(context) {
  const id = context.params.id; // get slug from params
  const path = `${process.cwd()}/contents/${id}.md`;
  // read file content and store into rawContent variable
  const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });
  const { data, content } = matter(rawContent);

  const markdown = new MarkDownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
      if (lang && highlight.getLanguage(lang)) {
        try {
          return highlight.highlight(lang, str).value;
        } catch (__) {}
      }

      return ""; // use external default escaping
    },
  });

  const html = markdown.render(content);

  return {
    props: {
      post: {
        ...data,
        content: html,
      },
    },
  };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {
  const path = `${process.cwd()}/contents`;
  const files = fs.readdirSync(path, "utf-8");
  const markdownFileNames = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => fn.replace(".md", ""));
  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          id: fileName,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPostPage;
