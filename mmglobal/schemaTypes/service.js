import { defineType, defineField } from 'sanity'

export const service = defineType({
  type: "document",
  name: "service",
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
      type: "image",
      name: "icon",
      options: { hotspot: true },
    }),
  ],
});

