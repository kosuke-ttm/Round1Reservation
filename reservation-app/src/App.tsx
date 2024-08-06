
import React, { useState, useEffect } from 'react';
import { getSheetData, updateSheetData } from './api/googleSheets';
import logo from './logo.svg';
import TodoList from './components/TodoList';
import './App.css';

const App: React.FC = () => {
  const [data, setData] = useState<any[][]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sheetData = await getSheetData();
        setData(sheetData || []);
      } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = async (row: number, col: number, value: string) => {
    const newData = [...data];
    newData[row][col] = value;
    setData(newData);
    await updateSheetData(`${String.fromCharCode(65 + col)}${row + 1}`, [[value]]);
  };

  const handleCellClick = async (row: number, col: number) => {
    const newData = [...data];
    const currentStatus = newData[row][col];
    const newStatus = currentStatus === '稼働' ? '停止' : '稼働';
    newData[row][col] = newStatus;
    setData(newData);
    await updateSheetData(`${String.fromCharCode(65 + col)}${row + 1}`, [[newStatus]]);
  };

  const getColor = (status: string, index: number) => {
    if (status === '稼働') {
      return index >= 9 ? 'black' : 'red';
    } else if (status === '停止') {
      return 'gray';
    }
    return 'white';
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Reservation System</h1>
      <table>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    value={cell}
                    onChange={(e) => handleUpdate(rowIndex, colIndex, e.target.value)}
                    style={{ backgroundColor: getColor(cell, colIndex) }}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>TODO アプリ</h1>
//       <TodoList />
//     </div>
//   );
// };


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }