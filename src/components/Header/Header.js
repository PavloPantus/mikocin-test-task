import React from 'react';
import './Header.scss';


const Header = () => (
  <header
    className="header"
  >
    <div className="header__content">
      <div
        className="header__logo-container"
      >
        <img
          src={'/images/mikocin-logo.png'}
          className={'logo'}
        />
        <h2 className={'header__heading'}>
          Микоцин
        </h2>
      </div>

      <div className="header__info-container info">

        <div className="info__descriptions">
          <p className="info__description">
            №1 Для избавления
            от любого типа грибка
          </p>
          <p className="info__description">
            Рекомендован
            дерматологами
          </p>
          <p className="info__description">
            13000+ довольных
            клиентов за 2018 год
          </p>
        </div>

        <div className="info__form-container">
          <div className="info__product-advantages">
            <h1 className={'info__product-advantages-heading'}>
              Комплексное избавление от
              грибка —
              <div>
                <span>изнутри</span>
                <span>и</span>
                <span>снаружи</span>
              </div>
            </h1>

            <h2 className="info__product-advantage">
              Комплекс Микоцин <span>
              устраняет
              зуд, неприятный запах
            </span><span> </span>
              и возвращает эстетичный вид
            </h2>

            <h2 className="info__product-advantage">
              <span>Таблетки</span> Микоцин <span> </span>
              <span>уничтожают все виды грибка</span><span> </span>
              на ногтях и коже
            </h2>

            <h2 className="info__product-advantage">
              <span>Гель</span> Микоцин <span> </span>
              <span>восстанавливает кожу</span>
              и создает на ней <span>
              защитный
              барьер
            </span>
            </h2>
          </div>

          <form
            name={'order-form-order'}
            action="#"
            className="info__form-order form-order">

            <p className="form-order__form-heading">
              Успейте заказать
              со скидкой
              <div></div>
              <span>до 10.09.2018</span>
            </p>

            <div className={'form-order__prices'}>
              <p className="form-order__old-price-value">
                918 ₽
                <span className="price-name">
                 старая цена
               </span>
                <span></span>
                <span></span>
              </p>

              <p className="form-order__new-price-value">
                459 ₽
                <span className="price-name">
                 новая цена
               </span>
                <span></span>
                <span></span>
              </p>
            </div>


            <div className="form-order__input-name">
              <div>
              </div>
              <input
                placeholder={'Имя'}
                type="text"
              />
            </div>

            <div className="form-order__input-phone">
              <div>
              </div>
              <input
                placeholder={'Телефон'}
                type="tel"
              />
            </div>


            <div className={'form-order__submit-container'}>
              <button
                className={'form-order__submit-button'}
                type='submit'
              >
                <div>Заказать</div>
                со скидкой
              </button>
            </div>


            <p className="form-order__left-items">
              Осталось <span>10</span> упаковок
              со скидкой
            </p>

          </form>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
