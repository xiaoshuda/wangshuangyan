function color(data){
var items = data['items'];
for(var i=0;i< items.length;i++){
var entity = items[i]['entities'];
var text = items[i]['text'];
var newText = text;
for(var type in entity ){
var position = entity[type];
for(var j =0;j<position.length;j++){
    var string = position[j]; 
var element = string.split("-");
var toColor = text.slice(element[0],element[1]);
var color = "<font color='red' >"+toColor+"</font>";
newText = newText.replace(toColor, color);
 
 
}
}
data['items'][i]['text'] = newText;
}
return data;
}
