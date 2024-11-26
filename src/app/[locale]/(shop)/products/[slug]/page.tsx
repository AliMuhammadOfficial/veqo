import ProductDetails from "@/components/(shop)/ProductDetails";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) => {
  const slug = (await params).slug;
  const locale = (await params).locale;
  console.log(slug, locale);

  return (
    <div>
      <ProductDetails />
    </div>
  );
};

export default ProductDetailsPage;
