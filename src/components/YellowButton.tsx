import { YellowButtonProps } from "@/types";

const YellowButton = ({ children, onClick }: YellowButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-row w-full items-center justify-center space-x-1 cursor-pointer bg-orange rounded-[5px] py-[12px] hover:bg-orange-2 duration-150 transition-all ease-in-out"
    >
      {children}
    </button>
  );
};

export default YellowButton;
