import { LightningElement,wire,track } from 'lwc';
import getRecords from '@salesforce/apex/GetAccountRecords.getRecords'

export default class GetRecordsFromController extends LightningElement {
    @track accounts;
    @track error;
    //@wire(getRecords) accounts;
    
    @wire(getRecords)
    wireAccounts({error, data}){
        if(data){
            console.log('data->',data);
            this.accounts = data;
        }else if(error){
            this.error = error;
        }
    }
}