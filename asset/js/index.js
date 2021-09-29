var iconToolBar = document.querySelector(".header-top__menu--iconbar");
var naviMenu = document.querySelector(".navigation")



// ấn vào icon menu
iconToolBar.onclick = function(e) {
    naviMenu.style.right = "20%";
    naviMenu.style.zIndex = "1051";
    modal.style.display = "block";
    modal.style.opacity = "1" ;
    modal.style.top = 0 ;
}
// Ấn nút thả xuống


let SubListTitle = document.querySelectorAll(".navigation-item-title");
let SubListBox =document.querySelectorAll(".navigation-sub-list");
let HightOfListBox =[];
for(let i=0;i<SubListBox.length;i++)
{
    HightOfListBox.push(SubListBox[i].offsetHeight);
    SubListBox[i].style.height=0;
    
}
for(let i=0;i<SubListBox.length;i++)
{
    SubListTitle[i].onclick =function() {
        let CurrentHightSubList = SubListBox[i].offsetHeight;
        console.log(CurrentHightSubList)
        if(CurrentHightSubList==0)
        {
            if(i==0)
            {
                SubListBox[i].style.height =209+"px" ;
            }
            else
            {
                SubListBox[i].style.height ="125px" ;
            }
        }
        else
        {
            SubListBox[i].style.height=0;
        }
    }
}
// Sự kiện nút search
let btnSearch = document.querySelector(".header-top__menu--icon");
let boxSearch = document.querySelector(".header-search");
let modal = document.querySelector(".modal");
let btnCancel = document.querySelectorAll(".header-search i")
let heightElement;
console.log(boxSearch);
console.log(boxSearch.offsetHeight);
heightElement=boxSearch.offsetHeight;
boxSearch.style.height=0;
// ấn nút tìm kiếm
btnSearch.onclick  = function() {
    if(boxSearch.offsetHeight==0)
    {
        boxSearch.style.height = heightElement + "px";
        boxSearch.style.backgroundColor = "white";
        modal.style.display = "block";
        modal.style.top = heightElement+ "px" ;
    }
    else
    {
        boxSearch.style.height = 0;
        modal.style.display = "none";
    }

}
// ấn nút cancel
btnCancel[1].onclick  = function() {

        boxSearch.style.height = 0;
        modal.style.display = "none";

}
// ấn ra vùng modal
modal.onclick  = function() {
    
        naviMenu.style.right ="100%";
        boxSearch.style.height = 0;
        modal.style.display = "none";

}