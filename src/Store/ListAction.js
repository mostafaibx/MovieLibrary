import { getAuth } from "firebase/auth";
import { getLists, getListItems } from "./ListsSlice";
import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  get,
  remove,
} from "firebase/database";

//creating new list using push to generate new key and set to add the list to it
export const createListAction = (listName) => {
  return function () {
    const db = getDatabase();
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    const userListsRef = ref(db, "users/" + userId + "/lists");
    const newListRef = push(userListsRef);

    set(newListRef, {
      name: listName,
      items: {},
    });
  };
};

//adding movies to the list using movie ID as a key in the db
export const additemsAction = (listId) => {
  return async function (dispatch, getState) {
    const state = getState();
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    const selectedMovie = state.movies.selectedItem;
    const db = getDatabase();

    const userMovieRef = ref(db, `users/${userId}/lists/${listId}`);

    const existingSnapshot = await get(userMovieRef);
    const existingItems = existingSnapshot.val() || {};

    if (!existingItems.items) {
      existingItems.items = {};
    }
    existingItems.items[selectedMovie.id] = selectedMovie;

    set(userMovieRef, existingItems);
    dispatch(getListItemsAction());
  };
};

//
export const getListAction = () => {
  return function (dispatch) {
    const db = getDatabase();
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    const list = ref(db, `users/${userId}/lists`);
    onValue(list, (snapshot) => {
      const list = snapshot.val();
      dispatch(getLists(list));
    });
  };
};

export const getListItemsAction = () => {
  return function (dispatch, getState) {
    const state = getState();
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    const listId = state.list.listId;
    const db = getDatabase();

    const list = ref(db, `users/${userId}/lists/${listId}`);
    onValue(list, (snapshot) => {
      const list = snapshot.val();
      dispatch(getListItems(list));
    });
  };
};

export const removeMovieAction = (movieId) => {
  return function (dispatch, getState) {
    const state = getState();
    const db = getDatabase();
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    const listId = state.list.listId;

    const movieRef = ref(
      db,
      `users/${userId}/lists/${listId}/items/${movieId}`
    );
    remove(movieRef);
    dispatch(getListItemsAction());
  };
};
