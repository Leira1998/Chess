function has_piece(box_id){
  var hp = $(box_id).children().length;
  if (hp> 0) {
    return true;
  }
  else {
    return false;
  }
}

function cross_move(col, row){
  var piece_class = $('#' + (row * 8 + col).toString()).children().attr('class');

  // Column Movement Up
  for (var y = row - 1; y >= 0; y--){
    var i = y * 8 + col;
    var box_id = '#' + i.toString();
    if (has_piece(box_id)) {
      var other_class = $(box_id).children().attr('class');
      if (piece_class != other_class) $(box_id).toggleClass('enemy_m');
      break;
    }
    else {
      $(box_id).toggleClass('player_m');
    }
  }

  // Column Movement Down
  for (var y = row + 1; y < 8; y++){
    var i = y * 8 + col;
    var box_id = '#' + i.toString();
    if (has_piece(box_id)) {
      var other_class = $(box_id).children().attr('class');
      if (piece_class != other_class) $(box_id).toggleClass('enemy_m');
      break;
    }
    else {
      $(box_id).toggleClass('player_m');
    }
  }

  // Row Movement Left
  for (var x = col - 1; x >= 0; x--){
    var i = row * 8 + x;
    var box_id = '#' + i.toString();
    if (has_piece(box_id)) {
      var other_class = $(box_id).children().attr('class');
      if (piece_class != other_class) $(box_id).toggleClass('enemy_m');
      break;
    }
    else {
      $(box_id).toggleClass('player_m');
    }
  }

  // Row Movement Right
  for (var x = col + 1; x < 8; x++){
    var i = row * 8 + x;
    var box_id = '#' + i.toString();
    if (has_piece(box_id)) {
      var other_class = $(box_id).children().attr('class');
      if (piece_class != other_class) $(box_id).toggleClass('enemy_m');
      break;
    }
    else {
      $(box_id).toggleClass('player_m');
    }
  }

}
function diagonal_move(col, row) {
  var piece_class = $('#' + (row * 8 + col).toString()).children().attr('class');
  var i;
  var blockedL = false;
  var blockedR = false;
  var xCount = 0;
  var yCount = 0;

  // Going Up
  for (var y = row; y >= 0; y--){
    // Going Left
    if (!blockedL){
      for (var x = col; x >= 0; x--){
        if (xCount == yCount && xCount != 0){
          i = y * 8 + x;
          var box_id = '#' + i.toString();
          if (has_piece(box_id)) {
            var other_class = $(box_id).children().attr('class');
            if (piece_class != other_class) $(box_id).toggleClass('enemy_m');
            blockedL = true;
            break;
          }
          else {
            $(box_id).toggleClass('player_m');
          }
        }

        xCount++;
      }
    }
    xCount = 0;

    // Going Right
    if(!blockedR){
      for (var x = col; x < 8; x++){
        if (xCount == yCount && xCount != 0){
          i = y * 8 + x;
          var box_id = '#' + i.toString();
          if (has_piece(box_id)) {
            var other_class = $(box_id).children().attr('class');
            if (piece_class != other_class) $(box_id).toggleClass('enemy_m');
            blockedR = true;
            break;
          }
          else {
            $(box_id).toggleClass('player_m');
          }
        }

        xCount++;
      }
    }

    xCount = 0;
    yCount++;
  }

  yCount = 0;
  blockedL = false;
  blockedR = false;

  // Going Down
  for (var y = row; y < 8; y++){
    // Going Left
    if (!blockedL){
      for (var x = col; x >= 0; x--){
        if (xCount == yCount && xCount != 0){
          i = y * 8 + x;
          var box_id = '#' + i.toString();
          if (has_piece(box_id)) {
            var other_class = $(box_id).children().attr('class');
            if (piece_class != other_class) $(box_id).toggleClass('enemy_m');
            blockedL = true;
            break;
          }
          else {
            $(box_id).toggleClass('player_m');
          }
        }

        xCount++;
      }
    }
    xCount = 0;

    // Going Right
    if(!blockedR){
      for (var x = col; x < 8; x++){
        if (xCount == yCount && xCount != 0){
          i = y * 8 + x;
          var box_id = '#' + i.toString();
          if (has_piece(box_id)) {
            var other_class = $(box_id).children().attr('class');
            if (piece_class != other_class) $(box_id).toggleClass('enemy_m');
            blockedR = true;
            break;
          }
          else {
            $(box_id).toggleClass('player_m');
          }
        }

        xCount++;
      }
    }

    xCount = 0;
    yCount++;
  }
}
function knight_move(col, row) {
  var piece_class = $('#' + (row * 8 + col).toString()).children().attr('class');

  // Right Movement
  for (var x = col; x <= col + 3; x++){
    for (var y = row - 3; y <= row + 3; y++){
      if ((x >= 0 && x < 8) && (y >= 0 && y < 8)){
        if ((x == col + 1 && (y == row - 2 || y == row + 2)) || (x == col + 2 && (y == row - 1 || y == row + 1))){
          var i = y * 8 + x;
          var box_id = '#' + i.toString();
          if (!has_piece(box_id)) {
            $(box_id).toggleClass('player_m');
          }
          else {
            var other_class = $(box_id).children().attr('class');
            if (piece_class != other_class) $(box_id).toggleClass('enemy_m');
          }
        }
      }
    }
  }

  // Left Movement
  for (var x = col; x >= col - 3; x--){
    for (var y = row - 3; y <= row + 3; y++){
      if ((x >= 0 && x < 8) && (y >= 0 && y < 8)){
        if ((x == col - 1 && (y == row - 2 || y == row + 2)) || (x == col - 2 && (y == row - 1 || y == row + 1))){
          var i = y * 8 + x;
          var box_id = '#' + i.toString();
          if (!has_piece(box_id)) {
            $(box_id).toggleClass('player_m');
          }
          else {
            var other_class = $(box_id).children().attr('class');
            if (piece_class != other_class) $(box_id).toggleClass('enemy_m');
          }
        }
      }
    }
  }

}
function king_move(col, row){
  var piece_class = $('#' + (row * 8 + col).toString()).children().attr('class');
  var i;

  for (var y = row - 1; y <= row + 1; y++){
    for (var x = col - 1; x <= col + 1; x++){
      i = y * 8 + x;
      var box_id = '#' + i.toString();
      if (!has_piece(box_id)) {
        $(box_id).toggleClass('player_m');
      }
      else {
        var other_class = $(box_id).children().attr('class');
        if (piece_class != other_class) $(box_id).toggleClass('enemy_m');
      }
    }
  }
}
function pawn_move(col, row){
  var piece_class = $('#' + (row * 8 + col).toString()).children().attr('class');
  var i;
  var box_id;
  var left_corner;
  var right_corner;
  var other_class;

  if (piece_class == "black"){

    i = (row + 1) * 8 + col;
    box_id = '#' + i.toString();
    if (col > 0) left_corner = '#' + (i - 1).toString();
    if (col < 7) right_corner = '#' + (i + 1).toString();

    if (!has_piece(box_id)){
      $(box_id).toggleClass('player_m');

      box_id = '#' + (i + 8).toString();
      if (row == 1 && !has_piece(box_id)) $(box_id).toggleClass('player_m');
    }

    if (has_piece(left_corner)) {
      other_class = $(left_corner).children().attr('class');
      if (piece_class != other_class) $(left_corner).toggleClass('enemy_m');
    }

    if (has_piece(right_corner)) {
      other_class = $(right_corner).children().attr('class');
      if (piece_class != other_class) $(right_corner).toggleClass('enemy_m');
    }

  }

  else {
    i = (row - 1) * 8 + col;
    box_id = '#' + i.toString();
    if (col > 0) left_corner = '#' + (i - 1).toString();
    if (col < 7) right_corner = '#' + (i + 1).toString();

    if (!has_piece(box_id)){
      $(box_id).toggleClass('player_m');

      box_id = '#' + (i - 8).toString();
      if (row == 6 && !has_piece(box_id)) $(box_id).toggleClass('player_m');
    }

    if (has_piece(left_corner)) {
      other_class = $(left_corner).children().attr('class');
      if (piece_class != other_class) $(left_corner).toggleClass('enemy_m');
    }

    if (has_piece(right_corner)) {
      other_class = $(right_corner).children().attr('class');
      if (piece_class != other_class) $(right_corner).toggleClass('enemy_m');
    }
  }

}

