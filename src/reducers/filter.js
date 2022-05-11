export const RatingFilter = (items, ratingValue) => {
  return ratingValue === 0
    ? items
    : [...items].filter(({ ratings }) => ratings === ratingValue);
};
export const SortingFilter = (items, sortBy) => {
  if (sortBy && sortBy === "HIGH_TO_LOW") {
    return [...items].sort((a, b) => Number(b.price) - Number(a.price));
  }
  if (sortBy && sortBy === "LOW_TO_HIGH") {
    return [...items].sort((a, b) => Number(a.price) - Number(b.price));
  }
  return items;
};

export const filterByCategory = (items, category) => {
  const categoryArray = Object.keys(category).filter(
    (value) => category[value] === true
  );
  return categoryArray.length === 0
    ? items
    : items.filter(({ categoryName }) => {
        const getItems = (categoryName) => {
          return categoryArray.filter((value) => value === categoryName);
        };
        return getItems(categoryName).length === 0 ? false : true;
      });
};
