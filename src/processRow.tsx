import { useRef } from "react";

import ProcessShow from "./ProcessShow";

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

  const AddProcess = () => {
    const newProcessName = processRef.current!.value;
    props.AddProcess(newProcessName);
  };

  return (
    <div className="process-area">
      手順：
      <ProcessShow processArray={props.processArray} />
      <div className="process-input-form">
        <input
          type="text"
          name="process-input"
          className="process-input"
          placeholder="手順"
          ref={processRef}
        />
        <div className="process-add" onClick={AddProcess}>
          追加
        </div>
      </div>
    </div>
  );
};

export default ProcessRow;
