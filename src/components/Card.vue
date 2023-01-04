<template>
    <div >        
        <img class="room-img" :src="room.image" alt="부동산 이미지">
        <h4 @click="함수" >{{room.content}}</h4>
        <h3>{{room.title}}</h3>
        <p>{{room.price}}원</p>
    </div>  
</template>

<script>
export default {
    //eslint-disable-next-line
    name: 'Card',
    props: {
        room: Object,
        
    },
    methods:{
        함수(){
            this.$emit('openModal', this.room.id)
        }
    }
}
</script>

<style>

</style>