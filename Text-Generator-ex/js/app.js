const dummyText = [
  'Sweet roll tiramisu sugar plum halvah cupcake topping wafer tootsie roll. Caramels croissant chocolate cake cotton candy. Jelly chocolate cake macaroon brownie pastry gummies cheesecake. Gingerbread pie croissant sugar plum oat cake tart tootsie roll. Chupa chups cake wafer danish. Biscuit donut candy canes gummies candy topping marshmallow jujubes. Chocolate cake cupcake topping. Chupa chups soufflé candy canes pudding brownie gummi bears. Dessert cotton candy jelly oat cake sweet roll cookie macaroon sweet roll. Jelly-o icing halvah.',
  'Sugar plum gummies cupcake gingerbread sweet. Pastry topping cake candy canes marshmallow caramels chupa chups. Halvah dessert tiramisu brownie lemon drops tootsie roll carrot cake. Cake soufflé oat cake cotton candy. Lollipop cake sweet roll croissant danish. Cake dessert tootsie roll cake liquorice sugar plum biscuit macaroon pie. Bonbon cookie cotton candy bear claw wafer.',
  'Marshmallow candy canes marshmallow caramels chocolate cake liquorice jelly. Gummies caramels jelly beans chupa chups brownie bonbon. Jujubes jujubes sesame snaps powder. Macaroon sesame snaps muffin cake marzipan topping muffin powder pastry. Macaroon sesame snaps topping. Sweet apple pie jelly tart. Cookie apple pie sweet roll pastry. Cookie chocolate chocolate bar sweet gummies.',
  'Chocolate sugar plum jelly-o sweet roll gummi bears oat cake powder pastry macaroon. Soufflé cheesecake apple pie jelly beans donut candy canes sweet macaroon. Gingerbread topping dessert bonbon sweet roll oat cake oat cake halvah. Cake chocolate cake chocolate sugar plum candy. Marshmallow brownie sweet dessert croissant chocolate fruitcake sweet donut. Cupcake muffin halvah.',
  'Cupcake ice cream gummies dessert tiramisu. Cupcake pie cake apple pie jelly-o brownie oat cake soufflé. Candy canes chocolate cake candy canes jelly beans lollipop. Dragée candy canes jujubes pastry cheesecake. Candy canes apple pie powder. Caramels dessert caramels sweet roll danish jelly-o jelly-o powder liquorice. Biscuit pie sugar plum. Oat cake jelly-o marshmallow pastry dragée gummi bears topping. Bear claw ice cream lollipop danish candy jelly-o jelly-o.',
  'Powder candy fruitcake. Bear claw sweet roll cake lollipop. Apple pie chupa chups cookie soufflé dessert topping gummi bears. Dragée gummi bears candy canes powder chupa chups. Cotton candy dragée lollipop. Sweet roll muffin oat cake marshmallow macaroon sugar plum muffin. Tart chupa chups candy. Fruitcake jujubes halvah marshmallow bonbon marshmallow. Croissant powder cheesecake donut bonbon. Caramels macaroon donut.',
  'Tiramisu halvah pastry jujubes chocolate bar sugar plum gummies candy. Chocolate chupa chups icing dessert muffin jelly-o oat cake. Powder dessert powder tart tart. Pie powder lemon drops sweet tart icing cake tootsie roll biscuit. Jelly jelly-o sweet roll. Biscuit jelly beans chocolate cake pudding. Sesame snaps wafer apple pie lemon drops cupcake oat cake pie.',
  'Gingerbread bonbon pudding biscuit sugar plum. Donut caramels cake danish lollipop. Chocolate bar jelly dessert candy canes. Sweet sesame snaps cookie. Croissant bear claw chocolate powder jelly beans ice cream. Bear claw brownie icing apple pie. Ice cream marshmallow tiramisu cotton candy brownie tiramisu jujubes. Croissant cheesecake tiramisu wafer powder pie macaroon.',
  'Powder cake croissant tootsie roll tart lollipop jelly beans. Cake lemon drops wafer muffin biscuit marshmallow brownie. Cotton candy jelly-o cotton candy gummies. Cake sesame snaps macaroon tootsie roll. Pie wafer topping tootsie roll apple pie marzipan sweet. Bonbon tootsie roll candy canes pastry brownie bear claw.',
];

const $ = document
let amountElem = $.getElementById('amount')
let btnGenarate = $.querySelector('.btn')
let result = $.getElementById('result')


function textGenarate(event) {
  event.preventDefault()
  let amountValue = amountElem.value

  result.innerHTML = ''
  for (var i = 0; i < amountValue; i++) {
    result.innerHTML += dummyText[i] + '</br></br>'
    console.log('done');
  }

}

btnGenarate.addEventListener('click', textGenarate)