import { getDocumentBySlug } from "outstatic/server";
import { twMerge } from "tailwind-merge";
import Header from "@/components/Header";
import { Text } from "@/components/Text";
import { markdownToHtml } from "@/lib/markdownToHtml";
import type { PinturaPost } from "@/lib/types";
import { pinturaPostFieldLabels } from "@/lib/types";

export default async function PinturaMuralPost({ params }: { params: Promise<{ slug: string }> }) {
  const post = getDocumentBySlug("pinturas", (await params).slug, [
    "title",
    "description",
    "content",
    "slug",
    "coverImage",
    "publishedAt",
    "archive",
    "tags",
    "tipoDeIntervencao",
    "local",
    "data",
    "artwork",
    "producao",
    "fotografia",
    "parceiros",
  ]) as unknown as PinturaPost;

  const content = await markdownToHtml(post?.content || "");

  const extraInfo = (
    Object.entries(pinturaPostFieldLabels) as Array<[keyof typeof pinturaPostFieldLabels, string]>
  ).flatMap(([field, label]) => {
    const value = post?.[field as keyof PinturaPost];
    if (typeof value !== "string") return [];
    return [{ field, label, value }];
  });

  return (
    <>
      <Header src={post?.coverImage} objectPosition={60} />

      <article
        className={twMerge(
          "w-full p-6 flex flex-col max-w-5xl mx-auto",
          !post?.coverImage && "pt-16",
        )}
      >
        <Text size="5xl" weight="bold" color="primary">
          {post?.title}
        </Text>

        {extraInfo.length > 0 && (
          <div className="flex flex-col py-6">
            {extraInfo.map(({ field, label, value }) => (
              <div key={field} className="flex flex-row gap-2">
                <Text color="secondary" weight="bold">
                  {label}
                </Text>
                <Text color="primary">{value}</Text>
              </div>
            ))}
          </div>
        )}

        <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </>
  );
}
