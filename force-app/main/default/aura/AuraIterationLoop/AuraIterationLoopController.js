({
    doInit : function(component, event, helper) {
			var action=component.get("c.getAccountList");
        
        action.setCallback(this, function(data){
            var state=data.getState();
            if(state === "SUCCESS"){
                component.set("v.accList", data.getReturnValue());
            }            
        });
        $A.enqueueAction(action);
    }
})