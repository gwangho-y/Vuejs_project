<template>
  <div class="black-bg" v-if="모달창열렸니">
    <button @click="닫기">닫기</button>
    <div class="white-bg">     
      <img style="width:100%" :src="room.image" alt="">
      <h4>{{room.content}}</h4>
      <h3>{{room.title}}</h3>
      <p>{{room.price}}</p>
      <input v-model.number="month">
      <p>{{ month }}개월 선택함 : {{ room.price * month }}</p>
    </div>
  </div>
</template>

<script>
export default {
    //eslint-disable-next-line
    name: 'Modal',
    data() {
        return {
            month: 1,
        }
    },
    watch : {
        month(a){
            if (isNaN(a)) {
                alert("숫자만 입력 가능합니다");
                this.month = 1;
            }
            
            // if (typeof(a)==="string") {
            //     alert("스트링임 ㅋ");
            //     this.month=1;
            // }                
        },
        date(){

        }
    },
    props: {
        room: Object,
        모달창열렸니: Boolean,
    },
    methods:{
        닫기(){
            this.$emit('closeModal');
        }
    },
    beforeUpdate(){
        console.log('바뀜');
    },
    
    
}
</script>

<style>

</style>