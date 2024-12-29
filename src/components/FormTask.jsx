function FormTask() {
  return (
    <form className='form-task'>
      <div className='input-container'>
        <label htmlFor='tarea'>Tarea</label>
        <input type='text' name='tarea' id='tarea' />
      </div>
      <button type='submit'>Añadir tarea</button>
    </form>
  );
}

export default FormTask;
