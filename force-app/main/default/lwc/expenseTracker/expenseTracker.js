import { LightningElement } from 'lwc';
import getExpenseRecords from '@salesforce/apex/ExpenseTracker.getExpenseRecords';

export default class ExpenseTracker extends LightningElement {
    
    columns = [
        {label: 'Name', fieldName:'Name', type:'text', sortable:true},
        {label: 'Date__c', fieldName: 'Date__c', type:'date', sortable:true},
        {label: 'Category__c', fieldName: 'Category__c', type:'text', sortable:true},
        {label: 'Amount__c', fieldName: 'Amount__c', type:'currency', sortable:true},
        {label: 'Description__c', fieldName: 'Description__c', type:'text'}
    ];

    data = [];
    error='';
    SortedBy = 'Date__c';
    sortedDirection = 'asc';

    connectedCallback(){
        this.fetchAccounts();
    }
    
    fetchAccounts(){
        getExpenseRecords()
        .then(data =>{
            this.data = data;
            console.log('Expense Tracker: ', JSON.stringify(this.data));
        })
        .catch(error =>{
           this.error = 'Failed to load accounts: '+ error;
        })
    }


    handleSort(event){
        console.log('inside sorting');
    }

}