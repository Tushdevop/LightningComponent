({		handleClick : function(component, event, helper) {
      				  var action= component.get("c.getCertDetails");
        			action.setCallback(this, function(data){
        			var state=data.getState();
              		if(state === "SUCCESS"){
                  		component.set("v.CertList", data.getReturnValue());
                 	}
        			});
       				 $A.enqueueAction(action);
		}
})