public class ExpenseTracker {

    @AuraEnabled(Cacheable=true)
    public static List<Expense__c> getExpenseRecords(){
       List<Expense__c> expenselst = [select Name, Date__c, Category__c, Amount__c, Description__c from Expense__c];
       return expenselst;
    }
}