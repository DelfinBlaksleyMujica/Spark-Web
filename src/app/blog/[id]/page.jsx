import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { Public_Sans } from "next/font/google";
import { POSTS } from "@/components/blog/posts";

const publicSans = Public_Sans({ subsets: ["latin"] });

// helper: parse "DD-MM-YYYY" safely; fallback to native Date for ISO strings
function parseDate(d) {
  if (typeof d !== "string") return new Date(NaN);
  const m = d.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (m) {
    const [, dd, mm, yyyy] = m;
    return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
  }
  return new Date(d); // works for ISO like "2025-09-22"
}

export default function BlogPostPageContainer({ params }) {
  const { id } = use(params);

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

  const dateObj = parseDate(post.date);
  const dateText = isNaN(dateObj) ? post.date : dateObj.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className={`${publicSans.className} bg-white text-zinc-900`}>
      <div className="px-4 sm:px-6 md:px-0 pt-[150px]">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          {/* Back link and title */}
          <header className="col-start-2 col-span-10">
            <Link href="/blog" className="text-zinc-700 text-[20px] font-semibold">
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
              <time className="text-[14px] text-zinc-600">{dateText}</time>
            </div>
          </header>

          {/* Cover image */}
          <div className="col-start-2 col-span-10 lg:col-start-4 lg:col-span-6 py-6 lg:py-10">
            <div className="relative w-full aspect-[16/9] rounded-[4px] overflow-hidden">
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
          <div
            className="
              col-start-2 col-span-10
              prose prose-zinc max-w-none py-10 mb-20
              [&_h2]:!text-[24px] [&_h2]:mt-10
              [&_h3]:!text-[30px] [&_h3]:!font-bold [&_h3]:mt-10 [&_h3]:mb-4
              [&_p]:!text-[20px] [&_p]:!text-zinc-800 [&_p]:leading-7
              [&_ul]:!list-disc [&_ul]:!ml-5 [&_ul]:!mt-4 [&_ul]:!mb-4
            "
          >
            {typeof post.content === "string" ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <pre className="text-red-600 text-sm whitespace-pre-wrap">
                {"post.content is not a string:\n" + JSON.stringify(post.content, null, 2)}
              </pre>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
