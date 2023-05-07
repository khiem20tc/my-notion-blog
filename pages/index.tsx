import Link from "next/link";
import dayjs from "dayjs";
import { GetStaticProps } from "next";
import Head from "next/head";

const NOTION_BLOG_ID =
  process.env.NOTION_BLOG_ID || "c0a9456d6fa04bb2af554a310ac7b5ff";

type PostStatus = "Published" | "Draft";
export type Post = {
  id: string;
  slug: string;
  title: string;
  date: string;
  tag: string[];
  status: PostStatus;
  lang: "en" | "vi";
  description?: string;
  linkRelatived?: string;
  series: string[];
  hero_image: {
    url: string;
  }[];
};

export const getAllPosts = async ({
  locale = "",
  includeDraft = false,
}): Promise<Post[]> => {
  return await fetch(
    `https://my-notion-api.anhkolamgidauanhthe.workers.dev/v1/table/${NOTION_BLOG_ID}`
  )
    .then((res) => res.json())
    .then((res) =>
      res
        .filter((row: Post) => includeDraft || row.status === "Published")
        .filter((row: Post) => {
          return locale
            ? row.linkRelatived
              ? row.lang === locale
              : true
            : true;
        })
        .sort(
          (a: Post, b: Post) =>
            dayjs(b.date, "YYYY-MM-DD").unix() -
            dayjs(a.date, "YYYY-MM-DD").unix()
        )
    );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = await getAllPosts({ locale });

  return {
    props: {
      posts,
    },
    revalidate: 60 * 5,
  };
};

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {posts.map((post) => (
        <div
          key={post.id}
          className="relative transition-all bg-white border border-gray-200 hover:border-blue-400 dark:hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800"
        >
          {dayjs(post.date, "YYYY-MM-DD").isAfter(
            dayjs().subtract(14, "d")
          ) && <div className="absolute text-xl top-2 right-2">✨</div>}
          <Link href={`/blog/${post.slug}`} locale={post.lang}>
            <a className="block">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center mb-2 text-xs text-gray-500 dark:text-gray-100">
                  <time dateTime={post.date}>
                    {dayjs(post.date, "YYYY-MM-DD").format("MMM DD, YYYY")}
                  </time>
                </div>
                <div className="flex text-sm">
                  <p className="mb-3 font-medium text-blue-600 dark:text-blue-500">
                    {post.title}
                  </p>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-50">
                  {post.description}
                </div>
                {/* <div className="space-x-1">
                  {post.tag?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

function HomePage({ posts }: { posts: Post[] }) {
  return (
    <div className="max-w-5xl px-4 mx-auto mt-10 sm:px-6 lg:px-8">
      <Head>
        <meta
          name="description"
          content="I share about Backend - Blockchain - Devops Engineer and some thoughts in tech and life."
        />
      </Head>
      {/* <iframe
        src="https://anhkolamgidauanhthe.substack.com/embed"
        width="100%"
        height="250"
        className="mb-8"
        frameBorder="0"
        scrolling="no"
        loading="lazy"
      ></iframe> */}

      <div className="mb-4 text-gray-700 dark:text-gray-100">
      I share about Backend - Blockchain - Devops Engineer and some thoughts in Tech and Life.
        😴
      </div>

      <div className="my-4 space-x-2">
        <a
          href="#new"
          className="inline-flex items-center px-3 py-1 mb-2 mr-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
        >
          ✨ New
        </a>
        <a
          href="#technical"
          className="inline-flex items-center px-3 py-1 mb-2 mr-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
        >
          👨‍💻 Technical
        </a>
        <a
          href="#life"
          className="inline-flex items-center px-3 py-1 mb-2 mr-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
        >
          🤔 Life
        </a>
        <a
          href="#blockchain"
          className="inline-flex items-center px-3 py-1 mb-2 mr-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
        >
          ⛓ Blockchain
        </a>
        <a
          href="#product"
          className="inline-flex items-center px-3 py-1 mb-2 mr-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
        >
          🚀 Product
        </a>
        <a
          href="#others"
          className="inline-flex items-center px-3 py-1 mb-2 mr-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
        >
          🤪 Others
        </a>
      </div>

      <div className="overflow-hidden">
        <h3
          className="my-3 text-lg font-medium text-gray-700 dark:text-gray-100"
          id="new"
        >
          ✨ New
        </h3>
        {/* <hr className="mb-4" /> */}
        <PostList posts={posts.slice(0, 6)} />

        <h3
          className="mt-10 mb-3 text-lg font-medium text-gray-700 dark:text-gray-100"
          id="technical"
        >
          👨‍💻 Technical
        </h3>
        {/* <hr className="mb-4" /> */}
        <PostList
          posts={posts.filter((post) => post.tag.includes("Technical"))}
        />

        <h3
          className="mt-10 mb-3 text-lg font-medium text-gray-700 dark:text-gray-100"
          id="life"
        >
          🤔 Life
        </h3>
        {/* <hr className="mb-4" /> */}
        <PostList
          posts={posts.filter(
            (post) =>
              post.tag.includes("Life") || post.tag.includes("Invest")
          )}
        />

        <h3
          className="mt-10 mb-3 text-lg font-medium text-gray-700 dark:text-gray-100"
          id="blockchain"
        >
          ⛓ Blockchain
        </h3>
        {/* <hr className="mb-4" /> */}
        <PostList
          posts={posts.filter((post) => post.tag.includes("Blockchain"))}
        />

        <h3
          className="mt-10 mb-3 text-lg font-medium text-gray-700 dark:text-gray-100"
          id="product"
        >
          🚀 Product
        </h3>
        {/* <hr className="mb-4" /> */}
        <PostList
          posts={posts.filter((post) => post.tag.includes("Product"))}
        />

        <h3
          className="mt-10 mb-3 text-lg font-medium text-gray-700 dark:text-gray-100"
          id="others"
        >
          🤪 Others
        </h3>
        {/* <hr className="mb-4" /> */}
        <PostList
          posts={posts.filter((post, index) => {
            return (
              index > 6 &&
              !post.tag.includes("Technical") &&
              !post.tag.includes("Blockchain") &&
              !post.tag.includes("Product") &&
              !post.tag.includes("Life") &&
              !post.tag.includes("Invest")
            );
          })}
        />
      </div>
    </div>
  );
}

export default HomePage;
