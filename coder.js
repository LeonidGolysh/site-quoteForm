const pako = require("pako");

const data = {
  config: {
    termsOfServiceText: "By submitting this form, you agree to be contacted...",
  },

  theme: {
    bodyBackgroundColor: '#f4f4f4',
    formBackgroundColor: '#a1a4a7',
    textColor: '#333',
    buttonBackgroundColor: '#ffa500',
    buttonTextColor: '#fff',
    buttonHoverBackgroundColor: '#fff',
    buttonHoverTextColor: '#ffa500',
    fieldBorderColor: '#000',
    labelText: '#fff',
    termsNotice: '#fff',
    termsNoticeBorder: '#fff'
  }
}

const encodeData = encodeURIComponent(JSON.stringify(data));

console.log(encodeData);