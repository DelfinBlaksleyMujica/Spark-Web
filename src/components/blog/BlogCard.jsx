"use client";

import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
    const { id, title, date, tag, cover } = post;

    return (
        <article className="group">
            {/* Cover */}
            <Link
                href={`/blog/${id}`}
                className="block rounded-2xl overflow-hidden bg-zinc-100 ring-1 ring-black/5"
            >
                <div className="relative w-full aspect-square">
                    <Image
                        src={cover || "/images/placeholders/blog-cover.png"}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    />
                </div>
            </Link>

            {/* Meta */}
            <div className="mt-3">
                {tag && (
                    <span className="inline-flex items-center rounded-full bg-violet-100 text-violet-700 px-2.5 py-1 text-[11px] font-semibold">
                        {tag}
                    </span>
                )}

                <h3 className="mt-2 text-[18px] sm:text-[20px] font-semibold tracking-tight">
                    <Link href={`/blog/${id}`} className="hover:underline">
                        {title}
                    </Link>
                </h3>

                <p className="mt-1 text-[14px] text-zinc-600">
                    {new Date(date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}
                </p>
            </div>
        </article>
    );
}