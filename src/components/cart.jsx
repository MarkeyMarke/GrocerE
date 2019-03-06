class Cart extends Component {
  state = {
    products: [],
    aisles: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedAisle: null,
    sortColumn: { path: "title", order: "asc" }
  };
}
