import Link from "next/link";
import type { OstDocument } from "outstatic";
import { twMerge } from "tailwind-merge";
import { Text } from "@/components/Text";

export function PostCard({
  post,
  collection,
  showDate,
}: {
  post: OstDocument;
  collection: "programas" | "pinturas";
  showDate?: "full" | "year";
}) {
  const collectionSlug = collection === "programas" ? "programacao" : "pintura-mural";

  return (
    <Link
      className={twMerge(
        "w-full flex flex-row justify-between items-center border border-neutral-400 px-4 py-2",
        "text-neutral-950 hover:text-teal-500 transition-colors duration-150",
        "hover:bg-neutral-100",
      )}
      href={`/${collectionSlug}/${post.slug}`}
    >
      <Text weight="medium" color="undefined" className="text-lg max-md:text-base">
        {post.title}
      </Text>

      {showDate && (
        <Text size="sm" weight="normal" color="undefined">
          {showDate === "year"
            ? new Date(post.publishedAt).getFullYear()
            : new Date(post.publishedAt).toLocaleDateString("pt-PT", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
        </Text>
      )}
    </Link>
  );
}
