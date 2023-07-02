<template>
  <div class="discount">
    <h4 class="discount-title">{{ discount }}% 할인</h4>
  </div>
</template>

<script>
export default {
    //eslint-disable-next-line
    name: 'Discount',
    props: {
      discount: Number,        
    },
}
</script>

<style>
    .discount{
      padding: 10px;
    }
    .discount-title{
      text-align: center;
      background: gray;
      /* height: 100%; */
      margin:0;
      padding: 20px;
    }

    
</style>