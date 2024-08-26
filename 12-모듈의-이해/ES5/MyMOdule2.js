module.exports.name = "노드";
module.exports.property = {id : 'nodejs', type: 'javascript'};
module.exports.say = function(){
  console.log("Hello World");
};

module.exports.home = {
  postcode : '12345',
  address : '사랑시 고백동 행복구',
  getAddress : function(){
    console.log(this.postcode + '' + this.address);
  }
};