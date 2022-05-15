import { defineSchema } from "@tinacms/cli";

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
  ],
});
