export default function TodoForm({ value, onChange, onSubmit }) {
  return (
    <form className="wrapper-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="text"
        id="todo-input"
        placeholder="Add your new Todo..."
        value={value}
        onChange={onChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
