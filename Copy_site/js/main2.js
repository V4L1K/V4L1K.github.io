function checkPhoneForm(frm){var in_num=frm.elements[1].value;var re=/^0-([0-9]){2}-([0-9]){7}$/g;if(re.test(in_num)){return true;}alert('������� ������ ���� ������ � ����: 0-XX-YYYYYYY');return false;}function myclickcode(){straddress=document.forms["myform"].elements["min_price"].value;if(straddress.indexof("@")!=-1)return true
else
alert('��������� ������������ e-mail ������!');return false;}function voidfn(val){var i=val;}function sendMail(link,l1,h1,h2){mailto=l1;mailto+="@";mailto+=h1;mailto+='.';mailto+=h2;link.href="mailto:"+mailto;return true;}function uh_get_object(obj_id){var obj_var=null;if(document.all)obj_var=document.all(obj_id);else if(document.getElementById)obj_var=document.getElementById(obj_id);else if(document.layers)obj_var=document.layers[obj_id];if(obj_var)return obj_var;alert('Error retrieve object handle by id: '+obj_id);}function generateSessionID(){charStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";var sessionId="";for(i=0;i<12;i++){sessionId+=charStr.charAt(Math.floor(Math.random()*charStr.length));}return sessionId;}function hideItem(itid){var obj_it=uh_get_object(itid);obj_it.style.visibility="hidden";obj_it.style.display="none";}function showItem(itid){var obj_it=uh_get_object(itid);obj_it.style.visibility="visible";obj_it.style.display="block";}function changeContact(selobj,id1,id2){var selph=selobj.options[selobj.selectedIndex].value;var selph_p=selph.split(":");var selph_num=selph_p[1];var selfil_id=selph_p[0];var ph_p=selph_num.split(" ");document.getElementById(id1).innerHTML=ph_p[0];document.getElementById(id2).innerHTML=ph_p[1];var dt=new Date();dt.setHours(dt.getHours()+24*180);var pcval=makeCookie("regioncity",selfil_id,dt.toUTCString(),"/",window.location.hostname);setCookie(pcval);}function changeContactNew(selobj,id1){var selph=selobj.options[selobj.selectedIndex].value;var selph_p=selph.split(":");var selph_num=selph_p[1];var selfil_id=selph_p[0];document.getElementById(id1).innerHTML=selph_num;var dt=new Date();dt.setHours(dt.getHours()+24*180);var pcval=makeCookie("regioncity",selfil_id,dt.toUTCString(),"/",window.location.hostname);setCookie(pcval);}function changeContact2(regid,fc,fn,id1,id2){$("#"+id1).html(fc);$("#"+id2).html(fn);var dt=new Date();dt.setHours(dt.getHours()+24*180);var pcval=makeCookie("regioncity",regid,dt.toUTCString(),"/",window.location.hostname);setCookie(pcval);return false;}function sub_menu(id,hide,o){if(hide){document.getElementById('subm'+id).style.display='none';$(o).removeClass("active");}else{document.getElementById('subm'+id).style.display='block';$(o).addClass("active");var itemX=0;var itemXn=0;var totalX=0;var itemX=document.getElementById('topm'+id).offsetLeft;Xp=itemX;if(document.getElementById('topm'+(id+1))){var itemXn=document.getElementById('topm'+(id+1)).offsetLeft;}var totalX=document.getElementById('topm').offsetWidth;var tablX=document.getElementById('subm'+id).offsetWidth;if(itemX==0){Xp=0;}else if(itemX<=(totalX-tablX)){Xp=itemX;}else if(itemXn&&itemXn-tablX>15){Xp=itemXn-tablX;}else{Xp=totalX-tablX;}document.getElementById('subm'+id).style.left=Xp+'px';document.getElementById('subm'+id).style.display='block';}}var keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function encode64(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;var line_len=0;do{chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>>2;if(!isNaN(chr2))enc2=((chr1&3)<<4)|(chr2>>>4);else
enc2=((chr1&3)<<4);if(!isNaN(chr3))enc3=((chr2&15)<<2)|(chr3>>>6);else
enc3=((chr2&15)<<2);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}output=output+keyStr.charAt(enc1);output=output+keyStr.charAt(enc2);output=output+keyStr.charAt(enc3);output=output+keyStr.charAt(enc4);}while(i<input.length);return output;}function decode64(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{enc1=keyStr.indexOf(input.charAt(i++));enc2=keyStr.indexOf(input.charAt(i++));enc3=keyStr.indexOf(input.charAt(i++));enc4=keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2);}if(enc4!=64){output=output+String.fromCharCode(chr3);}}while(i<input.length);return output;}function escapeEx(str){var ret='';var i=0;for(var i=0;i<str.length;i++){var n=str.charCodeAt(i);if(n>=0x410&&n<=0x44F)n-=0x350;else if(n==0x451)n=0xB8;else if(n==0x401)n=0xA8;if((n<65||n>90)&&(n<97||n>122)&&n<256){if(n<16)ret+='%0'+n.toString(16);else
ret+='%'+n.toString(16);}else
ret+=String.fromCharCode(n);}return ret;}function hideTooltip(obj_id){var obj=uh_get_object(obj_id);var obj_body=uh_get_object(obj_id+"_body");obj_body.innerHTML="empty";obj.style.visibility="hidden";obj.style.display="none";}function showTooltipTextShort(obj_id,x,y,txt){var obj=uh_get_object(obj_id);var obj_body=uh_get_object(obj_id+"_body");obj.style.visibility="visible";obj.style.display="block";obj.style.left=x+"px";obj.style.top=y+"px";obj_body.innerHTML=txt+"<br />";}function selWordFromLink(val1,target_id,droptip_id){var target=uh_get_object(target_id);target.value=val1;target.focus();hideTooltip(droptip_id);}function fillSearchList(str_val,obj_id,inp_id){var ctrl_droplist=uh_get_object(obj_id);var ctrl_text=uh_get_object(inp_id);if(search_is_running)return;search_is_running=true;if(str_val.length>1){if(AJAX!=null){var process_fn=function(res){eval('var responce_data = '+res);var div_inner_html="";var tmpstr="";try{for(i=0;i<responce_data.words.length;i++){if(i>0)div_inner_html+='<br />';tmpstr=responce_data.words[i].word;tmpstr=tmpstr.replace("<b>","");tmpstr=tmpstr.replace("</b>","");div_inner_html+='<a href="javascript:selWordFromLink(\''+tmpstr+'\', \''+inp_id+'\', \''+obj_id+'\');" class="searchitem">'+responce_data.words[i].word+'</a>';}if(div_inner_html=="")hideTooltip(obj_id);else
showTooltipTextShort(obj_id,ctrl_text.offsetLeft,ctrl_text.offsetTop+20,div_inner_html);}catch(e1){hideTooltip(obj_id);}search_is_running=false;};var post_req_str="rcom=uh_com_srchlist&swstart="+unescape(escapeEx(str_val));AJAX.SendRequest('POST','',process_fn,encode64(post_req_str));}}else{hideTooltip(obj_id);search_is_running=false;}}function fillSearchList2(str_val,obj_id,inp_id){var ctrl_droplist=uh_get_object(obj_id);var ctrl_text=uh_get_object(inp_id);if(search_is_running)return;search_is_running=true;if(str_val.length>1){if(AJAX!=null){var process_fn=function(res){eval('var responce_data = '+res);var div_inner_html="";var tmpstr="";try{for(i=0;i<responce_data.words.length;i++){if(i>0)div_inner_html+='<br />';tmpstr=responce_data.words[i].word;tmpstr=tmpstr.replace("<b>","");tmpstr=tmpstr.replace("</b>","");div_inner_html+='<a href="javascript:location.href=\''+responce_data.words[i].url+'\';" class="searchitem">'+responce_data.words[i].word+'</a>';}if(div_inner_html=="")hideTooltip(obj_id);else
showTooltipTextShort(obj_id,ctrl_text.offsetLeft,ctrl_text.offsetTop+20,div_inner_html);}catch(e1){hideTooltip(obj_id);}search_is_running=false;};var post_req_str="rcom=uh_com_srchlist2&swstart="+unescape(escapeEx(str_val));AJAX.SendRequest('POST','',process_fn,encode64(post_req_str));}}else{hideTooltip(obj_id);search_is_running=false;}}function fillSearchList3(str_val,obj_id,inp_id){var ctrl_droplist=uh_get_object(obj_id);var ctrl_text=uh_get_object(inp_id);if(search_is_running)return;search_is_running=true;if(str_val.length>1){if(AJAX!=null){var process_fn=function(res){eval('var responce_data = '+res);var div_inner_html="";var tmpstr="";try{for(i=0;i<responce_data.words.length;i++){if(i>0)div_inner_html+='<br />';tmpstr=responce_data.words[i].word;tmpstr=tmpstr.replace("<b>","");tmpstr=tmpstr.replace("</b>","");div_inner_html+='<a href="javascript:location.href=\''+responce_data.words[i].url+'\';" class="searchitem">'+responce_data.words[i].word+'</a>';}if(div_inner_html=="")hideTooltip(obj_id);else
showTooltipTextShort(obj_id,$("#"+inp_id).position().left,$("#"+inp_id).position().top+31,div_inner_html);}catch(e1){hideTooltip(obj_id);}search_is_running=false;};var post_req_str="rcom=uh_com_srchlist2&swstart="+unescape(escapeEx(str_val));AJAX.SendRequest('POST','',process_fn,encode64(post_req_str));}}else{hideTooltip(obj_id);search_is_running=false;}}function fillSearchListNS(str_val,obj_id,inp_id){var ctrl_droplist=uh_get_object(obj_id);var ctrl_text=uh_get_object(inp_id);if(search_is_running)return;search_is_running=true;if(str_val.length>1){if(AJAX!=null){var process_fn=function(res){eval('var responce_data = '+res);var tmp="";var arr_slov=new Array();var tmpstr="";var tstr="";try{for(i=0;i<responce_data.words.length;i++){if(i>0)tmp+=", \r";tmp+="'"+responce_data.words[i].word+"'";tsrt='<table width="100%" style="cursor: pointer;" >';tsrt+='<tr>';tsrt+='<td rowspan="2" width="70" align="center">';tsrt+='<img src="'+responce_data.words[i].img+'" width="'+responce_data.words[i].width+'">';tsrt+='</td>';tsrt+='<td><a href="javascript:location.href=\''+responce_data.words[i].url+'\';">'+responce_data.words[i].word+'</a></td></tr>';$('input#cbb'+i+'').remove();$('form#srch').after('<input type="hidden" name="cbb'+i+'" id="cbb'+i+'" value="'+responce_data.words[i].url+'">');arr_slov[i]=tsrt;}if(tmp==""){jQuery.combobox.instances[0].setSelectOptions([tmp]);}else{arr_slov[responce_data.words.length]='<div style="background-color: #4a4a4a; width: 100%;"><div style="float: right; padding: 2px 10px;" onclick="$(\'.combobox_selector\').hide(); return: false;"><font style="color: #fff;">�������</font></div><div style="padding: 2px 20px;"><a href="https://www.mobilluck.com.ua/search.php?sw='+str_val+'" style="color: #fff;">��� ���������� ������</a></div></div>';jQuery.combobox.instances[0].setSelectOptions(arr_slov);jQuery.combobox.instances[0].selector.buildSelectOptionList('');jQuery.combobox.instances[0].selector.show();}}catch(e1){$('.combobox_selector').hide();}search_is_running=false;};var post_req_str="rcom=uh_com_srchlist3&swstart="+unescape(escapeEx(str_val));AJAX.SendRequest('POST','',process_fn,encode64(post_req_str));}}else{$('.combobox_selector').hide();search_is_running=false;}}function searchtestf(frm){var sstr=document.getElementById("searchsw");if((sstr.value!="��� �� ������ �����?")&&(sstr.value.trim()!="")){return true;}alert('��������� ��������� ������');return false;}function getClientWidth(){var w=document.compatMode=='CSS1Compat'&&!window.opera?document.documentElement.clientWidth:document.body.clientWidth;if(document.compatMode=="CSS1Compat"&&window.opera)w=window.innerWidth;return w;}function getClientHeight(){var h=document.compatMode=='CSS1Compat'&&!window.opera?document.documentElement.clientHeight:document.body.clientHeight;if(document.compatMode=="CSS1Compat"&&window.opera)h=window.innerHeight;return h;}function getOffset(elem){if(elem.getBoundingClientRect){return getOffsetRect(elem)}else{return getOffsetSum(elem)}}function getOffsetSum(elem){var top=0,left=0
while(elem){top=top+parseInt(elem.offsetTop)
left=left+parseInt(elem.offsetLeft)
elem=elem.offsetParent}return{top:top,left:left}}function getOffsetRect(elem){var box=elem.getBoundingClientRect()
var body=document.body
var docElem=document.documentElement
var scrollTop=window.pageYOffset||docElem.scrollTop||body.scrollTop
var scrollLeft=window.pageXOffset||docElem.scrollLeft||body.scrollLeft
var clientTop=docElem.clientTop||body.clientTop||0
var clientLeft=docElem.clientLeft||body.clientLeft||0
var top=box.top+scrollTop-clientTop
var left=box.left+scrollLeft-clientLeft
return{top:Math.round(top),left:Math.round(left)}}function setCookie(cstr){document.cookie=cstr;}function makeCookie(name,value,expires,path,domain,secure){return name+"="+encodeURIComponent(value)+((expires)?"; expires="+expires:"")+((path)?"; path="+path:"")+((domain)?"; domain=.mobilluck.com.ua":"; domain=.mobilluck.com.ua")+((secure)?"; secure":"");}function getCookie(name){var cookie=" "+document.cookie;var search=" "+name+"=";var setStr=null;var offset=0;var end=0;if(cookie.length>0){offset=cookie.indexOf(search);if(offset!=-1){offset+=search.length;end=cookie.indexOf(";",offset)
if(end==-1){end=cookie.length;}setStr=decodeURIComponent(cookie.substring(offset,end));}}return(setStr);}function remFromCompareList(pid){var found=false;for(var i=0;i<cCompareProds.length;i++){if(cCompareProds[i]==pid){cCompareProds.splice(i,1);break;}}var newCookieStr=cCompareProds.join(",");var dt=new Date();dt.setHours(dt.getHours()+20);var pvals=makeCookie("pids",newCookieStr,dt.toUTCString(),"/",window.location.hostname);setCookie(pvals);}function addToCompareList(pid,tid){var found=false;for(var i=0;i<cCompareProds.length;i++){if(cCompareProds[i]==pid){found=true;break;}}if(!found){cCompareProds.push(pid);}var newCookieStr=cCompareProds.join(",");var dt=new Date();dt.setHours(dt.getHours()+20);var pvals=makeCookie("pids",newCookieStr,dt.toUTCString(),"/",window.location.hostname);var pvalt=makeCookie("ptid",tid,dt.toUTCString(),"/",window.location.hostname);setCookie(pvalt)
setCookie(pvals);}function loadFilialInfo(lnk,id){var ww=$(window).width(),wh=$(window).height();var left=this.offsetLeft,top=this.offsetTop;if(navigator.userAgent.toLowerCase().indexOf("msie")!=-1){left+=(ww-978)/2;}var coor=getOffset(lnk);left=coor.left;top=coor.top;$.ajax({type:"POST",url:"/ajx/ajx_jq.php",data:'cmd=uh_com_filialinf&offid='+id,dataType:"text",success:function(data){$("#dialog_title").html('���������� �����������������');$("#dialog_content").html(data);showPopupDlg(left,top);}});return false;}function loadSkladInfo(lnk,id){var ww=$(window).width(),wh=$(window).height();var left=this.offsetLeft,top=this.offsetTop;if(navigator.userAgent.toLowerCase().indexOf("msie")!=-1){left+=(ww-978)/2;}var coor=getOffset(lnk);left=coor.left;top=coor.top;$.ajax({type:"POST",url:"/ajx/ajx_jq.php",data:'cmd=uh_com_skladinf&offid='+id,dataType:"text",success:function(data){$("#dialog_title").html('���������� ������');$("#dialog_content").html(data);showPopupDlg(left,top);}});return false;}var search_is_running=false;function ui_cart_view_new(main_id,sesid){$.ajax({type:"POST",url:"/ajx/ajx_jq.php",data:'cmd=uh_show_item_cart&item_id='+main_id+'&csi='+sesid,dataType:"text",success:function(data){$("#popup_cart_content").html(data);}});}function ui_cart_view(sesid,view_pan_id,popup_mode){$.ajax({type:"POST",url:"/ajx/ajx_jq.php",data:'cmd=uh_com_cartitems&htmlpanid='+view_pan_id+'&csi='+sesid,dataType:"text",success:function(data){if(data!=""){$("#"+view_pan_id).html(data);}if(popup_mode){ui_cart_set_handlers(sesid,view_pan_id);}}});}function ui_cart_view2(sesid,view_pan_id,popup_mode){$.ajax({type:"POST",url:"/ajx/ajx_jq2.php",data:'cmd=uh_com_cartitems&htmlpanid='+view_pan_id+'&csi='+sesid,dataType:"text",success:function(data){if(data!=""){$("#"+view_pan_id).html(data);}if(popup_mode){ui_cart_set_handlers(sesid,view_pan_id);}}});}function ui_cart_del(sesid,cartid,view_pan_id){$.ajax({type:"POST",url:"/ajx/ajx_jq.php",data:'cmd=uh_com_cartitemdel&cartid='+cartid+'&csi='+sesid,dataType:"text",success:function(data){ui_cart_view(sesid,view_pan_id,true);}});return false;}function ui_cart_del_wl(sesid,cartid,view_pan_id){$.ajax({type:"POST",url:"/ajx/ajx_wl.php",data:'cmd=uh_com_cartitemdel&cartid='+cartid+'&csi='+sesid,dataType:"text",success:function(data){ui_cart_view(sesid,view_pan_id,true);}});return false;}function delitem(id,item_id,ses,popup){$.ajax({type:"POST",url:"/ajx/ajx_wl.php",data:'cmd=uh_com_delwl&id='+id+'&item_id='+item_id+'&csi='+ses,dataType:"text",success:function(data){var tmp=data.split('/**/');$("#plusitem").html(tmp[0]);$("#addcomplect").html(tmp[1]);$("#gcacarousel_wl").jcarousel({scroll:1});if(popup>0){ui_cart_view(ses,"popup_cart_content",true);}}});}function ui_cart_numupdt(sesid,cartid,pnum,view_pan_id){var pnum_tmp=$("#"+pnum).val();var pnum_i=parseInt(pnum_tmp);if(isNaN(pnum_i)){alert(pnum+' is not number ');return false;}$.ajax({type:"POST",url:"/ajx/ajx_jq.php",data:'cmd=uh_com_cartitemupdt&cartid='+cartid+'&pnum='+pnum_i+'&htmlpanid='+view_pan_id+'&csi='+sesid,dataType:"text",success:function(data){ui_cart_view(sesid,view_pan_id,true);}});return false;}function ui_cart_numupdt_wl(sesid,cartid,pnum,view_pan_id){var pnum_tmp=$("#"+pnum).val();var pnum_i=parseInt(pnum_tmp);if(isNaN(pnum_i)){alert(pnum+' is not number ');return false;}$.ajax({type:"POST",url:"/ajx/ajx_wl.php",data:'cmd=uh_com_cartitemupdt&cartid='+cartid+'&pnum='+pnum_i+'&htmlpanid='+view_pan_id+'&csi='+sesid,dataType:"text",success:function(data){ui_cart_view(sesid,view_pan_id,true);}});return false;}function ui_cart_ultraset(sesid,cartid,userv,view_pan_id){$.ajax({type:"POST",url:"/ajx/ajx_jq.php",data:'cmd=uh_com_cartitemuserv&cartid='+cartid+'&userv='+userv+'&htmlpanid='+view_pan_id+'&csi='+sesid,dataType:"text",success:function(data){ui_cart_view(sesid,view_pan_id,true);}});return false;}function ui_cart_strahset(sesid,cartid,strah,view_pan_id){$.ajax({type:"POST",url:"/ajx/ajx_jq.php",data:'cmd=uh_com_cartitemstrah&cartid='+cartid+'&strah='+(strah?1:0)+'&htmlpanid='+view_pan_id+'&csi='+sesid,dataType:"text",success:function(data){ui_cart_view(sesid,view_pan_id,true);}});return false;}function ui_cart_strahset_val(sesid,cartid,strah_val_id,view_pan_id){var strah_val_tmp=$("#"+strah_val_id).val();var strah_val_i=parseInt(strah_val_tmp);if(isNaN(strah_val_i)){alert('��������, ��������� � �������� ��������� ����� ������ ���� ����� ������ � ������ 0');return false;}$.ajax({type:"POST",url:"/ajx/ajx_jq.php",data:'cmd=uh_com_cartitemstrah_v&cartid='+cartid+'&strahv='+strah_val_i+'&htmlpanid='+view_pan_id+'&csi='+sesid,dataType:"text",success:function(data){ui_cart_view(sesid,view_pan_id,true);}});return false;}function ui_cart_onstrahchange(hid_pan_id,inpobj){var strah_val_tmp=inpobj.value;var strah_val_i=parseInt(strah_val_tmp);if(isNaN(strah_val_i)){return false;}$("#"+hid_pan_id).show();return false;}function ui_cart_set_handlers(sesid,view_pan_id){$("input.o3t_srv_input").each(function(){var obj=$(this);var class1=((obj.attr("checked"))?'fnt12checked':'fnt12unchecked');obj.parent().parent().parent().parent().parent().attr("class",'order3table2 '+class1);});$("input.o3t_srv_input").bind("change",function(){var obj=$(this);var obj_id=obj.attr("id");var is_checked=obj.attr("checked");var cart_id=obj.val();var class1=(is_checked?'fnt12checked':'fnt12unchecked');obj.parent().parent().parent().parent().parent().attr("class",'order3table2 '+class1);if(obj_id.substr(4,2)=="us"){var ultra_serv_per=$("#cit_usy_"+obj_id.substr(9)).val();ui_cart_ultraset(sesid,cart_id,(is_checked?ultra_serv_per:0),view_pan_id);}else if(obj_id.substr(4,2)=="st"){ui_cart_strahset(sesid,cart_id,is_checked,view_pan_id);}});var dt=new Date();dt.setHours(dt.getHours()+24*180);$("#i_pck_chk").bind("change",function(){$("#pck_title2").removeClass("checked");$("#pck_detail2").hide();$("#i_pck_chk2").attr("checked","");var obj=$(this);if(obj.attr("checked")){$("#pck_title1").addClass("checked");$("#pck_detail1").show();var pcval=makeCookie("prcredit","1",dt.toUTCString(),"/",window.location.hostname);setCookie(pcval);}else{$("#pck_title1").removeClass("checked");$("#pck_detail1").hide();var pcval=makeCookie("prcredit","0",dt.toUTCString(),"/",window.location.hostname);setCookie(pcval);}});$("#i_pck_chk2").bind("change",function(){var obj=$(this);if(obj.attr("checked")){$("#pck_title2").addClass("checked");$("#pck_detail2").show();var pcval=makeCookie("prcredit","2",dt.toUTCString(),"/",window.location.hostname);setCookie(pcval);}else{$("#pck_title2").removeClass("checked");$("#pck_detail2").hide();var pcval=makeCookie("prcredit","0",dt.toUTCString(),"/",window.location.hostname);setCookie(pcval);}});$("#pck_detail1 table td a").bind("click",function(){$(this).parent().parent().parent().find("td").removeClass("pckd_hover");$(this).parent().parent().addClass("pckd_hover");return false;});$("#pck_detail2 table td a").bind("click",function(){$(this).parent().parent().parent().find("td").removeClass("pckd_hover");$(this).parent().parent().addClass("pckd_hover");var t=0;var t2=2;if($(this).text()=="�� 3 ������"){t=2;t2=3;}if($(this).text()=="�� 6 �������"){t=2;t2=6;}if($(this).text()=="�� 12 �������"){t=3;t2=12;}if($(this).text()=="�� 24 ������"){t=4;t2=24;}var pcval=makeCookie("prcredit",t,dt.toUTCString(),"/",window.location.hostname);setCookie(pcval);var pcval2=makeCookie("srokcredit",t2,dt.toUTCString(),"/",window.location.hostname);setCookie(pcval2);return false;});}function ui_cart_view_sm(sesid,usrbal,usrdisc){var ds=document.getElementById('delivery_select').value;var os=document.getElementById('oplata_select').value;var twn=document.getElementById('clienttown').value;var bl=0;var rt=red_order;var bl_o=document.getElementById('col_balls');if(bl_o)bl=bl_o.value;if(bl>usrbal){bl=usrbal;bl_o.value=bl;}$.ajax({type:"POST",url:"/ajx/ajx_jq.php",data:'cmd=uh_com_cartitems_sm&csi='+sesid+'&ds='+ds+'&os='+os+'&rt='+rt+'&bl='+bl+'&dct='+usrdisc+"&twn="+twn,dataType:"text",success:function(data){if(data!=""){$("#cart_ui_small_div").html(data);}}});}function ui_credit_calc(sesid,period,fpay){$.ajax({type:"POST",url:"/ajx/ajx_jq.php",data:'cmd=uh_com_cartcredit&csi='+sesid+'&credp='+period+'&fpay='+fpay,dataType:"text",success:function(data){if(data!=""){$("#credit_panel").html(data);}}});}function recalcCredit(selobj,fpayid,sesid){var period=selobj.options[selobj.selectedIndex].value;var fpay=$("#"+fpayid).val();ui_credit_calc(sesid,period,fpay);}function buy_popup(prodid,sesid,lnk,pcredit){var dt=new Date();dt.setHours(dt.getHours()+24*180);var pcval=makeCookie("prcredit",pcredit,dt.toUTCString(),"/",window.location.hostname);setCookie(pcval);var ww=$(window).width(),wh=$(window).height();var left=this.offsetLeft,top=this.offsetTop;if(navigator.userAgent.toLowerCase().indexOf("msie")!=-1){left+=(ww-978)/2;}var coor=getOffset(lnk);left=coor.left;top=coor.top;$("#popup_cart_title").html("������� �������");$("#popup_cart_content").html("<br /><br />���� ��������� ����������...<br /><br />");$("#popupbg").show();$("#popup_wrapper").show();$.ajax({type:"POST",url:"https://www.mobilluck.com.ua/ajx/ajx_jq.php",data:'cmd=uh_com_cartitemadd&prodid='+prodid+'&csi='+sesid,dataType:"text",success:function(data){ui_cart_view_new(prodid,sesid);}});$('body,html').animate({scrollTop:0},1000,'swing');ga('send', 'event', 'Buy', 'Click', 'Buy_Product');}function buy_popup_tst(prodid,sesid,lnk,pcredit){var dt=new Date();dt.setHours(dt.getHours()+24*180);var pcval=makeCookie("prcredit",pcredit,dt.toUTCString(),"/",window.location.hostname);setCookie(pcval);var ww=$(window).width(),wh=$(window).height();var left=this.offsetLeft,top=this.offsetTop;if(navigator.userAgent.toLowerCase().indexOf("msie")!=-1){left+=(ww-978)/2;}var coor=getOffset(lnk);left=coor.left;top=coor.top;$("#popup_cart_title").html("������� �������");$("#popup_cart_content").html("<br /><br />���� ��������� ����������...<br /><br />");$("#popupbg").show();$("#popup_wrapper").show();$.ajax({type:"POST",url:"https://www.mobilluck.com.ua/ajx/ajx_jq.php",data:'cmd=uh_com_cartitemadd&prodid='+prodid+'&csi='+sesid,dataType:"text",success:function(data){ui_cart_view(sesid,"popup_cart_content",true);}});$('body,html').animate({scrollTop:0},1000,'swing');}function socActive1(id){var action=$('#'+id).css('z-index');if(action=='1000'){$('#soc1').css({'right':'-290px','z-index':'1000'});$('#soc2').css({'right':'-245px','z-index':'1000'});$('#soc3').css({'right':'-250px','z-index':'1000'});$('#soc4').css({'right':'-250px','z-index':'1000'});$('#'+id).css({'right':'-5px','z-index':'999999','-moz-transition':'right 0.3s linear','-o-transition':'right 0.3s linear','-webkit-transition':'right 0.3s linear','-ms-transition':'right 0.3s linear','transition':'right 0.3s linear'});}else{$('#'+id).css({'right':'-290px','z-index':'1000','-moz-transition':'right 0.3s linear','-o-transition':'right 0.3s linear','-webkit-transition':'right 0.3s linear','-ms-transition':'right 0.3s linear','transition':'right 0.3s linear'});}}function socActive2(id){var action=$('#'+id).css('z-index');if(action=='1000'){$('#soc1').css({'right':'-right','z-index':'1000'});$('#soc2').css({'right':'-245px','z-index':'1000'});$('#soc3').css({'right':'-250px','z-index':'1000'});$('#soc4').css({'right':'-250px','z-index':'1000'});$('#'+id).css({'right':'-5px','z-index':'999999','-moz-transition':'right 0.3s linear','-o-transition':'right 0.3s linear','-webkit-transition':'right 0.3s linear','-ms-transition':'right 0.3s linear','transition':'right 0.3s linear'});}else{$('#'+id).css({'right':'-245px','z-index':'1000','-moz-transition':'right 0.3s linear','-o-transition':'right 0.3s linear','-webkit-transition':'right 0.3s linear','-ms-transition':'right 0.3s linear','transition':'right 0.3s linear'});}}function socActive3(id){var action=$('#'+id).css('z-index');if(action=='1000'){$('#soc1').css({'right':'-290px','z-index':'1000'});$('#soc2').css({'right':'-245px','z-index':'1000'});$('#soc3').css({'right':'-250px','z-index':'1000'});$('#soc4').css({'right':'-250px','z-index':'1000'});$('#'+id).css({'right':'-5px','z-index':'999999','-moz-transition':'right 0.3s linear','-o-transition':'right 0.3s linear','-webkit-transition':'right 0.3s linear','-ms-transition':'right 0.3s linear','transition':'right 0.3s linear'});}else{$('#'+id).css({'right':'-250px','z-index':'1000','-moz-transition':'right 0.3s linear','-o-transition':'right 0.3s linear','-webkit-transition':'right 0.3s linear','-ms-transition':'right 0.3s linear','transition':'right 0.3s linear'});}}function socActive4(id){var action=$('#'+id).css('z-index');if(action=='1000'){$('#soc1').css({'right':'-290px','z-index':'1000'});$('#soc2').css({'right':'-245px','z-index':'1000'});$('#soc3').css({'right':'-250px','z-index':'1000'});$('#soc4').css({'right':'-250px','z-index':'1000'});$('#'+id).css({'right':'-15px','z-index':'999999','-moz-transition':'right 0.3s linear','-o-transition':'right 0.3s linear','-webkit-transition':'right 0.3s linear','-ms-transition':'right 0.3s linear','transition':'right 0.3s linear'});}else{$('#'+id).css({'right':'-250px','z-index':'1000','-moz-transition':'right 0.3s linear','-o-transition':'right 0.3s linear','-webkit-transition':'right 0.3s linear','-ms-transition':'right 0.3s linear','transition':'right 0.3s linear'});}}function avalability_report(item_id,ses_id,lnk){var ww=$(window).width(),wh=$(window).height();var left=this.offsetLeft,top=this.offsetTop;if(navigator.userAgent.toLowerCase().indexOf("msie")!=-1){left+=(ww-978)/2;}var coor=getOffset(lnk);left=coor.left;top=coor.top;$.ajax({type:"POST",url:"/ajx/ajx_wishlist.php",data:'cmd=uh_availability&item_id='+item_id+'&csi='+ses_id,dataType:"text",success:function(data){$("#dialog_title").html('������ ��������');$("#dialog_content").html(data);showPopupDlg(left,top);}});return false;}function check_for_price(item_id,ses_id,price,button_type,lnk){var ww=$(window).width(),wh=$(window).height();var left=this.offsetLeft,top=this.offsetTop;if(navigator.userAgent.toLowerCase().indexOf("msie")!=-1){left+=(ww-978)/2;}var coor=getOffset(lnk);left=coor.left;top=coor.top;if(button_type=='1'){$("#dialog_title").html('�������� �������');}else{$("#dialog_title").html('������� �� �����');}$.ajax({type:"POST",url:"/ajx/ajx_wishlist.php",data:'cmd=uh_checkprice&item_id='+item_id+'&csi='+ses_id+'&price='+price+'&button_type='+button_type,dataType:"text",success:function(data){$("#dialog_content").html(data);showPopupDlg(left,top);}});return false;}

