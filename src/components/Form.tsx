import { Row } from "../App";

interface Props {
  values: Row[];
  addHandler: () => void;
  handleInputChange: (rowId: number, colId: string, text: string) => void;
  deleteHandler: (rowId: number) => void;
}

const Form = ({
  values,
  addHandler,
  handleInputChange,
  deleteHandler,
}: Props) => {
  return (
    <div>
      {!values.length && <p>Click on 'Add' to add a record</p>}
      {values?.map((row) => {
        return (
          <div key={row.id}>
            <input
              value={row.input1}
              onChange={(e) => {
                handleInputChange(row.id, "input1", e.target.value);
              }}
            />
            <input
              value={row.input2}
              onChange={(e) => {
                handleInputChange(row.id, "input2", e.target.value);
              }}
            />
            <button onClick={() => deleteHandler(row.id)}>Delete</button>
          </div>
        );
      })}
      <button onClick={addHandler}>Add</button>
    </div>
  );
};

export default Form;
