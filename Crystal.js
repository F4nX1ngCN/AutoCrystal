///damage @e[type=ender_crystal] 1
//水晶放地就爆炸

mc.listen("onUseItemOn",function(player,item,block,side){
	
	if(item.type == "minecraft:end_crystal")
	{
		setTimeout(()=>{
			mc.runcmdEx("damage @e[type=ender_crystal] 1");
		},10)
	}
	return true;
});

