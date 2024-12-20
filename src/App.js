import './App.css';

function App() {

  const tabs = [{
    title : 'Tab1'
  },
  {
    title : 'Tab2'
  },
  {
    title : 'Tab3'
  }

]

  return (
    <div className="App">
      <div style={{
        display : 'flex',
        gap : 4
      }}> 
        {tabs.map(tab => {
          <button key={tab.title}>{tab.title}</button>
        })}
      </div>
    </div>
  );
}

export default App;
