function ListTask() {
  return (
    <ul className='list-task'>
      <li>
        <input name='task-1' id='task-1' type='checkbox' />
        <label htmlFor='task-1'>Hacer ejercicio</label>
      </li>
      <li>
        <input name='task-2' id='task-2' type='checkbox' />
        <label htmlFor='task-2'>Tomar desayuno</label>
      </li>
      <li>
        <input name='task-3' id='task-3' type='checkbox' />
        <label htmlFor='task-3'>Pasear al perro</label>
      </li>
    </ul>
  );
}

export default ListTask;
