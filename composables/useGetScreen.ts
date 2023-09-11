import { ref, onMounted, onBeforeUnmount } from "vue";

export const useGetScreenSize = () => {
  // Define refs for screen width and height
  const screenWidth = ref(0);
  const screenHeight = ref(0);

  // Function to update screen size
  const updateScreenSize = () => {
    screenWidth.value = window.innerWidth;
    screenHeight.value = window.innerHeight;
  };

  // Use onMounted and onBeforeUnmount to add and remove event listener
  onMounted(() => {
    if (process.client) {
      // Check if running on the client side to access window object
      window.addEventListener("resize", updateScreenSize);
      // Initialize screen size
      updateScreenSize();
    }
  });

  onBeforeUnmount(() => {
    if (process.client) {
      // Check if running on the client side to access window object
      window.removeEventListener("resize", updateScreenSize);
    }
  });

  return {
    screenWidth,
    screenHeight,
  };
};
