import { Injectable } from '@angular/core';
import { Http } 			from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { SalesObject } from '../class/sales-object.class';

@Injectable()
export class SalesObjectService { 

	private _salesObjectsUrl = './data/sales-objects.json';

	constructor(private _http: Http){ }

	getSalesObjects(): Promise<SalesObject[]> {
		return this._http.get(this._salesObjectsUrl)
							 .toPromise()
							 .then(response => response.json() as SalesObject[])
 							 .catch(this.handleError);
	}

	getObject(id: number): Promise<Object> {
		return this.getSalesObjects()
					.then(objects => objects.find(object => object.id === id));
	}

	getSalesObjectImg(salesObject: SalesObject, indexNo: number):string {
		return "url('" + salesObject.img[indexNo].src + "')";
	}

	getSalesObjectLayout(salesObject: SalesObject, indexNo: number):string {
		return "url('" + salesObject.layout[indexNo].src + "')";
	}

  getSalesObjectSellerId(salesObject: SalesObject, id: number){
    
  }

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.mesage || error);
	}
}