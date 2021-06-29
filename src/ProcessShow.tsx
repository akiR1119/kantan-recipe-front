import { Process } from "./Process";

type ProcessShowProps = {
  processArray: Process[];
};

const ProcessShow = (props: ProcessShowProps) => {
  const Process = props.processArray.map((pro) => {
    return (
      <div className="process-row" key={pro.id}>
        {pro.name}
      </div>
    );
  });
  return <div>{Process}</div>;
};

export default ProcessShow;
