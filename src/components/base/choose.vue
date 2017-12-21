<template>
	<div class="chooser-component">
        <ul class="chooser-list">
            <li v-for="(item,index) in selectList"
            	@click="chosenSelection(index)"
            	:class="{active:index===nowIndex}"
            >
            	{{item.label}}
            </li>
        </ul>
    </div>
</template>

<script>
	export default{
		props:{
			selectList:{
				type:Array,
				default:[{
					label:"test",
					value:''
				}]
			}
		},
		data () {
			return {
				nowIndex:0
			}
		},
		methods:{
			chosenSelection(index){
				this.nowIndex = index;
				this.$emit('on-change',this.selectList[this.nowIndex])
			}
		}
	}
</script>

<style scoped>
   @import '../../assets/style/style.css'
</style>
