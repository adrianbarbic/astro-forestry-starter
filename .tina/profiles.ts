export const profiles = {
  name: "profiles",
  label: "Profiles",
  path: "src/content/profiles",
  fields: [
    {
      label: "Person",
      name: "person",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `hi ${item?.position}` };
        },
        defaultItem: {
          position: "Judith Black",
        },
      },
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
          type: "image",
          label: "Photo",
          name: "photo",
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
          label: "Linkedin url",
          name: "linkedin_url",
        },
        {
          type: "string",
          label: "Twitter url",
          name: "twitter_url",
        },
      ],
    },
  ],
};
