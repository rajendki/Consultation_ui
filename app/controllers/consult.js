import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ConsultController extends Controller {
   @action
   transitionToLocation(){
      this.transitionToRoute('consult',{queryParams: {role: this.get('search')}});
   }
}
