import Route from '@ember/routing/route';
import fetch from 'fetch';
import { inject as service } from '@ember/service';


export default class ConsultRoute extends Route {
   @service router;
   async model(params) {
   	event.preventDefault();
   	//let x = this.target.paramsFor(this.target.routeName);

    const response = await fetch('http://localhost:5000/roles/'+params.role, {
      method: "GET",
      headers: {
      'Access-Control-Allow-Origin': '*'
      // 'Content-Type': 'application/x-www-form-urlencoded',
       }
    });
    const photos = await response.json();
    return { role: params.role,res: photos};
   }
}
