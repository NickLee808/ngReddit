export const ProgHumorServiceName = 'proghumor';
export const ProgHumorService = [
  '$http',
  class ProgHumorService{

    constructor($http){
      this.$http = $http;
      this.endpoint = 'https://www.reddit.com/r/programmerhumor.json';
    }

    getPosts(){
      return this.$http.get(this.endpoint);
    }
  }
];