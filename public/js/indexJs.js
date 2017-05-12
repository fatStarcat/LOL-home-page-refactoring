/**
 * Created by Administrator on 2017/3/28 0028.
 */
/*导航下拉列表*/
/*轮播图*/
//获取到图片数组
var carImages=document.getElementsByClassName("carImages")[0];
//alert(carImages)
var imagesUl=carImages.getElementsByTagName("ul")[0];
//var imagesLi=carImages.getElementsByTagName("li");
//获取图片描述数组
var carText=document.getElementsByClassName("carText")[0];
var textLi=carText.getElementsByTagName("li");
for(var i=0;i<textLi.length;i++){
    textLi[i].addEventListener("mousemove",moveText,false);
    //alert(textUl[i])
}
//设置默认第一个文本Li
textLi[0].style.backgroundColor="#37ab88";
textLi[0].style.color="#ffffff";
textLi[0].style.fontWeight="bolder";
//初始轮播的marginLeft
if(imagesUl.style.marginLeft==""){
    imagesUl.style.marginLeft=0;
}
function moveText(){
    //文本Li全部样式重置
    for(var i=0;i<textLi.length;i++){
        textLi[i].style.backgroundColor="#efefef";
        textLi[i].style.color="#8c8c8c";
        textLi[i].style.fontWeight="normal";
    }
    var change=this.id;
    textLi[change].style.backgroundColor="#37ab88";
    textLi[change].style.color="#ffffff";
    textLi[change].style.fontWeight="bolder";
    imagesUl.style.marginLeft=780*(-change)+"px";
    imagesUl.style.transition="all .2s linear";
}
//自动轮播
function automatic(){
    for(var i=0;i<textLi.length;i++){
        textLi[i].style.backgroundColor="#efefef";
        textLi[i].style.color="#8c8c8c";
        textLi[i].style.fontWeight="normal";
    }
    var autoMargin=parseInt(imagesUl.style.marginLeft);
    if(parseInt(imagesUl.style.marginLeft)!=(-3120)){
        imagesUl.style.marginLeft=autoMargin-780+"px";
        var autoNum=Math.abs(parseInt(imagesUl.style.marginLeft)/780);
        textLi[autoNum].style.backgroundColor="#37ab88";
        textLi[autoNum].style.color="#ffffff";
        textLi[autoNum].style.fontWeight="bolder";
        imagesUl.style.transition="all .2s linear";
    }
    else{
        imagesUl.style.marginLeft=0;
        textLi[0].style.backgroundColor="#37ab88";
        textLi[0].style.color="#ffffff";
        textLi[0].style.fontWeight="bolder";
        imagesUl.style.transition="all .2s linear";
    }
}
setInterval(automatic,4000);



