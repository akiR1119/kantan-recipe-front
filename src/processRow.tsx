import { useRef } from "react";

type Process = {
  id: number;
  name: string;
};

type ProcessProps = {
  processArray: Process[];
  AddProcess: (p: string) => void;
  DeleteProcess: () => void;
};

const ProcessRow = (props: ProcessProps) => {
  const processRef = useRef<HTMLInputElement>(null);

  const ingredients = props.processArray.map((pro) => {
    return (
      <div className="process-row" key={pro.id}>
        {pro.name}
      </div>
    );
  });

  const AddProcess = () => {
    const newProcessName = processRef.current!.value;
    props.AddProcess(newProcessName);
  };

  return (
    <div className="process-area">
      手順：
      {ingredients}
      <input
        type="text"
        name="process-input"
        className="process-input"
        placeholder="手順"
        ref={processRef}
      />
      <div className="process-submit" onClick={AddProcess}>
        追加
      </div>
    </div>
  );
};

export default ProcessRow;
