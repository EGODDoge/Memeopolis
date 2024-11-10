// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_ItemCore","status":false,"description":"v1.30 Changes the way Items are handled for your game\nand the Item Scene, too.","parameters":{"---General---":"","Max Items":"0","Max Weapons":"100","Max Armors":"100","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4","Use Command":"Use %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"true"}},
{"name":"Alpha_NETZ","status":true,"description":"(v.0.8.3)[PRO] Multiplayer for RPG Maker","parameters":{"ANETZ":"","connection:s":"{\"serverIp\":\"anetzglobal.ru\",\"serverPort\":\"3035\",\"isHttpsConnection:b\":\"true\"}","isCustomGameId:b":"false","customGameId":"","isQuickDevConnectionAllowed:b":"false","isEndGameWhenHostIsLeave:b":"false","spacer|gamesettings":"","gameModeSettingsGroup":"","netGameTitleCmd:b":"true","onlySameMap:b":"false","isCustomStartMap:b":"true","singlePlayerAllowed:b":"false","isReadyStatusCheck:b":"false","roomFilter:b":"false","lobbyChat:b":"true","lobbyChatIsGlobal:b":"true","joinStartedAllowed:b":"true","joinStartedAndLoadedAllowed:b":"true","onJoinCE:int":"0","isJoinRandomOptionExists:b":"true","saveLoadGame:b":"true","networkStatusIcons:b":"true","isMapEncountersGlobal:b":"true","inGameChat:b":"true","chatStartMessage":"\\}Welcome to Memeopolis, \\C[1]'T'\\C[6] to chat","chatOpenCloseKey":"t","chatSayKey":"t","clickOnChatToSay:b":"true","chatAutoOpen:b":"true","chatMessagesSettings:struct":"{\"maxlength:i\":\"256\",\"forbiddenEscapeCodes:str\":\"V\",\"iconsSize:i\":\"18\",\"allowEmotions:b\":\"true\"}","chatInputSceneVisualSettings:struct":"{\"mapChannelButtonPosition:s\":\"{\\\"x:e\\\":\\\"4\\\",\\\"y:e\\\":\\\"6\\\"}\",\"allChannelButtonPosition:s\":\"{\\\"x:e\\\":\\\"104\\\",\\\"y:e\\\":\\\"6\\\"}\",\"inputSceneOkButtonPosition:s\":\"{\\\"x:e\\\":\\\"356\\\",\\\"y:e\\\":\\\"284\\\"}\"}","inGameChatWindowVisualSettings:struct":"{\"size:s\":\"{\\\"w:int\\\":\\\"312\\\",\\\"h:int\\\":\\\"192\\\"}\",\"position:s\":\"{\\\"x:e\\\":\\\"1\\\",\\\"y:e\\\":\\\"Graphics.height - 193\\\"}\",\"notActiveOpacity:i\":\"140\",\"maxMessages:i\":\"9\",\"firstChatMessageMargin:s\":\"{\\\"x:int\\\":\\\"3\\\",\\\"y:int\\\":\\\"145\\\"}\"}","inGameChatTextLineSettings:struct":"{\"size:s\":\"{\\\"w:int\\\":\\\"306\\\",\\\"h:int\\\":\\\"18\\\"}\",\"backgroundA:s\":\"{\\\"color:str\\\":\\\"#59a3d9\\\",\\\"opacity:i\\\":\\\"40\\\"}\",\"backgroundB:s\":\"{\\\"color:str\\\":\\\"#59a3d9\\\",\\\"opacity:i\\\":\\\"70\\\"}\",\"textLine:s\":\"{\\\"visible:bool\\\":\\\"true\\\",\\\"size:struct\\\":\\\"{\\\\\\\"w:int\\\\\\\":\\\\\\\"520\\\\\\\",\\\\\\\"h:int\\\\\\\":\\\\\\\"20\\\\\\\"}\\\",\\\"font:struct\\\":\\\"{\\\\\\\"face:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"size:int\\\\\\\":\\\\\\\"14\\\\\\\",\\\\\\\"italic:bool\\\\\\\":\\\\\\\"false\\\\\\\"}\\\",\\\"margins:struct\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"-3\\\\\\\"}\\\"}\",\"textFormat:str\":\"\\\\}\\\\}\\\\C[3][ *3\",\"animationSpeedInPx:i\":\"18\",\"channelAll:str\":\"ALL\",\"channelMap:str\":\"MAP\"}","playerMenuSettingsGroup:b":"false","defaultIPLMenuCommands":"","PlayerMenuItem_trade:s":"","PlayerMenuItem_status:s":"{\"text:str\":\"Status\",\"visible:b\":\"true\",\"switchId:i\":\"0\",\"minDist:i\":\"0\",\"value:i\":\"0\"}","PlayerMenuItem_follow:s":"{\"text:str\":\"Follow\",\"visible:b\":\"true\",\"switchId:i\":\"0\",\"minDist:i\":\"0\",\"value:i\":\"0\"}","userIPLMenuCommands:structA":"[]","tradeSettingsGroup":"","isTradeModalWindowActive:b":"true","tradeModalWindow_openSE":"Bell3","tradeModalWindow_text":"Accept \\C[1]Trade\\C[0] from \\C[2]%1\\C[0]?","tradeModalWindow_hkYes":"y","tradeModalWindow_hkNo":"n","spacer|playerssettings":"","playersSettingsGroup":"","actorsForNetwork:intA":"[\"1\",\"2\",\"3\",\"4\"]","maxPlayersInRoom:int":"4","isActorSelectionAllowed:b":"true","isSinglePlayerStartAllowed:b":"true","playerActorNameType":"Instead Name","isUseNameplates:b":"true","isShowActorNameInNameplate:b":"false","isShowMyNameplate:b":"true","nameplatesDB:structA":"[\"{\\\"id:str\\\":\\\"default\\\",\\\"margins:s\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"-27\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"-20\\\\\\\"}\\\",\\\"backImage:s\\\":\\\"{\\\\\\\"visible:b\\\\\\\":\\\\\\\"false\\\\\\\",\\\\\\\"image:str\\\\\\\":\\\\\\\"\\\\\\\"}\\\",\\\"backImageMargins:s\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"backRect:s\\\":\\\"{\\\\\\\"visible:bool\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"size:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"w:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"54\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"h:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"18\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"fillColor:str\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"fillOpacity:i\\\\\\\":\\\\\\\"120\\\\\\\",\\\\\\\"borderColor:str\\\\\\\":\\\\\\\"#000000\\\\\\\",\\\\\\\"borderThickness:i\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"borderOpacity:i\\\\\\\":\\\\\\\"255\\\\\\\"}\\\",\\\"backRectMargins:s\\\":\\\"{\\\\\\\"x:int\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"y:int\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"text:s\\\":\\\"{\\\\\\\"visible:bool\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"size:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"w:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"54\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"h:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"18\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"font:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"face:str\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"size:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"12\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"italic:bool\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"false\\\\\\\\\\\\\\\"}\\\\\\\",\\\\\\\"margins:struct\\\\\\\":\\\\\\\"{\\\\\\\\\\\\\\\"x:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\"y:int\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\"0\\\\\\\\\\\\\\\"}\\\\\\\"}\\\"}\"]","playerLeaveGameCommonEvent:int":"0","isAllowCollsBetweenNetChars:b":"true","globalData:s":"{\"globalVariablesIds:intA\":\"[]\",\"globalSwitchesIds:intA\":\"[]\"}","spacer|othersettings":"","otherSettingsGroup":"","textInputMaxLength:i":"12","localeDB:struct":"{\"network\":\"Network\",\"createRoom\":\"Create Room\",\"joinRoom\":\"Join Room\",\"joinRandomRoom\":\"Join Random Room\",\"settings\":\"Settings\",\"start\":\"Start\",\"leave\":\"Leave\",\"joinGame\":\"Join Game\",\"ready\":\"Ready\",\"character\":\"Character\",\"close\":\"Close\",\"welcome\":\"Welcome,  *1\",\"playersCount\":\"Players on server: %1\"}","spacer|endHolder":""}},
{"name":"DreamX_RandomPrefixesSuffixes","status":false,"description":"v1.26 Random prefixes/suffixes","parameters":{"Bonus Parameter Text":"%1%2","Bonus Parameter Price Multiplier":"10","Icon Combination Starting Index":"6000","-Old Notetags-":"","Default Chance":"10","Always Choose Prefix/Suffix":"true","Edit Database For Old Notetags":"false"}},
{"name":"YEP_KeyboardConfig","status":false,"description":"v1.04 Allows players to adjust their button configuration\nfor keyboards.","parameters":{"---General---":"","Command Name":"Keyboard Config","Button Events":"1 2 3","Button Events List":"[]","---Help Text---":"","Key Help":"Change the configuration of this key?","Default Layout":"Default Keyboard Layout","Default Help":"Reverts your keyboard setting to the default setup.","WASD Layout":"WASD Movement Layout","WASD Help":"Changes your keyboard to WASD movement.","Finish Config":"Finish Configuration","Finish Help":"Are you done configuring your keyboard?","Assigned Color":"21","Action Color":"4","Clear Text":"Clear","---Key Names---":"","OK Key":"OK","OK Text":"OK / Talk","Escape Key":"X","Escape Text":"Cancel / Menu","Cancel Key":"Cancel","Cancel Text":"Cancel","Menu Key":"Menu","Menu Text":"Menu","Shift Key":"Dash","Shift Text":"Dash","PageUp Key":"PgUp","PageUp Text":"Page Up","PageDown Key":"PgDn","PageDown Text":"Page Down","Left Key":"◄","Left Text":"Move ◄ Left","Up Key":"▲","Up Text":"Move ▲ Up","Right Key":"►","Right Text":"Move ► Right","Down Key":"▼","Down Text":"Move ▼ Down"}},
{"name":"AltMenuScreen","status":true,"description":"Alternative menu screen layout.","parameters":{}},
{"name":"AltSaveScreen","status":true,"description":"Alternative save/load screen layout.","parameters":{}},
{"name":"ButtonPicture","status":true,"description":"Makes a picture clickable.","parameters":{}},
{"name":"TextPicture","status":true,"description":"Displays text as a picture.","parameters":{}},
{"name":"McKathlin_GameOver","status":true,"description":"MZ v1.3.1 Change what happens when the party dies or Game Over is called.","parameters":{"Party Death Common Event ID":"3","Show Game Over Scene":"false","After Game Over Common Event ID":"0"}},
{"name":"DK_Title_Links","status":true,"description":"v.2.0.0 Allows you to add graphic links to the title screen.","parameters":{"buttons":"[\"{\\\"graphic\\\":\\\"TELEGRAM LOGO\\\",\\\"link\\\":\\\"https://t.me/MemeopolisMMO\\\",\\\"x\\\":\\\"0\\\",\\\"y\\\":\\\"0\\\"}\",\"{\\\"graphic\\\":\\\"X LOGO\\\",\\\"link\\\":\\\"https://x.com/MemeopolisMMO\\\",\\\"x\\\":\\\"65\\\",\\\"y\\\":\\\"0\\\"}\"]","fadeIn":"0"}}
];