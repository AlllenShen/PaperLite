<template>
  <div id="filtrank">
    <div class="bar">

      <div class="rank">
        <div class="rankbutton" @click="rankdrop()">
          排序<Icon type="md-arrow-dropdown" />
        </div>
        <div class="rankdrop" v-if="isdrop">
          <ul v-for="(rk,index) in rank" @click="rankchoice(index)">{{rk.rankname}}</ul>
        </div>                   
      </div>
            
      <div id="search">
        <!-- 这个地方用原生input重写一下 
            iview的input不能控制高度 -->
        <Input v-model="value4" icon="ios-search" placeholder="搜索" style="width: 70% " />
      </div>      
      <!-- value1这种最好改个名字 很久不看自己都忘了这是啥了 -->
      <div class="filtbutton" @click="value1 = true">
        <Icon type="md-arrow-dropleft" />筛选
      </div>
      <Drawer :closable="false" v-model="value1" width="80%">
        <div id="filtmenu">
          <div class="filt" v-for="flt in filter">
            <h4>{{flt.clsname}}</h4>
            <div class="alloptions">
              <div class="optionitem" v-for="opt in flt.options" @click="select(opt.optname, opt.selected)">
                {{opt.optname}}
              </div>
            </div>
            <hr style="margin-top:7%;" color="#e0e0e0"/>                
          </div>

          <div class="bottombtn">
            <div class="reset" @click="reset()">重&nbsp;&nbsp;&nbsp;置</div>
            <div class="confirm" @click="tofilt()">确&nbsp;&nbsp;&nbsp;定</div>
          </div>
        </div>       
      </Drawer>

    </div>   
  </div>
</template>

<script>
export default {
    props:['filter','rank'],
    methods:{
        rankdrop:function(){
            return this.isdrop=!this.isdrop;
        },
        /*rankchoice(index){
            this.nowindex=index;
            this.isdrop=false;
            this.$emit('on-change',this.choose[this.nowindex])
        },*/
        select:function(sel,seltd){
            if(!seltd){
                this.selnum+=1;
                //this.selections[this.selnum-1]=sel;
                this.selections.push(sel);
                //seltd=!seltd;
                console.log(this.selections);
            }           
            return this.selections,seltd;
        },
        reset:function(){
            this.selnum=0;
            this.selections=[];
            return this.selections;
        },
        tofilt:function(){
            this.selnum=0;
            this.selections=[];
            return this.selections;
        }
    },
    data(){
        return{
            value1:false,
            //value2:false,
            value4:'',
            isdrop:false,
            selections:[],
            selnum:0
        }
    }
}
</script>

<style scoped>
#filtrank{
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 0.2rem;
    margin-left: 2%;
    margin-right: 2%;
}
.bar{
    margin-top: 2%;
    margin-bottom: 2%;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.rank{   
    width: 25%;
    height: 33px;
    font-size: 13px;
    text-align: center;
    line-height: 33px;
}
.rankbutton{
    width: 100%;
    color: #4a4a48;
}
.rankdrop{
    margin-top: 13%;
    margin-left:20%;
    width: 170%;
    border-radius: 5px;
    z-index: 100;
    border: 1px solid #848484;
    color: #848484;
    /* background: rgba(255, 255, 255, 1); */
    background-color: white;
}

#search{
    width: 70%;
    text-align: center;
    height: 0.8rem;
}
.filtbutton{
    width: 25%;
    height: 33px;
    font-size: 13px;
    text-align: center;
    line-height: 33px;
    color: #4a4a48;
}
.filt h4{
    margin-top: 5%;
    font-size: 15px;
    text-align: left;
    color: #848484;
}
.alloptions{
    width: 100%;
    text-align: center;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
}
.optionitem{
    margin-top: 3%;
    text-align: center;
    line-height: 30px;
    width: 30%;
    height: 30px;
    color: #4a4a48;
    border:1px solid #efefef;
    border-radius: 3px;
    background-color: #efefef;
}
.bottombtn{
    position: fixed;
    right: 0;
    bottom: 0;
    width: 80%;
    display: flex;
}
.reset{
    margin-left: 0;
    margin-bottom: 0;
    width: 50%;
    height: 35px;
    text-align: center;
    line-height: 35px;
    color: #ff7657;
    background-color: white;
    border: 1px solid black;
}
.confirm{
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
    height: 35px;
    text-align: center;
    line-height: 35px;
    color: white;
    background-color: #ff7657;
    border: 1px solid black;
}
.rankitem{
    margin-left: 30%;
    margin-top: 10%;
    margin-bottom: 5%;
    width: 40%;
    height: 23px;
}
</style>
