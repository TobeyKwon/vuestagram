<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="tab = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="tab == 1" @click="nextTab">Next</li>
      <li v-if="tab == 2" @click="createPost">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    :posts="posts"
    :tab="tab"
    :currentImageUrl="currentImageUrl"
    @more="more"
    @deliveryContent="content = $event"
  />

  <div class="footer">
    <ul class="footer-button-plus" v-if="tab == 0">
      <input
        @change="upload"
        type="file"
        multiple
        accept="image/*"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import posts from "@/assets/data";
import http from "@/assets/utils/http";

export default {
  name: "App",
  data() {
    return {
      posts,
      nextPostNum: 0,
      tab: 0,
      currentImageUrl: null,
      content: "",
    };
  },
  components: {
    Container,
  },
  methods: {
    more() {
      http.get(`/more${this.nextPostNum}.json`).then(({ data }) => {
        this.posts.push(data);
        this.nextPostNum += 1;
      });
    },
    upload(e) {
      let files = e.target.files;
      console.log(files);
      if (isNotImages(files)) {
        alert("이미지 파일만 업로드 가능합니다.");
      } else {
        let currentImageURL = URL.createObjectURL(files[0]);
        this.currentImageUrl = currentImageURL;
        this.tab = 1;
      }
    },
    nextTab() {
      console.log("next");
      if (this.tab < 2) {
        this.tab++;
      } else {
        this.tab = 2;
      }
    },
    createPost() {
      let post = {
        name: "Tobey Kwon",
        userImage: "https://placeimg.com/200/200/people",
        postImage: this.currentImageUrl,
        likes: 20,
        date: "Apr 20",
        liked: false,
        content: this.content,
        filter: "clarendon",
      };
      this.posts.unshift(post);
      alert("글 작성 완료!");
      this.tab = 0;
    },
  },
};
function isNotImages(files) {
  for (let i = 0; i < files.length; i++) {
    console.log(!files[i].type.startsWith("image"));
    if (!files[i].type.startsWith("image")) {
      return true;
    }
  }
  return false;
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