var make_boxes = function(container, box){
  var b_class_bool = true;
  var last_index = 0;

  for (var y = 0; y < 8; y++) {
    for (var x = 0; x < 8; x++){
      var b_class;
      if ((x % 2 == 0 && b_class_bool == true) || (x % 2 != 0 && b_class_bool == false)) {
        b_class = "beige";
      }
      else {
        b_class = "brown";
      }

      var index = last_index + x;

      var new_box = "<" + box + " id='" + index.toString() + "' class='" + b_class + "'></" + box + ">";
      $(container).append(new_box);
    }

    b_class_bool = !b_class_bool;
    last_index += 8;
  }
}
var reset_boxes = function(){
  for (var i = 0; i < 64; i ++) {
    $('#' + i.toString()).removeClass('nothing');
    $('#' + i.toString()).removeClass('player_m');
    $('#' + i.toString()).removeClass('enemy_m');
  }
}
var add_pieces = function(){
  // Declare Piece variables
  var piece_img;
  var piece_id;
  var piece_class;

  // Move throught the game board adding new pieces
  for (var i = 0; i < 64; i ++){
    if (i < 16 || i > 47) {

      // Select piece class
      if (i < 16){
        piece_class = "black";
      }
      else {
        piece_class = "white";
      }

      switch (i) {
        case 0:
        case 7:
        case 63:
        case 56:
          piece_id = "rook";
          break;

        case 1:
        case 6:
        case 62:
        case 57:
          piece_id = "knight";
          break;

        case 2:
        case 5:
        case 61:
        case 58:
          piece_id = "bishop";
          break;

        case 3:
        case 59:
          piece_id = "queen";
          break;

        case 4:
        case 60:
          piece_id = "king";
          break;

        default:
          piece_id = "pawn";
          break;
      }

      piece_img = "img/sprites/" + piece_class + piece_id + ".png";
      $('#' + i.toString()).append('<div is="game-piece" id="' + piece_id + '" class="' + piece_class + '"></div>');
      $('#' + i.toString() + '> div').css('background-image', 'url(' + piece_img + ')');
    }
  }
}

