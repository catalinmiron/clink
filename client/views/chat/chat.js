Template['chat'].helpers({
  chatroom: function(){
    return Session.get("name")
  }
});


Template['chat'].events({
  'keydown #message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      var name = 'Anonymous';
      var message = document.getElementById('message');
      if (message.value != '') {
        Chat.update({_id: Session.get("name")}, {$push:{messages:{message: message.value}}});
        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
});

Template.chat.rendered = function () {

}

