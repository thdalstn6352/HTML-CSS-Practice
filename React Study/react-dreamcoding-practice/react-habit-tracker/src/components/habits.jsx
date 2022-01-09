import Habit from './habit';
import HabitAddForm from './habitAddForm';


const Habits = ({habits, onIncrement, onDecrement, onDelete, onInput, onReset}) => {

  const handleIncrement = (habit) => {
    onIncrement(habit);
  }
  const handleDecrement = (habit) => {
    if(habit.count !== 0) {
      onDecrement(habit);
    }
  }
  const handleDelete = (habit) => {
    onDelete(habit);
  }

  const handleInput = (input) => {
    onInput(input)
  }
  return (
    <div className='habits'>
      <HabitAddForm onSubmit={handleInput}/>
      <ul>
        {habits.map((habit) => {
          return <Habit habit={habit} key={habit.id} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} />
        })}
      </ul>
      <button className='habits-reset' onClick={onReset}>Reset All</button>
    </div>
  );
}


export default Habits