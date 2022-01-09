import React, { memo } from "react"

const HabitAddForm = memo(({onSubmit}) => {
  console.log("addForm");
  const inputRef  = React.createRef();
  const formRef = React.createRef();

  const handleInput = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    value && onSubmit(value);
    formRef.current.reset();
  }
  return (
      <form ref={formRef} className='add-form' onSubmit={handleInput}>
        <input className='add-input' type="text" placeholder='Habit' ref={inputRef}/>
        <button className='add-button' type='submit'>Add</button>
      </form>
  )
})

export default HabitAddForm;