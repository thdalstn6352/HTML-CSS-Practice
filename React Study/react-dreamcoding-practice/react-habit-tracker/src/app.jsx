import "./app.css";
import Navbar from "./components/navbar";
import Habits from "./components/habits";
import { useState } from "react/cjs/react.development";
import { useCallback, useEffect } from "react";

function App() {
  // const [id, setId] = useState(1);
  const [habits, setHabits] = useState([]);

  const handleInput = useCallback((input) => {
    const newHabit = {
      id: Date.now(),
      name: input,
      count: 0,
    };
    setHabits((habits) => [newHabit, ...habits]);
    // ==> 위 코드는 올바르게 실행되지 않음.
    // setHabits((habits) => [
    //   ...habits,
    //   { id: Date.now(), name: input, count: 0 },
    // ]);
  }, []);

  const handleIncrement = useCallback((habit) => {
    // console.log("increment");
    // const newHabits = habits.map((item) => {
    //   if (item.id === habit.id) {
    //     return { ...habit, count: habit.count + 1 };
    //   }
    //   return item;
    // });
    // setHabits(newHabits);
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      })
    );
  }, []);

  const handleDecrement = useCallback((habit) => {
    // if (habit.count !== 0) {
    //   const newHabits = habits.map((item) => {
    //     if (item.id === habit.id) {
    //       return { ...habit, count: habit.count - 1 };
    //     }
    //     return item;
    //   });
    //   setHabits(newHabits);
    // }
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          const count = habit.count - 1;
          return { ...habit, count: count < 0 ? 0 : count };
        }
        return item;
      })
    );
  }, []);

  const handleDelete = useCallback((habit) => {
    // const newHabits = [...habits];
    // const index = newHabits.indexOf(habit);
    // newHabits.splice(index, 1);
    // setHabits(newHabits);
    setHabits((habits) => habits.filter((item) => item.id !== habit.id));
  }, []);

  const handleReset = useCallback(() => {
    const newHabits = habits.map((item) => {
      item.count = 0;
      return item;
    });
    setHabits(newHabits);
  }, []);

  return (
    <>
      <Navbar total={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onInput={handleInput}
        onReset={handleReset}
      />
    </>
  );
}
export default App;
