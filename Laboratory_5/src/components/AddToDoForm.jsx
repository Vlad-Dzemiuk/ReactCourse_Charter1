const AddToDoForm = ({ title, setTitle, onSubmit }) => {
  return (
    <form className="form-container" onSubmit={onSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddToDoForm;
