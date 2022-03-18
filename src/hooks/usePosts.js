import axios from "axios";
// import { uuid } from "vue-uuid";
import { ref, onMounted } from "vue";
const usePosts = ({ page, limit }) => {
  const posts = ref([]);
  const total = ref(0);
  const totalPages = ref(0);
  const isLoading = ref(false);
  const fetchPosts = async () => {
    try {
      isLoading.value = true;

      const response = await axios.get("http://localhost:7000/api/posts", {
        params: {
          page,
          limit,
        },
      });
      // console.log(response);
      // const newPosts = response.data.data.map((item) => {
      //   return {
      //     id: uuid.v1(),
      //     title: "Interesting fact about cats",
      //     description: item.fact,
      //   };
      // });
      // console.log(newPosts);
      posts.value = response.data.rows;
      total.value = response.data.count;
      totalPages.value = Math.ceil(response.data.count / limit);
      // console.log(this.totalPages);
    } catch (err) {
      alert("Error!");
    } finally {
      isLoading.value = false;
    }
  };
  onMounted(fetchPosts);
  return {
    posts,
    isLoading,
    totalPages,
    total,
  };
};

export default usePosts;
