let boxTitle = document.querySelectorAll('.FAQ-box_title');
let boxContent= document.querySelectorAll('.FAQ-box_content');
let heightBoxFaq =[]
for(let i=0;i<boxContent.length;i++)
{
    heightBoxFaq.push(boxContent[i].offsetHeight);
    console.log(boxContent[i].offsetHeight);
    boxContent[i].style.height=0;
}

for(let i=0;i<boxContent.length;i++)
{  
    boxTitle[i].onclick = function(e) {
        let CurrentHeight = boxContent[i].offsetHeight;
        if(CurrentHeight===0)
        {
            boxContent[i].style.height = heightBoxFaq[i] + 25+'px';
            boxContent[i].style.padding='10px 5px';
        }
        else
        {
            boxContent[i].style.height = 0;
            boxContent[i].style.padding=0;
        }
        
    }
}