function NEW_fillSearchListNS(str_val, obj_id, inp_id) {
    var ctrl_droplist = uh_get_object(obj_id);
    var ctrl_text = uh_get_object(inp_id);
    if (search_is_running)
        return;
    search_is_running = true;
    if (str_val.length > 1) {
        if (AJAX != null) {
            var process_fn = function (res) {
                var data = JSON.parse(res);
                try {
                    var arr_slov = new Array();
                    var html = '<ul class="qs_ul">';
                    for (i = 0; i < data.length; i++) {
                        var html_tmp = '';
                        switch( data[i].res_type ) {
                            case "1":
                                html_tmp += '<a href="javascript:location.href=\'http'+data[i].url+'\';">'+data[i].name+'</a>';
                                break;
                            case "2":
                            case "3":
                                html_tmp += '��������� <a href="javascript:location.href=\'http'+data[i].url+'\';">'+data[i].name+'</a>';
                                break;
                        }
                        $('input#cbb' + i + '').remove();
                        $('form#srch').after('<input type="hidden" name="cbb' + i + '" id="cbb' + i + '" value="' + data[i].url + '">');
                        html += html_tmp;
                        arr_slov[i] = html_tmp;
                    }
                    html += '</ul>';
                    if ( data.length == 0 ) {
                        jQuery.combobox.instances[0].setSelectOptions([""]);
                    } else {
                        arr_slov[data.length] = '<div style="background-color: #4a4a4a; width: 100%;"><div style="text-align: right;float: right; padding: 0px 10px;" onclick="$(\'.combobox_selector\').hide(); return: false;"><font style="color: #fff;">�������</font></div><div style="padding: 0px 10px;width: 150px !important;"><a href="https://www.mobilluck.com.ua/search.php?sw=' + str_val + '" style="color: #fff;">��� ���������� ������</a></div></div>';
                        jQuery.combobox.instances[0].setSelectOptions(arr_slov);
                        jQuery.combobox.instances[0].selector.buildSelectOptionList('');
                        jQuery.combobox.instances[0].selector.show();
                    }
                } catch (e1) {
                    $('.combobox_selector').hide();
                }
                search_is_running = false;
            };
            var post_req_str = "rcom=uh_com_srchlist_new&swstart=" + unescape(escapeEx(str_val));
            AJAX.SendRequest('POST', '', process_fn, encode64(post_req_str));
        }
    } else {
        $('.combobox_selector').hide();
        search_is_running = false;
    }
}