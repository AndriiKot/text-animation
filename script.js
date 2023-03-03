const paths = document.querySelectorAll('#name path');

for (let i = 0; i < paths.length; i++){
  console.log(Math.ceil(paths[i].getTotalLength()));
}