import {defineType, defineField, defineArrayMember} from 'sanity'

export const about = defineType({
  type: 'document',
  name: 'about',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      options: {source: 'title'},
    }),
    defineField({
      type: 'text',
      name: 'description',
    }),
  ],
})
