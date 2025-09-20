import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { Public_Sans } from "next/font/google";
import { POSTS } from "@/components/blog/posts";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function BlogPostPageContainer({ params }) {
  // ✅ unwrap the Promise
  const { id } = use(params);

  // Compare as strings to avoid type mismatch
  const post = POSTS.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <section className={`${publicSans.className} px-4 sm:px-6 md:px-0 pt-[150px]`}>
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-start-2 col-span-10">
            <h1 className="text-2xl font-semibold">Post not found</h1>
            <Link href="/blog" className="text-zinc-700 underline mt-4 inline-block">
              ← Back to blog
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <article className={`${publicSans.className} bg-white text-zinc-900`}>
      <div className="px-4 sm:px-6 md:px-0 pt-[150px]">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          {/* Back link and title */}
          <header className="col-start-2 col-span-10">
            <Link href="/blog" className="text-zinc-700 text-[20px] text-bold">
              ← Back to blog
            </Link>
            <h1 className="mt-3 text-[28px] sm:text-[36px] lg:text-[44px] font-semibold tracking-tight">
              {post.title}
            </h1>
            <div className="mt-2 flex items-center gap-3">
              {post.tag && (
                <span className="inline-flex items-center rounded-full bg-violet-100 text-violet-700 px-2.5 py-1 text-[11px] font-semibold">
                  {post.tag}
                </span>
              )}
              <time className="text-[14px] text-zinc-600">
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </div>
          </header>

          {/* Cover image */}
          <div className="col-start-2 col-span-10 lg:col-start-4 lg:col-span-6 py-6 lg:py-10">
            <div className="justify-left align-left relative w-full aspect-[16/9] rounded-[4px] overflow-hidden ">
              <Image
                src={post.cover || "/images/placeholders/blog-cover.png"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="col-start-2 col-span-10 prose max-w-none prose-zinc prose-p:leading-7 prose-headings:font-semibold py-10 mb-20">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>
    </article>
  );
}
