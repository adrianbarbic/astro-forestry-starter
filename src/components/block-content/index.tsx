import type { Content } from "./types";

const BlockContent = ({ content }: Content) => (
  <div className="relative py-16 overflow-hidden bg-white">
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo">
        <div dangerouslySetInnerHTML={{ __html: content.body }} />
      </div>
    </div>
  </div>
);

export { BlockContent };
