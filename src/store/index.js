import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firestoreAction } from "vuexfire";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(Vuex);

const db = firebase.initializeApp({ projectId: "nincevic-prod" }).firestore();

export default new Vuex.Store({
  state: {
    accommodation: {},
    contact: {},
    tennis: {},
    header: {},
    boat: {},
  },
  mutations: vuexfireMutations,
  actions: {
    bindHeader: firestoreAction((context) => {
      return context.bindFirestoreRef(
        "header",
        db.collection("sections").doc("header")
      );
    }),
    bindAccommodation: firestoreAction((context) => {
      return context.bindFirestoreRef(
        "accommodation",
        db.collection("sections").doc("accommodation")
      );
    }),
    bindTennis: firestoreAction((context) => {
      return context.bindFirestoreRef(
        "tennis",
        db.collection("sections").doc("tennis")
      );
    }),
    bindBoat: firestoreAction((context) => {
      return context.bindFirestoreRef(
        "boat",
        db.collection("sections").doc("boat")
      );
    }),
    bindContact: firestoreAction((context) => {
      return context.bindFirestoreRef(
        "contact",
        db.collection("sections").doc("contact")
      );
    }),
  },
  modules: {},
});