var change_state = function(id, player_class, last_clicked){
  var box_id_str = '#' + id.toString();
  var clicked_class = $(box_id_str).attr('class');

  // Reset all boxes
  reset_boxes();

  if (last_clicked == id && (clicked_class != "beige" && clicked_class != "brown")) return;

  // Get piece rank (id) and class
  var piece_rank = $(box_id_str).children().attr('id');
  var piece_class = $(box_id_str).children().attr('class');

  if (!has_piece(box_id_str)) {
    $(box_id_str).toggleClass('nothing');
    return;
  }

  else if (piece_class != player_class) {
    $(box_id_str).toggleClass('enemy_m');
    return;
  }

  // Get the row
  var row = id;
  while (row % 8 != 0) row--;
  row /= 8;

  // Get the column
  var col = 7;
  while (id % 8 != col % 8) col--;

  // Select box clicked
  $(box_id_str).toggleClass('player_m');

  switch (piece_rank) {
    case 'rook':
      cross_move(col, row);

      break;

    case 'knight':
      knight_move(col, row);

      break;

    case 'bishop':
      diagonal_move(col, row);

      break;

    case 'queen':
      cross_move(col, row);
      diagonal_move(col, row);

      break;

    case 'king':
      king_move(col, row);

      break;

    case 'pawn':
      pawn_move(col, row, piece_class);

      break;
  }

}
var move_piece = function(old_id, new_id){
  var old_id_string = '#' + old_id.toString();
  var new_id_string = '#' + new_id.toString();
  var piece_to_move = $(old_id_string).children();

  $(old_id_string).empty();
  $(new_id_string).empty();
  $(new_id_string).append(piece_to_move);

  reset_boxes();
}

var set_turn_text = function(p_class, turn){
  var text_p;
  if (turn){
    text_p = "White pieces turn";
  }
  else {
    text_p = "Black pieces turn";
  }

  $(p_class).text(text_p);
}
var check_GameOver = function(num){
  // Game Over Fuction
}

var gameOver = false;

var player1_turn = true;
var player_class;

var last_clicked;

var main = function(){
  make_boxes('game-board', 'game-box');
  add_pieces();

  $('game-box').click(function() {
    if (player1_turn) player_class = "white";
    else player_class = "black";

    var box_Id = parseInt($(this).attr('id'));
    var box_class = $(this).attr('class');

    if ((box_class == "beige player_m" ||
    box_class == "brown player_m" ||
    box_class == "beige enemy_m" ||
    box_class == "brown enemy_m")
    && box_Id != last_clicked){
      move_piece(last_clicked, box_Id);

      player1_turn = !player1_turn;
    }
    else {
      change_state(box_Id, player_class, last_clicked);

      last_clicked = box_Id;
    }

    set_turn_text('.turn_p', player1_turn);
  });
}

$(document).ready(main);
