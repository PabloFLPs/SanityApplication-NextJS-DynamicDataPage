// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: "Service",
      name: "service",
      type: "document",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
        },
        {
          title: "Service",
          name: "service",
          type: "string",
        },
        {
          title: "City",
          name: "city",
          type: "string",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          title: "Content", 
          name: "content",
          type: "array", 
          of: [
            {
              type: "block"
            }
          ]
        },
        /*
        {
          title: "Content",
          name: "content",
          type: "string",
        },
        */
        {
          title: "Slug",
          name: "slug",
          type: "slug",
          options: {
            source: "name",
            maxLength: 200,
            slugify: (input) =>
              (input[0] + input.substring(input.indexOf("-") + 1)).toLowerCase().replace(/\s+/g, "-")
          },
        },
      ],
    },
  ]),
})
