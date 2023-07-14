import { QnaProps } from "@/types";

const Qna = ({ question, answer }: QnaProps) => {
  return (
    <div className="bg-transparent collapse collapse-arrow text-shadow">
      <input type="checkbox" /> 
      <div className="collapse-title">
        <p className="text-xl font-normal md:text-2xl font-lato">
          {question}
        </p>
      </div>
      <div className="collapse-content">
        <p className="text-base font-normal font-lato md:text-lg">
          {answer}
        </p>
      </div>

      <div className="mx-4 border-b-2 border-shadow" />
    </div>
  );
};

export default Qna;
