import _ from "lodash";

/*
 *  Sorts items into pages, based on pageNumber and pageSize
 *  @param items the array of products
 *  @param pageNumber the page number
 *  @param pageSize the number of products we want to display on one page
 */
export function paginate(items, pageNumber, pageSize) {
  // var pageStart = (pageNumber - 1) * pageSize;
  // const array = items.slice(pageStart, pageStart + pageSize);
  // console.log(array);
  // return array;

  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
