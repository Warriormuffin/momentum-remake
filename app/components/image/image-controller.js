function ImageController(){
  var imageService = new ImageService()
   imageService.getImage(function(image){
    var imageObj = JSON.parse(image)
    var template = "";
    var elem = document.getElementById('')
    template +=`
     <image src="${imageObj.url}"></img>
    `
   })

}


