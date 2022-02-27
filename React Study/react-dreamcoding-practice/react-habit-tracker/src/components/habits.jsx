import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

const Habits = ({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onInput,
  onReset,
}) => {
  console.log("habits");
  // const handleIncrement = (habit) => {
  //   onIncrement(habit);
  // };
  // const handleDecrement = (habit) => {
  //   if (habit.count !== 0) {
  //     onDecrement(habit);
  //   }
  // };
  // const handleDelete = (habit) => {
  //   onDelete(habit);
  // };

  // const handleInput = (input) => {
  //   onInput(input);
  // };
  return (
    <div className="habits">
      <HabitAddForm onSubmit={onInput} />
      <ul>
        {habits.map((habit) => {
          return (
            <Habit
              habit={habit}
              key={habit.id}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
      <button className="habits-reset" onClick={onReset}>
        Reset All
      </button>
    </div>
  );
};

export default Habits;
