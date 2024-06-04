import { defineType, defineField, defineArrayMember } from 'sanity'

export const project = defineType({
  type: "document",
  name: "project",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: { source: "title" },
    }),
    defineField({
      type: "text",
      name: "description",
    }),
    defineField({
      type: "array",
      name: "body",
      title: "Main content",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "images",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "services",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "service" }],
        }),
      ],
    }),
  ],
});

