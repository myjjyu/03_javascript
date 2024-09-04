class StringFormatException extends Error {
  #selector;

  constructor(msg = "잘못된 요청 입니다.", selector = undefined) {
    super(msg);
    super.name = "StringFormatException";
    this.#selector = selector;
  }

  get selector() {
    return this.#selector; 
  }

  get element() {
    const el = this.#selector !== null ? document.querySelector(this.#selector) : undefined;
    return el;
  }
}

class RegexHelper {
  value(selector, msg) {
    const content = document.querySelector(selector).value;

    if (
      content === undefined ||
      content === null ||
      (typeof content === "string" && content.trim().length === 0)
    ) {
      throw new StringFormatException(msg, selector); 
    }

    return true;
  }

  maxLength(selector, len, msg) {
    this.value(selector, msg);

    const content = document.querySelector(selector).value;

    if (content.trim().length > len) {
      throw new StringFormatException(msg, selector);
    }

    return true;
  }

  minLength(selector, len, msg) {
    this.value(selector, msg);

    let content = document.querySelector(selector).value;

    if (content.trim().length < len) {
      throw new StringFormatException(msg, selector);
    }

    return true;
  }

  compareTo(origin, compare, msg) {
    this.value(origin, msg);
    this.value(compare, msg);

    var src = document.querySelector(origin).value.trim();
    var dsc = document.querySelector(compare).value.trim();

    if (src !== dsc) {
      throw new StringFormatException(msg, origin);
    }

    return true;
  }

  check(selector, msg) {
    const elList = document.querySelectorAll(selector);
    const checkedItem = Array.from(elList).filter((v, i) => v.checked);

    if (checkedItem.length === 0) {
      throw new StringFormatException(msg, selector);
    }
  }

  checkmin(selector, len, msg) {
    const elList = document.querySelectorAll(selector);
    const checkedItem = Array.from(elList).filter((v, i) => v.checked);

    if (checkedItem.length < len) {
      throw new StringFormatException(msg, selector);
    }
  }

  checkmax(selector, len, msg) {
    const elList = document.querySelectorAll(selector);
    const checkedItem = Array.from(elList).filter((v, i) => v.checked);

    if (checkedItem.length > len) {
      throw new StringFormatException(msg, selector);
    }
  }

  selector(selector, msg, regexExpr) {
    this.value(selector, msg);

    if (!regexExpr.test(document.querySelector(selector).value.trim())) {
      throw new StringFormatException(msg, selector);
    }

    return true;
  }

  num(selector, msg) {
    return this.selector(selector, msg, /^[0-9]*$/);
  }

  eng(selector, msg) {
    return this.selector(selector, msg, /^[a-zA-Z]*$/);
  }

  kor(selector, msg) {
    return this.selector(selector, msg, /^[ㄱ-ㅎ가-힣]*$/);
  }

  engNum(selector, msg) {
    return this.selector(selector, msg, /^[a-zA-Z0-9]*$/);
  }

  korNum(selector, msg) {
    return this.selector(selector, msg, /^[ㄱ-ㅎ가-힣0-9]*$/);
  }

  email(selector, msg) {
    return this.selector(
      selector,
      msg,
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    );
  }

  cellphone(selector, msg) {
    return this.selector(selector, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
  }

  telphone(selector, msg) {
    return this.selector(selector, msg, /^\d{2,3}\d{3,4}\d{4}$/);
  }

  phone(selector, msg) {
    this.value(selector, msg);
    const content = document.querySelector(selector).value.trim();
    var check1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    var check2 = /^\d{2,3}\d{3,4}\d{4}$/;

    if (!check1.test(content) && !check2.test(content)) {
      throw new StringFormatException(msg, selector);
    }
    return true;
  }
}

const regexHelper = new RegexHelper();




