
let inputImage = document.querySelector("#inputImage");     // selektovali, treba da uzmem file
let previewImageAll = document.querySelectorAll("#previewImage");  // selekt  img tag!
// kada cu znati da sam odabrao file:
inputImage.addEventListener("change", (e) => {

    let fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]); // treba da procita value iz input polja
    fileReader.onload =  function() // kada ucita celu sliku da izvrsi neka f-on
    {
       previewImageAll.forEach((previewImage) => {
        
        previewImage.src = fileReader.result;
       })

    } 
});

    
