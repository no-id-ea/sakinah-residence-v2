import { QnaProps } from "@/types";

const Qna = ({ question, answer }: QnaProps) => {
  return (
    <div className="bg-transparent collapse collapse-arrow text-shadow">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title">
        <p className="font-lato font-medium text-[28px]">
          {question}
        </p>
      </div>
      <div className="collapse-content">
        <p className="font-lato font-normal text-[20px]">
          {answer}
        </p>
      </div>

      <div className="mx-5 border-b-2 border-shadow" />
    </div>
  );
};

export default Qna;
