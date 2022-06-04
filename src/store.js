import { createStore } from "vuex";
import http from "@/assets/utils/http";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: 30,
      more: {},
    };
  },
  mutations: {
    changeName(state) {
      state.name = "kwon";
    },
    increamentAge(state, payload) {
      if (payload) {
        state.age += payload;
      } else {
        state.age += 1;
      }
    },
    increamentLikes(state, payload) {
      if (!payload) {
        state.likes++;
      } else {
        state.likes--;
      }
    },
    moreData(state, data) {
      state.more = data;
    },
  },
  actions: {
    getData(context) {
      http.get("/more0.json").then(({ data }) => {
        context.commit("moreData", data);
      });
    },
  },
});

export default store;
