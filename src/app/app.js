import angular from 'angular';
import {DefaultState, DefaultCtrl} from './default';
import {AwwState, AwwCtrl, AwwService, AwwServiceName} from './aww';
import {ProgHumorState, ProgHumorCtrl, ProgHumorService, ProgHumorServiceName} from './programmerhumor';
import {Thumb, ThumbName} from './thumb';
import * as uiRouter from 'angular-ui-router';
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    //controller: 'AppCtrl',
    //controllerAs: 'default'
  };
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
  .config(($stateProvider) => {
    $stateProvider
      .state(DefaultState.name, DefaultState)
      .state(AwwState.name, AwwState)
      .state(ProgHumorState.name, ProgHumorState);
  })
  .directive('app', app)
  .directive(ThumbName, Thumb)
  .run(($state) => {
    $state.go('default');
  })
  .service(AwwServiceName, AwwService)
  .service(ProgHumorServiceName, ProgHumorService)
  .controller('DefaultCtrl', DefaultCtrl)
  .controller('AwwCtrl', AwwCtrl)
  .controller('ProgHumorCtrl', ProgHumorCtrl);

export default MODULE_NAME;