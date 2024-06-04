import { defineType, defineField } from 'sanity'

export const social = defineType({
  type: "object",
  name: "social",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "url",
      name: "url",
    }),
  ],
});

