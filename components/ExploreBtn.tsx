import Image from "next/image";

export default function ExploreBtn() {
  return (
    <a href="#evants">
      <button type="button" id="explore-btn" className="mt-7 mx-auto">
        Explore Events
        <Image src="/icons/arrow-down.svg" alt="Arrow Down" width={24} height={24} />
      </button>
    </a>
  );
}
