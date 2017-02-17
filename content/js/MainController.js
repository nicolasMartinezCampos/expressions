function MainController(){
  // this.myObject = {
  //   one: 'Key 1',
  //   two: 'Key 2'
  // };
  // this.myArray = ['my', 'angular', 'app'];
  this.person = {
    name: 'Niko',
    location: 'Arg'
  };
}


angular
  .module('app')
  .controller('MainController', MainController);
