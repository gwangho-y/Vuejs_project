<template>

 <!-- 모달창열렸니가 true일 때 클래스 명은 end로 바뀐다. -->
  <!-- <div class="start" :class="{end: 모달창열렸니}">
    <Modal @closeModal="모달창열렸니=false;" v-if="모달창열렸니" :room="datas[누른거]" :모달창열렸니="모달창열렸니"/>
  </div> -->

  <transition name="fade">
    <Modal @closeModal="모달창열렸니=false;" v-if="모달창열렸니" :room="datas[누른거]" :모달창열렸니="모달창열렸니"/>
  </transition>


  <div class="menu">
    <a v-for="작명 in 메뉴들" :key="작명">{{작명}}</a>
  </div>

  <Discount v-if="showDiscount" :discount="discount"/>

  <button @click="priceSort">가격순정렬</button>
  <button @click="sortBack">되돌리기</button>

  <Card @openModal="모달창열렸니=true; 누른거=$event" v-for="room in datas" :modalOpen="modalOpen" :key="room" :room="room"/>
   
 
  


  
</template>

<script>

import json from "./data/oneroom";
import Discount from "./components/Discount";
import Modal from "./components/Modal";
import Card from "./components/Card";

export default {
  name: 'App',
  data(){
    return{      
      discount: 30,
      showDiscount: true,
      originDatas: [...json],
      누른거: 0,
      datas : json,
      모달창열렸니 : false,
      메뉴들: ['Home','Shop','About'],
    }
  },
  methods : {
    increase( i ) {
      this.신고수[i] += 1;
    },
    priceSort(){
      this.datas.sort(function(a,b){
        return a.price - b.price;
      })
    },
    sortBack(){
      this.datas = [...this.originDatas];
    }
  },
  // 생명주기
  mounted(){
    // console.log(this.text);
   
    setInterval(() => {
      // console.log(this.discount);
      if (this.discount>0) {
        this.discount-=1;
      }      
    }, 1000);
  },

  components: {
    Discount,
    Modal,
    Card
  }
}
</script>

<style>

.fade-enter-from {
  /* 애니메이션 시작 */
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  /* 애니메이션 끝 */
  transform: translateY(0px);
}

.fade-leave-from {
  /* 애니메이션 시작 */
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  /* 애니메이션 끝 */
  opacity: 0;
}




body{
  margin:  0;
}

div{
  box-sizing: border-box;
}

.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding : 20px;
}

.white-bg{
  width:100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}


.room-img{
  width: 100%;
  margin-top: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}


.menu {
  background: darkslateblue;
  padding: 15px;
  /* border-radius: 5px; */
}

.menu a {
  color: white;
  padding: 10px;
}


</style>
