import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.string(),
});

// export const CategorySchema = z.object({
//   id: z.string(),
//   parentCategory: z.custom((category) =>
//     CategorySchema.safeParse(category).success
//       ? category
//       : new Error('Invalid subcategory'),
//   ),
// });
