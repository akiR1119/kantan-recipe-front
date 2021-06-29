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