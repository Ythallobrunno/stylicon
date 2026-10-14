import Image from "next/image";
import Link from "next/link";

import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

interface ProductItemProps {
  product: typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  };
}

const ProductItem = ({ product }: ProductItemProps) => {
  const firtsVariant = product.variants[0];
  return (
    <Link href="/" className="flex flex-col gap-4">
      <Image
        src={firtsVariant.imageUrl}
        alt={firtsVariant.name}
        width={200}
        height={200}
        className="rounded-3xl"
      />
      <div className="flex max-w-[200px] flex-col gap-1">
        <p className="truncate text-sm font-medium">{product.name}</p>
        <p className="truncate text-xs font-medium text-muted-foreground">
          {product.description}
        </p>
        <p className="truncate text-sm font-semibold">
          {formatCentsToBRL(firtsVariant.priceInCents)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
