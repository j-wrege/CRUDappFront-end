import notesStore from "../stores/notesStore";
import styles from "../static/style.css";

export default function CreateForm() {
  const store = notesStore();

  if (store.updateForm._id) return <></>;

  return (
    <div>
      <p styles={styles.p}>Create</p>
      <form onSubmit={store.createNote}>
        <h5>
        <small-text>Name </small-text>
        <input
          onChange={store.updateCreateFormField}
          value={store.createForm.item || ''}
          name="item"
        />
        </h5>
        <h5>
        <small-text>Descript </small-text>
        <input
          onChange={store.updateCreateFormField}
          value={store.createForm.descript}
          name="descript"
        />
        </h5>
        <h5>
        <small-text>Quantity </small-text>
        <textarea
          onChange={store.updateCreateFormField}
          value={store.createForm.quantity}
          name="quantity"
        />
        </h5>
        <button type="submit">Create item</button>

      </form>
    </div>
  );
}