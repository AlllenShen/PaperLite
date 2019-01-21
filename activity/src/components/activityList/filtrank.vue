<template>
  <div id="filtrank">
    

    <div class="bar">
      <button id="select" @click="value1 = true">筛选</button>
      <Drawer title="筛选" :closable="false" v-model="value1">
        <div id="filtmenu">
          <button class="selectall">全部</button>    
          <div class="filt" v-for="flt in filter">
            <h4>{{flt.clsname}}</h4>
            <div class="alloptions">
              <button class="optionitem" v-for="opt in flt.options" @click="select(opt.optname, opt.selected)">
                {{opt.optname}}
              </button>
            </div>                
          </div>
          <button class="confirm" @click="tofilt()">确定</button>
        </div>
      </Drawer>

      
      <div id="search">
        <input id="content" type="text" />
        <Icon type="ios-search" size="20"/>
        <!--<input id="search" type="submmit" value="搜索">-->
      </div>      
      <button id="order" @click="value2 = true">排序</button>
      <Drawer title="排序" :closable="false" v-model="value2" placement="left">
        <div id="rankmenu">
          <div class="rank" v-for="rk in rank">              
            <button class="rankitem" @click="">{{rk.rankname}}</button>                
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
        select:function(sel,seltd){
            if(!seltd){
                this.selnum+=1;
                //this.selections[this.selnum-1]=sel;
                this.selections.push(sel);
                //seltd=!seltd;
                alert(this.selections);
            }
            
            return this.selections,seltd;

        },
        tofilt:function(){
            this.selnum=0;
            this.selections=[];
            //alert(this.selections);
            return this.selections;
        }
    },
    data(){
        return{
            value1:false,
            value2:false,
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
    padding-top: 2%;
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
.bar #select{
    width: 15%;
    height: 23px;
}
.bar #search{
    width: 70%;
    text-align: center;
}
#content{
    width: 80%;
    height: 23px;
    border: 1px solid gray;
    border-radius: 3px;
}
.bar #order{
    width: 15%;
    height: 23px;
}
#filtmenu{    
    width: 100%;
}
.filt h4{
    margin-top: 5%;
    text-align: left;
}
.selectall{
    text-align: center;
    margin-left: 2%;
    width: 30%;
    height: 20px;
    border: 1px;
    border:1px solid #364e68;
    border-radius: 3px;
}
.alloptions{
    width: 100%;
    text-align: center;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    
}
.optionitem{
    text-align: center;
    width: 30%;
    height: 20px;
    border: 1px;
    border:1px solid #364e68;
    border-radius: 3px;
}
.confirm{
    margin-left: 30%;
    margin-top: 10%;
    margin-bottom: 5%;
    width: 40%;
    height: 23px;
}
.rankitem{
    margin-left: 30%;
    margin-top: 10%;
    margin-bottom: 5%;
    width: 40%;
    height: 23px;
}
</style>
