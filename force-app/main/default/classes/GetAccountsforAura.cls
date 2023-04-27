public class GetAccountsforAura {
	@auraEnabled	
    public static List<Account> getAccountList(){
        return [SELECT Id, Name FROM Account];
    }
}