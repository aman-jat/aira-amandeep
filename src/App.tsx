import { useState } from "react";
import Form from "./components/Form";

export interface Row {
  id: number;
  input1: string;
  input2: string;
}

export interface FormData {
  tab1: Row[];
  tab2: Row[];
  tab3: Row[];
}

const tabs: {
  id: keyof FormData;
  title: string;
}[] = [
  {
    id: "tab1",
    title: "tab1",
  },
  {
    id: "tab2",
    title: "tab 2",
  },
  {
    id: "tab3",
    title: "tab 3",
  },
];

function App() {
  const [formData, setFormData] = useState<FormData>({
    tab1: [],
    tab2: [],
    tab3: [],
  });

  const [currentTab, setCurrentTab] = useState<keyof FormData>("tab1");

  const addHandler = () => {
    setFormData({
      ...formData,
      [currentTab]: [
        ...formData[currentTab],
        { id: Date.now(), input1: "INPUT1", input2: "INPUT2" },
      ],
    });
  };

  const handleInputChange = (rowId: number, colId: string, text: string) => {
    setFormData({
      ...formData,
      [currentTab]: formData[currentTab].map((item) => {
        if (item.id === rowId) {
          return {
            ...item,
            [colId]: text,
          };
        }
        return item;
      }),
    });
  };

  const deleteHandler = (rowId: number) => {
    const newArray = formData[currentTab].filter((item) => item.id !== rowId);
    setFormData({
      ...formData,
      [currentTab]: newArray,
    });
  };

  const copyToAll = () => {
    setFormData({
      tab1: formData[currentTab],
      tab2: formData[currentTab],
      tab3: formData[currentTab],
    });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <div>
          {tabs.map((tab) => {
            return (
              <button key={tab.title} onClick={() => setCurrentTab(tab.id)}>
                {tab.title}
              </button>
            );
          })}
        </div>

        <button onClick={copyToAll}>Copy to all</button>
      </div>

      <Form
        values={formData[currentTab]}
        addHandler={addHandler}
        handleInputChange={handleInputChange}
        deleteHandler={deleteHandler}
      />

      <button
        style={{
          marginTop: "8px",
        }}
        onClick={() => {
          console.log("formData", formData);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
