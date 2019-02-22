//Set the below variable to the changing root of the urls for this deployment

var deployspecificurlsection = "http://maf.dev.m4.net/searchSuggest-1.0/";

// These must generate the same format of date from each script.
var m4dateformat = {
		moment: "ddd, DD-MMM-YYYY",
		momentshort: "DD-MMM-YYYY",
		datepickers: "D, dd-M-yyyy",
		regex: /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (0[1-9]|[12][0-9]|3[01])-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(19|20)\d\d$/,
		// If I need to extend to allow short hand months dobregex:
		// /^(((0[1-9]|[12]\d|3[01])[\s\/-]?((0[13578]|1[02])|(Jan|jan|Mar|mar|May|may|Jul|jul|Aug|aug|Oct|oct|Dec|dec))[\s\/-]?((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)[\s\/-]?((0[13456789]|1[012])|(Jan|jan|Mar|mar|Apr|apr|May|may|Jun|jun|Jul|jul|Aug|aug|Sep|sep|Oct|oct|Nov|nov|Dec|dec))[\s\/-]?((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])[\s\/-]?(02|Feb|feb)[\s\/-]?((19|[2-9]\d)\d{2}))|(29[\s\/-]?(02|Feb|feb)[\s\/-]?((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/,
		dobregex: /^(((0[1-9]|[12]\d|3[01])[\s\/-]?(0[13578]|1[02])[\s\/-]?((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)[\s\/-]?(0[13456789]|1[012])[\s\/-]?((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])[\s\/-]?02[\s\/-]?((19|[2-9]\d)\d{2}))|(29[\s\/-]?02[\s\/-]?((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/,
		dobregexmessage: "Please use a valid format (DD-MM-YYYY, delimiters are optional)"
};

var m4language = {
		datepickers:{
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today"
		},
		moment:{
			months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat : {
				LT : "HH:mm",
				L : "DD/MM/YYYY",
				LL : "D MMMM YYYY",
				LLL : "D MMMM YYYY LT",
				LLLL : "dddd, D MMMM YYYY LT"
			},
			calendar : {
				sameDay : '[Today at] LT',
				nextDay : '[Tomorrow at] LT',
				nextWeek : 'dddd [at] LT',
				lastDay : '[Yesterday at] LT',
				lastWeek : '[Last] dddd [at] LT',
				sameElse : 'L'
			},
			relativeTime : {
				future : "in %s",
				past : "%s ago",
				s : "a few seconds",
				m : "a minute",
				mm : "%d minutes",
				h : "an hour",
				hh : "%d hours",
				d : "a day",
				dd : "%d days",
				M : "a month",
				MM : "%d months",
				y : "a year",
				yy : "%d years"
			},
			ordinal : function (number) {
				var b = number % 10,
				output = (~~ (number % 100 / 10) === 1) ? 'th' :
					(b === 1) ? 'st' :
						(b === 2) ? 'nd' :
							(b === 3) ? 'rd' : 'th';
				return number + output;
			},
			week : {
				dow : 1, // Monday is the first day of the week.
				doy : 4  // The week that contains Jan 4th is the first week
							// of the year.
			}
		}
};

var AdvancedSearch = {
		"cs" : {"claz" : "system-icon-color system", "icongroup" : "fa-archive"},
		"dc" : {"claz" : "system-icon-color system", "icongroup" : "fa-file"},
		"nt" : {"claz" : "system-icon-color system", "icongroup" : "fa-cogs"},
		"cl" : {"claz" : "partners-icon-color partners", "icongroup" : "fa-user"},
		"pi" : {"claz" : "account-icon-color account", "icongroup" : "fa-gbp"},
		"si" : {"claz" : "tariffs-icon-color tariffs", "icongroup" : "fa-money"},
		"rt" : {"claz" : "route-icon-color route", "icongroup" : "fa-road"},
		"lg" : {"claz" : "route-icon-color route", "icongroup" : "fa-road"},
		"su" : {"claz" : "partners-icon-color partners", "icongroup" : "fa-user"},
		"co" : {"claz" : "geography-icon-color geography", "icongroup" : "fa-picture-o"},
		"pc" : {"claz" : "tariffs-icon-color tariffs", "icongroup" : "fa-money"},
		"pa" : {"claz" : "tariffs-icon-color tariffs", "icongroup" : "fa-money"},
		"ct" : {"claz" : "partners-icon-color partners", "icongroup" : "fa-user"},
		"us" : {"claz" : "system-icon-color system", "icongroup" : "fa-cogs"},
		"ex" : {"claz" : "system-icon-color system", "icongroup" : "fa-cogs"},
		"pl" : {"claz" : "geography-icon-color geography", "icongroup" : "fa-picture-o"},
		"cu" : {"claz" : "geography-icon-color geography", "icongroup" : "fa-picture-o"},
		"pd" : {"claz" : "system-icon-color system", "icongroup" : "fa-cogs"},
		"lssl" : {"claz" : "tariffs-icon-color tariffs", "icongroup" : "fa-money"},
		"driver_invoice" : {"claz" : "tariffs-icon-color tariffs", "icongroup" : "fa-money"}
	}

var searchSuggestSetting = {
		"default": {
			url: "default.json",
			dataType: "json",
			dataparams: [],
			success: function(responseData, response) {
				var resultsList = [];
                var headerrecord = {};
                if (responseData.headings) {
                    headerrecord.headings = responseData.headings;
                    resultsList.push(headerrecord);
                }
                if ($.isArray(responseData.values)) {
                    responseData = responseData.values;
                }
                for (var i = 0; i < responseData.length; i++) {
                    record = {};
                    record.key = responseData[i].key;
                    record.multiColumn = false;
                    if ($.isArray(responseData[i].value)) {
                        record.multiColumn = true;
                        record.value = [];
                        for (var j = 0; j < responseData[i].value.length; j++) {
                            record.value[j] = responseData[i].value[j];
                        }
                    } else {
                        record.value = responseData[i].value;
                    }
                    record.data = responseData[i].data;
                    resultsList.push(record);
                }
                response(resultsList);
			},
			renderItem: function(ul, data) {
				if (data.addnew) {
					return $("<li class='addnew'></li>").append("<a title='Add new address'><div class='addnew text-center' data-target='#addressmodal'>Add new address</div></a>").appendTo(ul);
				}
				
				if(data.multiColumn || data.headings){
					if (data.headings) {
						var headingHTML = "";
						
						for(var i = 0; i < data.headings.length; i++){
							if(data.headings[i]){
								headingHTML = headingHTML + "<div class='heading'>" + data.headings[i] + "</div>";
							}
						}						
						return $("<li class='columnautocomplete'></li>")
						.data("item.autocomplete", data)
						.append(headingHTML)
						.appendTo(ul);
					}
					else {	
						// ul.css('min-width', 150 * 3);
						var content = "<a>";

						var dataLines = data.value;

						for(var i = 0; i < dataLines.length; i++){
							var value = (dataLines[i] !== '' || dataLines[i] !== undefined) ? dataLines[i]: "-";
							
							content = content + "<div class='col cell"+ i+ "'>" + value + "</div>";
							
						}
						content = content + "</a>";
						var el = $("<li class='columnautocomplete'></li>").data("item.autocomplete", data)                            
						.append(content)
						.appendTo(ul);

						return el; 
					}
				}else{					
					// console.log(decodeURIComponent(data.label));
					 return $( "<li>" )
					 .attr( "data-value", data.value )
					 .append( $( "<a>" ).text( data.label ) )
					 .appendTo( ul );
				}
			}
		},
		"pafplacesearch": {
			url: "default.json",
			dataType: "json",
			dataparams: [],
			beforesend: function(jqXHR, settings){
				var searchURL = settings.url;
				var countryId = !$('#countryName').val() ? 'unknown' : $('#countryid').val();
				searchURL = searchURL.replace('{countryId}', countryId);
				settings.url = searchURL;
			},
			selectiondone: function(event, ui){
				/* populating the search field with the selected values */
				if(ui.item.value !== undefined ) $("#addressform [name=placeName]").val(ui.item.value);
				var alterNativeName = ui.item.data[5]; // if paf activated
				if(alterNativeName === undefined && ui.item.value[1]) alterNativeName = ui.item.value[1]; // if
																											// paf
																											// not
																											// activated
				if(alterNativeName)	$("#addressform #addressPlaceAlternativeName").val(alterNativeName);
				// Replacing address lines when place search only for new
				// address adding
				if($("#addressform [name=addressId]").val() === '' && ui.item.data){
					if(ui.item.data[0] !== undefined ) $("#addressform [name=addressLine1]").val(ui.item.data[0]);
					if(ui.item.data[1] !== undefined ) $("#addressform [name=addressLine2]").val(ui.item.data[1]);
					if(ui.item.data[2] !== undefined ) $("#addressform [name=addressLine3]").val(ui.item.data[2]);
					if(ui.item.data[3] !== undefined ) $("#addressform [name=addressLine4]").val(ui.item.data[3]);
					if(ui.item.data[4] !== undefined ) $("#addressform [name=postcode]").val(ui.item.data[4]);
					if(ui.item.data[5] !== undefined ) $("#addressform [name=company]").val(ui.item.data[5]);
					if(ui.item.value !== undefined ) $("#addressform [name=placeName]").val(ui.item.value);
				}
			}
		},
		"placesearch": {
			url: "default.json",
			dataType: "json",
			dataparams: [],
			beforesend: function(jqXHR, settings){
				var searchURL = settings.url;
				var countryId = !$('#countryName').val() ? 'unknown' : $('#countryid').val();
				searchURL = searchURL.replace('{countryId}', countryId);
				settings.url = searchURL;
			},
			success: function(responseData, response) {
				var resultsList = [];
                var headerrecord = {};
                if (responseData.headings) {
                    headerrecord.headings = responseData.headings;
                    resultsList.push(headerrecord);
                }
                if ($.isArray(responseData.values)) {
                    responseData = responseData.values;
                }
                for (var i = 0; i < responseData.length; i++) {
                    record = {};
                    record.key = responseData[i].key;
                    record.multiColumn = false;
                    if ($.isArray(responseData[i].value)) {
                        record.multiColumn = true;
                        record.value = [];
                        for (var j = 0; j < responseData[i].value.length; j++) {
                            record.value[j] = responseData[i].value[j];
                        }
                    } else {
                        record.value = responseData[i].value;
                    }
                    record.data = responseData[i].data;
                    resultsList.push(record);
                }
                response(resultsList);
			},
			selectiondone: function(event, ui){
				if(ui.item.data){
					if($("#addressform [name=addressline1]") && $("#addressform [name=addressline1]").val() === '') $("#addressform [name=addressline1]").val(ui.item.data[0]);
					if($("#addressform [name=addressline2]") && $("#addressform [name=addressline2]").val() === '') $("#addressform [name=addressline2]").val(ui.item.data[1]);
					if($("#addressform [name=addressline3]") && $("#addressform [name=addressline3]").val() === '') $("#addressform [name=addressline3]").val(ui.item.data[2]);
					if($("#addressform [name=addressline4]") && $("#addressform [name=addressline4]").val() === '') $("#addressform [name=addressline4]").val(ui.item.data[3]);
					if(ui.item.data[4] !== undefined && ui.item.data[4] !== '') $("#addressform [name=postcode]").val(ui.item.data[4]);
				}
			}
		},
		"addresssearch": {
			// Append the service specific chunk of the url for this search.
			// This will not change from deploy to deploy.
			url: "default.json",
			dataType: "json",
			dataparams: [],

			error: function(jqXHR, textStatus, errorThrown) {
				console.log("Le sigh: " + jqXHR, textStatus, errorThrown);
			},
			beforesend: function(jqXHR, settings){
				var searchURL = settings.url;
				var parentInputsId = $(document.activeElement).attr('data-search-parent-inputs');
				$(document.activeElement).attr('oldSearchValue', $(document.activeElement).val());
				var parentId = "";
				if(parentInputsId){
					inputs = parentInputsId.split(",");
					for(var i = 0; i <= inputs.length; i++){
						if($('#' + inputs[i]).val() != ''){
							parentId  = $('#' + inputs[i]).val();
							break;
						} 
					}
				}
				searchURL = searchURL.replace('{parentId}', parentId);
				settings.url = searchURL;
				
			},
			success: function(responseData, response) {
				var resultsList = [];
				var headerrecord = {};
				var addnew = {};
				if (responseData.headings) {
					headerrecord['headings'] = responseData.headings;
					resultsList.push(headerrecord);
				}
				// Push the main values object to the root of respinseData. This
				// will blow away the headings
				// but that is OK.
				if ($.isArray(responseData.values)) {
					responseData = responseData.values;
				}
				for (var i = 0; i < responseData.length; i++) {
					record = {};
					record["key"] = responseData[i].key;
					record["multiColumn"] = false;
					if ($.isArray(responseData[i].value)) {
						record["multiColumn"] = true;
						record["value"] = [];
						for (var j = 0; j < responseData[i].value.length;j++) {
							record["value"][j] = responseData[i].value[j];
						}
					}
					record["data"] = responseData[i].data;

					resultsList.push(record);
				}
				if (resultsList.length === 1) resultsList = [];
				addnew['addnew'] = ["a", "b"];
				resultsList.push(addnew);
				response(resultsList);
			},        
			renderItem: function(ul, data) {
				if (data.headings) {
					var adHeadingHTML = "";					
					for(var i = 0; i < data.headings.length; i++){
						if(data.headings[i]){
							adHeadingHTML = adHeadingHTML + "<div class='heading'>" + data.headings[i] + "</div>";
						}
					}
					return $("<li class='columnautocomplete'></li>")
					.data("item.autocomplete", data)
					.append(adHeadingHTML)
					.appendTo(ul);
				}
				else {
					if (data.addnew) {
						var addrow = "<a><div class='addnew' data-target='#addressmodal'>Add new address</div></a>";
						if($('#runsheetlinerownew').length > 0){
							addrow = "<a><div class='addnew' id='addressadd' data-remote-url='/netcourier-data/address/csc/" + $('#clientId').val() + "'>Add new address</div></a>";
						}
						console.log('binding address.. ');						
						var tm = $("<li class='addnew'></li>").append(addrow).appendTo(ul);
						addAddressInRunSheetSearch($('body'));
						addnewaddress($('.multiselect'));
						return tm;
					} else {
						// ul.css('min-width', 150 * 3);
						var content = "<a>";
						var dataLines = data.value;
						for(var i = 0; i < dataLines.length; i++){
							var value = (dataLines[i] !== '' || dataLines[i] !== undefined) ? dataLines[i]: "-"; 
							content = content + "<div class='col cell"+ i+ "'>" + value + "</div>";
						}
						content = content + "</a>";
						var el = $("<li class='columnautocomplete'></li>").data("item.autocomplete", data)
						.append(content)
						.appendTo(ul);

						return el; 
					}
				}
			},
			select: function(event, ui, url) {
				if ($(event.currentTarget).find('li:has("a.ui-state-focus")').hasClass('addnew')) {
					
					var targetmodal = $(event.currentTarget).find('li.addnew div').attr('data-target');
					
					var targetObj = $(event.target);
					var parentInputsId = targetObj.attr('data-search-parent-inputs');
					var parentId = "";
					if(parentInputsId){
						inputs = parentInputsId.split(",");
						for(var i = 0; i <= inputs.length; i++){
							var clientValue = $('#' + inputs[i]).val();
							if((clientValue !== "" && clientValue !== undefined)){
								parentId  = $('#' + inputs[i]).val();
								break;
							} 
						}
					}
					// To track if from client clc / cli
					if($(targetObj).attr("id") == 'contactaddresssearch') {
						$('#clientaddresstype').val('CLC');
					}
					if($(targetObj).attr("id") == 'invoiceaddresssearch') {
						$('#clientaddresstype').val('CLI');
					}
					if($(targetObj).attr("id") == 'courieraddresssearch') {
						$('#clientaddresstype').val('CR');
					}
					if($(targetObj).attr("id") == 'defaultaddresssearch') {
						$('#clientaddresstype').val('CSD');
					}
					
					$('#targetdiv').val(event.target.id);
					

					var searhKey = $("#"+ event.target.id).val();
					if(searhKey === "" || searhKey === undefined) {
						searhKey = $(document.activeElement).attr('oldSearchValue');
					}
					var addressUrl = targetObj.attr('data-address-url') + "/" + encodeURIComponent(searhKey);
					addressUrl = addressUrl.replace('{parentId}', parentId);
					
					$(targetmodal).load(addressUrl, function(){
						$(targetmodal).modal('show');
						if($("#addressform #placeid").val() === 'TBA' ){							
							setTimeout(function(){
								$("#addressform #placeName").focus();
								$("#addressform #placeName").select();
								var e = jQuery.Event("keydown");
								e.which = 13; // # Some key code value
								$("#addressform #placeName").trigger(e);
							},300);
							
						}else{
							setTimeout(function(){
								$("#addressform input[value='']:not(:checkbox,:button):visible:first").focus();								
							},300);
						}
					});					
					
					
					var selectedradiolabel = targetObj.parents('div.controls').find('label:first-child');
					selectedradiolabel.attr('data-new', "#new");
					selectedradiolabel.addClass('modal-opened');
					
					$(targetmodal).modal('show');
				}
				else {
					var key = ui.item.key;
					var originalfield = event.target;
					$(originalfield).siblings(".typeahead-val").val(ui.item.key);
					var selectedradiolabel;
					var selectedaddressspan;
					var formattedaddress = "";
					var dataLines = (ui.item.data) ? ui.item.data : ui.item.value;
					
					/*
					 * data position array 0 = company 1 = Addressline1 2 =
					 * Addressline2 3 = Addressline3 4 = Addressline4 5 =
					 * Addressline5 6 = Postcode 8 = Contact 11 = Email 12 =
					 * Phone 13 = Mobile 14 = Fax 18 = Place name
					 */
					var fieldPos = new Array(0,1,2,3,4,5,6,8,11,12,13,14,18);
					var pureaddressline = "";
					for (var i = 0; i <= fieldPos.length; i++) {
						pureaddressline = dataLines[fieldPos[i]];
						if(fieldPos[i] == 6) {
							if(pureaddressline) {
								formattedaddress = formattedaddress.substring(0, formattedaddress.length - 4);
								formattedaddress = formattedaddress + "&nbsp;&nbsp;" + pureaddressline + "<br>";
							}
							formattedaddress = formattedaddress + "<br>";
							continue;
						} else if (fieldPos[i] == 11) {
							var emailArray = pureaddressline.split(',');
							for (var int = 0; int < emailArray.length; int++) {
								formattedaddress = formattedaddress + emailArray[int] + "<br>";
							}
						}else {
							if(pureaddressline){
								formattedaddress = formattedaddress + pureaddressline + "<br>";
							}
						}
					}
					
					pureaddressline = dataLines[19]; // Place alternative
														// name
					if(pureaddressline) {		// removed new line and added
												// with space-space
						formattedaddress = formattedaddress.substring(0, formattedaddress.length - 4);
						formattedaddress = formattedaddress + "&nbsp;-&nbsp;"  + pureaddressline + "<br>";
					}
					pureaddressline = dataLines[7]; // country code
					if(pureaddressline) {
						formattedaddress = formattedaddress + pureaddressline + "<br>";
					}
					pureaddressline = dataLines[17]; // country name
					if(pureaddressline) {			// removed new line and
													// added with space-space
						formattedaddress = formattedaddress.substring(0, formattedaddress.length - 4);
						formattedaddress = formattedaddress + "&nbsp;-&nbsp;"  + pureaddressline + "<br>";
					}
					formattedaddress = formattedaddress.substring(0, formattedaddress.length - 4); // removed
																									// new
																									// line
					
					if($(originalfield).hasClass( "customAddressPlacement" )) {
						
						selectedradiolabel = $(originalfield).closest('div.control-group').siblings( ".search-result" );
						selectedradiolabel.show();
						
						selectedaddressspan = selectedradiolabel.find('span.searchedvalue');
						selectedaddressspan.empty();
						
						var remoteUrlVal = "/netcourier-data/address/"+ui.item.key;
		        		
		        		if($(originalfield).attr("id") == "contactaddresssearch") {
		        			$('#addresseditmodal').attr('data-remote', remoteUrlVal);
		        			$('#contactAddress').val(ui.item.key);
		        		} 
		        		if($(originalfield).attr("id") == "invoiceaddresssearch") {
		        			$('#invoicemodalbutton').attr('data-remote', remoteUrlVal);
		        			$('#invoiceAddress').val(ui.item.key);
		        		}
		        		if($(originalfield).attr("id") == "defaultaddresssearch") {
		        			console.log("Client Def address!");
		        			$('#defaultmodalbutton').attr('data-remote', remoteUrlVal);
		        			$('#defaultAddress').val(ui.item.key);
		        		}
		        		if($(originalfield).attr("id") == "courieraddresssearch") {
		        			$('#addresseditmodal').attr('data-remote', remoteUrlVal);
		        			$('#addressId').val(ui.item.key);
		        		}
		        		if($(originalfield).attr("id") == "returnaddresssearch") {
		        			$('#addresseditmodal').attr('data-remote', remoteUrlVal);
		        			$('#returnAddress').val(ui.item.key);
		        		}
		        		
					} else {
						
						selectedradiolabel = $(originalfield).parents('div.controls').find('label:first-child');
						var selectedradio = selectedradiolabel.find('input[type="radio"]');

						selectedaddressspan = selectedradiolabel.find('span:first');       
						selectedaddressspan.empty();
						selectedradio.trigger('click');
						selectedradio.val(key);
					}
					selectedaddressspan.append(formattedaddress);
					selectedradiolabel.addClass('selectedaddress').removeClass('preloaded');
					selectedradiolabel.find('button[data-toggle]').show();
					$(originalfield).val("");
					$(originalfield).siblings(".typeahead-val").val(ui.item.key);
					$(originalfield).parents('div.controls').find('label.preloaded').remove();
					selectedradiolabel.css('display','');
					$(selectedradiolabel).show();
				}
			}
		},
		"quoteaddresssearch": {
			// Append the service specific chunk of the url for this search.
			// This will not change from deploy to deploy.
			url: "default.json",
			dataType: "json",
			dataparams: [],

			error: function(jqXHR, textStatus, errorThrown) {
				console.log("Le sigh: " + jqXHR, textStatus, errorThrown);
			},
			beforesend: function(jqXHR, settings){
				var searchURL = settings.url;
				var activeElement = $(document.activeElement);
				var parentInputsId = activeElement.attr('data-search-parent-inputs');
				activeElement.attr('oldSearchValue', activeElement.val());
				var parentId = "";
				if(parentInputsId){
					inputs = parentInputsId.split(",");
					for(var i = 0; i <= inputs.length; i++){
						if($('#' + inputs[i]).val() != ''){
							parentId  = $('#' + inputs[i]).val();
							break;
						}
					}
				}
				
				var countryInputsId = activeElement.attr('data-search-country-inputs');
				
				var countryId = "";
				var countrys = countryInputsId.split(",");
				for(var i = 0; i <= countrys.length; i++){
					if($('#' + countrys[i]).val() != ''){
						countryId  = $('#' + countrys[i]).val();
						break;
					}
				}
				if (countryId == undefined || countryId == "") {
					$('#' + countrys[0]).parent().find('input.typeahead').valid();
					$('#' + countrys[0]).parent().find('input.typeahead').focus();
					activeElement.parents('.controls').find('i.icon-search.autocompletesearching').removeClass('autocompletesearching');
					jqXHR.abort();
				} 
				
				var clientInputsId = activeElement.attr('data-search-parent-inputs');
				var clientId = $('#' + clientInputsId).val();
				
				if (clientId == undefined || clientId == "") {
					$('#' + clientInputsId).parent().find('input.typeahead').valid();
					$('#' + clientInputsId).parent().find('input.typeahead').focus();
					activeElement.parents('.controls').find('i.icon-search.autocompletesearching').removeClass('autocompletesearching');
					jqXHR.abort();
				}
			
				searchURL = searchURL.replace('{parentId}', parentId);
				searchURL = searchURL.replace('{countryId}', countryId);
				settings.url = searchURL;
			},
			success: function(responseData, response) {
				var resultsList = [];
				var headerrecord = {};
				var addnew = {};
				if (responseData.headings) {
					headerrecord['headings'] = responseData.headings;
					resultsList.push(headerrecord);
				}
				// Push the main values object to the root of respinseData. This
				// will blow away the headings
				// but that is OK.
				if ($.isArray(responseData.values)) {
					responseData = responseData.values;
				}
				for (var i = 0; i < responseData.length; i++) {
					record = {};
					record["key"] = responseData[i].key;
					record["multiColumn"] = false;
					if ($.isArray(responseData[i].value)) {
						record["multiColumn"] = true;
						record["value"] = [];
						for (var j = 0; j < responseData[i].value.length;j++) {
							record["value"][j] = responseData[i].value[j];
						}
					}
					record["data"] = responseData[i].data;

					resultsList.push(record);
				}
				if (resultsList.length === 1) resultsList = [];
				response(resultsList);
			},
			selectiondone: function(event, ui){
				var originalfield = event.target;
				var dataSelected = ui.item.value[2];
				if(dataSelected == "" && ui.item.data.length > 17) {
					dataSelected = ui.item.data[18];
				}
				$(originalfield).val(dataSelected);
				$(originalfield).siblings(".typeahead-val").val(ui.item.key);
				$(originalfield).siblings(".typeahead-desc").val(dataSelected);
				
				setTimeout(function(){
					var postcode = ui.item.data && ui.item.data.length > 5 ? ui.item.data[6] : "";
					$(originalfield).val(dataSelected);
					$(originalfield).siblings(".typeahead-val").val(ui.item.key);
					$(originalfield).siblings(".typeahead-desc").val(dataSelected);
					$(originalfield).siblings(".customPostcode").val(postcode);
				},50);
			}
		},
		"invsuppliersearch": {
			url: "default.json",
			dataType: "json",
			dataparams: [],
			beforesend: function(jqXHR, settings){
				$('#supplierCurrency').val('');
			},
			selectiondone: function(event, ui){
				var supplierId = $("#supplierId").val();
				console.log("supplierId..." + supplierId);
				if (supplierId) {
					setTimeout(function(){
						$.get($('#supplierurl').val() + supplierId).done(function( cuid ) {
							if (cuid) {
								$('#supplierCurrency').val(cuid);
								console.log("currencyId..." + cuid);
							}
						}).always(function() {
							console.log('done');
						});
					}, 100);
				}
			}
		},
		"jobsearch": {
			url: "default.json",
			dataType: "json",
			dataparams: [],
			success: function(responseData, response) {
				var resultsList = [];
				var headerrecord = {};
				if (responseData.headings) {
					headerrecord.headings = responseData.headings;
					resultsList.push(headerrecord);
				}
				if ($.isArray(responseData.values)) {
					responseData = responseData.values;
				}
				for (var i = 0; i < responseData.length; i++) {
                    record = {};
                    record.key = responseData[i].key;
                    record.multiColumn = false;
                    if ($.isArray(responseData[i].value)) {
                        record.multiColumn = true;
                        record.value = [];
                        for (var j = 0; j < responseData[i].value.length; j++) {
                            record.value[j] = responseData[i].value[j];
                        }
                    } else {
                        record.value = responseData[i].value;
                    }
                    record.data = responseData[i].data;
                    resultsList.push(record);
                }
                response(resultsList);
			},
			renderItem: function(ul, data) {
				console.log("Call job search");
				
				if(data.multiColumn || data.headings){
					if (data.headings) {
						var headingHTML = "";
						
						for(var i = 0; i < data.headings.length; i++){
							if(data.headings[i]){
								headingHTML = headingHTML + "<div class='heading'>" + data.headings[i] + "</div>";
							}
						}						
						return $("<li class='columnautocomplete'></li>")
						.data("item.autocomplete", data)
						.append(headingHTML)
						.appendTo(ul);
					}
					else {	
						// ul.css('min-width', 150 * 3);
						var content = "<a>";

						var dataLines = data.value;

						for(var i = 0; i < dataLines.length; i++){
							var value = (dataLines[i] !== '' || dataLines[i] !== undefined) ? dataLines[i]: "-";
							
							content = content + "<div class='col cell"+ i+ "'>" + value + "</div>";
							
						}
						content = content + "</a>";
						var el = $("<li class='columnautocomplete'></li>").data("item.autocomplete", data)                            
						.append(content)
						.appendTo(ul);

						return el; 
					}
				}else{					
					// console.log(decodeURIComponent(data.label));
					 return $( "<li>" )
					 .attr( "data-value", data.value )
					 .append( $( "<a>" ).text( data.label ) )
					 .appendTo( ul );
				}
			},
			selectiondone: function(event, ui){
				console.log("call select done" + ui.item.data[0]);

				var originalfield = event.target;
				var dataSelected = ui.item.value[0];
				var email = ui.item.data[0];
				
				$(originalfield).val(dataSelected);
				$(originalfield).siblings(".typeahead-val").val(ui.item.key);
				$(originalfield).siblings(".typeahead-desc").val(dataSelected);
				
				setTimeout(function(){
					$(originalfield).val(dataSelected);
					$(originalfield).siblings(".typeahead-val").val(ui.item.key);
					$(originalfield).siblings(".typeahead-desc").val(dataSelected);
					$('div#invoiceEmail').show();
					$('div#invoiceEmail').attr({"data-clickchangepair":"selectinvoiceradio2, selectinvoiceradio3", "data-clickchangegroup":"selectInvoice"});
					$('#invoiceToEmail').val(email);
// $('#invoiceToEmail').attr("disabled", true);
				},50);
			
			}
		},
		"clientsearch": {
			url: "default.json",
			dataType: "json",
			dataparams: [],
			selectiondone: function(event, ui){
				var originalfield = event.target;
				var dataSelected = ui.item.value;
				var email = ui.item.data;
				
				$(originalfield).val(dataSelected);
				$(originalfield).siblings(".typeahead-val").val(ui.item.key);
				$(originalfield).siblings(".typeahead-desc").val(dataSelected);
				
				setTimeout(function(){
					$(originalfield).val(dataSelected);
					$(originalfield).siblings(".typeahead-val").val(ui.item.key);
					$(originalfield).siblings(".typeahead-desc").val(dataSelected);
					$('div#invoiceEmail').show();
					$('div#invoiceEmail').attr({"data-clickchangepair":"selectinvoiceradio2, selectinvoiceradio3", "data-clickchangegroup":"selectInvoice"});
					$('#invoiceToEmail').val(email);
				},50);
			}
		},
		"advancedsearch": {
			success: function(responseData, response) {
				var resultsList = [];
				for (var i = 0; i < responseData.length; i++) {
                    var record = {};
                    record.key = responseData[i].key;
                    record.multiColumn = false;
                    record.value = responseData[i].value;
                    record.data = responseData[i].data;
                    record.type = responseData[i].type;
                    resultsList.push(record);
                }
                response(resultsList);
			},
			renderItem: function(ul, data) {
				
				var content = $( "<li style='line-height: 20px;'>" ).attr( "data-value", data.value ).append('<span class="abbrev-search-base '+ AdvancedSearch[data.type].claz +'"><i class="fa fa-sm '+ AdvancedSearch[data.type].icongroup +'"></i></span>').append($( "<a style='display: inline-block;'>" ).text( data.label )).appendTo(ul);
				
				 return content;
			}
		},
		"multidropaddresssearch": {
			success: function(responseData, response) {
				var resultsList = [];
				var headerrecord = {};
				var addnew = {};
				if (responseData.headings) {
					headerrecord['headings'] = responseData.headings;
					resultsList.push(headerrecord);
				}
				// Push the main values object to the root of respinseData. This
				// will blow away the headings
				// but that is OK.
				if ($.isArray(responseData.values)) {
					responseData = responseData.values;
				}
				for (var i = 0; i < responseData.length; i++) {
					record = {};
					record["key"] = responseData[i].key;
					record["multiColumn"] = false;
					if ($.isArray(responseData[i].value)) {
						record["multiColumn"] = true;
						record["value"] = [];
						for (var j = 0; j < responseData[i].value.length;j++) {
							record["value"][j] = responseData[i].value[j];
						}
					}
					record["data"] = responseData[i].data;

					resultsList.push(record);
				}
				if (resultsList.length === 1) resultsList = [];
				addnew['addnew'] = ["a", "b"];
				resultsList.push(addnew);
				response(resultsList);
			},        
			renderItem: function(ul, data) {
				if (data.headings) {
					var adHeadingHTML = "";					
					for(var i = 0; i < data.headings.length; i++){
						if(data.headings[i]){
							adHeadingHTML = adHeadingHTML + "<div class='heading'>" + data.headings[i] + "</div>";
						}
					}
					return $("<li class='columnautocomplete'></li>")
					.data("item.autocomplete", data)
					.append(adHeadingHTML)
					.appendTo(ul);
				}
				else {
					if (data.addnew) {
						var addrow = "<a><div class='addnew' data-target='#addressmodal'>Add new address</div></a>";
						if($('#runsheetlinerownew').length > 0){
							addrow = "<a><div class='addnew' id='addressadd' data-remote-url='/netcourier-data/address/csc/" + $('#clientId').val() + "'>Add new address</div></a>";
						}
						console.log('binding address.. ');						
						var tm = $("<li class='addnew'></li>").append(addrow).appendTo(ul);
						addAddressInRunSheetSearch($('body'));
						addnewaddress($('.multiselect'));
						return tm;
					} else {
						// ul.css('min-width', 150 * 3);
						var content = "<a>";
						var dataLines = data.value;
						for(var i = 0; i < dataLines.length; i++){
							var value = (dataLines[i] !== '' || dataLines[i] !== undefined) ? dataLines[i]: "-"; 
							content = content + "<div class='col cell"+ i+ "'>" + value + "</div>";
						}
						content = content + "</a>";
						var el = $("<li class='columnautocomplete'></li>").data("item.autocomplete", data)
						.append(content)
						.appendTo(ul);

						return el; 
					}
				}
			},
			select: function(event, ui) {
				if ($(event.currentTarget).find('li:has("a.ui-state-focus")').hasClass('addnew')) {
					console.log("select add new addres from address search........");
					var targetmodal = $(event.currentTarget).find('li.addnew div').attr('data-target');
					
					var targetObj = $(event.target);
					var parentInputsId = targetObj.attr('data-search-parent-inputs');
					var parentId = "";
					if(parentInputsId){
						inputs = parentInputsId.split(",");
						for(var i = 0; i <= inputs.length; i++){
							var clientValue = $('#' + inputs[i]).val();
							if((clientValue !== "" && clientValue !== undefined)){
								parentId  = $('#' + inputs[i]).val();
								break;
							} 
						}
					}

					
					$('#targetdiv').val(event.target.id);

					var searhKey = $("#"+ event.target.id).val();
					if(searhKey === "" || searhKey === undefined) {
						searhKey = $(document.activeElement).attr('oldSearchValue');
					}
					var addressUrl = targetObj.attr('data-address-url') + "/" + encodeURIComponent(searhKey);
					addressUrl = addressUrl.replace('{parentId}', parentId);
					$(targetmodal).load(addressUrl, function(){
						$(targetmodal).modal('show');
						if($("#addressform #placeid").val() === 'TBA' ){
							setTimeout(function(){
								$("#addressform #placeName").focus();
								$("#addressform #placeName").select();
								var e = jQuery.Event("keydown");
								e.which = 13; // # Some key code value
								$("#addressform #placeName").trigger(e);
							},300);
							
						}else{
							setTimeout(function(){
								$("#addressform input[value='']:not(:checkbox,:button):visible:first").focus();								
							},300);
						}
					});

					var selectedradiolabel = targetObj.parents('div.controls').find('label:first-child');
					selectedradiolabel.attr('data-new', "#new");
					selectedradiolabel.addClass('modal-opened');
					
					$(targetmodal).modal('show');
				} else {
					console.log("address selected.. will load new line");
					var colId = "";
					if ($('tr.dropjobs').length > 0) {
						colId = $('tr.dropjobs:last').attr("delid");
					} else {
						colId = $('tr.masterjob').attr("delid");
					}

					Multidrop.addNewRowAndPricing(colId, ui.item.key);
				}
			}
		},
		"driversearch": {
			url: "default.json",
			dataType: "json",
			dataparams: [],
			selectiondone: function(event, ui){
				var invoiceEmail = $("#invoiceEmail").val();
				console.log("InvoiceEmail..." + invoiceEmail);
				if (invoiceEmail === "" || $('#invoiceEmail').attr("manualchange") !== "manualchange") {
					$("#invoiceEmail").val(ui.item.value[1]);
				}
			}
		}
};

var submitSetting = {
		"example1": {
			// Append the service specific chunk of the url for this search.
			// This will not change from deploy to deploy.
			url: deployspecificurlsection+"newSearchSuggestServlet?callback=?",
			searchid: "PROPERTY1"
		},
		"pricelineupdated": {},
		"pricelinedeleted": {},
		"addrouteextra": {},
		"archiverouteextra": {},
		"addrouteleg": {},
		"archiverouteleg": {},
		"savetag" : {},
		"savepriceallocation" : {},
		"listlineupdated": {},
		"listlinedeleted": {}
};

var AddressSection = {
	initClearAddress: function() {
		$('.addressremove').off();
		$('.addressremove').on('click', function() {
			AddressSection.clearAddress($(this));
	  	});
	},
	clearAddress: function(field) {
		var originalfield = field.closest('.control-group').parent().find(".typeahead");
		$(originalfield).siblings(".typeahead-val").val("");
		
		var selectedradiolabel;
		var selectedaddressspan;
		
		if($(originalfield).hasClass( "customAddressPlacement" )) {
			selectedradiolabel = $(originalfield).closest('div.control-group').siblings( ".search-result" );
			selectedradiolabel.addClass('nodisplay');
			
			selectedaddressspan = selectedradiolabel.find('span.searchedvalue');
			selectedaddressspan.empty();
    		
    		if($(originalfield).attr("id") == "contactaddresssearch") {
    			$('#contactAddress').val("");
    		} else if($(originalfield).attr("id") == "invoiceaddresssearch") {
    			$('#invoiceAddress').val("");
    		} else if($(originalfield).attr("id") == "defaultaddresssearch") {
    			console.log("Client Def address!");
    			$('#defaultAddress').val("");
    		} else if($(originalfield).attr("id") == "courieraddresssearch") {
    			$('#addressId').val("");
    		} else if($(originalfield).attr("id") == "returnaddresssearch") {
    			$('#returnAddress').val("");
    		}
    		
		} else {
			
			selectedradiolabel = $(originalfield).parents('div.controls').find('label:first-child');
			var selectedradio = selectedradiolabel.find('input[type="radio"]');
			selectedaddressspan = selectedradiolabel.find('span');       
			selectedaddressspan.empty();
			selectedradio.val("");
		}
		if($('#runsheetlinerownew').length > 0){
			$("#collection_address_search").hide();
		}
		selectedradiolabel.addClass('nodisplay');
		$(originalfield).val("");
		$(originalfield).siblings(".typeahead-val").val("");
		$(originalfield).parents('div.controls').find('label.preloaded').remove();
		selectedradiolabel.css('display','');
		$(selectedradiolabel).hide();
	}
};

var Multidrop = {
	addNewRowAndPricing: function(colId, delId, isReturn) {
		console.log("Add new row and pricing..." + isReturn);
		var dropType = isReturn ? "R" : "D";
		$.ajax({
			type: "GET",
			url: $('form#mainform').attr('action') + "/address/" + colId + "/" + delId + "?dropType=" + dropType +"&masterJobId=" + $("#jobId", $('form#mainform')).val(),
			success: function(rs) {
				var tr = $('tr.masterjob');
				if ($('tr.dropjobs').length > 0) {
					tr = $('tr.dropjobs:last');
					tr.after(rs);
				} else {
					tr.after(rs);
				}

				tr = $('tr.dropjobs:last');
				$('#defaultaddresssearch').val('');
				// Hide last drop delete button
				if ($('tr.dropjobs').length > 0 && isReturn) {
					$('tr.dropjobs:not(:last)').find('a.removebtn').addClass('nodisplay');
					$("#returnadded").val(true);
					// Hide address search row
					$("tr.funtionalbtnli").addClass('nodisplay');
				} else {
					$("#funtionalbtnreturn").removeClass('nodisplay');
				}
				// event bind to show/hide remove drop btn
				$('a.removebtn').off('click').on('click', m4.nc.multidrop.rowdelete);
				
				var distance = "";
				$.get($('form#mainform').attr('distance-url') + "/" + $('#productid').val() +"?collectionId=" + tr.attr('colid') + "&deliveryId="+ tr.attr('delid'), function(rs) {
					console.log(rs);
					if ($('tr.dropjobs').length > 0) {
						var lastTR = $('tr.dropjobs:last');
						lastTR.find('span.distancecal').text(rs.calculativeDistance);
						lastTR.find("input.distancehid").val(rs.calculativeDistance);
						distance = rs.calculativeDistance;
						
						var masterTR = $('tr.masterjob');
						var masterpiece = $('input#noOfPieces').val() != undefined ? $('#noOfPieces').val() : masterTR.find('input.noOfPieceshid').val();
						var masterweight = $('input#weight').val() != undefined ? $('#weight').val() : masterTR.find('input.weighthid').val();
						var masterConVal = $("input#consignmentValueInCurrency3").val() != undefined ? $("input#consignmentValueInCurrency3").val() : masterTR.find('input.consignmentValueInCurrency3hid').val();  
						var masterInsVal = $("input#insuranceValueInCurrency3").val() != undefined ? $("input#insuranceValueInCurrency3").val() : masterTR.find('input.insuranceValueInCurrency3hid').val();
						
						lastTR.find('input.numberofpiece').val(masterpiece);
						lastTR.find('input.numberofpiece').attr("data-prev", masterpiece);
						lastTR.find('input.chargeableweight').val(masterweight);
						lastTR.find('input.chargeableweight').attr("data-prev", masterweight);
						lastTR.find('input.contentvaluespan').val(masterConVal);
						lastTR.find('input.contentvaluespan').attr("data-prev", masterConVal);
						lastTR.find('input.insurancevaluespan').val(masterInsVal);
						lastTR.find('input.insurancevaluespan').attr("data-prev", masterInsVal);
						lastTR.find('textarea.colinsspan').text($("#collectionNote").text());
						lastTR.find('textarea.delinsspan').text($("#note").text());
						
						// Set hidden fields
						lastTR.find('input.noOfPieceshid').val(masterpiece);
						lastTR.find('input.weighthid').val(masterweight);
						
						var pricingData = {};
						pricingData.jobId = $("#jobId").val();
						pricingData.collectionId = colId;
						pricingData.deliveryId=delId;
						pricingData.distance=distance;
						pricingData.weight=masterweight;
						pricingData.noOfPeice=masterpiece;
						pricingData.dropType=dropType;

						Multidrop.pricing(lastTR, pricingData);
					}
				});

				$("input.triggerpricing").off('blur').on("blur", m4.nc.multidrop.repricing);
				
				m4.nc.multidrop.subtotalprice();
				setvalidator();
				metaboot($('tr.dropjobs:last'));
				addvalidation($('tr.dropjobs:last'));
				if ($('tr.dropjobs').length > 0 && m4.nc.multidrop.editmode == true) {
					$('tr.dropjobs').find("a.removebtn").addClass("nodisplay");
					$('tr.dropjobs:last').find("a.removebtn").removeClass("nodisplay");
				}
			},
			error: function(err) {
				console.log(err);
			}
		});
	},
	pricing: function(target, pricingData) {
		$.post($('form#mainform').attr('action') + "/pricing", pricingData, function(rs) {
			target.find('span.pricecost').removeClass("ajax-loader-md");
			target.find('span.pricesales').removeClass("ajax-loader-md");
			if (rs.status == 'success') {
				target.find('span.pricecost').text(rs.totalCostPrice);
				target.find('span.pricesales').text(rs.totalSalesPrice);
				m4.nc.multidrop.subtotalprice();
				
				console.log("outside...........");
				// Show warning if zero sales price
				if (parseFloat(rs.totalSalesPrice) == 0) {
					console.log("inside...........");
					showInfo("Drop has contains zero(0) sales price!");
				}
			}
		});
	}
}
