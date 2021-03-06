/* eslint-disable no-param-reassign */
/**
 * @class Character
 */
export default class Character {
  constructor() {
    this.character = {};
    this.move = null;
    this.cells = null;
    this.mark = null;
  }

  /**
   * Создает игрового персонажа
   */
  createCharacter() {
    const character = document.createElement('div');
    character.classList.add('character');

    this.character.node = character;
  }

  /**
   * @returns character
   */
  getCharacter() {
    this.createCharacter();
    return this.character;
  }

  /**
   * Записывает коллекцию ячеек в this.cells
   *
   * @returns this.cells
   */
  getCells() {
    this.cells = document.getElementsByClassName('cell');
    return this.cells;
  }

  /**
   * Записывает индекс ячейки ( если в ней был персонаж ) в this.mark
   */
  setMark() {
    this.mark = [...this.getCells()].findIndex((el) => el.hasChildNodes());
  }

  /**
   * Очищает this.mark
   */
  clearMark() {
    this.mark = null;
  }

  /**
   * В ячейке, где был кликнутый персонаж,
   * на 150мс появляется потомок с картинкой
   */
  getMarkCell() {
    const mark = document.createElement('div');
    mark.classList.add('cell-boom');
    this.cells[this.mark].appendChild(mark);
    setTimeout(() => {
      mark.parentNode.removeChild(mark);
    }, 150);
  }

  /**
   * Логика действий игрового персонажа
   */
  // characterLogic() {
  //   const cells = this.getCells();

  //   if (this.mark !== null) {
  //     this.getMarkCell();
  //   }

  //   const character = this.getCharacter();

  //   const func = () => {
  //     const freeCells = [...cells].filter((e) => !e.hasChildNodes());

  //     this.checkSurprise(character);

  //     const index = Math.floor(Math.random() * freeCells.length);

  //     freeCells[index].appendChild(character);
  //   };

  //   func();
  //   this.move = setInterval(func, 1000);
  // }

  /**
   * Останавливает перемещение игрового персонажа
   */
  characterStop() {
    clearInterval(this.move);
  }

  // eslint-disable-next-line class-methods-use-this
  checkSurprise() {
    const chanceSurprise = Math.floor(Math.random() * 100);
    if (chanceSurprise > 98) {
      this.character.node.classList.add('character-suprise');
      this.character.node.classList.remove('character-evil');
      this.character.duck = true;
    } else {
      this.character.node.classList.add('character-evil');
      this.character.node.classList.remove('character-suprise');
      this.character.duck = false;
    }
  }
}
