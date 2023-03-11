// let lis = document.getElementsByTagName('li');

//     for (let li of lis) {
//       // получить количество всех <li> ниже этого <li>
//       let descendantsCount = li.getElementsByTagName('li').length;
//       if (!descendantsCount) continue;

//       // добавить непосредственно к текстовому узлу (добавить к тексту)
//       li.firstChild.data += ' [' + descendantsCount + ']';
//     }