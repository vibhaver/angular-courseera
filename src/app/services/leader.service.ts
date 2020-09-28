import { Injectable } from '@angular/core';
import { Leader } from '../shared Folder/leader';
import { LEADERS } from '../shared Folder/leaders';


@Injectable({
	providedIn: 'root'
})
export class LeaderService {

	constructor() { }

	getLeaders(): Promise<Leader[]> {
		return new Promise(resolve => {
			//simulate server latency with 2 sec. delay
			setTimeout(() => resolve(LEADERS), 2000);
		});
	}

	getFeaturedLeader(): Promise<Leader> {
		return new Promise(resolve => {
			//simulate server latency with 2 sec. delay
			setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
		});
	}


}



