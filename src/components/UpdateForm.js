import notesStore from "../stores/notesStore";
import styles from "../static/style.css";

export default function UpdateForm() {
  const store = notesStore();

  if (!store.updateForm._id) return <></>;

  return (
    <div>
        <p styles={styles.p}>Update</p>      
        <form onSubmit={store.updateNote}>
        <h5>
        <small-text>Name </small-text>
        <input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.item || ''}
          name="item"
        />
        </h5>
        <h5>
        <small-text>Descript </small-text>
        <input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.descript || ''}
          name="descript"
        />
        </h5>
        <h5>
        <small-text>Quantity </small-text>
        <textarea
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.quantity}
          name="quantity"
        />
        </h5>
        
        <button type="submit">Update item</button>
        
      </form>
    </div>
  );
}