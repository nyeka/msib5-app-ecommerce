export const useGetSlide = (screenWidth: number) => {
  if (screenWidth <= 328) {
    return 1
  } else if (screenWidth <= 408) {
    return 1.5
  } else if (screenWidth <= 752) {
    return 2
  } else if (screenWidth <= 968) {
    return 3
  } else if (screenWidth <= 1224) {
    return 4
  } else {
    return 5
  }
}
