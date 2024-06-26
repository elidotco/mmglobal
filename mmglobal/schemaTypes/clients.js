import {defineType, defineField, defineArrayMember} from 'sanity'

export const clients = defineType({
  type: 'document',
  name: 'client',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'image',
      name: 'image',
      options: {hotspot: true},
    }),
  ],
})
