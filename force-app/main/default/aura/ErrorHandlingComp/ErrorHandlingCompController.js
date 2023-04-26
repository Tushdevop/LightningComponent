({
    throwError : function(component, event, helper) {
          //  this.throwError('Error thrown'); 
          var hasPerm=false;

          try {
            if (!hasPerm) {
                throw new Error("You dont have permission");
            }
          } catch (error) {
                $A.createComponents([
                        [
                            "ui:message" , {
                                "Title" : "Sample Error",
                                "severity" : "error"
                            }
                        ],
                        [
                            "ui:outputText", {
                                "value" : error.message
                            }
                        ],

                        function(component, status, errorMessage){
                            if (status === "SUCCESS") {
                                var message=component[0];
                                var outputText=component[1];

                                message.set("v.body", outputText);
                                var div1=component.find("div1");
                                div1.set("v.body", message);
                            }
                        }
                    ])
          }
    }
})
