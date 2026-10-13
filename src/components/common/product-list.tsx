"use-client";

interface ProductListProps {
  title: string;
  products: (typeof productTable.$inferSelect & {
    variant: (typeof productVariantTable.$inferSelect)[];
  })[];
}

import { db } from "@/db";
import { productTable, productVariantTable } from "@/db/schema";

const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
};

export default ProductList;
