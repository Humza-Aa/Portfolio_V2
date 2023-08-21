import Lottie from "react-lottie";
import coder from "./animation_lllg8xws.json";


export default function CoderAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coder,
  };

  return (
    <Lottie options={defaultOptions} />
  );
}
