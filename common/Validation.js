const Validation = {
  // 숫자, 문자, 특수문자 섞고 8자 이상
  isPassword: text => {},
  // @와 .을 가지고 있어야한다
  isEmail: text => {},
  // 숫자로만 이루어 져야 한다
  isNumber: text => {},
  // 날짜 타입
  isDate: (text, format) => {},
  // 휴대폰 타입
  isPhone: text => {}
};

module.exports = Validation;