/*切换新闻*/
var newsHead=document.getElementsByClassName("newsHead")[0];
var newsHeadLi=newsHead.getElementsByTagName("li");
var newsHeadP=newsHead.getElementsByTagName("p");
//初始化
newsHeadLi[0].style.color="#02ab89";
newsHeadLi[0].style.fontWeight="bold";
newsHeadP[0].style.backgroundColor="#02ab89";
for(var i=0;i<(newsHeadLi.length-1);i++){
    newsHeadLi[i].addEventListener("mousemove",newsHeadMove,false);
}
function newsHeadMove(){
    var newsOne=document.getElementsByClassName("newsOne")[0];
    var newsTwo=document.getElementsByClassName("newsTwo")[0];
    var newsThree=document.getElementsByClassName("newsThree")[0];
    var newsFour=document.getElementsByClassName("newsFour")[0];
    for(var i=0;i<(newsHeadLi.length-1);i++){
        newsHeadLi[i].style.color="#888888";
        newsHeadLi[i].style.fontWeight="normal";
        newsHeadP[i].style.backgroundColor="#ebecec";
    }
    newsHeadLi[this.value].style.color="#02ab89";
    newsHeadLi[this.value].style.fontWeight="bold";
    newsHeadP[this.value].style.backgroundColor="#02ab89";
    if(this.value==0){
        newsOne.style.display="inline-block";
        newsTwo.style.display="none";
        newsThree.style.display="none";
        newsFour.style.display="none";
    }
    else if(this.value==1){
        newsOne.style.display="none";
        newsTwo.style.display="inline-block";
        newsThree.style.display="none";
        newsFour.style.display="none";
    }
    else if(this.value==2){
        newsOne.style.display="none";
        newsTwo.style.display="none";
        newsThree.style.display="inline-block";
        newsFour.style.display="none";
    }
    else if(this.value==3){
        newsOne.style.display="none";
        newsTwo.style.display="none";
        newsThree.style.display="none";
        newsFour.style.display="inline-block";
    }
}
/*切换最新英雄/皮肤*/
var heroListLi=document.getElementsByClassName("heroList")[3].getElementsByTagName("li");
var heroListP=document.getElementsByClassName("heroList")[3].getElementsByTagName("p");
//初始化
heroListLi[0].style.color="#02ab89";
heroListLi[0].style.fontWeight="bold";
heroListP[0].style.backgroundColor="#02ab89";
for(var i=0;i<heroListLi.length;i++){
    heroListLi[i].addEventListener("mousemove",heroListMove,false);
}
function heroListMove(){
    var heroOne=document.getElementsByClassName("heroOne")[0];
    var heroTwo=document.getElementsByClassName("heroTwo")[0];
    var heroThree=document.getElementsByClassName("heroThree")[0];
    for(var i=0;i<heroListLi.length;i++){
        heroListLi[i].style.color="#888888";
        heroListLi[i].style.fontWeight="normal";
        heroListP[i].style.backgroundColor="#ebecec";
    }
    heroListLi[this.value].style.color="#02ab89";
    heroListLi[this.value].style.fontWeight="bold";
    heroListP[this.value].style.backgroundColor="#02ab89";
    if(this.value==0){
        heroOne.style.display="inline-block";
        heroTwo.style.display="none";
        heroThree.style.display="none";
    }
    else if(this.value==1){
        heroOne.style.display="none";
        heroTwo.style.display="inline-block";
        heroThree.style.display="none";
    }
    else if(this.value==2){
        heroOne.style.display="none";
        heroTwo.style.display="none";
        heroThree.style.display="inline-block";
    }
}
/*鼠标移入快速通道图标*/
var fastLi=document.getElementsByClassName("fastContent")[0].getElementsByTagName("li");
var fastP=document.getElementsByClassName("fastContent")[0].getElementsByTagName("p");
for(var i=0;i<fastLi.length;i++){
    fastLi[i].addEventListener("mouseover",fastLiOver,false);
}
for(var i=0;i<fastLi.length;i++){
    fastLi[i].addEventListener("mouseout",fastLiOut,false);
}
//alert(fastP[5].style.backgroundPositionY)
function fastLiOver(){
    var fastNum=this.value;
    var pNum;
    if(fastNum!=0){
        pNum=(fastNum)*2;
    }
    else{
        pNum=0;
    }
    fastP[pNum].style.backgroundPositionY=-42+"px";
    var positionY=fastP[pNum].style.backgroundPositionY;
    positionY=-(Math.abs(parseInt(positionY))+40)+"px";
    fastP[pNum].style.backgroundPositionY=positionY;
    //alert(fastP[pNum].style.backgroundPositionY)
}
function fastLiOut(){
    var fastNum=this.value;
    var pNum;
    if(fastNum!=0){
        pNum=(fastNum)*2;
    }
    else{
        pNum=0;
    }
    var positionY=fastP[pNum].style.backgroundPositionY;
    positionY=-(Math.abs(parseInt(positionY))-40)+"px";
    fastP[pNum].style.backgroundPositionY=positionY;
}
/*移入活动中心图片*/
var friend=document.getElementsByClassName("friend")[0];
var actText=document.getElementsByClassName("actText")[0];
friend.addEventListener("mouseover",function(){
    actText.style.top=0;
    actText.style.transition="all .1s linear";
},false);
actText.addEventListener("mouseout",function(){
    actText.style.top=173+"px";
    actText.style.transition="all .1s linear";
},false);

