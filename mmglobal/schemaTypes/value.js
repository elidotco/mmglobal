import { defineType, defineField, defineArrayMember } from 'sanity'

export const value = defineType({
  type: "document",
  name: "value",
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
      type: "image",
      name: "icon",
      options: { hotspot: true },
    }),
  ],
});

