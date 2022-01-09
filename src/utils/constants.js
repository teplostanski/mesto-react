export const selectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_type_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error-message_type_active'
  };



export const editButton = document.querySelector(".profile__edit-button");

const popupEditForm = document.querySelector("form[name = 'profile']");
export const nameInput = popupEditForm.querySelector("input[name='name']");
export const descriptionInput = popupEditForm.querySelector("input[name='about']");

export const addButton = document.querySelector(".profile__add-button");
export const changeAvatarButton = document.querySelector(".profile__img-wrapper");