import './app.css';
import Navbar from './components/navbar';
import Habits from './components/habits';
import { useState } from 'react/cjs/react.development';
import { useCallback, useEffect } from 'react';


function App() {
  const [id, setId] = useState(1);
  const [habits, setHabits] = useState([]);

  const handleInput = useCallback((input) => {

    const newHabit = {
      id,
      name: input,
      count: 0
    };
    setHabits([newHabit, ...habits]);
    setId((cur) => cur + 1);
  })

  const handleIncrement = (habit) => {
    const newHabits = habits.map(item => {
      if(item.id === habit.id) {
        return {...habit, count: habit.count + 1};
      }
      return item;
    });
    setHabits(newHabits);
  }

  const handleDecrement = (habit) => {
    if(habit.count !== 0) {
      const newHabits = habits.map(item => {
        if(item.id === habit.id) {
          return {...habit, count: habit.count - 1};
        }
        return item;
      });
      setHabits(newHabits);
    }
  }

  const handleDelete = (habit) => {
    const newHabits = [...habits];
    const index = newHabits.indexOf(habit);
    newHabits.splice(index, 1);
    setHabits(newHabits);
  }

  const handleReset = () => {
    const newHabits = habits.map((item) => {
      item.count = 0;
      return item;
    })
    setHabits(newHabits);
  }

  return (
    <>
      <Navbar total={habits.filter((item) => item.count > 0).length}/>
      <Habits habits={habits} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} onInput={handleInput} onReset={handleReset}/>
    </>
  );
}
export default App;
