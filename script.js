let uploadedfile;
let csv_data;
document.querySelector('input')
.addEventListener('change',(e)=>{
uploadedfile = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(uploadedfile);
    fileReader.onload = (event) => {
        csv_data =event.target.result;
        console.log(csv_data);
    }
});
sendFile = ()=> {
    localStorage.setItem("fileData",csv_data);
}