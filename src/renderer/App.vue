<template>
  <div id="app" >
    <el-button type="danger" @click="postdanmu" style="-webkit-app-region: no-drag;">ceshi</el-button>
    <!--<router-view></router-view>-->
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'test',
    data(){
      return{
        msg:'hello world',
        idata:{
          roomid:'65515',
          csrf_token:'',
          csrf:'',
          visit_id:'',
        }
      }
    },
    created() {
    },
    methods:{
      postdanmu(){
        this.axios.post('https://api.live.bilibili.com/xlive/web-room/v1/dM/gethistory',this.qs.stringify(this.idata),{
          headers: {
            'Content-Type': 'text/plain;charset=UTF-8',
            /*'Host':'api.live.bilibili.com',
            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0'*/
          }

        }).then((res)=>{
          this.msg = res.data
          console.log(res.data)
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>

<style>
  #app{
    height: 100px;
    background-color: #2c3e50;
  }
  /* CSS */
</style>
