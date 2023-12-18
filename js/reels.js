for(let i=1; i<=5; i++){
    let ReelsWrap = document.querySelector(".reels_wrap");
    let Reels = document.createElement("div");
    Reels.className="reels"
    Reels.innerHTML=
 `   <div class="reels_img">
    <ul>
     <li>
      <img src="img/explore_img${i}.jpg" alt="x">
     </li>
    </ul>
    <div class="reels_txt">
     <ul class="reels_id">
      <li><img src="img/zzangah.PNG" alt="x"></li>
      <li>Instar_id${i}</li>
      <li><p>팔로우</p></li>
     </ul>
     <ul class="reels_contents"></ul>
     <ul class="reels_audio"></ul>
    </div>
   </div>
   <div class="reels_comment">
    <ul>
     <li>
        <img class="like" src="img/like.png" alt="x">
        <img class="hate" src="img/hate.png" alt="x">
        <p class="like_cnt">0</p>
     </li>
     <li><img src="img/comment.png" alt="x"><p>0</p></li>
     <li><img src="img/dm.png" alt="x"></li>
     <li>
        <img class="scrap" src="img/scrap.png" alt="x">
        <img class="save" src="img/save.png" alt="x">
     </li>
     </li>
     <li><p class="add_txt">···</p></li>
     <li><img src="img/zzangah.PNG" alt="x"></li>
    </ul>
   </div>`
   
    ReelsWrap.appendChild(Reels);
    ReelsHandler(Reels);
}


// reels 좋아요, 스크랩 클릭

// function LeelsHandler(Leels){
//     let Like = Leels.querySelector(".like");
//     let Hate = Leels.querySelector(".hate");
//     let Scrap = Leels.querySelector(".scrap");
//     let Save = Leels.querySelector(".save");
//     let LikeNum = Feed.querySelector(".like_cnt");

//     function LikeClick(){
//         Like.style.display="none";
//         Hate.style.display="inline";
//         let LikeCnt = parseInt(LikeNum.textContent);

//         LikeCnt++;
//         LikeNum.textContent = LikeCnt;
//     }

//     Like.addEventListener('click',LikeClick);

// }



function ReelsHandler(Reels){
    let Like = Reels.querySelector(".like");
    let Hate = Reels.querySelector(".hate");
    let Scrap = Reels.querySelector(".scrap");
    let Save = Reels.querySelector(".save");
    let LikeNum = Reels.querySelector(".like_cnt");

    function LikeClick(){
        Like.style.display="none";
        Hate.style.display="inline";
        let LikeCnt = parseInt(LikeNum.textContent);
        /* LikeNum은 p태그의 class이름
        LikeNum.textContent은 p태그 안에있는 문자 = 0
        parseInt(LikeNum.textContent) >> 문자를 숫자로 변환
        LikeCnt = LikeNum.textContent > LikeCnt라는 변수안에 숫자를 담아줌.
        LikeCnt = 0 */
        LikeCnt++;
        /* 0이라는 숫자에 +1을 해준다 */
        LikeNum.textContent = LikeCnt;
        /* LikeCnt에 +1을 해줬지만, 적용된게 아님!
        LikeNum.textContent = LikeCnt */
    }
    Like.addEventListener('click',LikeClick);

    function HateClick(){
        Like.style.display="inline";
        Hate.style.display="none";
        let LikeCnt = parseInt(LikeNum.textContent);
        LikeCnt--;
        LikeNum.textContent = LikeCnt;
    }
    Hate.addEventListener('click',HateClick);

    function ScrapClick(){
        Scrap.style.display="none";
        Save.style.display="inline";
        Save.style.width="21px";
        Save.style.marginRight="2px";
    }
    Scrap.addEventListener('click',ScrapClick);

    function SaveClick(){
        Save.style.display="none";
        Scrap.style.display="inline";
    }
    Save.addEventListener('click',SaveClick);
}