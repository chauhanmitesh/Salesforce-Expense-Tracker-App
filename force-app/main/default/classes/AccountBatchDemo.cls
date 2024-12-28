public class AccountBatchDemo implements Database.Batchable<SObject> {
    public Database.QueryLocator start(Database.BatchableContext bc){
        String query='';
        return Database.getQueryLocator(query);
    }
    public void execute(Database.BatchableContext bc, List<Account> acclst){
        
    }
    
    public void finish(Database.BatchableContext bc){
        
    }
}