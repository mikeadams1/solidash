

function slog(text){
  console.log(text)
  $('#messageslist').prepend("<li>"+text+"</li>");
}

export { slog }
