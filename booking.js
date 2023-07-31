

var item=document.getElementById("form")
var itemList=document.getElementById('items');
form.addEventListener('submit',addItem)


function addItem(e){
    e.preventDefault();
    var name=document.getElementById('form1').value;
    var phonenumber=document.getElementById('form2').value;
    var email=document.getElementById('form3').value;


    var newli=document.createElement('li');
    newli.className="list-group";
    var temp=name+' '+phonenumber+" "+email
    newli.appendChild(document.createTextNode(temp));
    itemList.appendChild(newli)
    

    const obj={
        name,email,phonenumber
    }
    //localStorage.setItem(name,obj)
    axios.post("https://crudcrud.com/api/963301cc8a974ef89266b0d96b77fb82/appointmentdata",obj)
    .then((response) =>{
        console.log(response)
    }).catch((err) =>{
        console.log(err)
    })
    
    const delbutton=document.createElement('input');
    delbutton.type='button'
    delbutton.value="Delete"
    delbutton.onclick=() =>{
        localStorage.removeItem(name)
        itemList.removeChild(newli)
    }
     
    newli.appendChild(delbutton);
    const edit=document.createElement('input');
    edit.type='button'
    edit.value="Edit"
    edit.onclick=() =>{
      
        var s=document.getElementById("form")
        var abc=localStorage.getItem(name)
        console.log(abc)
        abc=JSON.parse(abc)
        s[0].value=abc['name']
        s[1].value=abc["phonenumber"]
        s[2].value=abc["email"]
       


        localStorage.removeItem(name)
        itemList.removeChild(newli)
    }
    newli.appendChild(edit);
    
   


  

}