<template>
    <div>
        <p>观点 >></p>
        <xcontent></xcontent>
    </div>
</template>
<script>
import Xcontent from '../components/Xcontent.vue'
export default {
    components:{
        Xcontent
    }
}
</script>
<style scoped>
p{
    display: inline;
    position:relative;
    top:150px;
    left:20px;
    font-size:20px;
}
</style>

