import { useInView as useIntersectionInView } from "react-intersection-observer";

function useInView() {
  const { ref, inView } = useIntersectionInView({
    triggerOnce: true,
    threshold: 0,
  });

  return [ref, inView];
}

export default useInView;