import { EntityMetadata, PrimaryKeySerde, SimpleSerde, ForeignKeySerde, EnumFieldSerde } from "joist-orm";
import { Author, Book, Publisher, Tag, PublisherSizes } from "./entities";

export const authorMeta: EntityMetadata<Author> = {
  cstr: Author,
  type: "Author",
  tableName: "authors",
  columns: [
    { fieldName: "id", columnName: "id", dbType: "int", serde: new PrimaryKeySerde("id", "id") },

    {
      fieldName: "firstName",
      columnName: "first_name",
      dbType: "varchar",
      serde: new SimpleSerde("firstName", "first_name"),
    },
    {
      fieldName: "lastName",
      columnName: "last_name",
      dbType: "varchar",
      serde: new SimpleSerde("lastName", "last_name"),
    },
    {
      fieldName: "isPopular",
      columnName: "is_popular",
      dbType: "bool",
      serde: new SimpleSerde("isPopular", "is_popular"),
    },
    {
      fieldName: "age",
      columnName: "age",
      dbType: "int",
      serde: new SimpleSerde("age", "age"),
    },
    {
      fieldName: "createdAt",
      columnName: "created_at",
      dbType: "timestamptz",
      serde: new SimpleSerde("createdAt", "created_at"),
    },
    {
      fieldName: "updatedAt",
      columnName: "updated_at",
      dbType: "timestamptz",
      serde: new SimpleSerde("updatedAt", "updated_at"),
    },
    {
      fieldName: "publisher",
      columnName: "publisher_id",
      dbType: "int",
      serde: new ForeignKeySerde("publisher", "publisher_id", () => publisherMeta),
    },
  ],
  order: 2,
};

(Author as any).metadata = authorMeta;

export const bookMeta: EntityMetadata<Book> = {
  cstr: Book,
  type: "Book",
  tableName: "books",
  columns: [
    { fieldName: "id", columnName: "id", dbType: "int", serde: new PrimaryKeySerde("id", "id") },

    {
      fieldName: "title",
      columnName: "title",
      dbType: "varchar",
      serde: new SimpleSerde("title", "title"),
    },
    {
      fieldName: "createdAt",
      columnName: "created_at",
      dbType: "timestamptz",
      serde: new SimpleSerde("createdAt", "created_at"),
    },
    {
      fieldName: "updatedAt",
      columnName: "updated_at",
      dbType: "timestamptz",
      serde: new SimpleSerde("updatedAt", "updated_at"),
    },
    {
      fieldName: "author",
      columnName: "author_id",
      dbType: "int",
      serde: new ForeignKeySerde("author", "author_id", () => authorMeta),
    },
  ],
  order: 3,
};

(Book as any).metadata = bookMeta;

export const publisherMeta: EntityMetadata<Publisher> = {
  cstr: Publisher,
  type: "Publisher",
  tableName: "publishers",
  columns: [
    { fieldName: "id", columnName: "id", dbType: "int", serde: new PrimaryKeySerde("id", "id") },

    {
      fieldName: "size",
      columnName: "size_id",
      dbType: "int",
      serde: new EnumFieldSerde("size", "size_id", PublisherSizes),
    },

    {
      fieldName: "name",
      columnName: "name",
      dbType: "varchar",
      serde: new SimpleSerde("name", "name"),
    },
    {
      fieldName: "createdAt",
      columnName: "created_at",
      dbType: "timestamptz",
      serde: new SimpleSerde("createdAt", "created_at"),
    },
    {
      fieldName: "updatedAt",
      columnName: "updated_at",
      dbType: "timestamptz",
      serde: new SimpleSerde("updatedAt", "updated_at"),
    },
  ],
  order: 1,
};

(Publisher as any).metadata = publisherMeta;

export const tagMeta: EntityMetadata<Tag> = {
  cstr: Tag,
  type: "Tag",
  tableName: "tags",
  columns: [
    { fieldName: "id", columnName: "id", dbType: "int", serde: new PrimaryKeySerde("id", "id") },

    {
      fieldName: "name",
      columnName: "name",
      dbType: "varchar",
      serde: new SimpleSerde("name", "name"),
    },
    {
      fieldName: "createdAt",
      columnName: "created_at",
      dbType: "timestamptz",
      serde: new SimpleSerde("createdAt", "created_at"),
    },
    {
      fieldName: "updatedAt",
      columnName: "updated_at",
      dbType: "timestamptz",
      serde: new SimpleSerde("updatedAt", "updated_at"),
    },
  ],
  order: 0,
};

(Tag as any).metadata = tagMeta;
