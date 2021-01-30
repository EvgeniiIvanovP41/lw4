function validator(value) {
  return {
    object: value,
    isValid: null,
    validate() {
      return this.isValid;
    },
    isEmail() {
      if (this.object.match(/^[\w-.]+@[\w-]+.[a-z]{2,4}$/)) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
      return this;
    },
    isName() {
      if (this.object.match(/^[а-яa-zА-ЯA-Z]+$/)) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
      return this;
    },
    isValidPassword() {
      if (this.object.length >= 6) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
      return this;
    },
  };
}

window.onload = function upload() {
  const button = document.querySelector('.btn');
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#second-name');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  button.onclick = function registyClick() {
    if (!validator(firstName.value).isName().validate()) {
      document.getElementsByClassName('form-string__first-name_error')[0].style.display = 'inline';
      firstName.style.border = '4px outset red';
    } else {
      document.getElementsByClassName('form-string__first-name_error')[0].style.display = 'none';
      firstName.style.backgroundColor = '#30313a';
      firstName.style.border = 'none';
    }
    if (!validator(lastName.value).isName().validate()) {
      document.getElementsByClassName('form-string__second-name_error')[0].style.display = 'inline';
      lastName.style.border = '4px outset red';
    } else {
      document.getElementsByClassName('form-string__second-name_error')[0].style.display = 'none';
      lastName.style.backgroundColor = '#30313a';
      lastName.style.border = 'none';
    }
    if (!validator(password.value).isValidPassword().validate()) {
      document.getElementsByClassName('form-string__password_error')[0].style.display = 'inline';
      password.style.border = '4px outset red';
    } else {
      document.getElementsByClassName('form-string__password_error')[0].style.display = 'none';
      password.style.backgroundColor = '#30313a';
      password.style.border = 'none';
    }
    if (!validator(email.value).isEmail().validate()) {
      document.getElementsByClassName('form-string__email_error')[0].style.display = 'inline';
      email.style.border = '4px outset red';
    } else {
      document.getElementsByClassName('form-string__email_error')[0].style.display = 'none';
      email.style.backgroundColor = '#30313a';
      email.style.border = 'none';
    }
  };
};
