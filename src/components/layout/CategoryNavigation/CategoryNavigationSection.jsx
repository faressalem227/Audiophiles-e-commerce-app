import CategoryItem from "./CategoryItem";

function CategoryNavigationSection() {
  return (
    <section className=" container p-5 mx-auto my-36 flex flex-col md:flex-row md:justify-center gap-40 md:gap-4">
      <CategoryItem
        title="HEADPHONES"
        src="/products/assets/shared/desktop/image-category-thumbnail-headphones.png"
        path="/Headphones"
      />
      <CategoryItem title="SPEAKERS" src="/products/assets/shared/desktop/image-category-thumbnail-speakers.png" path="/Speakers" />
      <CategoryItem
        title="EARPHONES"
        src="/products/assets/shared/desktop/image-category-thumbnail-earphones.png"
        path="/Earphones"
      />
    </section>
  );
}

export default CategoryNavigationSection;
