import React from 'react';
import './Main.scss';

const MainInfo = () => (
  <main className="main">
    <div className="main__content">

      <img src="/mikocin-test-task/images/logo-decorations.png" alt="" />

      <p className="main__heading">
        Грибок – это опасная инфекция
      </p>

      <p className="main__description">
        которая угрожает вам и вашим близким,
        ведь с каждым днем грибок приводит к:
      </p>

      <div className="main__illnesses illnesses">
        <div className="illnesses__illness">
          <img
            src="/mikocin-test-task/images/first-ilness.png"
            alt="Сложным формам аллергии"
            className="illnesses__photo"
          />

          <p className="illnesses__kind">
            Сложным
            формам
            аллергии
          </p>

          <p className="illnesses__description">
            Может появится сильная реакция
            на на привычную пищу, одежду,
            средства гигиены
          </p>
        </div>

        <div className="illnesses__illness">
          <img
            src="/mikocin-test-task/images/second-ilness.png"
            alt="Сложным формам аллергии"
            className="illnesses__photo"
          />

          <p className="illnesses__kind">
            Потере ногтя
            и ампутации
            пальца

          </p>

          <p className="illnesses__description">
            После полного разрушения ногтя
            грибок распространяется на палец,
            что приводит к его ампутации

          </p>
        </div>

        <div className="illnesses__illness">
          <img
            src="/mikocin-test-task/images/third-ilness.png"
            alt="Сложным формам аллергии"
            className="illnesses__photo"
          />

          <p className="illnesses__kind">
            Тяжелому
            поражению
            внутренних
            органов

          </p>

          <p className="illnesses__description">
            Может привести к повреждениям
            мозга, слепоте, отказу печени, почек
            и сердца
          </p>
        </div>

      </div>

    </div>
  </main>
);

export default MainInfo;