/*切换视频内容*/
var videoListLi=document.getElementsByClassName("heroList")[0].getElementsByTagName("li");
var videoListP=document.getElementsByClassName("heroList")[0].getElementsByTagName("p");
var videoVideo=document.getElementsByClassName("videoVideo")[0];
var videoContent=document.getElementsByClassName("videoContent")[0];
var video=document.getElementsByClassName("video")[0];
/*初始化*/
videoListLi[0].style.color="#02ab89";
videoListLi[0].style.fontWeight="bold";
videoListP[0].style.backgroundColor="#02ab89";
for(var i=0;i<videoListLi.length;i++){
    videoListLi[i].addEventListener("mousemove",videoListMove,false);
}
function videoListMove(){
    //var heroOne=document.getElementsByClassName("heroOne")[0];
    //var heroTwo=document.getElementsByClassName("heroTwo")[0];
    //var heroThree=document.getElementsByClassName("heroThree")[0];
    for(var i=0;i<videoListLi.length;i++){
        videoListLi[i].style.color="#888888";
        videoListLi[i].style.fontWeight="normal";
        videoListP[i].style.backgroundColor="#ebecec";
    }
    videoListLi[this.value].style.color="#02ab89";
    videoListLi[this.value].style.fontWeight="bold";
    videoListP[this.value].style.backgroundColor="#02ab89";
    videoVideo.style.marginLeft=-(this.value*800)+"px";
}
/*点击添加更多视频*/
var videoMore=document.getElementsByClassName("videoMore")[0];
videoMore.addEventListener("click",videoMoreClick,false);
function videoMoreClick(){
    video.style.height="820px";
    videoContent.style.height="640px";
    videoMore.innerHTML="进入视频中心查看更多"
}
/*切换赛事中心*/
var gameListLi=document.getElementsByClassName("gameList")[0].getElementsByTagName("li");
var gameListP=document.getElementsByClassName("gameList")[0].getElementsByTagName("p");
var gameContentUl=document.getElementsByClassName("gameContent")[0].getElementsByTagName("ul")[0];
gameListLi[0].style.color="#02ab89";
gameListLi[0].style.fontWeight="bold";
gameListP[0].style.backgroundColor="#02ab89";
for(var i=0;i<gameListLi.length;i++){
    gameListLi[i].addEventListener("mousemove",gameListMove,false);
}
function gameListMove(){
    for(var i=0;i<gameListLi.length;i++){
        gameListLi[i].style.color="#888888";
        gameListLi[i].style.fontWeight="normal";
        gameListP[i].style.backgroundColor="#ebecec";
    }
    gameListLi[this.value].style.color="#02ab89";
    gameListLi[this.value].style.fontWeight="bold";
    gameListP[this.value].style.backgroundColor="#02ab89";
    gameContentUl.style.marginLeft=-(this.value*780)+"px";
}
/*切换客服专区*/
var serviceListLi=document.getElementsByClassName("serviceList")[0].getElementsByTagName("li");
var serviceListP=document.getElementsByClassName("serviceList")[0].getElementsByTagName("p");
serviceListLi[0].style.color="#02ab89";
serviceListLi[0].style.fontWeight="bold";
serviceListP[0].style.backgroundColor="#02ab89";
for(var i=0;i<(serviceListLi.length-1);i++){
    serviceListLi[i].addEventListener("mousemove",serviceListMove,false);
}
function serviceListMove(){
    for(var i=0;i<(serviceListLi.length-1);i++){
        serviceListLi[i].style.color="#888888";
        serviceListLi[i].style.fontWeight="normal";
        serviceListP[i].style.backgroundColor="#ebecec";
    }
    var serviceOne=document.getElementsByClassName("serviceOne")[0];
    var serviceTwo=document.getElementsByClassName("serviceTwo")[0];
    serviceListLi[this.value].style.color="#02ab89";
    serviceListLi[this.value].style.fontWeight="bold";
    serviceListP[this.value].style.backgroundColor="#02ab89";
    if(this.value==0){
        serviceOne.style.display="inline-block";
        serviceTwo.style.display="none";
    }
    else{
        serviceOne.style.display="none";
        serviceTwo.style.display="inline-block";
    }
}