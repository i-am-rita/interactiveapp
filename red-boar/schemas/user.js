// Schema is the structure of a database... simply put: how you want your data to be returned.

export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "username",
      title: "User Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "string",
    },
  ],
};
