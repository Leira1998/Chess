var GameBoardProto = Object.create(HTMLDivElement.prototype);
var GameBoard = document.registerElement('game-board', {
  prototype: GameBoardProto
});

var GameBoxProto = Object.create(HTMLDivElement.prototype);
var GameBox = document.registerElement('game-box', {
  prototype: GameBoxProto
});

var GamePieceProto = Object.create(HTMLDivElement.prototype);
var GamePiece = document.registerElement('game-piece', {
  prototype: GamePieceProto,
  extends: 'div'
});
