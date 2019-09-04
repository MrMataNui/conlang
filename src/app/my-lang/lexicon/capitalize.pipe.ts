import { Pipe, PipeTransform } from '@angular/core';
import { capitalize } from '../lang-vars.model';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
	transform(value: string): string {
		// console.log('value', value);
		switch (value) {
			case 'ʯ': return value;
			default: return capitalize(value) + ' ' + value;
		}
	}
}
