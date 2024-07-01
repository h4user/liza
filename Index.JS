$("document").ready(function() {
$("value").click(function(){
 $(".note_title, .note_content, .add_note, .close_write").css({
  'display' : 'block'
 })
 $("value").css({
  'display' : 'none'
 })
})
$(".close_write").click(function(){
 $(".note_title, .note_content, .add_note, .close_write").css({
  'display' : 'none'
 })
 $("value").css({
  'display' : 'block'
 })
})
let title = $(".note_title").val();
let content =  $(".note_content").val();
let NoteStorage = localStorage;
let storage_length;
if (NoteStorage.getItem("storage_length") != null) {
  storage_length = parseInt(NoteStorage.getItem("storage_length"));
 }
 else {
  storage_length = 0;
    NoteStorage.setItem("storage_length", storage_length)
 }
const date = new Date();
let y = date.getFullYear();
let m = date.getMonth();
let d = date.getDate();
for(let i=1; i < NoteStorage.length + storage_length; i++) {
  if(NoteStorage.getItem("note"+i) != null){
    $(".notes_container").append(NoteStorage.getItem("note"+i));
    console.log(NoteStorage.getItem("note"+i));
  }
}
$(".add_note").click(function(){
 title = $(".note_title").val();
 content =  $(".note_content").val();
 if(title != "" || content != "") {
   storage_length = parseInt(NoteStorage.getItem("storage_length")) +1;
   NoteStorage.setItem("storage_length", storage_length);
  let storageContent = '<div class="anti_stretch"><div class="created_notes" data-id="'+storage_length+'"><p class="date">'+y+'.'+m+'.'+d+'</p><h2>'+title+'</h2><br><p>'+content+'</p><button type="button" class="delete_note"><i class="fa fa-trash" aria-hidden="true"></i></button><button type="button" class="archive_note"><i class="fa fa-archive" aria-hidden="true"></i></button><button type="button" class="change_color"><i class="fa fa-paint-brush" aria-hidden="true"></i></button><input type="color" id="color"></div></div>';
  $(".notes_container").append(storageContent);
 NoteStorage.setItem("note"+storage_length, storageContent)
 console.log(NoteStorage.getItem("storage_length"));
 $(".note_title").val("");
 $(".note_content").val("");
 }
})
$(".notes_container").on('click', ".delete_note", function(){
  let note = $(this).parent()
  let number = $(this).parent().attr("data-id")
  console.log(number)
  NoteStorage.removeItem("note"+number);
 note.parent().remove();

})
let archive_state = true;
$(".notes_container").on('click', ".archive_note", function(){
 archive_state = !archive_state;
 if(archive_state) {
 $(this).parent().css({
  'opacity' : '1',
  'text-decoration' : 'none'
 })
}
else{
 $(this).parent().css({
  'opacity' : '0.4',
  'text-decoration' : 'line-through'
 })
}
})
$(".change_color").click(function(){
  $(".change_color").css({
  'display' : 'none'
 })
  $("#color").css({
  'display' : 'block',
  'left' : '137px',
  'top' : '-12px'
 })
})
$(".notes_container").on('change', "#color", function(){
  $(".change_color").css({
  'display' : 'block',
  'left' : '137px',
  'top' : '-12px'
 })
  $("#color").css({
  'display' : 'none'
 })
   $(this).parent().css({
    'background' : $("#color").val()
   })
})
 })