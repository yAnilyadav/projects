let main_block = document.getElementById("works");

let child_blocks = document.getElementById("clips");
child_blocks.style.display = "none";
main_block.onclick = function() {
  main_block.style.display = "none";
  child_blocks.style.display = "block";
};
