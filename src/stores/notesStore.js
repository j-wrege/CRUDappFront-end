import { create } from "zustand";
import axios from "axios";

const notesStore = create((set) => ({
  notes: null,

  createForm: {
    item: "",
    checkLength: "",
    quantity: "",
  },

  updateForm: {
    _id: null,
    item: "",
    descript: "",
    quantity: "",
  },

  fetchNotes: async () => {

    try {
    // Fetch the notes
    const res = await axios.get("/notes");

    // Set to state
    set({ notes: res.data.notes });
    } catch {
      window.location.replace("/login");
    }
  },


  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },

  createNote: async (e) => {
    e.preventDefault();

    const { createForm, notes } = notesStore.getState();
    const res = await axios.post("/notes", createForm);

    set({
      notes: [...notes, res.data.note],
      createForm: {
        item: "item",
        descript: "descript",
        quantity: '',
      },
    });
  },

  deleteNote: async (_id) => {
    // Delete the note

    await axios.delete(`/notes/${_id}`);
    const { notes } = notesStore.getState();

    // Update state
    const newNotes = notes.filter((note) => {
      return note._id !== _id;
    });

    set({ notes: newNotes });

  },

  handleUpdateFieldChange: (e) => {
    const { value, name } = e.target;

    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },

  toggleUpdate: ({ _id, item, descript, quantity }) => {
    set({
      updateForm: {
        item,
        descript,
        quantity,
        _id,
      },
    });
  },

  updateNote: async (e) => {
    e.preventDefault();

    const {
      updateForm: { item, descript, quantity, _id },
      notes,
    } = notesStore.getState();

    // Send the update request
    const res = await axios.put(`/notes/${_id}`, {
      item,
      descript,
      quantity,
    });

    // Update state
    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note) => {
      return note._id === _id;
    });
    newNotes[noteIndex] = res.data.note;

    set({
      notes: newNotes,
      updateForm: {
        _id: null,
        item: "item",
        descript: "descript",
        quantity: '',
      },
    });
  },
}));

export default notesStore;