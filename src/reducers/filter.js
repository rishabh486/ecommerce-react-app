export const RatingFilter = (items, ratingValue) => {
  return ratingValue === 0
    ? items
    : [...items].filter(({ ratings }) => ratings === ratingValue);
};
export const SortedData = (items, sortBy) => {
  if (sortBy && sortBy === "HIGH_TO_LOW") {
    return [...products].sort((a, b) => Number(b.price) - Number(a.price));
  }
  if (sortBy && sortBy === "LOW_TO_HIGH") {
    return [...products].sort((a, b) => Number(a.price) - Number(b.price));
  }
  return items;
};
