export default function FilterButtons({ setFilter }) {
  return (
    <div className="wrapper-task-status">
      <button type="button" onClick={() => setFilter("All")}>
        <span className="visually-hidden">Show</span>
        All <span className="visually-hidden">Task</span>
      </button>
      <button type="button" onClick={() => setFilter("Active")}>
        <span className="visually-hidden">Show</span>
        Active <span className="visually-hidden">Task</span>
      </button>
      <button type="button" onClick={() => setFilter("Completed")}>
        <span className="visually-hidden">Show</span>
        Completed <span className="visually-hidden">Task</span>
      </button>
    </div>
  );
}
