/* p_click을 클릭했을 때, t_click, r_click의 border값은 사라지고, p_click의
border 값이 나와야한다. */
/* p_click을 클릭했을 때, post_list가 활성화되고 나머지는 사라져야한다. */

let Pclick = document.querySelector(".p_click");
let Rclick = document.querySelector(".r_click");
let Tclick = document.querySelector(".t_click");
let PostList = document.querySelector(".post_list");
let ReelsList = document.querySelector(".reels_list");
let TagList = document.querySelector(".tag_list");

function PclickClick(){
    Pclick.style.borderTop="3px solid #aaa";
    Tclick.style.borderTop="none";
    Rclick.style.borderTop="none";
    PostList.style.display="flex";
    ReelsList.style.display="none";
    TagList.style.display="none";
}
Pclick.addEventListener("click",PclickClick);

function RclickClick(){
    Pclick.style.borderTop="none";
    Tclick.style.borderTop="none";
    Rclick.style.borderTop="3px solid #aaa";
    PostList.style.display="none";
    ReelsList.style.display="flex";
    TagList.style.display="none";
}
Rclick.addEventListener("click",RclickClick);

function TclickClick(){
    Pclick.style.borderTop="none";
    Tclick.style.borderTop="3px solid #aaa";
    Rclick.style.borderTop="none";
    PostList.style.display="none";
    ReelsList.style.display="none";
    TagList.style.display="flex";
}
Tclick.addEventListener("click",TclickClick);

for(i=0; i<=11; i++){
    let PostList = document.querySelector(".post_list");
    let Post = document.createElement("div")
    Post.className = "post_list_wrap"
    Post.innerHTML=`
    <img src="./img/explore_img${i}.jpg" alt="x">
    <ul class="hover">
        <li><img src="img/explore_commet.png" alt="x"><span>0</span></li>
        <li><img src="img/explore_heart.png" alt="x"><span>0</span></li>
    </ul>
    `;

    PostList.appendChild(Post);
}

for(i=0; i<=15; i++){
    let ReelsList = document.querySelector(".reels_list");
    let Reels = document.createElement("div")
    Reels.className = "reels_list_wrap"
    Reels.innerHTML=`
    <img src="./img/explore_img${i}.jpg" alt="x">
    <ul class="hover">
        <li><img src="img/explore_commet.png" alt="x"><span>0</span></li>
        <li><img src="img/explore_heart.png" alt="x"><span>0</span></li>
    </ul>
    `;

    ReelsList.appendChild(Reels);
}

for(i=0; i<=11; i++){
    let TagList = document.querySelector(".tag_list");
    let Tag = document.createElement("div")
    Tag.className = "tag_list_wrap"
    Tag.innerHTML=`
    <img src="./img/explore_img${i}.jpg" alt="x">
    <ul class="hover">
        <li><img src="img/explore_commet.png" alt="x"><span>0</span></li>
        <li><img src="img/explore_heart.png" alt="x"><span>0</span></li>
    </ul>
    `;

    TagList.appendChild(Tag);
}
