// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_1")
                .setName("api_1")
                .setQueryURL("https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0xCC4304A31d09258b0029eA7FE63d032f52e44EFe&vs_currencies=usd&include_24hr_change=true")
                .setResponseDataTarget([
                    {
                        "type":"alert",
                        "name":"alert",
                        "path":""
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button3")
                .setDirtyMark(false)
                .setLeft("29.714285714285715em")
                .setTop("22.095238095238095em")
                .setWidth("7.542857142857143em")
                .setHeight("3.580952380952381em")
                .setCaption("Button")
            );
            
            append(
                xui.create("xui.UI.Element")
                .setHost(host,"xui_ui_element1")
                .setLeft("0.7619047619047619em")
                .setTop("1.5238095238095237em")
                .setWidth("59.04761904761905em")
                .setHeight("7.085714285714285em")
                .setHtml("<pre style=\"box-sizing: inherit; font-family: &quot;Source Code Pro&quot;, monospace; margin-top: 0px; margin-bottom: 0px; overflow: auto; color: rgb(255, 255, 255); padding: 10px; white-space: pre-wrap; border-radius: 4px; background: rgb(65, 68, 78); font-weight: 600;\">https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0xCC4304A31d09258b0029eA7FE63d032f52e44EFe&amp;vs_currencies=usd&amp;include_24hr_change=true</pre>")
            );
            
            append(
                xui.create("xui.UI.Link")
                .setHost(host,"xui_ui_link1")
                .setLeft("29.714285714285715em")
                .setTop("11.428571428571429em")
                .setWidth("9.447619047619048em")
                .setHeight("1.2190476190476192em")
                .setCaption("Current SWAP Price")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"other",
                        "target":"url",
                        "args":[
                            "https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0xCC4304A31d09258b0029eA7FE63d032f52e44EFe&vs_currencies=usd&include_24hr_change=true"
                        ],
                        "method":"readJSON",
                        "onOK":1,
                        "onKO":2,
                        "okFlag":"_DI_succeed",
                        "koFlag":"_DI_fail",
                        "event":1
                    }
                ])
                .setCustomStyle({
                    "KEY":{
                        "background-color":"#DA70D6"
                    }
                })
            );
            
            append(
                xui.create("xui.MessageService")
                .setHost(host,"xui_messageservice1")
            );
            
            append(
                xui.create("xui.MQTT")
                .setHost(host,"xui_mqtt1")
                .setServer("https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0xCC4304A31d09258b0029eA7FE63d032f52e44EFe&vs_currencies=usd&include_24hr_change=true")
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox3")
                .setClassName("xui-css-ky")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});