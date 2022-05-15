import { defineSchema } from "@tinacms/cli";
import { blockContent } from "../src/components/block-content/schema";

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
      label: "Team",
      name: "team",
      path: "content/team",
      fields: [
        {
          type: "boolean",
          label: "Published",
          name: "published",
        },
        {
          type: "string",
          label: "Name",
          name: "name",
        },
        {
          type: "string",
          label: "Position",
          name: "position",
        },
        {
          type: "rich-text",
          label: "Bio",
          name: "bio",
        },
        {
          type: "string",
          label: "Photo",
          name: "photo",
        },
        {
          type: "string",
          label: "Linkedin Url",
          name: "linkedin_url",
        },
        {
          type: "string",
          label: "Twitter Url",
          name: "twitter_url",
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
        {
          label: "Page Blocks",
          name: "page_blocks",
          type: "object",
          list: true,
          templates: [blockContent],
        },
      ],
    },
  ],
});
