<template>
	<div class="selection-component">
      <div class="selection-show">
        <span @click="toggleDrop">{{this.selectList[this.nowIndex].text}}</span>
        <div class="arrow"></div>
      </div>
      <div class="selection-list">
        <ul v-if="isDrop">
         	<li v-for="(item,index) in selectList" @click="chooseSelected(index)">
         		{{item.text}}
         	</li>
        </ul>
      </div>
   </div>
</template>

<script>
	export default{
		props:{
			selectList:{
				type:Array,
				default:[
					{
						value:0,
						text:''
					}
				]
			}
		},
		data () {
			return {
				selectTitle:'你是什么南北呢',
				isDrop:false,
				nowIndex:0
			}
		},
		methods:{
			toggleDrop (){
				this.isDrop = !this.isDrop;
			},
			chooseSelected (index){
				this.nowIndex = index;
				this.isDrop = false;
				this.$emit('on-change',this.selectList[this.nowIndex])
//				this.$emit('on-change',this.selections[this.nowIndex])
			}
		}
		
	}
</script>

<style scoped>
.selection-component {
  position: relative;
  display: inline-block;
}
.selection-show {
  border: 1px solid #e3e3e3;
  padding: 0 20px 0 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  background: #fff;
}
.selection-show .arrow {
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #e3e3e3;
  width: 0;
  height: 0;
  margin-top: -1px;
  margin-left: 6px;
  margin-right: -14px;
  vertical-align: middle;
}
.selection-list {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 25px;
  width: 100%;
  background: #fff;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  z-index: 5;
}
.selection-list li {
  padding: 5px 15px 5px 10px;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  cursor: pointer;
  background: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.selection-list li:hover {
  background: #e3e3e3;
}
</style>
