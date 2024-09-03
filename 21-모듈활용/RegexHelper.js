class StringFormatException extends Error {
  // 입력 요소에 대한 셀렉터 추가
  #selector;


  //입력 요소를 두번째 파라미터로 전달받는다
  constructor(msg = "잘못된 요청 입니다.", selector = undefined) {
    super(msg);
    super.name = StringFormatException;
    //멤버변수에 입력요소를 참조시킨다 (추가)
    this.#selector = selector;
  }
  // 입력요소의 셀렉터에 대한 게터 추가
  get selector() {
    return this.#selector;
  }

  // 입력요소의 셀렉터에 해당하는 html엘리먼트 객체 반환
  get element() {
    const el =
      this.#selector !== null
        ? document.querySelector(this.#selector)
        : undefined;
    return el;
  }
}

/**
 * 정규표현식을 기반으로 입력값에 대한 유효성 검사를 수행하는 클래스
 * HTML 문서에서 사용하기 위한 인풋셀럭터에 대한 입력값을 검사함다
 */
class RegexHelper {
  /**
   *
   * @param {string} selector  검사할 대상에 다한 인풋 요소의 셀렉터
   * @param {string} msg 값이 없을 경우 표시할 메시지 내용
   * @returns
   */
  value(selector, msg) {
    const content = document.querySelector(selector).value;

    if (
      content === undefined ||
      content === null ||
      (typeof content === "string" && content.trim().length === 0)
    ) {
      throw new StringFormatException(msg, selector); // 예외처리
    }

    return true;
  }
}
const regexHelper = new RegexHelper();
