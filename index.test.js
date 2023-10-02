

const { removeElement } = require('./index'); // Імпортуємо функцію з вашого файлу коду

test('існуючий елемент видаляється з масиву', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    removeElement(array, 4);
    expect(array).not.toContain(4);
});

test('спроба видалення неіснуючого елемента не змінює масив', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    removeElement(array, 8);
    expect(array).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test('для елемента, що повторюється, видаляються всі входження', () => {
    const array = [1, 2, 3, 2, 4, 2, 5];
    removeElement(array, 2);

    // Перевіряємо, що всі входження елемента 2 були видалені
    expect(array.filter(item => item === 2)).toHaveLength(0);
});


