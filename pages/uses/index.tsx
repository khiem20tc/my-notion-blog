import React from "react";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer, BlockMapType } from "react-notion";
import Head from "next/head";

interface Props {
  blockMap: BlockMapType;
}

const UsesPage: React.FC<Props> = ({ blockMap }) => (
  <div className="max-w-5xl p-2 mx-auto mt-4">
      <Head>
        <title>👨‍💻 Uses</title>
        <meta
          name="description"
          content="I put some of my posts in series so you can read it with more context 🥰"
        />
      </Head>
      {/* <div className="mt-4 mb-6 text-gray-700 dark:text-gray-100">
        I put some of my posts in series so you can read it with more context 🥰
      </div> */}
  <div style={{ maxWidth: 768 }}>
    <NotionRenderer blockMap={blockMap} />
  </div>
  </div>
);

export async function getStaticProps() {
  const data: BlockMapType = await fetch(
    "https://my-notion-api.anhkolamgidauanhthe.workers.dev/v1/page/2a5460a2ecb74b528eff6bc4595e49eb"
  ).then((res) => res.json());

  return {
    props: {
      blockMap: data,
    },
  };
}

export default UsesPage;