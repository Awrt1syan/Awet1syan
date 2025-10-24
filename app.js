const nkner=[
      "https://livedemo00.template-help.com/wt_53136/images/gallery-masonry-1-640x429.jpg"
      ,"https://livedemo00.template-help.com/wt_53136/images/gallery-masonry-2-640x429.jpg"
      ,"https://livedemo00.template-help.com/wt_53136/images/gallery-masonry-3-640x429.jpg"
      ,"https://livedemo00.template-help.com/wt_53136/images/gallery-masonry-4-960x429.jpg"
      ,"https://livedemo00.template-help.com/wt_53136/images/gallery-masonry-5-960x429.jpg"
]


let nn=document.querySelectorAll(".zoom")
nn.forEach((e)=>{

	e.addEventListener("click",(image)=>{
		
    document.getElementById("zzm").style="display:block"
    console.log(image.target.src)
    document.getElementById("fimg").src=image.target.src
    

})

})


 document.getElementById("xxl").addEventListener("click",()=>{

  document.getElementById("zzm").style="display:none"


 })








let n=0

document.getElementById("dzax").addEventListener("click", ()=>{
	if (n<nkner.length-1) {n++}
		else{n=0}

document.getElementById("fimg").src = nkner[n];


})


document.getElementById("aj").addEventListener("click", ()=>{
	if (n>0) {n--}
		else{n=nkner.length-1}

document.getElementById("fimg").src = nkner[n];


})
  