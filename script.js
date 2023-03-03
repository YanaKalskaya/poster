"use strict";

const gallery = {
    containerClickHandler(event) {
        if (event.target.tagName !== 'DIV') {
            return;
        }
        this.openWindow(event.target.dataset.num);
    },

    openWindow(num) {
        let window = this.getScreenContainer().querySelector(`.galleryWrapper__text`);
        let content = "";
        switch (num) {
            case "1":
                content = `Веб-разработчик — это специалист, который создает и поддерживает сайты и приложения.<br><br>
                Он может работать как над внешним видом сайта, так и над его внутренней, серверной частью.<br><br>
                Тестирование и поиск багов — хоть и не основная, но тоже одна из задач веб-программирования.`;
                break;
            case "2":
                content = `Навыки backend-разработчика:<br>
                — Владеть одним из языков программирования (PHP, Java, Go или Python).<br>
                — Уметь работать с пакетными менеджерами<br>
                — Знать язык запросов SQL.<br>
                — Понимать, как устроены базы данных, уметь с ними работать.<br>
                — Знать основы работы с системой контроля версий Git.<br>
                — Уметь работать с фреймворками.<br>
                <br>
                Навыки frontend-разработчика:<br>
                — HTML, CSS и JAVASCRIPT. <br>
                — Иметь базовые навыки работы в консоли и пользования пакетным менеджером NPM.<br>
                — Уметь пользоваться системой контроля версий Git.<br>
                — Уметь работать со сборщиком проектов.<br>
                — Уметь верстать и адаптировать сайт под разные браузеры и экраны.<br>
                — Знать один из фреймворков: React, Angular или Vue.js.<br>
                <br>
                Важны: коммуникабельность, умение работать в команде, стремление развиваться, хорошее знание английского языка.`;
                window.classList.add("window_round2");
                break;
            case "3":
                content = `Backend-разработчик зарабатывает 140 тыс. рублей в месяц, <br>
                frontend- и fullstack-специалисты около 120 тыс.рублей.<br><br>
                Зарплаты веб-разработчиков постоянно растут. <br><br>
                По итогам 2021 года (по сравнению с 2020) рост зарплат backend-разработчика составил более 7%, frontend и fullstack — около 9%.`;
                break;
            case "4":
                content = `Пандемия дала мощный толчок развитию облачных сервисов, бизнес ищет эффективные IT-решения и внедряет цифровые инструменты.<br><br>
                В отрасли дефицит кадров: по оценкам представителей рынка, всего в российской IT-индустрии не хватает от 500 тыс. до 1 млн человек,
                а веб-разработчики вошли в топ-10 самых востребованных профессий 2021 года.`;
                break;
        }
        window.innerHTML = content;
    },

    // Возвращает контейнер для окна, либо создает его.
    getScreenContainer() {
        const galleryWrapperElement = document.querySelector(`.${'galleryWrapper'}`);
        if (galleryWrapperElement) {
            return galleryWrapperElement;
        }
        return this.createScreenContainer();
    },

    // Создает контейнер для окна.
    createScreenContainer() {
        const galleryWrapperElement = document.createElement('div');
        galleryWrapperElement.classList.add('galleryWrapper');

        // Создаем контейнер занавеса, ставим ему класс и добавляем в контейнер-обертку.
        const galleryScreenElement = document.createElement('div');
        galleryScreenElement.classList.add("galleryWrapper__screen");
        galleryWrapperElement.appendChild(galleryScreenElement);

        // Создаем контейнер окна, ставим ему класс и добавляем в контейнер-обертку.
        const galleryWindowElement = document.createElement('div');
        galleryWindowElement.classList.add("galleryWrapper__window");
        galleryWrapperElement.appendChild(galleryWindowElement);

        // Создаем картинку для кнопки закрыть, ставим класс, src и добавляем ее в контейнер-обертку.
        const closeImageElement = new Image();
        closeImageElement.classList.add("galleryWrapper__close");
        closeImageElement.src = "img/closebtn.png";
        closeImageElement.addEventListener('click', () => this.close());
        galleryWindowElement.appendChild(closeImageElement);

        // Создаем текст, который хотим открыть, ставим класс и добавляем его в контейнер-обертку.
        const text = document.createElement('div');
        text.classList.add("galleryWrapper__text");
        galleryWindowElement.appendChild(text);

        document.body.appendChild(galleryWrapperElement);
        return galleryWrapperElement;
    },

    close() {
        document.querySelector(`.${'galleryWrapper'}`).remove();
    }
};

window.onload = () => {
    document
        .querySelector('.mySuperGallery')
        .addEventListener('click', event => gallery.containerClickHandler(event));
}