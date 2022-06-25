import { defineSchema, defineConfig } from "@tinacms/cli";

export default defineSchema({
  collections: [
    {
      label: "Blog Posts",
      name: "post",
      path: "content/dummy-posts",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Date",
          name: "date",
        },
        {
          type: "boolean",
          label: "Is Draft Post",
          name: "draft",
        },
        {
          type: "string",
          label: "Blog Post Body",
          name: "body",
          isBody: true,
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      label: "Pages",
      name: "pages",
      path: "content/pages",
      fields: [
        {
          type: "boolean",
          label: "Published",
          name: "published",
        },
        {
          type: "string",
          label: "Name",
          name: "page_name",
        },
      ],
    },
  ],
});

export const config = defineConfig({
  apiURL,
  mediaStore: async () => {
    // Load media store dynamically so it only loads in edit mode
    const pack = await import("next-tinacms-cloudinary");
    return pack.TinaCloudCloudinaryMediaStore;
  },
});
