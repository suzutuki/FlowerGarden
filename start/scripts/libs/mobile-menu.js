class MobileMenu {
  // コストラクタ関数を用意する
  constructor() {
    // オブジェクトリテラルで初期化
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu__btn');
    this.DOM.cover = document.querySelector('.mobile-menu__cover');
    // this.DOM.containerでないとエラーになるよ
    this.DOM.container = document.querySelector('#global-container');
    // スマホとデスクトップ対応するため
    this.eventType = this._getEventType();
    this.__addEvent();
  }

  // プライベートメソッドにする修正や保守のしやすさのため
  _getEventType() {
    // クリックかタッチかでわける
      const isTouchCapable =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch) ||
        navigator.maxTouchPoints > 0 ||
        window.navigator.msMaxTouchPoints > 0;
  
      return isTouchCapable ? "touchstart" : "click";
  }

  _toggle() {
    // global-containerにクリックするたびにmenu-openを付加、解除
    this.DOM.container.classList.toggle("menu-open");
  }
  __addEvent() {
    // スマホとデスクトップ対応するため
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
      // カバーがクリックしたときに発火
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
  }
}

