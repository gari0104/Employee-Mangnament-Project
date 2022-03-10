function saveData(){
    let formData=JSON.parse(localStorage.getItem('formData')) || [];
    
    formData.push(
        {
            name:document.getElementById('name').value,
            age:document.getElementById('age').value,
            department:document.getElementById('department').value,
            bloodg:document.getElementById('bloodg').value,
            address:document.getElementById('address').value,
            contact:document.getElementById('contact').value
        }
    );
    localStorage.setItem('formData',JSON.stringify(formData));
    document.querySelector('form').reset();
    document.getElementById('name').focus();
    dispData();
}
function dispData()
{
    console.log(localStorage.getItem('formData'));
  if(localStorage.getItem('formData')){
      var output=document.querySelector('tbody');
      output.innerHTML ="";
      JSON.parse(localStorage.getItem('formData')).forEach(data=>{
        output.innerHTML +=`
      <tr>
                <td>${data.name}</td>
                <td>${data.age}</td>
                <td>${data.department}</td>
                <td>${data.bloodg}</td>
                <td>${data.address}</td>
                <td>${data.contact}</td>
        </tr>
              `;
}); 
    }
}
dispData();
function validate()
{
    if(contact.value>10 && name.value==null && address.value==null && age.value>4 && bloodg.value>2 && department.value==null) 
    {
        contact.focus();
        contact.formData.push('invalidState')
        return false;
    }
    return true;
}
