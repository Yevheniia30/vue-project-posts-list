import { ref, computed } from "vue";

export default function useSearchSortedPosts(sortedPosts) {
  const searchQuery = ref("");
  //   const selectedSort = ref("");

  const sortedAndSearch = computed(() => {
    return sortedPosts.value.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return {
    searchQuery,
    sortedAndSearch,
  };
}
