import { defineType, defineField, defineArrayMember } from 'sanity'

export const team = defineType({
  type: "document",
  name: "team",
  fields: [
    defineField({
      type: "string",
      name: "name",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: { source: "name" },
    }),
    defineField({
      type: "string",
      name: "position",
    }),
    defineField({
      type: "text",
      name: "description",
    }),
    defineField({
      type: "image",
      name: "image",
      options: { hotspot: true },
    }),
    defineField({
      type: "string",
      name: "email",
    }),
    defineField({
      type: "string",
      name: "phone",
    }),
    defineField({
      type: "array",
      name: "social",
      of: [
        defineArrayMember({
          type: "social",
        }),
      ],
    }),
  ],
});

