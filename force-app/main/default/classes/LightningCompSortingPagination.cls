/*
*  create an apex class so we can call the methods from Lightning Component from apex 
        class and fetch the data in. This method will be AuraEnabled annotation. 
        We query the account data and return the accounts list.
*
*/
public with sharing class LightningCompSortingPagination {
    public LightningCompSortingPagination() {
            @AuraEnabled
            public static List<Account> fetchAccountData(){
                try {
                    return [SELECT Id, Name, Type, Website, CreatedDate, Phone 
                            FROM Account 
                            LIMIT 1000];  
                } catch (Exception e) {
                    throw new AuraHandledException(e.getMessage());
                }
            }
    }
}